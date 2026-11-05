document.getElementById('yr').textContent = new Date().getFullYear();
var t = document.querySelector('.nav-toggle'), l = document.querySelector('.nav-links');
t.addEventListener('click', function () { var o = l.classList.toggle('open'); t.setAttribute('aria-expanded', o); });
var io = 'IntersectionObserver' in window ? new IntersectionObserver(function (es) {
  es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: 0.12 }) : null;
document.querySelectorAll('.reveal').forEach(function (el) { io ? io.observe(el) : el.classList.add('in'); });
