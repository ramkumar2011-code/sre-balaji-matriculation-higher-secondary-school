function toggleNav() {
  document.getElementById('navLinks').classList.toggle('open');
}
function closeNav() {
  document.getElementById('navLinks').classList.remove('open');
}

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('navLinks').classList.remove('open');
  });
});
