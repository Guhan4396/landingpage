# Portfolio Website with Authentication

A Next.js 14 App Router project with full authentication system using NextAuth.js, Google OAuth, and manual email/password registration.

## 🚀 Features

- ✅ **Google OAuth 2.0 Login & Signup** - Authenticate using Google across all pages
- ✅ **Manual Registration & Login** - Email/password with bcrypt hashing
- ✅ **JWT-based Sessions** - Stateless authentication
- ✅ **Protected Routes** - Middleware-protected dashboard
- ✅ **In-memory User Storage** - No database required for development
- ✅ **TypeScript Support** - Full type safety
- ✅ **Reusable Components** - Modular Google OAuth button component

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Authentication**: NextAuth.js v4
- **Password Hashing**: bcryptjs
- **Session Management**: JWT
- **Language**: TypeScript
- **Styling**: Tailwind CSS (basic setup)

## 📁 Project Structure

```
landingpage/
├── app/
│   ├── api/
│   │   ├── auth/[...nextauth]/route.ts   # NextAuth configuration
│   │   ├── register/route.ts             # User registration endpoint
│   │   ├── restricted/route.ts           # Protected API endpoint
│   │   └── test/route.ts                 # Test endpoint
│   ├── globals.css                       # Global styles
│   ├── layout.tsx                        # Root layout with providers
│   ├── page.tsx                          # Landing page
│   └── providers.tsx                     # SessionProvider wrapper
├── lib/
│   ├── auth.ts                          # NextAuth configuration
│   └── userStore.ts                     # In-memory user storage
├── types/
│   └── next-auth.d.ts                   # NextAuth type extensions
└── middleware.ts                        # Route protection
```

## 🔧 Setup Instructions

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Environment Configuration**
   Create a `.env.local` file with your credentials:
   ```env
   GOOGLE_CLIENT_ID=your_google_client_id_here
   GOOGLE_CLIENT_SECRET=your_google_client_secret_here
   NEXTAUTH_SECRET=your_nextauth_secret_here
   NEXTAUTH_URL=http://localhost:3000
   ```

3. **Run Development Server**
   ```bash
   npm run dev
   ```

4. **Build for Production**
   ```bash
   npm run build
   npm start
   ```

## 🔐 API Endpoints

### Authentication Routes

- **GET/POST** `/api/auth/[...nextauth]` - NextAuth authentication handlers
  - Supports Google OAuth and email/password login
  - Handles signin, signout, and session management

### Registration

- **POST** `/api/register`
  ```json
  {
    "name": "Guhan Senthil",
    "email": "guhan@example.com",
    "password": "securepassword"
  }
  ```
  
  **Success Response:**
  ```json
  {
    "success": true,
    "message": "User registered successfully",
    "user": {
      "id": "uuid-generated",
      "name": "Guhan Senthil",
      "email": "guhan@example.com"
    }
  }
  ```

  **Error Responses:**
  - `400` - Missing required fields
  - `409` - Email already registered
  - `500` - Internal server error

### Protected API

- **GET** `/api/restricted` - Requires authentication
  
  **Success Response:**
  ```json
  {
    "message": "You are authenticated",
    "user": {
      "name": "Guhan Senthil",
      "email": "guhan@example.com"
    }
  }
  ```

  **Error Response:**
  - `401` - Unauthorized (not logged in)

### Test Endpoint

- **GET** `/api/test` - Check if backend is working
  ```json
  {
    "message": "Authentication backend is working!",
    "endpoints": {
      "auth": "/api/auth/[...nextauth]",
      "register": "/api/register",
      "restricted": "/api/restricted"
    },
    "timestamp": "2024-01-01T00:00:00.000Z"
  }
  ```

## 🛡 Security Features

- **Password Hashing**: bcrypt with 12 salt rounds
- **JWT Sessions**: Stateless and secure
- **Route Protection**: Middleware protects `/dashboard/*`
- **Input Validation**: Server-side validation for all inputs
- **Error Handling**: Proper error messages without exposing sensitive data

## 🔍 User Storage

Users are stored in-memory using this format:
```typescript
interface User {
  id: string          // UUID v4
  name: string        // Full name
  email: string       // Email address (unique)
  password: string    // bcrypt hashed password
}
```

## 📝 Usage Examples

### Manual Registration Flow
1. POST to `/api/register` with name, email, and password
2. Password is hashed with bcrypt and user is stored
3. User can then login using credentials provider

### Google OAuth Flow
1. User clicks "Sign in with Google"
2. Redirected to Google OAuth consent screen
3. On success, user session is created automatically

### Accessing Protected Routes
1. User must be authenticated to access `/dashboard/*`
2. Middleware automatically redirects unauthenticated users to `/login`
3. Protected API routes return 401 for unauthenticated requests

## 🚦 Next Steps

The backend is fully functional! To complete the project, you'll need to create:

1. **Frontend Pages**:
   - `/login` - Login form with Google OAuth and email/password
   - `/register` - Registration form
   - `/dashboard` - Protected user dashboard

2. **UI Components**:
   - Login/logout buttons
   - User profile display
   - Error/success message handling

3. **Optional Enhancements**:
   - Database integration (replace in-memory storage)
   - Email verification
   - Password reset functionality
   - User profile management

## 🎯 Testing the Setup

Test the authentication system:

1. **Test Backend**: Visit `/api/test`
2. **Register User**: POST to `/api/register`
3. **Test Protection**: Visit `/api/restricted` (should return 401)
4. **Test Middleware**: Visit `/dashboard` (should redirect to login)

All backend authentication functionality is now complete and ready for frontend integration!