const navLinks = document.querySelectorAll('.nav-link');
const contentSections = document.querySelectorAll('.content-section');

for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', function (e) {
        e.preventDefault();

        // Remove the active class from all content sections
        for (let j = 0; j < contentSections.length; j++) {
            contentSections[j].classList.remove('active');
        }

        // Add the active class to the selected content section
        const targetId = this.getAttribute('data-target');
        const targetSection = document.getElementById(targetId);
        targetSection.classList.add('active');
    });
}
