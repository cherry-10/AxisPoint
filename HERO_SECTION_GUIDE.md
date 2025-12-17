# Hero Section Enhancement Guide

## Overview
The Hero Section has been enhanced with professional, modern visuals that communicate technology, innovation, and software development expertise for **AxisPoint Software PVT LTD**.

---

## 🎨 Available Hero Images

### 1. **hero-tech.svg** (Default)
**Theme:** Abstract Technology & Code
- Features: Code editor window, data nodes, connection lines, cloud computing icons, AI/ML network
- Best for: General software development, technology services
- Color scheme: Blue, purple, cyan gradients
- **Use case:** Homepage, general technology pages

### 2. **hero-software.svg**
**Theme:** 3D Isometric Software Development Scene
- Features: Dashboard/monitor, code blocks, analytics charts, server infrastructure, cloud connections
- Best for: Software development services, IT consulting
- Color scheme: Blue, purple, cyan, pink gradients
- **Use case:** Services page, development-focused content

### 3. **hero-innovation.svg**
**Theme:** AI/ML & Innovation
- Features: Neural network brain, data flow visualization, analytics dashboard, automation terminal, cloud infrastructure
- Best for: Innovation, AI/ML services, training programs
- Color scheme: Indigo, purple, cyan, pink gradients with animations
- **Use case:** Innovation pages, AI/ML services, training programs

---

## 🚀 Implementation

### Basic Usage (Default Image)
```tsx
<HeroSection
  title="Modern Software Solutions for Your Business"
  subtitle="AxisPoint Software delivers innovative, scalable, and reliable software solutions."
  primaryCta={{ text: 'Get Started', href: '/services' }}
  secondaryCta={{ text: 'Learn More', href: '/about' }}
  showHeroImage={true}
/>
```

### Custom Image Selection
```tsx
<HeroSection
  title="Innovation Through Technology"
  subtitle="Leading the way in AI and Machine Learning solutions."
  primaryCta={{ text: 'Explore Services', href: '/services' }}
  heroImage="/images/hero-innovation.svg"
  showHeroImage={true}
/>
```

### Without Hero Image (Text-Only)
```tsx
<HeroSection
  title="About AxisPoint Software"
  subtitle="Your trusted partner in digital transformation."
  showHeroImage={false}
/>
```

---

## 📐 Component Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | Required | Main heading text |
| `subtitle` | `string` | Optional | Supporting text below title |
| `primaryCta` | `{text: string, href: string}` | Optional | Primary call-to-action button |
| `secondaryCta` | `{text: string, href: string}` | Optional | Secondary call-to-action button |
| `heroImage` | `string` | `/images/hero-tech.svg` | Path to hero image |
| `showHeroImage` | `boolean` | `true` | Toggle image visibility |
| `className` | `string` | Optional | Additional CSS classes |
| `children` | `ReactNode` | Optional | Additional content below CTAs |

---

## 🎭 Animation Features

### 1. **Text Animations**
- Staggered fade-in for title, subtitle, and CTAs
- Smooth slide-up effect (20px)
- 0.5s duration with 0.1s stagger delay

### 2. **Image Animations**
- **Initial:** Fade in from right with scale effect
- **Floating:** Continuous slow vertical movement (6s loop)
- **Glow Effects:** Pulsing gradient orbs around the image

### 3. **Background Effects**
- Gradient backdrop with blur
- Animated pulsing glow orbs (blue/cyan and purple/pink)
- Soft shadow and depth effects

---

## 🌓 Theme Support

### Light Mode
- Subtle gradient background (blue-50/purple-50)
- Soft shadows
- 20% opacity glow effects

### Dark Mode
- Deep background (blue-950/purple-950)
- Enhanced glow effects (30% opacity)
- Blue-tinted shadows for depth

**All images are optimized for both themes!**

---

## 📱 Responsive Design

### Desktop (lg and above)
- Two-column grid layout
- Text on left, image on right
- Image: 600x600px optimal size

### Tablet (md)
- Two-column maintained
- Reduced spacing
- Scaled image size

### Mobile (sm and below)
- Single column stack
- Image appears **above** text
- Full-width image
- Centered text alignment

---

## ⚡ Performance Optimizations

### Next.js Image Component
```tsx
<Image
  src={heroImage}
  alt="AxisPoint Software - Technology and Innovation"
  width={600}
  height={600}
  priority  // Preload for LCP optimization
  className="w-full h-auto drop-shadow-2xl"
/>
```

### SVG Benefits
- ✅ Scalable without quality loss
- ✅ Small file size (~20-25KB per image)
- ✅ Theme-aware colors
- ✅ Crisp on all screen resolutions
- ✅ Fast loading

---

## 🎯 Recommended Usage by Page

| Page | Recommended Image | Alternative |
|------|------------------|-------------|
| Homepage | `hero-tech.svg` | `hero-software.svg` |
| Services | `hero-software.svg` | `hero-tech.svg` |
| Technologies | `hero-tech.svg` | `hero-innovation.svg` |
| Training | `hero-innovation.svg` | `hero-software.svg` |
| About | Text-only or `hero-tech.svg` | - |
| Careers | Text-only or `hero-software.svg` | - |

---

## 🛠️ Customization Tips

### Change Image on Different Pages
```tsx
// services/page.tsx
<HeroSection
  heroImage="/images/hero-software.svg"
  // ... other props
/>

// technologies/page.tsx
<HeroSection
  heroImage="/images/hero-innovation.svg"
  // ... other props
/>
```

### Adjust Animation Speed
Edit `HeroSection.tsx`:
```tsx
const floatingAnimation = {
  y: [0, -20, 0],
  transition: {
    duration: 6,  // Change this value (higher = slower)
    repeat: Infinity,
    ease: "easeInOut"
  }
};
```

### Modify Glow Colors
Edit the glow orbs in `HeroSection.tsx`:
```tsx
// Top-right glow (change colors)
<div className="absolute -top-4 -right-4 w-24 h-24 
  bg-gradient-to-br from-blue-400 to-cyan-400 
  dark:from-blue-500 dark:to-cyan-500 
  rounded-full blur-2xl opacity-40 animate-pulse" />
```

---

## 📦 File Structure

```
public/
└── images/
    ├── hero-tech.svg          (Abstract Technology)
    ├── hero-software.svg      (3D Isometric Development)
    └── hero-innovation.svg    (AI/ML & Innovation)

src/
└── components/
    └── HeroSection.tsx        (Enhanced component)
```

---

## 🎨 Design Principles Applied

✅ **Modern & Professional** - Clean gradients, geometric shapes  
✅ **Technology-Focused** - Code, data, cloud, AI elements  
✅ **Premium Feel** - Shadows, glows, smooth animations  
✅ **Theme-Aware** - Works perfectly in light and dark modes  
✅ **Performance-First** - Optimized SVGs, Next.js Image component  
✅ **Responsive** - Adapts beautifully to all screen sizes  

---

## 🚀 Quick Start Checklist

- [x] Three professional hero images created
- [x] Next.js Image component integrated
- [x] Framer Motion animations implemented
- [x] Responsive grid layout (desktop/mobile)
- [x] Theme-aware styling (light/dark mode)
- [x] Floating animation effect
- [x] Gradient glow effects
- [x] Performance optimizations
- [x] Homepage updated with hero image

---

## 💡 Tips for Best Results

1. **Keep text concise** - Hero sections work best with clear, punchy messaging
2. **Use high-contrast CTAs** - Make buttons stand out
3. **Match image to content** - Choose the image that best represents the page topic
4. **Test both themes** - Verify appearance in light and dark modes
5. **Monitor performance** - Use Next.js Image for automatic optimization

---

## 📞 Support

For questions or customization requests related to AxisPoint Software's website, refer to this guide or modify the component directly in `src/components/HeroSection.tsx`.

**Company:** AxisPoint Software PVT LTD  
**Focus:** Software Development, IT Consulting, Training, Innovation

---

*Last Updated: December 2024*
