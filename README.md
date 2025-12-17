# AxisPoint Software - Modern Website

A professional, modern, and interactive multi-page website for AxisPoint Software PVT LTD built with **Next.js 14**, **React**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## 🚀 Features

- **Modern Design**: Clean, professional, and responsive UI
- **Dark/Light Mode**: Global theme toggle with smooth transitions
- **Smooth Animations**: Framer Motion animations for sections, cards, and hero components
- **Fully Responsive**: Desktop, tablet, and mobile optimized
- **TypeScript**: Full type safety across the application
- **SEO Optimized**: Proper metadata and semantic HTML
- **Performance**: Optimized images, lazy loading, and code splitting

## 📋 Pages

1. **Home** (`/`) - Landing page with features and statistics
2. **About** (`/about`) - Company information, mission, vision, and core values
3. **Services** (`/services`) - Service offerings and why choose us
4. **Technologies** (`/technologies`) - Tech stack organized by category
5. **Industries** (`/industries`) - Industry expertise and solutions
6. **Careers** (`/careers`) - Job opportunities and company benefits

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library

### Development Tools
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixes
- **ESLint** - Code quality
- **next-themes** - Theme management

## 📦 Installation

### Prerequisites
- Node.js 16.x or higher
- npm or yarn

### Setup Steps

1. **Navigate to project directory**
   ```bash
   cd axispoint-software
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Navigate to `http://localhost:3000`

## 🏗️ Project Structure

```
axispoint-software/
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Global layout with theme provider
│   │   ├── page.tsx             # Home page
│   │   ├── about/
│   │   │   └── page.tsx         # About page
│   │   ├── services/
│   │   │   └── page.tsx         # Services page
│   │   ├── technologies/
│   │   │   └── page.tsx         # Technologies page
│   │   ├── industries/
│   │   │   └── page.tsx         # Industries page
│   │   └── careers/
│   │       └── page.tsx         # Careers page
│   ├── components/
│   │   ├── Navbar.tsx           # Navigation bar with theme toggle
│   │   ├── Footer.tsx           # Footer component
│   │   ├── Card.tsx             # Reusable card component
│   │   ├── Section.tsx          # Section wrapper component
│   │   └── HeroSection.tsx      # Hero section component
│   └── styles/
│       └── globals.css          # Global styles
├── public/                       # Static assets
├── package.json                 # Dependencies
├── tailwind.config.js           # Tailwind configuration
├── tsconfig.json                # TypeScript configuration
├── next.config.js               # Next.js configuration
├── postcss.config.js            # PostCSS configuration
└── .eslintrc.json               # ESLint configuration
```

## 🎨 Design Features

### Theme System
- **Light Mode**: Clean white background with dark text
- **Dark Mode**: Dark gray/navy background with light text
- **Smooth Transitions**: CSS transitions for background and text colors
- **Persistent**: Theme preference saved in localStorage

### Animations
- **Fade-in animations** on page load
- **Slide-up animations** for content sections
- **Hover effects** on cards and buttons
- **Staggered animations** for lists and grids
- **Scroll-triggered animations** using Framer Motion's `whileInView`

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Flexible grid layouts
- Touch-friendly interactive elements

## 🚀 Build & Deployment

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

## 📝 Key Components

### Navbar
- Sticky positioning with shadow on scroll
- Active link highlighting
- Mobile hamburger menu
- Theme toggle button (sun/moon icon)

### Card Component
- Reusable with customizable props
- Icon support
- Tag badges
- Hover animations with scale and shadow effects

### HeroSection Component
- Large title and subtitle
- Optional CTA buttons
- Gradient background
- Staggered text animations

### Section Component
- Consistent padding and max-width
- Optional title and subtitle
- Scroll-triggered animations
- Flexible children content

## 🎯 Customization

### Colors
Edit `tailwind.config.js` to customize the color palette:
```javascript
colors: {
  primary: {
    DEFAULT: '#2563eb',
    dark: '#1d4ed8',
  },
  // ... more colors
}
```

### Fonts
Modify `src/app/layout.tsx` to change the font family:
```typescript
const inter = Inter({ subsets: ['latin'] });
```

### Content
Update page content in respective `page.tsx` files:
- `src/app/about/page.tsx`
- `src/app/services/page.tsx`
- `src/app/technologies/page.tsx`
- `src/app/industries/page.tsx`
- `src/app/careers/page.tsx`

## 🔧 Environment Variables

Create a `.env.local` file if needed for environment-specific configurations:
```
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## 📄 License

This project is proprietary and confidential to AxisPoint Software PVT LTD.

## 📞 Support

For support or questions, contact: support@axispoint.tech

---

**Built with ❤️ by AxisPoint Software**
