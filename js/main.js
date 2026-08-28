document.addEventListener('DOMContentLoaded', function () {

  /* ---------- Menú hamburguesa (mobile) ---------- */
  var hamburger = document.getElementById('hamburger');
  var nav = document.getElementById('nav');

  if (hamburger && nav) {
    hamburger.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('open');
      hamburger.classList.toggle('active', isOpen);
      hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- Header con estilo al hacer scroll ---------- */
  var header = document.getElementById('header');

  function updateHeaderOnScroll() {
    if (!header) return;
    if (window.scrollY > 10) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  updateHeaderOnScroll();
  window.addEventListener('scroll', updateHeaderOnScroll);

  /* ---------- Formulario de contacto -> WhatsApp ---------- */
  var form = document.getElementById('contact-form');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var nombre = document.getElementById('nombre').value.trim();
      var empresa = document.getElementById('empresa').value.trim();
      var telefono = document.getElementById('telefono').value.trim();
      var mensaje = document.getElementById('mensaje').value.trim();

      var texto = 'Hola MaxService, mi nombre es ' + nombre + '.';
      if (empresa) {
        texto += ' Empresa/Comercio: ' + empresa + '.';
      }
      texto += ' Mi teléfono es ' + telefono + '. ' + mensaje;

      var url = 'https://wa.me/5492994111785?text=' + encodeURIComponent(texto);
      window.open(url, '_blank');
    });
  }

});
