// middleware to check user is and has premium plan//
import { createClerkClient } from "@clerk/backend";
import { getAuth } from "@clerk/express";

const clerkClient = createClerkClient({
  secretKey: process.env.CLERK_SECRET_KEY
})

export const auth = async (req, res, next) => {
  try {
    const authData = getAuth(req);
    if (!authData || !authData.userId) {
       return res.status(401).json({ success: false, message: 'Unauthenticated' })
    }

    const { userId } = authData;
    const user = await clerkClient.users.getUser(userId);
    
    // Check plan from publicMetadata or default to free
    const plan = user.publicMetadata?.plan === 'premium' ? 'premium' : 'free';
    
    req.free_usage = user.privateMetadata?.free_usage || 0;
    req.plan = plan;

    next();
  } catch (error) {
    console.log("Auth Middleware Error:", error.message)
    res.json({ success: false, message: error.message })
  }
}