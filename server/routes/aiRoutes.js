import express from 'express';
import { 
  generateArticle, 
  generateBlogTitles, 
  reviewResume, 
  getMyCreations,
  getCommunityCreations,
  togglePublic,
  likeCreation
} from '../controller/aiController.js';
import { auth } from '../middlewares/auth.js';

const aiRouter = express.Router();

// AI Service Endpoints
aiRouter.post('/generate-article', auth, generateArticle);
aiRouter.post('/blog-titles', auth, generateBlogTitles);
aiRouter.post('/review-resume', auth, reviewResume);

// User & Dashboard Endpoints
aiRouter.get('/my-creations', auth, getMyCreations);
aiRouter.patch('/toggle-public/:id', auth, togglePublic);

// Community Endpoints
aiRouter.get('/community-creations', getCommunityCreations); // Publicly accessible
aiRouter.post('/like/:id', auth, likeCreation);

export default aiRouter;
