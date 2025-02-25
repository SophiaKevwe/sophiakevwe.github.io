document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for navigation links
    const links = document.querySelectorAll('nav ul li a');
    const header = document.querySelector('header');
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            // Adjust the scroll position based on the header height
            const headerHeight = header.offsetHeight; // Dynamically get header height
            const targetPosition = targetElement.offsetTop - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        });
    });

    // Scroll event listener for header transparency
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('transparent');
        } else {
            header.classList.remove('transparent');
        }
    });

    // Skill-based project filtering
    const skillSelect = document.getElementById('skill-select');
    const projects = document.querySelectorAll('.project');
    skillSelect.addEventListener('change', () => {
        const selectedSkill = skillSelect.value;

        projects.forEach(project => {
            const projectSkills = project.dataset.skills.split(' '); // Extract skills from data-skills attribute

            if (selectedSkill === 'all' || projectSkills.includes(selectedSkill)) {
                project.classList.remove('hidden'); // Show matching projects
            } else {
                project.classList.add('hidden'); // Hide non-matching projects
            }
        });
    });
});
