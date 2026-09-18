/* milenaabogada.com — interacciones mínimas, sin dependencias. */
(function () {
  'use strict';

  /* --- Menú móvil --- */
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('nav');

  if (toggle && nav) {
    var setOpen = function (open) {
      nav.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    };

    toggle.addEventListener('click', function () {
      setOpen(toggle.getAttribute('aria-expanded') !== 'true');
    });

    // Cerrar al elegir un destino
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) setOpen(false);
    });

    // Cerrar con Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) {
        setOpen(false);
        toggle.focus();
      }
    });

    // Al pasar a escritorio el menú vuelve a su estado normal
    var desktop = window.matchMedia('(min-width: 1024px)');
    var sync = function () { if (desktop.matches) setOpen(false); };
    desktop.addEventListener ? desktop.addEventListener('change', sync) : desktop.addListener(sync);
  }

  /* --- Año del pie de página --- */
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
