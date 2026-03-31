// Highlight active link
const links = document.querySelectorAll('.sidebar a');
links.forEach(link => {
  if(link.href === window.location.href) link.classList.add('active');
});

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});