# Hero Images - Technical Specifications

## Image Assets

All hero images are created as SVG (Scalable Vector Graphics) for optimal performance and scalability.

### Asset Details

| Page | File | Dimensions | File Size | Format | Theme |
|------|------|-----------|-----------|--------|-------|
| Home | `home-hero.svg` | 1200×700px | ~8KB | SVG | Dashboard & Code |
| About | `about-hero.svg` | 1200×700px | ~9KB | SVG | Digital Transformation |
| Services | `services-hero.svg` | 1200×700px | ~10KB | SVG | Enterprise Hub |
| Technologies | `technologies-hero.svg` | 1200×700px | ~11KB | SVG | Architecture |
| Industries | `industries-hero.svg` | 1200×700px | ~10KB | SVG | Market Analytics |
| Careers | `careers-hero.svg` | 1200×700px | ~9KB | SVG | Office & Growth |
| Contact | `contact-hero.svg` | 1200×700px | ~10KB | SVG | Communication |

## Component Structure

### HeroSection Props

```tsx
interface HeroSectionProps {
  title: string;              // Main heading
  subtitle?: string;          // Secondary text
  primaryCta?: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
  children?: ReactNode;       // Additional content
  className?: string;         // Custom CSS classes
  heroImage?: string;         // Path to hero image
  showHeroImage?: boolean;    // Toggle image visibility
}
```

## Responsive Breakpoints

### Desktop (lg and above: ≥1024px)
```
┌─────────────────────────────────────────┐
│  Content (Left)    │    Image (Right)    │
│  - Title           │                     │
│  - Subtitle        │   (500×500px)       │
│  - CTAs            │   Hidden on mobile  │
│  - Children        │                     │
└─────────────────────────────────────────┘
```

**Image Properties:**
- Width: 500px
- Height: 500px
- Floating animation: 6s cycle
- Drop shadow: 2xl
- Glow effects: Blue and purple gradients

### Mobile (< lg: < 1024px)
```
┌──────────────────────────┐
│   Content (Centered)     │
│   - Title                │
│   - Subtitle             │
│   - CTAs                 │
│   - Children             │
│                          │
│   Hero Image (Full)      │
│   - Max-width: 400px     │
│   - Centered             │
│   - 400×400px            │
└──────────────────────────┘
```

**Image Properties:**
- Width: 400px
- Height: 400px
- Floating animation: 6s cycle
- Drop shadow: xl
- Glow effects: Scaled down for mobile

## CSS Classes Used

### Display & Layout
```tsx
// Desktop only
'hidden lg:block'

// Mobile only
'lg:hidden'

// Grid layout
'grid lg:grid-cols-2 gap-12 items-center'

// Padding & spacing
'py-20 md:py-32'
'px-4 sm:px-6 lg:px-8'
```

### Image Styling
```tsx
// Image container
'relative rounded-2xl overflow-hidden shadow-2xl'
'dark:shadow-blue-500/10'

// Background gradient
'bg-gradient-to-br from-blue-50/50 to-purple-50/50'
'dark:from-blue-950/20 dark:to-purple-950/20'

// Image element
'w-full h-auto drop-shadow-2xl'

// Glow effects
'absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20'
'blur-3xl rounded-full transform scale-110'
```

## SVG Design System

### Colors Used in SVGs

#### Primary Colors
- Dark Background: `#0f172a` (slate-950)
- Dark Panel: `#1e293b` (slate-800)
- Light Text: `#94a3b8` (slate-400)
- Very Light Text: `#64748b` (slate-500)

#### Accent Colors
```
Blue     → #3b82f6
Cyan     → #06b6d4
Purple   → #a855f7
Green    → #10b981
Amber    → #f59e0b
Pink/Red → #ec4899
Emerald  → #14b8a6
Teal     → #0d9488
```

### SVG Elements Used

Each SVG includes:
- **Background**: Linear gradient from dark to darker
- **Grid lines**: Subtle grid overlay with 10% opacity
- **Shapes**: Rectangles, circles, ellipses for UI elements
- **Text**: Labels, titles, and code snippets
- **Gradients**: Reusable gradient definitions
- **Glow effects**: Blur filters for depth
- **Floating particles**: Small circles for visual interest

## Animation Details

### Floating Animation
```tsx
const floatingAnimation = {
  y: [0, -20, 0],
  transition: {
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut"
  }
};
```
- **Range**: 0 to -20px vertical movement
- **Duration**: 6 seconds
- **Easing**: easeInOut for smooth motion
- **Repeat**: Infinite loop

### Image Entry Animation
```tsx
const imageVariants = {
  hidden: { opacity: 0, scale: 0.8, x: 50 },
  show: { 
    opacity: 1, 
    scale: 1, 
    x: 0,
    transition: { 
      duration: 0.8,
      ease: "easeOut"
    } 
  },
};
```
- **Entry**: Scale up from 80% with slide from right
- **Duration**: 0.8 seconds
- **Easing**: easeOut for smooth deceleration

## Dark Mode Support

All SVG colors are manually selected to work in both light and dark modes:
- SVGs use neutral/dark colors that work on dark background
- CSS classes include dark mode variants (`dark:`)
- Glow effects adjust opacity in dark mode
- Text contrast maintained at all times

### Dark Mode CSS Examples
```tsx
'dark:shadow-blue-500/10'           // Colored shadow in dark
'dark:from-blue-950/20'             // Darker gradient stops
'dark:to-purple-950/20'             // Darker end colors
'dark:text-white'                   // Light text in dark mode
'dark:text-gray-300'                // Secondary text in dark
```

## Performance Optimizations

### 1. Image Optimization
- SVG format: Infinitely scalable, minimal file size
- Priority loading: `priority` prop on home page hero
- Responsive sizing: Different dimensions for mobile/desktop

### 2. CSS Optimization
- Hardware-accelerated animations (transform, opacity)
- Efficient blur filters with reasonable size
- GPU-optimized glow effects

### 3. Bundle Size Impact
- Each SVG: ~8-11KB (very small)
- Total hero images: ~70KB (negligible)
- No external image dependencies
- Native SVG rendering (no extra requests)

## Accessibility Features

### Alt Text
Each image includes descriptive alt text:
```tsx
alt="AxisPoint Software - Technology and Innovation"
```

### Semantic HTML
- Proper heading hierarchy (h1 for title)
- Meaningful link text in CTAs
- ARIA attributes where needed

### Color Contrast
- All text elements have sufficient contrast
- Color not used as sole means of conveying info
- Glyphs and icons have clear distinction

## Browser Support

### Supported Browsers
- Chrome/Chromium: Full support
- Firefox: Full support
- Safari: Full support (iOS 13+)
- Edge: Full support

### Features Used
- SVG rendering
- CSS Grid
- CSS Flexbox
- CSS Gradients
- CSS Filters (blur)
- CSS Transforms (scale, translateX, translateY)
- Framer Motion animations
- Next.js Image component

### No Polyfills Required
All features are natively supported in modern browsers.

## Implementation Checklist

### Code Changes
- [x] Created 7 SVG hero images
- [x] Updated HeroSection component
- [x] Added responsive mobile layout
- [x] Added responsive desktop layout
- [x] Implemented desktop/mobile image hiding

### Page Updates
- [x] Home page: `/images/heroes/home-hero.svg`
- [x] About page: `/images/heroes/about-hero.svg`
- [x] Services page: `/images/heroes/services-hero.svg`
- [x] Technologies page: `/images/heroes/technologies-hero.svg`
- [x] Industries page: `/images/heroes/industries-hero.svg`
- [x] Careers page: `/images/heroes/careers-hero.svg`
- [x] Contact page: `/images/heroes/contact-hero.svg`

### Testing & Validation
- [x] Build succeeds: `npm run build`
- [x] No console errors
- [x] Images load correctly
- [x] Responsive layout functions
- [x] Animations smooth
- [x] Dark mode works
- [x] All pages accessible

## Maintenance Guidelines

### Updating Hero Images
1. Edit the corresponding SVG file in `/public/images/heroes/`
2. Test in dev server with hot reload
3. Rebuild: `npm run build`
4. Verify no build errors

### Adding New Hero Images
1. Create new SVG in `/public/images/heroes/`
2. Follow design system colors and patterns
3. Include 1200×700px viewBox
4. Add gradients and glow effects
5. Update page component with new image path
6. Test responsiveness

### Performance Monitoring
- Monitor SVG file sizes (keep under 15KB each)
- Check image load times in DevTools
- Verify animations are 60fps
- Test on actual mobile devices

## Future Enhancement Opportunities

1. **Interactive SVGs**: Add hover/click interactions
2. **Animated SVGs**: Use GSAP or similar for advanced animations
3. **WebP Variants**: Add optimized WebP format with fallback
4. **Lazy Loading**: Implement lazy loading for below-fold images
5. **Multiple Themes**: Create theme variations
6. **Parallax Effects**: Add scroll-triggered animations
7. **Dynamic Content**: Inject real data into dashboard visuals
8. **Accessibility**: Add ARIA labels and descriptions

## Troubleshooting

### Issue: Images not loading
- Check file paths are correct
- Verify files exist in `/public/images/heroes/`
- Clear browser cache
- Rebuild project: `npm run build`

### Issue: Images look blurry on mobile
- Ensure responsive sizes are set correctly
- Check CSS media queries
- Verify mobile width is correct

### Issue: Animations stuttering
- Check GPU acceleration
- Reduce filter complexity
- Optimize blur radius values

### Issue: Dark mode colors not working
- Verify `dark:` class variants in Tailwind config
- Check SVG color values
- Clear Next.js cache: `rm -rf .next`
