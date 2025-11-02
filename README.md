# Portfolio with Dynamic Resume Integration

This portfolio now supports dynamic loading of resume data from a JSON file. Here's how to integrate your resume:

## How to Add Your Resume JSON

### Option 1: Replace the existing data in `resume-data.js`
1. Open `resume-data.js`
2. Replace the `resumeData` object with your actual resume JSON data
3. Make sure your JSON follows this structure:

```javascript
const resumeData = {
    personal: {
        name: "Your Name",
        title: "Your Title",
        email: "your.email@example.com",
        location: "Your Location",
        summary: "Your professional summary",
        avatar: "path/to/your/avatar.jpg"
    },
    skills: {
        technical: ["Skill1", "Skill2", "Skill3"],
        cybersecurity: ["Security Skill1", "Security Skill2"]
    },
    education: [
        {
            institution: "University Name",
            degree: "Degree Name",
            years: "2020-2024",
            description: "Description"
        }
    ],
    projects: [
        {
            title: "Project Title",
            description: "Project description",
            technologies: ["Tech1", "Tech2"],
            liveUrl: "https://project-url.com",
            codeUrl: "https://github.com/project",
            image: "path/to/image.jpg" // optional
        }
    ],
    experience: [
        {
            role: "Job Title",
            company: "Company Name",
            period: "2020-Present",
            description: "Job description",
            achievements: ["Achievement 1", "Achievement 2"]
        }
    ],
    social: {
        github: "https://github.com/yourusername",
        linkedin: "https://linkedin.com/in/yourusername",
        twitter: "https://twitter.com/yourusername"
    }
};
```

### Option 2: Load from external JSON file
1. Create a `resume.json` file in your project root
2. Add your resume data in JSON format
3. Modify `main.js` to fetch the JSON file:

```javascript
// Add this to main.js before the populateResume function
fetch('resume.json')
    .then(response => response.json())
    .then(data => {
        window.resumeData = data;
        populateResume();
    })
    .catch(error => {
        console.error('Error loading resume data:', error);
        // Fallback to default data
        populateResume();
    });
```

## Features

- **Dynamic Content**: All content is loaded from the resume data
- **Easy Updates**: Change your resume data in one place
- **Responsive Design**: Works on all devices
- **Modern UI**: Beautiful 3D background with interactive elements

## File Structure

```
my portfolio/
├── index.html          # Main HTML file
├── main.js            # JavaScript functionality
├── resume-data.js     # Resume data (replace with your data)
├── styles.css         # Styling
├── assets/            # Images and media
└── README.md          # This file
```

## Customization

- Update colors in `styles.css`
- Modify animations in `main.js`
- Add new sections by extending the `resumeData` structure
- Change the 3D background effects

## Browser Support

- Modern browsers with WebGL support
- Graceful fallback for older browsers
- Mobile-responsive design

## Getting Started

1. Replace the data in `resume-data.js` with your actual resume information
2. Update images in the `assets/` folder
3. Test locally by opening `index.html` in a browser
4. Deploy to your hosting service

The portfolio will automatically populate all sections with your resume data!

