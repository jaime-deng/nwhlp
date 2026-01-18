document.addEventListener('DOMContentLoaded', () => {
    // Reveal animations on scroll
    const sections = document.querySelectorAll('.section-container');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Glitch Text Effect (Random characters)
    const glitchElement = document.querySelector('.glitch');
    if (glitchElement) {
        const originalText = glitchElement.getAttribute('data-text');
        const possibleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';

        glitchElement.addEventListener('mouseover', () => {
            let iteration = 0;
            const interval = setInterval(() => {
                glitchElement.innerText = originalText
                    .split('')
                    .map((letter, index) => {
                        if (index < iteration) {
                            return originalText[index];
                        }
                        return possibleChars[Math.floor(Math.random() * 46)];
                    })
                    .join('');

                if (iteration >= originalText.length) {
                    clearInterval(interval);
                }

                iteration += 1 / 3;
            }, 30);
        });
    }

    // Dynamic Background Canvas
    const canvasContainer = document.getElementById('hero-canvas-container');
    if (canvasContainer) {
        // Implementation of a simple node-network background
        // For now, leaving this placeholder or implementing a very lightweight three.js or canvas sketch
        // We will keep it simple for pure vanilla JS
    }
    // Theme Toggle Logic
    const themeToggleBtn = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;

    // Check for saved user preference, if any, on load of the website
    const currentTheme = localStorage.getItem('theme');

    // If the user has a saved preference, apply it
    if (currentTheme) {
        htmlElement.setAttribute('data-theme', currentTheme);
        updateButtonText(currentTheme);
    }

    // Function to update button text
    function updateButtonText(theme) {
        if (theme === 'light') {
            themeToggleBtn.innerText = '[ DARK MODE ]';
        } else {
            themeToggleBtn.innerText = '[ LIGHT MODE ]';
        }
    }

    // Add event listener to the theme toggle button
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            let theme = htmlElement.getAttribute('data-theme');

            if (theme === 'light') {
                htmlElement.removeAttribute('data-theme');
                localStorage.setItem('theme', 'dark');
                updateButtonText('dark');
            } else {
                htmlElement.setAttribute('data-theme', 'light');
                localStorage.setItem('theme', 'light');
                updateButtonText('light');
            }
        });
    }
});
