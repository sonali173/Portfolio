const typed = new Typed('.multiple-text', {
  strings: ['Fronted web development', 'SEO', 'HTML', 'CSS', 'JavaScript', 'Testing'],
  typeSpeed: 80,
  backSpeed: 80,
  backDelay: 1200,
  loop: true,
});

const menuT = document.querySelector('#menu-icon');
const navLink = document.querySelector('.navbar');

menuT.addEventListener('click', () => {

  menuT.classList.toggle('active');
  navLink.classList.toggle('active');
});


