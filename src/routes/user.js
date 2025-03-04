import express from 'express';
import { authenticate } from '../middleware/auth.js';
import * as userController from '../controllers/userController.js';

const router = express.Router();

// Protected routes - require authentication
router.get('/profile', authenticate, userController.getProfile);
router.put('/profile', authenticate, userController.updateProfile);
router.post('/upload-avatar', authenticate, userController.uploadAvatar);

router.put('/notifications', authenticate, userController.updateNotifications);

export default router;