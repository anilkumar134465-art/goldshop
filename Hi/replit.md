# replit.md

## Overview

Golden Treasures is a premium gold jewelry e-commerce web application built with Flask. The application showcases a collection of gold jewelry items including necklaces and rings, featuring a modern and elegant user interface. The project implements a product catalog system with sample jewelry data, responsive design using Tailwind CSS, and basic e-commerce functionality including cart management and user authentication modals.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Template Engine**: Jinja2 templates with Flask for server-side rendering
- **CSS Framework**: Tailwind CSS for responsive design and utility-first styling
- **JavaScript**: Vanilla JavaScript for interactive features including cart functionality, modal management, and mobile navigation
- **UI Components**: Custom animations and transitions using CSS keyframes and transforms
- **Responsive Design**: Mobile-first approach with responsive navigation and product grid layouts

### Backend Architecture
- **Web Framework**: Flask as the lightweight WSGI web application framework
- **Application Structure**: Simple modular design with separate app.py for main application logic and main.py as entry point
- **Data Storage**: In-memory product data stored as Python dictionaries (no persistent database currently implemented)
- **Session Management**: Flask sessions with configurable secret key from environment variables
- **Logging**: Python logging module configured for debug-level output

### Key Design Patterns
- **MVC Pattern**: Separation of concerns with templates for views, Flask routes for controllers, and data models as Python objects
- **Static Asset Management**: Organized static files structure with CSS and JavaScript separated into dedicated directories
- **Environment Configuration**: Environment-based configuration for sensitive data like session secrets

### Product Data Structure
- Products are defined with standard e-commerce fields: id, name, category, price, and image URLs
- Image assets sourced from external CDN (Pixabay) for sample product photos
- Category-based organization supporting different jewelry types (necklaces, rings)

## External Dependencies

### Frontend Libraries
- **Tailwind CSS**: Utility-first CSS framework loaded via CDN
- **Font Awesome**: Icon library for UI elements and branding

### Backend Dependencies
- **Flask**: Python web framework for application structure and routing
- **Python Standard Library**: OS module for environment variables, logging module for application logging

### Asset Sources
- **Pixabay**: External image hosting for product photography
- **CDN Services**: Content delivery networks for CSS and JavaScript libraries

### Development Environment
- **Replit**: Cloud-based development environment
- **Python Runtime**: Server-side application execution

Note: The application currently uses sample data and external image URLs. A production deployment would require a proper database system and local asset management.