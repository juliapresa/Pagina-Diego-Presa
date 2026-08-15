document.addEventListener('click', function (e) {
  const btn = e.target.closest('.news__toggle');
  if (!btn) return;

  const wrap = btn.closest('.news__text-wrap');
  const expanded = wrap.classList.toggle('is-expanded');

  btn.textContent = expanded ? 'Ver menos' : 'Ver más';
  btn.setAttribute('aria-expanded', expanded);
});