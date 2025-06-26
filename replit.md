# Dr. Hanouni Dental Clinic Website

## Overview

This is a modern dental clinic website built for Dr. Hanouni's practice in Khénifra, Morocco. The application serves as a comprehensive web presence featuring appointment booking, service information, testimonials, and contact functionality. It's designed as a full-stack web application with a React frontend and Express.js backend.

## System Architecture

The application follows a monorepo structure with three main layers:

- **Frontend**: React-based single-page application with modern UI components
- **Backend**: Express.js API server handling business logic and data persistence
- **Shared**: Common types, schemas, and utilities used across both frontend and backend

### Technology Stack

- **Frontend**: React 18, TypeScript, Vite, TailwindCSS, shadcn/ui components
- **Backend**: Node.js, Express.js, TypeScript
- **Database**: PostgreSQL with Drizzle ORM (configured but using in-memory storage currently)
- **Styling**: TailwindCSS with custom medical theme colors
- **Forms**: React Hook Form with Zod validation
- **State Management**: TanStack Query for server state
- **Routing**: Wouter for client-side routing

## Key Components

### Frontend Architecture
- **Component-based architecture** using React functional components
- **Custom UI library** built on Radix UI primitives with shadcn/ui
- **Responsive design** with mobile-first approach
- **Form validation** using React Hook Form and Zod schemas
- **State management** with TanStack Query for server state and React hooks for local state

### Backend Architecture
- **RESTful API** design with Express.js
- **Type-safe schemas** using Drizzle and Zod
- **Modular storage layer** with interface-based design (currently using in-memory storage)
- **Error handling** middleware for consistent API responses
- **CORS and security** middleware configured

### Database Design
The application defines two main entities:
- **Appointments**: Patient appointment requests with contact info, service type, and scheduling preferences
- **Contact Messages**: General inquiries and messages from website visitors

## Data Flow

1. **User Interaction**: Users interact with React components (forms, navigation, etc.)
2. **Form Submission**: Forms are validated client-side using Zod schemas
3. **API Calls**: TanStack Query manages API requests to Express endpoints
4. **Backend Processing**: Express routes validate data and interact with storage layer
5. **Data Persistence**: Currently uses in-memory storage (ready for PostgreSQL integration)
6. **Response Handling**: Success/error states are managed and displayed to users

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL client (prepared for database integration)
- **drizzle-orm**: Type-safe ORM for database operations
- **@tanstack/react-query**: Server state management
- **react-hook-form**: Form handling and validation
- **zod**: Schema validation
- **tailwindcss**: Utility-first CSS framework

### UI Components
- **@radix-ui/**: Headless UI components for accessibility
- **lucide-react**: Icon library
- **class-variance-authority**: Component variant management

## Deployment Strategy

The application is configured for deployment on Replit with the following setup:

- **Development**: Runs with Vite dev server and tsx for TypeScript execution
- **Production**: Built with Vite for frontend and esbuild for backend
- **Port Configuration**: Listens on port 5000, mapped to external port 80
- **Environment**: Configured for Node.js 20, PostgreSQL 16 support

### Build Process
1. Frontend assets are built using Vite
2. Backend is bundled using esbuild with ESM format
3. Static files are served from the Express server in production

## Changelog
- June 26, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.