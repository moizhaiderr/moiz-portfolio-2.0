# Moiz Haider - Modern Portfolio 2.0

A modern, responsive portfolio website built with cutting-edge technologies to showcase software engineering skills and projects.

## 🚀 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: 
  - Framer Motion for component animations
  - GSAP with ScrollTrigger for advanced scroll-based animations
- **3D Graphics**: Three.js for the rotating cube animation
- **Icons**: Lucide React
- **Development**: Turbopack for fast development builds

## ✨ Features

- **Modern Design**: Clean, professional design with a heritage dark theme
- **Responsive**: Fully responsive across all devices
- **Smooth Animations**: Subtle page transitions and scroll-triggered animations
- **3D Elements**: Interactive Three.js rotating cube in the hero section
- **Performance Optimized**: Built with Next.js for optimal performance
- **SEO Friendly**: Proper meta tags and semantic HTML
- **Accessibility**: ARIA labels and keyboard navigation support

## 🏗️ Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main page with all sections
├── components/
│   ├── Header.tsx           # Navigation header with smooth scroll
│   ├── Hero.tsx             # Hero section with Three.js cube
│   ├── About.tsx            # About section with profile info
│   ├── Skills.tsx           # Technical skills with progress bars
│   ├── Projects.tsx         # Project showcase with categories
│   ├── Contact.tsx          # Contact form and information
│   └── Footer.tsx           # Footer with social links
```

## 🎨 Design Features

- **Heritage Card Design**: Elegant cards with gradient backgrounds and subtle shadows
- **Gradient Text**: Beautiful gradient text effects for headings
- **Glass Morphism**: Modern glass effects for UI elements
- **Custom Scrollbar**: Styled scrollbar matching the theme
- **Smooth Transitions**: Consistent transition timing throughout

## 🛠️ Getting Started

### Prerequisites

Make sure you have Node.js installed on your system:
- Node.js 18.17 or later
- npm, yarn, pnpm, or bun

### Installation

1. **Install Node.js**: Download and install from [nodejs.org](https://nodejs.org/)

2. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**: Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎯 Sections

1. **Hero**: Introduction with animated Three.js cube
2. **About**: Personal information and expertise areas
3. **Skills**: Technical skills with animated progress bars
4. **Projects**: Featured and additional projects showcase
5. **Contact**: Contact form and social links
6. **Footer**: Quick links and additional information

## 🎨 Customization

### Colors
The color scheme is defined in `tailwind.config.ts`. Main colors:
- Primary Blue: #3b82f6
- Background: #0a0a0a
- Cards: Linear gradients with dark tones

### Fonts
- Primary: Inter (Google Fonts)
- Monospace: Space Mono (Google Fonts)

### Animations
- **Framer Motion**: Component-level animations and page transitions
- **GSAP**: Advanced scroll-triggered animations and timelines
- **Three.js**: 3D rotating cube animation

## 📱 Responsive Design

- **Mobile First**: Designed with mobile-first approach
- **Breakpoints**: 
  - sm: 640px
  - md: 768px
  - lg: 1024px
  - xl: 1280px

## 🚀 Deployment

The project is optimized for deployment on:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **GitHub Pages** (with static export)

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with one click

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](../../issues).

## 📧 Contact

**Moiz Haider**
- Email: moiz.haider@example.com
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)
- GitHub: [Your GitHub](https://github.com/yourusername)

---

Built with ❤️ using Next.js and modern web technologies.
