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

    // Typewriter Effect
    const typewriterElement = document.querySelector('.typewriter-text');
    if (typewriterElement) {
        const textLines = [
            "SMART VIDEO",
            "SURVEILLANCE"
        ];

        let lineIndex = 0;
        let charIndex = 0;
        let isTyping = true;

        // Initial set to min-height to prevent layout jump
        typewriterElement.style.minHeight = '1.1em';

        function typeWriter() {
            if (lineIndex < textLines.length) {
                const currentLine = textLines[lineIndex];

                if (charIndex < currentLine.length) {
                    if (charIndex === 0 && lineIndex > 0) {
                        typewriterElement.innerHTML += '<br>';
                    }
                    typewriterElement.innerHTML += currentLine.charAt(charIndex);
                    charIndex++;
                    setTimeout(typeWriter, 40); // Typing speed
                } else {
                    lineIndex++;
                    charIndex = 0;
                    setTimeout(typeWriter, 100); // Pause before next line
                }
            } else {
                // Done typing, add blinking cursor
                typewriterElement.classList.add('typing-done');
            }
        }

        // Start typing after a short delay
        setTimeout(typeWriter, 500);
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
