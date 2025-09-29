# Upsoil & Soul Farm Website Rewrite

**Goal:** Play with Cursor (cursor(1) and cursor-agent(1)) to learn how they can work together.

## Project: Rewrite web site for Upsoil & Soul Farm

**Status to Date:**
- ✅ **Content Analysis Complete** - Parsed original website structure and content
- ✅ **Technology Stack Selected** - Next.js 15.5.4 + TypeScript + Tailwind CSS
- ✅ **Development Environment Setup** - Project created and configured
- ✅ **Website Rewrite Complete** - All sections recreated with modern components
- ✅ **Interactive Features Implemented** - Navigation, forms, animations, responsive design
- ✅ **Production Build Successful** - Ready for deployment
- ✅ **Documentation Complete** - Full project documentation and analysis

**Current Status:** Website fully functional at http://localhost:3001

### Project Structure
```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx           # Main page with all components
│   └── globals.css        # Global styles
├── components/
│   ├── Navigation.tsx     # Responsive navigation
│   ├── Hero.tsx          # Landing section
│   ├── About.tsx         # Mission and features
│   ├── Campground.tsx    # Amenities and booking
│   ├── Farm.tsx         # Farm section with gallery
│   ├── Activities.tsx   # Activities grid
│   ├── Contact.tsx      # Contact form and info
│   ├── Footer.tsx       # Footer with links
│   └── SmoothScroll.tsx # Navigation functionality
```

### Key Features Implemented
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Interactive Navigation** - Smooth scrolling and mobile hamburger menu
- **Image Optimization** - Next.js Image component with Unsplash integration
- **Contact Form** - Working form with validation
- **Modern Stack** - Next.js 15.5.4, TypeScript, Tailwind CSS
- **Production Ready** - Optimized build and deployment configuration

## Environment & Tools

### Installing cursor-agent
```bash
# Install cursor-agent globally
npm install -g @cursor/agent

# Or install locally in project
npm install @cursor/agent

# Verify installation
cursor-agent --version
```

### Development Setup
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) (or [http://localhost:3001](http://localhost:3001) if port 3000 is in use) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
