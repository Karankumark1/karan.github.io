# Portfolio Backend API

A Node.js REST API backend for serving portfolio data with MySQL database integration.

## Features

- RESTful API endpoints for portfolio data
- MySQL database integration
- CORS enabled for frontend integration
- Environment-based configuration
- Error handling and logging
- Health check endpoint

## Project Structure

```
backend/
├── config/
│   ├── database.js         # Database connection configuration
│   └── schema.sql          # Database schema and sample data
├── controllers/
│   └── portfolioController.js  # API logic and handlers
├── models/
│   └── Portfolio.js        # Database operations
├── routes/
│   └── portfolio.js        # API routes definition
├── middleware/             # Custom middleware (future use)
├── server.js              # Main server file
├── package.json           # Dependencies and scripts
├── .env                   # Environment variables
├── .env.example           # Environment variables template
└── README.md             # This file
```

## API Endpoints

### Base URL: `http://localhost:3000`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | API information and available endpoints |
| GET | `/health` | Health check endpoint |
| GET | `/api/portfolio` | Complete portfolio data |
| GET | `/api/portfolio/about` | About information |
| GET | `/api/portfolio/skills` | Skills list (supports ?category=technical) |
| GET | `/api/portfolio/projects` | Projects list (supports ?featured=true) |
| GET | `/api/portfolio/projects/:id` | Specific project by ID |
| GET | `/api/portfolio/education` | Education history |
| GET | `/api/portfolio/experience` | Work experience |
| GET | `/api/portfolio/social` | Social links |

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- MySQL (v8.0 or higher)
- npm or yarn

### Installation

1. **Clone and navigate to the backend directory:**
   ```bash
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up MySQL database:**
   - Start your MySQL server
   - Create a new database named `portfolio_db`
   - Import the schema:
     ```bash
     mysql -u root -p portfolio_db < config/schema.sql
     ```

4. **Configure environment variables:**
   - Copy `.env.example` to `.env`
   - Update the database credentials in `.env`:
     ```
     DB_USER=your_mysql_username
     DB_PASSWORD=your_mysql_password
     ```

5. **Start the server:**
   ```bash
   # Development mode with auto-reload
   npm run dev
   
   # Production mode
   npm start
   ```

### Manual Database Setup (Alternative)

If you prefer to set up the database manually:

1. **Create database:**
   ```sql
   CREATE DATABASE portfolio_db;
   USE portfolio_db;
   ```

2. **Run the SQL commands from `config/schema.sql` in your MySQL client**

## Environment Variables

Create a `.env` file in the backend root directory:

```env
# Server Configuration
PORT=3000
NODE_ENV=development

# Database Configuration
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=portfolio_db
DB_PORT=3306

# CORS Configuration
CLIENT_URL=http://localhost:3000
```

## Development

- **Start development server:** `npm run dev`
- **Start production server:** `npm start`

## API Response Format

All API responses follow this format:

### Success Response
```json
{
  "success": true,
  "data": { /* actual data */ },
  "count": 5  // For array responses
}
```

### Error Response
```json
{
  "success": false,
  "message": "Error description",
  "error": "Detailed error message"
}
```

## Database Schema

The database includes the following tables:
- `about` - Personal information
- `skills` - Technical and soft skills
- `projects` - Portfolio projects
- `education` - Educational background
- `experience` - Work experience
- `social_links` - Social media links

## CORS Configuration

The API is configured to accept requests from any origin by default. For production, update the `CLIENT_URL` environment variable to your frontend domain.

## Troubleshooting

### Common Issues

1. **Database connection failed:**
   - Ensure MySQL server is running
   - Check database credentials in `.env`
   - Verify database exists

2. **Port already in use:**
   - Change the PORT in `.env` file
   - Or kill the process using the port

3. **Module not found errors:**
   - Run `npm install` to install dependencies
   - Check if all required files are in place

### Logs

The server logs all requests and database operations. Check the console output for detailed error messages.

## License

ISC License
