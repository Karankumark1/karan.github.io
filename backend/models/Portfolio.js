const { pool } = require('../config/database');

class Portfolio {
    // Get About information
    static async getAbout() {
        try {
            const [rows] = await pool.execute('SELECT * FROM about LIMIT 1');
            return rows[0] || null;
        } catch (error) {
            throw new Error('Error fetching about information: ' + error.message);
        }
    }

    // Get all skills
    static async getSkills() {
        try {
            const [rows] = await pool.execute(
                'SELECT * FROM skills ORDER BY category, proficiency_level DESC'
            );
            return rows;
        } catch (error) {
            throw new Error('Error fetching skills: ' + error.message);
        }
    }

    // Get skills by category
    static async getSkillsByCategory(category) {
        try {
            const [rows] = await pool.execute(
                'SELECT * FROM skills WHERE category = ? ORDER BY proficiency_level DESC',
                [category]
            );
            return rows;
        } catch (error) {
            throw new Error('Error fetching skills by category: ' + error.message);
        }
    }

    // Get all projects
    static async getProjects() {
        try {
            const [rows] = await pool.execute(
                'SELECT * FROM projects ORDER BY featured DESC, created_at DESC'
            );
            return rows;
        } catch (error) {
            throw new Error('Error fetching projects: ' + error.message);
        }
    }

    // Get featured projects
    static async getFeaturedProjects() {
        try {
            const [rows] = await pool.execute(
                'SELECT * FROM projects WHERE featured = TRUE ORDER BY created_at DESC'
            );
            return rows;
        } catch (error) {
            throw new Error('Error fetching featured projects: ' + error.message);
        }
    }

    // Get project by ID
    static async getProjectById(id) {
        try {
            const [rows] = await pool.execute('SELECT * FROM projects WHERE id = ?', [id]);
            return rows[0] || null;
        } catch (error) {
            throw new Error('Error fetching project: ' + error.message);
        }
    }

    // Get education history
    static async getEducation() {
        try {
            const [rows] = await pool.execute(
                'SELECT * FROM education ORDER BY start_date DESC'
            );
            return rows;
        } catch (error) {
            throw new Error('Error fetching education: ' + error.message);
        }
    }

    // Get work experience
    static async getExperience() {
        try {
            const [rows] = await pool.execute(
                'SELECT * FROM experience ORDER BY start_date DESC'
            );
            return rows;
        } catch (error) {
            throw new Error('Error fetching experience: ' + error.message);
        }
    }

    // Get social links
    static async getSocialLinks() {
        try {
            const [rows] = await pool.execute(
                'SELECT * FROM social_links WHERE is_active = TRUE ORDER BY platform'
            );
            return rows;
        } catch (error) {
            throw new Error('Error fetching social links: ' + error.message);
        }
    }

    // Get complete portfolio data
    static async getCompletePortfolio() {
        try {
            const [about, skills, projects, education, experience, socialLinks] = await Promise.all([
                this.getAbout(),
                this.getSkills(),
                this.getProjects(),
                this.getEducation(),
                this.getExperience(),
                this.getSocialLinks()
            ]);

            return {
                about,
                skills,
                projects,
                education,
                experience,
                socialLinks
            };
        } catch (error) {
            throw new Error('Error fetching complete portfolio: ' + error.message);
        }
    }
}

module.exports = Portfolio;
