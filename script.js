document.querySelectorAll('nav a').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Active section highlighting
        window.addEventListener('scroll', function() {
            const sections = document.querySelectorAll('section');
            const navLinks = document.querySelectorAll('nav a');
            
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (pageYOffset >= (sectionTop - 300)) {
                    current = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });

function animateSkillBars() {
    document.querySelectorAll('.skill-level').forEach(bar => {
        const level = bar.getAttribute('data-level');
        bar.style.width = level; // Sets width to the percentage (e.g., "90%")
    });
}

window.addEventListener('scroll', () => {
    const aboutSection = document.getElementById('about');
    const rect = aboutSection.getBoundingClientRect();
    
    if (rect.top < window.innerHeight - 100) {
        animateSkillBars();
    }
});

const ctx = document.getElementById('skillsRadar').getContext('2d');
const skillsChart = new Chart(ctx, {
    type: 'radar',
    data: {
        labels: ['First Aid', 'Public Speaking', 'Leadership', 'Research', 'Teaching'],
        datasets: [{
            label: 'Skill Level',
            data: [90, 85, 75, 80, 70],
            backgroundColor: 'rgba(52, 152, 219, 0.2)',
            borderColor: 'rgba(52, 152, 219, 1)',
            pointBackgroundColor: 'rgba(52, 152, 219, 1)'
        }]
    },
    options: {
        scales: {
            r: {
                angleLines: { display: true },
                suggestedMin: 0,
                suggestedMax: 100
            }
        }
    }
});

window.addEventListener('scroll', () => {
    document.querySelectorAll('.certificate-card, .project').forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }
    });
});

document.querySelectorAll('.project').forEach(project => {
    project.addEventListener('click', () => {
        // Show modal with more details
    });
});

window.addEventListener('scroll', () => {
    document.querySelectorAll('.timeline-item, .card').forEach(el => {
        if (isElementInViewport(el)) {
            el.classList.add('animate');
        }
    });
});