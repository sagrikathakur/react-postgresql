import 'dotenv/config';
import axios from 'axios';

async function list() {
  try {
    const r = await axios.get(`https://generativelanguage.googleapis.com/v1beta/models?key=${process.env.GEMINI_API_KEY}`);
    const names = r.data.models.map(m => m.name);
    console.log("Full Model List:", JSON.stringify(names, null, 2));
  } catch (e) {
    console.error(e.response?.data || e.message);
  }
}

list();
