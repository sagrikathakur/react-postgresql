import axios from "axios";
import sql from "../config/db.js";
import { createClerkClient } from "@clerk/backend";
import { getAuth } from "@clerk/express";

const clerkClient = createClerkClient({
  secretKey: process.env.CLERK_SECRET_KEY
})

async function checkUsage(req, res) {
  const { plan, free_usage } = req;
  if (plan !== 'premium' && free_usage >= 10) {
    res.json({ success: false, message: 'You have exceeded your free usage limit' });
    return false;
  }
  return true;
}

async function updateUsage(userId, plan, currentUsage) {
  if (plan !== 'premium') {
    await clerkClient.users.updateUserMetadata(userId, {
      privateMetadata: { free_usage: currentUsage + 1 }
    });
  }
}

// 1. Generate Article
export const generateArticle = async (req, res) => {
  try {
    const { userId } = getAuth(req);
    const { prompt, length } = req.body;
    if (!await checkUsage(req, res)) return;

    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${process.env.GEMINI_API_KEY}`,
      { contents: [{ parts: [{ text: `Generate a high-quality article about: ${prompt}. Target length: ${length || 400} words.` }] }] }
    );

    const content = response.data.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!content) throw new Error("AI returned an empty response. Please try again.");

    await sql`INSERT INTO creations (user_id ,prompt , content,type) VALUES (${userId},${prompt},${content},'article')`;
    await updateUsage(userId, req.plan, req.free_usage);
    res.json({ success: true, content });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
}

// 2. Blog Titles Generation
export const generateBlogTitles = async (req, res) => {
  try {
    const { userId } = getAuth(req);
    const { prompt } = req.body;
    if (!await checkUsage(req, res)) return;

    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${process.env.GEMINI_API_KEY}`,
      { contents: [{ parts: [{ text: `Generate 5 catchy blog titles for the topic: ${prompt}. Return as a bulleted list.` }] }] }
    );

    const content = response.data.candidates[0].content.parts[0].text;
    await sql`INSERT INTO creations (user_id ,prompt , content,type) VALUES (${userId},${prompt},${content},'blog-titles')`;
    await updateUsage(userId, req.plan, req.free_usage);
    res.json({ success: true, content });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
}

// 3. Review Resume
export const reviewResume = async (req, res) => {
  try {
    const { userId } = getAuth(req);
    const { resumeText } = req.body;
    if (!await checkUsage(req, res)) return;

    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${process.env.GEMINI_API_KEY}`,
      { contents: [{ parts: [{ text: `Review this resume and provide feedback for improvement: ${resumeText}` }] }] }
    );

    const content = response.data.candidates[0].content.parts[0].text;
    await sql`INSERT INTO creations (user_id ,prompt , content,type) VALUES (${userId},'Resume Review',${content},'resume-review')`;
    await updateUsage(userId, req.plan, req.free_usage);
    res.json({ success: true, content });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
}

// 4. Fetch User Creations (for Dashboard)
export const getMyCreations = async (req, res) => {
  try {
    const { userId } = getAuth(req);
    const creations = await sql`SELECT * FROM creations WHERE user_id = ${userId} ORDER BY created_at DESC`;
    res.json({ success: true, creations });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
}

// 5. Fetch Community Creations
export const getCommunityCreations = async (req, res) => {
  try {
    const creations = await sql`
      SELECT c.*, 
             (SELECT COUNT(*) FROM likes WHERE creation_id = c.id) as likes_count
      FROM creations c 
      WHERE is_public = TRUE 
      ORDER BY created_at DESC
    `;
    res.json({ success: true, creations });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
}

// 6. Toggle Public Status
export const togglePublic = async (req, res) => {
  try {
    const { userId } = getAuth(req);
    const { id } = req.params;
    await sql`UPDATE creations SET is_public = NOT is_public WHERE id = ${id} AND user_id = ${userId}`;
    res.json({ success: true, message: "Visibility updated successfully." });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
}

// 7. Like Interaction
export const likeCreation = async (req, res) => {
  try {
    const { userId } = getAuth(req);
    const { id } = req.params;
    await sql`INSERT INTO likes (user_id, creation_id) VALUES (${userId}, ${id}) ON CONFLICT DO NOTHING`;
    res.json({ success: true, message: "Liked successfully." });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
}