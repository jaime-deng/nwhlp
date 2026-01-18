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
                        if(index < iteration) {
                            return originalText[index];
                        }
                        return possibleChars[Math.floor(Math.random() * 46)];
                    })
                    .join('');
                
                if(iteration >= originalText.length){ 
                    clearInterval(interval);
                }
                
                iteration += 1/3;
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
});
