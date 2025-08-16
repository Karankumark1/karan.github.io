-- Portfolio Database Schema

-- Create database if it doesn't exist
CREATE DATABASE IF NOT EXISTS portfolio_db;
USE portfolio_db;

-- About Me table
CREATE TABLE IF NOT EXISTS about (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    title VARCHAR(255) NOT NULL,
    bio TEXT NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    location VARCHAR(255),
    profile_image_url TEXT,
    resume_url TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Skills table
CREATE TABLE IF NOT EXISTS skills (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    category VARCHAR(100) NOT NULL, -- 'technical', 'soft', 'tools', etc.
    proficiency_level INT DEFAULT 5, -- 1-10 scale
    icon_url TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Projects table
CREATE TABLE IF NOT EXISTS projects (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    short_description VARCHAR(500),
    technologies_used JSON, -- Array of technologies
    project_url TEXT,
    github_url TEXT,
    demo_url TEXT,
    image_url TEXT,
    featured BOOLEAN DEFAULT FALSE,
    status VARCHAR(50) DEFAULT 'completed', -- 'completed', 'in-progress', 'planned'
    start_date DATE,
    end_date DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Education table
CREATE TABLE IF NOT EXISTS education (
    id INT PRIMARY KEY AUTO_INCREMENT,
    institution VARCHAR(255) NOT NULL,
    degree VARCHAR(255) NOT NULL,
    field_of_study VARCHAR(255),
    start_date DATE,
    end_date DATE,
    gpa DECIMAL(3,2),
    description TEXT,
    location VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Experience table
CREATE TABLE IF NOT EXISTS experience (
    id INT PRIMARY KEY AUTO_INCREMENT,
    company VARCHAR(255) NOT NULL,
    position VARCHAR(255) NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE,
    current_job BOOLEAN DEFAULT FALSE,
    description TEXT,
    achievements JSON, -- Array of achievements
    technologies_used JSON, -- Array of technologies
    location VARCHAR(255),
    company_website TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Social Links table
CREATE TABLE IF NOT EXISTS social_links (
    id INT PRIMARY KEY AUTO_INCREMENT,
    platform VARCHAR(100) NOT NULL, -- 'linkedin', 'github', 'twitter', etc.
    url TEXT NOT NULL,
    username VARCHAR(255),
    icon_url TEXT,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Insert sample data
INSERT INTO about (name, title, bio, email, phone, location) VALUES 
('Karan', 'Full Stack Developer', 'Passionate developer with expertise in modern web technologies.', 'karan@example.com', '+1234567890', 'Your City, Country');

INSERT INTO skills (name, category, proficiency_level) VALUES 
('JavaScript', 'technical', 9),
('Node.js', 'technical', 8),
('React', 'technical', 8),
('MySQL', 'technical', 7),
('Express.js', 'technical', 8),
('HTML/CSS', 'technical', 9),
('Git', 'tools', 8),
('Problem Solving', 'soft', 9);

INSERT INTO projects (title, description, short_description, technologies_used, featured) VALUES 
('Portfolio Website', 'A responsive portfolio website built with modern web technologies.', 'Personal portfolio showcasing my projects and skills.', '["HTML", "CSS", "JavaScript", "Node.js", "MySQL"]', TRUE),
('Sample Project', 'A sample project demonstrating various development skills.', 'Demo project with multiple features.', '["React", "Express", "MongoDB"]', FALSE);

INSERT INTO social_links (platform, url, username) VALUES 
('github', 'https://github.com/karan', 'karan'),
('linkedin', 'https://linkedin.com/in/karan', 'karan'),
('email', 'mailto:karan@example.com', 'karan@example.com');
