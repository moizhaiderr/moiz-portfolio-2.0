<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# Moiz Portfolio 2.0 - Development Guidelines

## Project Overview
This is a modern Next.js portfolio website built with:
- Next.js 15 with App Router and TypeScript
- Tailwind CSS for styling with custom heritage theme
- Framer Motion for smooth animations and page transitions
- GSAP with ScrollTrigger for advanced scroll-based animations
- Three.js for 3D rotating cube in the hero section
- Lucide React for consistent icons

## Code Style Guidelines

### TypeScript
- Use TypeScript for all components and utilities
- Prefer interfaces over types for object definitions
- Use proper typing for props and state

### React/Next.js
- Use "use client" directive for components that need client-side features
- Prefer function components with hooks
- Use proper Next.js App Router conventions
- Implement proper error boundaries and loading states

### Styling
- Use Tailwind CSS utility classes
- Follow the heritage theme color scheme (dark with blue accents)
- Use custom CSS classes defined in globals.css:
  - `.heritage-card` for consistent card styling
  - `.heritage-glow` for hover effects
  - `.gradient-text` for gradient text effects
  - `.glass` for glass morphism effects

### Animations
- Use Framer Motion for component animations and page transitions
- Use GSAP with ScrollTrigger for scroll-based animations
- Keep animations subtle and performance-focused
- Use proper animation cleanup in useEffect

### Component Structure
- Keep components focused and single-responsibility
- Use proper prop types and default values
- Implement proper accessibility features (ARIA labels, semantic HTML)
- Follow the established naming conventions

## File Organization
- Components in `/src/components/`
- Styles in `/src/app/globals.css`
- Main page in `/src/app/page.tsx`
- Configuration files in root directory

## Performance Considerations
- Use dynamic imports for heavy libraries
- Implement proper image optimization
- Use proper loading states
- Minimize JavaScript bundle size

## Accessibility
- Use semantic HTML elements
- Implement proper ARIA labels
- Ensure keyboard navigation works
- Maintain proper color contrast ratios

## Animation Best Practices
- Use `viewport={{ once: true }}` for scroll animations to improve performance
- Implement proper cleanup for Three.js and GSAP animations
- Use appropriate easing functions for smooth motion
- Consider reduced motion preferences
