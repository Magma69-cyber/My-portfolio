// Resume Data Structure
// Replace this data with your actual resume JSON content
const resumeData = {
    personal: {
        name: "Trupti Ranjan Singh",
        title: "Aspiring Cybersecurity Professional",
        email: "truptiranjansingh450@gmail.com",
        location: "India",
        summary: "Currently engaged as a CTF Player with TryHackMe, I'm immersed in honing my ethical hacking skills. This role allows me to apply my cybersecurity knowledge from Sri Sri University's B.Tech program in real-world scenarios. My expertise in red teaming, combined with a passion for cyber defense, uniquely positions me to tackle complex security challenges.",
        avatar: "assets/profile.jpg.jpeg"
    },
    skills: {
        technical: [
            "JavaScript", "TypeScript", "React", "Node.js", "Three.js", "CSS",
            "Python", "Java", "C/C++", "PHP", "HTML", "SQL"
        ],
        cybersecurity: [
            "Ethical Hacking", "Cybersecurity", "Vulnerability Assessment", 
            "Bug Bounty", "Networking", "UI/UX"
        ]
    },
    education: [
        {
            institution: "Sri Sri University",
            degree: "B.Tech CSE in Cyber Security",
            years: "2024–2028",
            description: "Bachelor's degree in Computer Science with focus on Cybersecurity",
            image: "assets/srisriuniversity.webp"
        },
        {
            institution: "Aakash Institute",
            degree: "NEET Preparation",
            years: "2022–2024",
            description: "NEET preparation during 11th and 12th",
            image: "assets/aakash.webp"
        },
        {
            institution: "DAV PUBLIC SCHOOL",
            degree: "Secondary Education",
            years: "2010–2022",
            description: "Complete secondary education",
            image: "assets/davomc.webp"
        }
    ],
    projects: [
        {
            title: "Face Detection",
            description: "Implementations of face detection algorithms in C and Python. Utilizing OpenCV to detect faces in images and videos.",
            technologies: ["Python", "C", "OpenCV"],
            liveUrl: "https://github.com/Magma69-cyber/face-detection",
            codeUrl: "https://github.com/Magma69-cyber/face-detection/blob/main/face%20detection.py",
            image: "assets/face.webp"
        },
        {
            title: "Password Strength Checker and Generator",
            description: "This password tool checks strength, gives expert tips, and generates ultra-strong passwords with a mix of characters, digits, and symbols. With secure input and smart validation, it's your go-to for safer logins and peace of mind—all in a clean, user-friendly package.",
            technologies: ["Python", "C", "Security"],
            liveUrl: "https://github.com/Magma69-cyber/password-strength-checker",
            codeUrl: "https://github.com/Magma69-cyber/password-strength-checker/blob/main/password%20strength%20checker%20and%20generator.py",
            image: "assets/password-tool.png.png"
        },
        {
            title: "Keylogger",
            description: "A cybersecurity tool designed for educational and ethical purposes. This keylogger demonstrates understanding of system-level programming and security concepts while emphasizing responsible use in authorized testing environments.",
            technologies: ["Python", "C", "Cybersecurity", "System Programming"],
            liveUrl: "https://github.com/Magma69-cyber/keylogger/blob/main/keylogger.py",
            codeUrl: "https://github.com/Magma69-cyber/keylogger/blob/main/keylogger.py",
            image: "assets/keylogger.png"
        }
    ],
    experience: [
        {
            role: "CTF Player",
            company: "TryHackMe",
            period: "Current",
            description: "Engaged in ethical hacking challenges and cybersecurity training through CTF (Capture The Flag) exercises.",
            achievements: [
                "Applied cybersecurity knowledge in real-world scenarios",
                "Enhanced red teaming skills through practical challenges",
                "Contributed to cybersecurity community development"
            ]
        }
    ],
    social: {
        github: "https://github.com/Magma69-cyber",
        linkedin: "https://www.linkedin.com/in/trupti-ranjan-singh-ba1384311/",
        twitter: "#"
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = resumeData;
}
