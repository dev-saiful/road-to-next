# Road to Next - Ticket Management System

A modern full-stack ticket management application built with Next.js 15, featuring user authentication, ticket CRUD operations, and a responsive dashboard.

## 🚀 Features

- **Authentication System**: Complete user registration, login, and password management
- **Ticket Management**: Create, read, update, and delete tickets with status tracking
- **User Dashboard**: Personal account management with profile and password settings
- **Responsive Design**: Mobile-first design with dark/light theme support
- **Real-time Updates**: Optimistic UI updates and server actions
- **Type Safety**: Full TypeScript implementation with Prisma ORM

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: Lucia Auth with Argon2 password hashing
- **Styling**: Tailwind CSS + shadcn/ui components
- **Validation**: Zod schema validation
- **Icons**: Lucide React
- **Type Safety**: TypeScript

## 📦 Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL database
- npm/yarn/pnpm/bun

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd road-to-next
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Environment Setup**

   ```bash
   cp .env.example .env.local
   ```

   Update your `.env.local` with:

   ```env
   DATABASE_URL="postgresql://username:password@localhost:5432/roadtonext"
   ```

4. **Database Setup**

   ```bash
   # Generate Prisma client
   npx prisma generate

   # Run migrations
   npx prisma db push

   # Seed the database (optional)
   npx prisma db seed
   ```

5. **Start the development server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to view the application.

## 📁 Project Structure

```
src/
├── app/                    # Next.js app router pages
│   ├── (auth)/            # Authentication routes
│   ├── account/           # User account management
│   └── tickets/           # Ticket management
├── components/            # Reusable UI components
│   ├── ui/               # shadcn/ui components
│   ├── form/             # Form components
│   └── sidebar/          # Navigation components
├── features/             # Feature-based modules
│   ├── auth/            # Authentication logic
│   └── ticket/          # Ticket management logic
├── lib/                 # Utility libraries
└── prisma/             # Database schema and migrations
```

## 🔗 Available Routes

- `/` - Home page (All tickets)
- `/sign-in` - User login
- `/sign-up` - User registration
- `/password-forgot` - Password reset
- `/tickets` - My tickets
- `/tickets/[id]` - Ticket details
- `/tickets/new` - Create new ticket
- `/account/profile` - User profile settings
- `/account/password` - Password change

## 🗄️ Database Schema

- **Users**: Authentication and profile data
- **Sessions**: User session management
- **Tickets**: Ticket information with status tracking

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Configure environment variables
4. Deploy automatically

### Manual Deployment

```bash
# Build the application
npm run build

# Start production server
npm start
```

## 🛡️ Security Features

- Password hashing with Argon2
- CSRF protection
- Secure session management
- Input validation and sanitization
- Type-safe database queries

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Lucia Auth Documentation](https://lucia-auth.com)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🐛 Issues & Support

For issues and support, please create an issue in the GitHub repository.
