const toggleBtn = document.getElementById('mode-toggle');
const body = document.body;
const icon = toggleBtn.querySelector('i');
const logo = document.getElementById('animated-image'); // Reference to logo element

// Check if dark mode is already set in localStorage
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    body.classList.remove('light-mode');
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');  // Update the icon to sun for dark mode
    if (logo) {
        logo.src = 'logo-dark.png';  // Change logo for dark mode
    }
} else {
    body.classList.add('light-mode');
    body.classList.remove('dark-mode');
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon'); // Set the icon to moon for light mode
    if (logo) {
        logo.src = 'logo.png';  // Change logo for light mode
    }
}

// Toggle Dark Mode and Light Mode
toggleBtn.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        if (logo) {
            logo.src = 'logo.png';  // Change logo to light mode
        }
        localStorage.setItem('theme', 'light');  // Save light mode in localStorage
    } else {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        if (logo) {
            logo.src = 'logo-dark.png';  // Change logo to dark mode
        }
        localStorage.setItem('theme', 'dark');   // Save dark mode in localStorage
    }
});
