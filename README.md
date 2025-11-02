# 🚀 3D Portfolio Website

A modern, interactive 3D portfolio website built with vanilla JavaScript and Three.js. Features a beautiful animated background, smooth transitions, and a fully responsive design that showcases your skills, projects, and education.

![Portfolio Preview](https://img.shields.io/badge/Portfolio-3D%20Experience-7c5cff?style=for-the-badge)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?style=for-the-badge&logo=javascript)
![Three.js](https://img.shields.io/badge/Three.js-3D-black?style=for-the-badge&logo=three.js)

## ✨ Features

- **🎨 3D Interactive Background** - Animated particle system powered by Three.js with mouse interaction
- **🌓 Dark/Light Theme** - Toggle between themes with persistent storage
- **📱 Fully Responsive** - Works seamlessly on desktop, tablet, and mobile devices
- **⚡ Smooth Animations** - Parallax effects, tilt interactions, and smooth scrolling
- **🎯 Dynamic Content** - All content loaded from `resume-data.js` for easy updates
- **🔍 SEO Optimized** - Proper meta tags and semantic HTML
- **♿ Accessible** - ARIA labels and keyboard navigation support
- **📧 Contact Form** - Direct email integration

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS variables and Grid/Flexbox
- **JavaScript (ES6+)** - Vanilla JavaScript with no dependencies
- **Three.js** - 3D graphics and particle system
- **WebGL** - Hardware-accelerated rendering

## 📁 Project Structure

```
my-portfolio/
├── index.html              # Main HTML structure
├── main.js                 # JavaScript functionality & animations
├── styles.css              # All styling and themes
├── assets/
│   ├── resume-data.js      # Resume/portfolio data (JSON)
│   ├── profile.jpg.jpeg     # Profile picture
│   ├── face.webp           # Project images
│   ├── password-tool.png.png
│   ├── keylogger.png
│   ├── srisriuniversity.webp
│   ├── aakash.webp
│   ├── davomc.webp
│   └── TruptiRanjanSinghResume4.pdf
└── README.md               # This file
```

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional, for development)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Magma69-cyber/my-portfolio.git
   cd my-portfolio
   ```

2. **Customize the content**
   - Open `assets/resume-data.js`
   - Replace all placeholder data with your information:
     - Personal information
     - Skills
     - Education
     - Projects
     - Experience
     - Social links

3. **Update assets**
   - Replace `assets/profile.jpg.jpeg` with your profile picture
   - Add project images to the `assets/` folder
   - Update image paths in `resume-data.js`

4. **Local development**
   - Simply open `index.html` in a browser, or
   - Use a local server:
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js (http-server)
     npx http-server
     
     # Using PHP
     php -S localhost:8000
     ```
   - Visit `http://localhost:8000` in your browser

## 🎨 Customization

### Colors & Theme

Edit CSS variables in `styles.css`:

```css
:root {
    --bg: #0b0b10;              /* Background color */
    --bg-alt: #0e0e15;          /* Alt background */
    --text: #e8eaf0;            /* Text color */
    --muted: #9aa1af;           /* Muted text */
    --accent: #7c5cff;          /* Accent color */
    --card: #13131b;            /* Card background */
    --border: #222233;          /* Border color */
}
```

### Adding Sections

1. Add new section HTML in `index.html`
2. Add corresponding data structure in `resume-data.js`
3. Update `main.js` to populate the new section

### Modifying Animations

- **3D Background**: Edit particle settings in `main.js` (line ~186)
- **Tilt Effect**: Adjust `dampen` value in `main.js` (line ~171)
- **Parallax**: Modify scroll handler in `main.js` (line ~153)

## 📝 Data Structure

The portfolio uses a structured data format in `resume-data.js`:

```javascript
const resumeData = {
    personal: {
        name: "Your Name",
        title: "Your Title",
        email: "your.email@example.com",
        location: "Your Location",
        summary: "Your professional summary",
        avatar: "assets/profile.jpg.jpeg"
    },
    skills: {
        technical: ["JavaScript", "Python", ...],
        cybersecurity: ["Ethical Hacking", ...]
    },
    education: [
        {
            institution: "University Name",
            degree: "Degree Name",
            years: "2020-2024",
            description: "Description",
            image: "assets/university.webp"  // Optional
        }
    ],
    projects: [
        {
            title: "Project Title",
            description: "Project description",
            technologies: ["Tech1", "Tech2"],
            liveUrl: "https://project-url.com",
            codeUrl: "https://github.com/project",
            image: "assets/project.webp"  // Optional
        }
    ],
    experience: [...],
    social: {
        github: "https://github.com/username",
        linkedin: "https://linkedin.com/in/username",
        twitter: "https://twitter.com/username"
    }
};
```

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

**Note**: WebGL support required for 3D background. Falls back gracefully on older browsers.

## 📸 Screenshots

_Add screenshots of your portfolio here_

## 🔗 Live Demo

[Visit the live portfolio](https://yourusername.github.io/my-portfolio) _(Update with your actual deployment URL)_

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Trupti Ranjan Singh**

- GitHub: [@Magma69-cyber](https://github.com/Magma69-cyber)
- LinkedIn: [Trupti Ranjan Singh](https://www.linkedin.com/in/trupti-ranjan-singh-ba1384311/)
- Email: truptiranjansingh450@gmail.com

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/Magma69-cyber/my-portfolio/issues).

## ⭐ Show Your Support

If you like this project, please give it a ⭐ on GitHub!

## 🙏 Acknowledgments

- [Three.js](https://threejs.org/) for the amazing 3D library
- [Inter Font](https://fonts.google.com/specimen/Inter) by Google Fonts
- Inspiration from modern portfolio designs

---

**Made with ❤️ by Trupti Ranjan Singh**
