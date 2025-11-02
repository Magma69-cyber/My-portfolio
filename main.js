// Resume Data Loading and Population
(() => {
    // Load resume data and populate the page
    const populateResume = () => {
        // Personal Information
        const nameElements = document.querySelectorAll('.brand, .title .accent, h1 .accent');
        nameElements.forEach(el => {
            if (el.textContent.includes('Trupti Ranjan Singh')) {
                el.textContent = resumeData.personal.name;
            }
        });

        // Update hero section
        const subtitle = document.querySelector('.subtitle');
        if (subtitle) {
            subtitle.textContent = resumeData.personal.title;
        }

        // Update avatar
        const avatar = document.querySelector('.avatar');
        if (avatar && resumeData.personal.avatar) {
            avatar.src = resumeData.personal.avatar;
        }

        // Populate skills
        const skillsContainer = document.querySelector('#skills-list');
        if (skillsContainer) {
            skillsContainer.innerHTML = '';
            const allSkills = [...resumeData.skills.technical, ...resumeData.skills.cybersecurity];
            allSkills.forEach(skill => {
                const li = document.createElement('li');
                li.textContent = skill;
                skillsContainer.appendChild(li);
            });
        }

        // Populate education
        const educationContainer = document.querySelector('#education-list');
        if (educationContainer) {
            educationContainer.innerHTML = '';
            resumeData.education.forEach(edu => {
                const li = document.createElement('li');
                li.className = 'edu-item tilt';
                li.innerHTML = `
                    <div class="edu-content">
                        <div class="edu-image-wrapper">
                            <img src="${edu.image || ''}" alt="${edu.institution}" class="edu-image" onerror="this.style.display='none'">
                        </div>
                        <div class="edu-text">
                            <div class="edu-header">
                                <span class="edu-institution">${edu.institution}</span>
                                <span class="edu-years">${edu.years}</span>
                            </div>
                            <div class="edu-meta">${edu.degree}</div>
                        </div>
                    </div>
                `;
                educationContainer.appendChild(li);
            });
        }

        // Populate projects
        const projectsContainer = document.querySelector('#projects-list');
        if (projectsContainer) {
            projectsContainer.innerHTML = '';
            resumeData.projects.forEach(project => {
                const article = document.createElement('article');
                article.className = 'project-card tilt';
                article.innerHTML = `
                    <div class="project-media" ${project.image ? `style="background-image: url('${project.image}'); background-size: cover; background-position: center;"` : ''}></div>
                    <div class="project-content">
                        <h3>${project.title}</h3>
                        <p>${project.description}</p>
                        <div class="chip-row">
                            ${project.technologies.map(tech => `<span class="chip">${tech}</span>`).join('')}
                        </div>
                        <div class="actions">
                            <a href="${project.liveUrl}" class="text-link" target="_blank" rel="noopener noreferrer">Live</a>
                            <a href="${project.codeUrl}" class="text-link" target="_blank" rel="noopener noreferrer">Code</a>
                        </div>
                    </div>
                `;
                projectsContainer.appendChild(article);
            });
        }

        // Update contact form email
        const emailInput = document.querySelector('#email');
        if (emailInput) {
            emailInput.placeholder = resumeData.personal.email;
        }

        const emailLink = document.querySelector('a[href^="mailto:"]');
        if (emailLink) {
            emailLink.href = `mailto:${resumeData.personal.email}`;
            emailLink.textContent = resumeData.personal.email;
        }

        // Update social links
        const socialLinks = document.querySelectorAll('.socials a');
        socialLinks.forEach(link => {
            if (link.textContent === 'GitHub') {
                link.href = resumeData.social.github;
            } else if (link.textContent === 'LinkedIn') {
                link.href = resumeData.social.linkedin;
            } else if (link.textContent === 'Twitter') {
                link.href = resumeData.social.twitter;
            }
        });

        // Update footer
        const footerName = document.querySelector('.site-footer p');
        if (footerName) {
            footerName.innerHTML = `© <span id="year"></span> ${resumeData.personal.name}. All rights reserved.`;
        }
    };

    // Wait for DOM to be ready and resume data to be loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', populateResume);
    } else {
        populateResume();
    }
})();

// Utilities
const qs = (s) => document.querySelector(s);
const clamp = (v, min, max) => Math.min(Math.max(v, min), max);

// Theme toggle and year
(() => {
    const root = document.documentElement;
    const toggle = qs('#theme-toggle');
    const stored = localStorage.getItem('theme');
    if (stored === 'light') root.classList.add('light');
    toggle?.addEventListener('click', () => {
        const isLight = root.classList.toggle('light');
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
    });
    const yearEl = qs('#year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
})();

// Smooth scroll for internal links
(() => {
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (!href || href.length <= 1) return;
            const target = document.getElementById(href.slice(1));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
})();

// Parallax header based on scroll
(() => {
    const header = document.querySelector('.site-header');
    if (!header) return;
    let last = 0;
    const onScroll = () => {
        const y = window.scrollY || window.pageYOffset;
        const opacity = clamp(y / 200, 0, 1);
        header.style.background = `linear-gradient(to bottom, rgba(11,11,16,${0.9 * (1 - opacity)}), rgba(11,11,16,${0.3 + 0.5 * opacity}))`;
        last = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
})();

// Tiny tilt effect for cards
(() => {
    const cards = document.querySelectorAll('.tilt');
    cards.forEach((el) => {
        const dampen = 24;
        el.addEventListener('mousemove', (e) => {
            const rect = el.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width;
            const y = (e.clientY - rect.top) / rect.height;
            const rx = (0.5 - y) * dampen;
            const ry = (x - 0.5) * dampen;
            el.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-3px)`;
        });
        el.addEventListener('mouseleave', () => {
            el.style.transform = '';
        });
    });
})();

// Three.js background: floating particles + subtle camera motion
(() => {
    const canvas = qs('#bg-canvas');
    if (!canvas || !window.THREE) {
        // Graceful fallback: subtle static background if WebGL/Three not available
        document.body.style.backgroundAttachment = 'fixed';
        return;
    }
    const { Scene, PerspectiveCamera, WebGLRenderer, BufferGeometry, Float32BufferAttribute, PointsMaterial, Points, Color, AdditiveBlending, Raycaster, Vector2, Clock, FogExp2 } = THREE;

    const scene = new Scene();
    scene.fog = new FogExp2(0x0b0b10, 0.035);

    const camera = new PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 0, 42);

    const renderer = new WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Particles geometry
    const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const cores = navigator.hardwareConcurrency || 4;
    const baseCount = window.innerWidth < 768 ? 900 : 1800;
    const densityFactor = Math.min(Math.max((cores - 2) / 8, 0.5), 1);
    const particles = Math.floor(baseCount * densityFactor * (prefersReducedMotion ? 0.5 : 1));
    const positions = new Float32Array(particles * 3);
    const scales = new Float32Array(particles);
    for (let i = 0; i < particles; i++) {
        positions[i * 3 + 0] = (Math.random() - 0.5) * 160;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 160;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 160;
        scales[i] = Math.random() * 1.6 + 0.2;
    }
    const geometry = new BufferGeometry();
    geometry.setAttribute('position', new Float32BufferAttribute(positions, 3));

    const material = new PointsMaterial({
        size: 0.12,
        color: new Color('#7c5cff'),
        transparent: true,
        opacity: 0.85,
        blending: AdditiveBlending,
        depthWrite: false,
        sizeAttenuation: true
    });

    const pointCloud = new Points(geometry, material);
    scene.add(pointCloud);

    // Interaction
    const mouse = new Vector2(0, 0);
    window.addEventListener('mousemove', (e) => {
        mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    }, { passive: true });

    // Animation
    const clock = new Clock();
    const animate = () => {
        const t = clock.getElapsedTime();
        const speedScale = prefersReducedMotion ? 0.4 : 1;
        pointCloud.rotation.y = t * 0.02 * speedScale;
        pointCloud.rotation.x = Math.sin(t * 0.3 * speedScale) * 0.05 * speedScale;

        const targetX = mouse.x * 0.6;
        const targetY = mouse.y * 0.4;
        camera.position.x += (targetX - camera.position.x) * 0.03 * speedScale;
        camera.position.y += (targetY - camera.position.y) * 0.03 * speedScale;
        camera.lookAt(0, 0, 0);

        renderer.render(scene, camera);
        requestAnimationFrame(animate);
    };
    animate();

    // Resize
    const onResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onResize);
})();


