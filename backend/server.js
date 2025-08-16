const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const { testConnection } = require('./config/database');
const portfolioRoutes = require('./routes/portfolio');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors({
    origin: process.env.CLIENT_URL || '*',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));

// Request logging middleware
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
    next();
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({
        status: 'OK',
        message: 'Portfolio API is running',
        timestamp: new Date().toISOString(),
        uptime: process.uptime()
    });
});

// API Routes
app.use('/api/portfolio', portfolioRoutes);

// Root endpoint
app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to Karan\'s Portfolio API',
        version: '1.0.0',
        endpoints: {
            health: '/health',
            portfolio: '/api/portfolio',
            about: '/api/portfolio/about',
            skills: '/api/portfolio/skills',
            projects: '/api/portfolio/projects',
            education: '/api/portfolio/education',
            experience: '/api/portfolio/experience',
            social: '/api/portfolio/social'
        }
    });
});

// 404 handler
app.use('*', (req, res) => {
    res.status(404).json({
        success: false,
        message: 'Route not found',
        availableEndpoints: [
            'GET /',
            'GET /health',
            'GET /api/portfolio',
            'GET /api/portfolio/about',
            'GET /api/portfolio/skills',
            'GET /api/portfolio/projects',
            'GET /api/portfolio/projects/:id',
            'GET /api/portfolio/education',
            'GET /api/portfolio/experience',
            'GET /api/portfolio/social'
        ]
    });
});

// Global error handler
app.use((error, req, res, next) => {
    console.error('Global Error Handler:', error);
    res.status(500).json({
        success: false,
        message: 'Internal server error',
        error: process.env.NODE_ENV === 'development' ? error.message : 'Something went wrong'
    });
});

// Start server
const startServer = async () => {
    try {
        // Test database connection
        const dbConnected = await testConnection();
        if (!dbConnected) {
            console.warn('⚠️  Server starting without database connection');
        }

        app.listen(PORT, () => {
            console.log('\n🚀 Portfolio API Server Started');
            console.log(`📍 Server running on: http://localhost:${PORT}`);
            console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
            console.log(`💾 Database: ${dbConnected ? 'Connected' : 'Disconnected'}`);
            console.log('\n📋 Available Endpoints:');
            console.log(`   GET  /                     - API information`);
            console.log(`   GET  /health               - Health check`);
            console.log(`   GET  /api/portfolio        - Complete portfolio data`);
            console.log(`   GET  /api/portfolio/about  - About information`);
            console.log(`   GET  /api/portfolio/skills - Skills list`);
            console.log(`   GET  /api/portfolio/projects - Projects list`);
            console.log(`   GET  /api/portfolio/education - Education history`);
            console.log(`   GET  /api/portfolio/experience - Work experience`);
            console.log(`   GET  /api/portfolio/social - Social links`);
            console.log('\n✨ Ready to serve your portfolio!\n');
        });
    } catch (error) {
        console.error('❌ Failed to start server:', error);
        process.exit(1);
    }
};

// Handle graceful shutdown
process.on('SIGTERM', () => {
    console.log('\n🛑 Received SIGTERM. Shutting down gracefully...');
    process.exit(0);
});

process.on('SIGINT', () => {
    console.log('\n🛑 Received SIGINT. Shutting down gracefully...');
    process.exit(0);
});

startServer();
