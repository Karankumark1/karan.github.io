const Portfolio = require('../models/Portfolio');

// Get about information
const getAbout = async (req, res) => {
    try {
        const about = await Portfolio.getAbout();
        if (!about) {
            return res.status(404).json({
                success: false,
                message: 'About information not found'
            });
        }
        res.json({
            success: true,
            data: about
        });
    } catch (error) {
        console.error('Error in getAbout:', error.message);
        res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: error.message
        });
    }
};

// Get all skills
const getSkills = async (req, res) => {
    try {
        const { category } = req.query;
        let skills;

        if (category) {
            skills = await Portfolio.getSkillsByCategory(category);
        } else {
            skills = await Portfolio.getSkills();
        }

        res.json({
            success: true,
            count: skills.length,
            data: skills
        });
    } catch (error) {
        console.error('Error in getSkills:', error.message);
        res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: error.message
        });
    }
};

// Get all projects
const getProjects = async (req, res) => {
    try {
        const { featured } = req.query;
        let projects;

        if (featured === 'true') {
            projects = await Portfolio.getFeaturedProjects();
        } else {
            projects = await Portfolio.getProjects();
        }

        res.json({
            success: true,
            count: projects.length,
            data: projects
        });
    } catch (error) {
        console.error('Error in getProjects:', error.message);
        res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: error.message
        });
    }
};

// Get project by ID
const getProjectById = async (req, res) => {
    try {
        const { id } = req.params;
        const project = await Portfolio.getProjectById(id);

        if (!project) {
            return res.status(404).json({
                success: false,
                message: 'Project not found'
            });
        }

        res.json({
            success: true,
            data: project
        });
    } catch (error) {
        console.error('Error in getProjectById:', error.message);
        res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: error.message
        });
    }
};

// Get education history
const getEducation = async (req, res) => {
    try {
        const education = await Portfolio.getEducation();
        res.json({
            success: true,
            count: education.length,
            data: education
        });
    } catch (error) {
        console.error('Error in getEducation:', error.message);
        res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: error.message
        });
    }
};

// Get work experience
const getExperience = async (req, res) => {
    try {
        const experience = await Portfolio.getExperience();
        res.json({
            success: true,
            count: experience.length,
            data: experience
        });
    } catch (error) {
        console.error('Error in getExperience:', error.message);
        res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: error.message
        });
    }
};

// Get social links
const getSocialLinks = async (req, res) => {
    try {
        const socialLinks = await Portfolio.getSocialLinks();
        res.json({
            success: true,
            count: socialLinks.length,
            data: socialLinks
        });
    } catch (error) {
        console.error('Error in getSocialLinks:', error.message);
        res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: error.message
        });
    }
};

// Get complete portfolio data
const getCompletePortfolio = async (req, res) => {
    try {
        const portfolio = await Portfolio.getCompletePortfolio();
        res.json({
            success: true,
            data: portfolio
        });
    } catch (error) {
        console.error('Error in getCompletePortfolio:', error.message);
        res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: error.message
        });
    }
};

module.exports = {
    getAbout,
    getSkills,
    getProjects,
    getProjectById,
    getEducation,
    getExperience,
    getSocialLinks,
    getCompletePortfolio
};
