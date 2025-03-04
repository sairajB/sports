const express = require('express');
const router = express.Router();
const achievementController = require('../controllers/achievementController');
const eventController = require('../controllers/eventController');
const { verifyAdmin } = require('../middleware/authMiddleware');

// Achievement Routes
router.post('/achievements', verifyAdmin, achievementController.addAchievement);
router.put('/achievements/:id', verifyAdmin, achievementController.updateAchievement);
router.delete('/achievements/:id', verifyAdmin, achievementController.deleteAchievement);
router.get('/achievements', achievementController.getAllAchievements);
router.get('/achievements/:id', achievementController.getAchievementById);

// Event Routes
router.post('/events', verifyAdmin, eventController.addEvent);
router.put('/events/:id', verifyAdmin, eventController.updateEvent);
router.delete('/events/:id', verifyAdmin, eventController.deleteEvent);
router.get('/events', eventController.getAllEvents);
router.get('/events/:id', eventController.getEventById);

module.exports = router;