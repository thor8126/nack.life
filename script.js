

  // Get a reference to your navbar element
const navbar = document.getElementById('nav');

// Function to handle the scroll event
function handleScroll() {
  // Get the current scroll position
  const scrollPosition = window.scrollY || window.pageYOffset;

  // Check if the scroll position is greater than or equal to 4 rems (adjust as needed)
  if (scrollPosition >= 4 * parseFloat(getComputedStyle(document.documentElement).fontSize)) {
    // Add the CSS class for the scrolled state
    navbar.classList.add('navbar-scrolled');
  } else {
    // Remove the CSS class if not scrolled far enough
    navbar.classList.remove('navbar-scrolled');
  }
}

// Attach the handleScroll function to the scroll event
window.addEventListener('scroll', handleScroll);

  