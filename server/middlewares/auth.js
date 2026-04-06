// middleware to check user is and has premium plan//
import { clerkClient } from '@clerk/backend'
export const auth = async (req, res, next) => {
  try {
    const { userId, has } = await req.auth()
    const hasPremiumPlan = await has({ plan: 'premium' });



    const user = await clerkClient.users.getUser(userId);


    if (!hasPremiumPlan && user.privateMetaData.free_usage) {
      req.free_usage = user.privateMetaData.free_usage
    } else {
      await clerkClient.users.updateUserMetadata(userId, {
        privateMetaData: {
          free_usage: 0
        }
      })
      req.free_usage = 0;
    }
    req.plan = hasPremiumPlan ? 'premium' : 'free';

    next();
  } catch (error) {
    res.json({ success: false, message: 'Failed to authenticate user' })

  }
}