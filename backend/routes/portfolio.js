const express = require('express');
const router = express.Router();
const {
    getAbout,
    getSkills,
    getProjects,
    getProjectById,
    getEducation,
    getExperience,
    getSocialLinks,
    getCompletePortfolio
} = require('../controllers/portfolioController');

// GET /api/portfolio - Get complete portfolio data
router.get('/', getCompletePortfolio);

// GET /api/portfolio/about - Get about information
router.get('/about', getAbout);

// GET /api/portfolio/skills - Get all skills or skills by category
// Query params: ?category=technical|soft|tools
router.get('/skills', getSkills);

// GET /api/portfolio/projects - Get all projects or featured projects
// Query params: ?featured=true
router.get('/projects', getProjects);

// GET /api/portfolio/projects/:id - Get project by ID
router.get('/projects/:id', getProjectById);

// GET /api/portfolio/education - Get education history
router.get('/education', getEducation);

// GET /api/portfolio/experience - Get work experience
router.get('/experience', getExperience);

// GET /api/portfolio/social - Get social links
router.get('/social', getSocialLinks);

module.exports = router;
