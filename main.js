(function () {
  var t = document.getElementById('mob-toggle'), d = document.getElementById('mob-drawer'),
      o = document.getElementById('mob-overlay'), c = document.getElementById('drawer-close');
  function setOpen(v) {
    if (!d) return;
    d.classList.toggle('open', v);
    if (o) o.classList.toggle('visible', v);
    if (t) t.setAttribute('aria-expanded', v ? 'true' : 'false');
    if (v && c) c.focus(); else if (!v && t) t.focus();
  }
  if (t) t.addEventListener('click', function () { setOpen(!d.classList.contains('open')); });
  if (c) c.addEventListener('click', function () { setOpen(false); });
  if (o) o.addEventListener('click', function () { setOpen(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setOpen(false); });
  document.querySelectorAll('.faq-q').forEach(function (b) {
    b.addEventListener('click', function () {
      var it = b.parentNode, open = it.classList.toggle('open');
      b.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  });
  document.querySelectorAll('.has-drop > a').forEach(function (a) {
    a.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { a.blur(); }
    });
  });
})();
