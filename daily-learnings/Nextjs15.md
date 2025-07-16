🔰 1. What is Next.js?
Next.js is a React-based framework for building full-stack, server-rendered web apps with features like:

Routing
API handling
Image optimization
Server-side rendering (SSR)
Static site generation (SSG)
Edge & serverless function
Built-in TypeScript support
App Router (introduced in v13+, used in v15)


⚙️ 2. Installation & Setup
✅ Requirements:
Node.js 18+

npm or yarn

📦 Installation:
npx create-next-app@latest my-next-app
cd my-next-app
npm run dev
📁 Default folder structure:
my-next-app/
├── app/              # App Router (new structure)
│   ├── page.tsx      # Home page
│   └── layout.tsx    # Shared layout
├── public/           # Static assets
├── styles/           # Global CSS
├── next.config.js    # Config file
└── package.json
🧭 3. Routing in Next.js 15 (App Router)
File-based routing via /app folder
app/page.tsx → /

app/about/page.tsx → /about

app/blog/[slug]/page.tsx → /blog/123

🧩 Dynamic Routes:

// app/blog/[slug]/page.tsx
export default function BlogPost({ params }) {
  return <h1>Post: {params.slug}</h1>;
}
🎨 4. Pages, Layouts, and Templates
🔁 layout.tsx (persistent layout)
export default function Layout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
🧪 template.tsx (re-mount on each navigation):
Used when you need fresh state for each route.

🎯 5. Metadata and SEO in Next.js 15
Supports automatic metadata generation.

Option 1: Static Metadata
// app/about/page.tsx
export const metadata = {
  title: 'About Us',
  description: 'Learn more about us',
};
Option 2: Dynamic Metadata

// app/blog/[slug]/page.tsx
export async function generateMetadata({ params }) {
  return {
    title: `Post - ${params.slug}`,
    description: 'Post details here...',
  };
}
💅 6. Styling
Global CSS:
Use globals.css from /styles/

Import it in layout.tsx

CSS Modules:
import styles from './page.module.css';
<h1 className={styles.title}>Hello</h1>
Tailwind CSS:

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
Edit tailwind.config.js and globals.css accordingly.

🔗 7. Linking Between Pages
Use Next.js <Link> instead of <a> for client-side routing:

import Link from 'next/link';
<Link href="/about">About</Link>
📦 8. Fetching Data
✅ Static Data:

export async function generateStaticParams() {}
export async function getStaticProps() {}
✅ Server Components (default in App Router):

// This runs on server
const res = await fetch('https://api.example.com/posts');
✅ Client Components:

'use client'; // needed for useState, useEffect
🧪 9. API Routes
Located in /app/api/ directory:

// app/api/hello/route.ts
export async function GET(request) {
  return new Response(JSON.stringify({ msg: 'Hello' }));
}
🚀 10. Deployment
➤ Vercel (best for Next.js):

npm install -g vercel
vercel
➤ Static Export (optional for some sites):
next export

🛠️ 11. Next.config.js
Customize build behavior:

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverActions: true, // if using server actions
  }
}
module.exports = nextConfig;

