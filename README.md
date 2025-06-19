# Supreme Group - Vehicle Showcase Website

A modern, responsive Next.js vehicle showcase with professional UI and seamless contact integration.

🚀 *Live Demo*: [https://supreme-group-web.vercel.app](https://blacksof-task-web.vercel.app/)

## 🛠 Quick Setup

bash
# Clone and install
git clone https://github.com/sainani1214/supreme-group-web.git
cd supreme-group-web
npm install

# Development
npm run dev          # http://localhost:3000

# Production
npm run build
npm start


## 🏗 Architecture


src/
├── app/
│   ├── favicon.ico
│   ├── globals.css      # Tailwind imports + global styles
│   ├── layout.tsx       # Root layout + metadata
│   └── page.tsx         # Main homepage
├── components/
│   ├── ContactForm.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── HeroSection.tsx
│   ├── Layout.tsx
│   └── vehicleShowcase.tsx
├── node_modules/
└── public/
    ├── assets/
    │   └── images/
    │       ├── complete-body
    │       ├── exterior.png
    │       ├── footer.jpg
    │       ├── front.png
    │       ├── supreme_logo
    │       └── trunk.png
    └── videos/
        ├── automotive
        ├── Commercial
        ├── Commercial
        ├── Commercial
        ├── Passenger
        ├── Passenger
        ├── Passenger
        ├── Passenger
        └── Passenger


*Component Flow*: Layout → Header → HeroSection → VehicleShowcase → ContactForm → Footer

## 📱 Responsive Strategy

- *Mobile-first design* with Tailwind breakpoints
- *Flexible layouts* for hero, showcase, and contact sections
- *Video optimization* for automotive demonstrations
- *Touch-friendly* interface with proper spacing

css
/* Responsive implementation */
grid-cols-1 md:grid-cols-2 lg:grid-cols-3


## ⚡ Performance

- *Next.js 14*: App Router, automatic optimization
- *Video optimization*: Multiple formats for different devices
- *Image optimization*: WebP format, lazy loading
- *Asset management*: Organized public folder structure
- *Target metrics*: Fast loading with rich media content

## ♿ Accessibility

- *WCAG 2.1 AA compliance*: Color contrast, keyboard navigation
- *Semantic HTML*: Proper component structure
- *Media accessibility*: Alt text for images, captions ready for videos
- *Focus management*: Logical tab order through sections

## 📦 Tech Stack

| Library | Purpose | Why Chosen |
|---------|---------|------------|
| *Next.js 14* | React framework | SSR/SSG, performance, SEO |
| *TypeScript* | Type safety | Error prevention, better DX |
| *Tailwind CSS* | Styling | Rapid development, consistency |
| *React Components* | Modular UI | Reusable, maintainable code |

*Rich media support* - optimized for automotive content with videos and high-quality images.

## 🔧 Key Decisions

### Technical Choices
- *Component separation* for better maintainability (Hero, Showcase, Contact, Footer)
- *Public asset organization* with dedicated folders for images/videos
- *Video integration* for immersive automotive experience
- *Contact form* for lead generation

### Design Decisions
- *Automotive focus* with video demonstrations
- *Professional branding* with Supreme logo integration
- *Multi-media approach* combining images and videos
- *Complete vehicle views* (exterior, interior, trunk, etc.)

### Assumptions Made
- *High-quality media* acceptable for automotive showcase
- *Video content* enhances user engagement
- *Lead generation* through contact forms
- *Professional presentation* for luxury vehicles

## 🚧 Challenges & Solutions

| Challenge | Solution |
|-----------|----------|
| *Large video files* | Multiple formats + compression optimization |
| *Complex media layout* | Organized public folder structure |
| *Rich content performance* | Next.js automatic optimization |
| *Professional presentation* | Dedicated components for each section |
| *Contact integration* | Dedicated ContactForm component |

## 🚀 Roadmap

### Phase 1 (Next 4 weeks)
- [ ] Video player controls and optimization
- [ ] Enhanced contact form validation
- [ ] Vehicle category filtering
- [ ] Mobile video experience improvement

### Phase 2 (1-3 months)
- [ ] CMS integration for video/image management
- [ ] Advanced vehicle showcase features
- [ ] Customer inquiry tracking
- [ ] Analytics for media engagement

### Phase 3 (3-6 months)
- [ ] Interactive 360° vehicle tours
- [ ] AR vehicle preview features
- [ ] Advanced booking system
- [ ] Multi-language support

## 📋 Additional Notes

### Media Management
- *Organized assets* in dedicated image/video folders
- *Multiple formats* for cross-platform compatibility
- *Optimized loading* for rich automotive content
- *Professional presentation* with high-quality media

### Component Architecture
- *Modular design* with separate concerns
- *Reusable components* for scalability
- *Clean separation* between layout, content, and interaction
- *TypeScript integration* throughout all components

### Performance Considerations
- *Media optimization* for automotive content
- *Progressive loading* for large assets
- *Mobile optimization* for video playback
- *Caching strategy* for repeated visits

---

*Tech Stack*: Next.js 14 + TypeScript + Tailwind CSS  
*Content*: Rich automotive media (videos + images)  
*Deployment*: Vercel-ready  
*Status*: Production Ready
