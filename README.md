# CyberTech Services Page

A high-performance, responsive Services page for a Cybersecurity firm built with React, Tailwind CSS, and Lucide-React icons.

## Features

- 🎨 Modern, professional dark theme with corporate blue color palette (#0a192f)
- 📱 Fully responsive grid-based layout (1 column mobile, 2 tablet, 3 desktop)
- 🔝 Sticky navbar with top-bar for contact details
- 🎯 Hero section with breadcrumbs and gradient overlay
- 💳 Service cards with smooth hover effects (elevation & border-color changes)
- ♻️ Reusable, modular components
- 🚀 Optimized for performance
- 🎭 Lucide-React icons throughout

## Project Structure

```
Demo Site/
├── src/
│   ├── components/
│   │   ├── TopBar.jsx       # Contact info bar
│   │   ├── Navbar.jsx       # Sticky navigation
│   │   ├── Hero.jsx         # Hero section with breadcrumbs
│   │   ├── ServiceCard.jsx  # Reusable service card component
│   │   └── Footer.jsx       # 4-column footer
│   ├── App.jsx              # Main application component
│   ├── main.jsx             # React entry point
│   └── index.css            # Tailwind & global styles
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Installation & Setup

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Services Included

- **VAPT** - Vulnerability Assessment & Penetration Testing
- **Penetration Testing** - Advanced security testing
- **Security Audits** - Comprehensive security validation
- **Computer Forensics** - Digital evidence investigation
- **Incident Response** - 24/7 security incident handling
- **Ethical Hacking** - Professional red team services

## Technologies Used

- React 18
- Tailwind CSS 3
- Vite
- Lucide-React Icons

## Color Palette

- Primary: `#0a192f`
- Primary Light: `#112240`
- Accent: `#64ffda`
- Text Secondary: `#8892b0`

## Customization

To customize the services, edit the `servicesData` array in [src/App.jsx](src/App.jsx).
To change colors, modify the theme in [tailwind.config.js](tailwind.config.js).

---

Built with ❤️ using React and Tailwind CSS
