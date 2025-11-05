// Mobile Menu Toggle
(function() {
  'use strict';

  function initMobileMenu() {
    // Vérifier si le menu toggle existe déjà
    if (document.querySelector('.mobile-menu-toggle')) {
      return;
    }

    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelector('.nav-links');

    if (!navbar || !navLinks) {
      return;
    }

    // Créer le bouton hamburger
    const menuToggle = document.createElement('button');
    menuToggle.className = 'mobile-menu-toggle';
    menuToggle.setAttribute('aria-label', 'Toggle menu');
    menuToggle.innerHTML = '☰';

    // Insérer le bouton après le brand
    const brand = navbar.querySelector('.brand');
    if (brand && brand.nextSibling) {
      navbar.insertBefore(menuToggle, brand.nextSibling);
    } else if (brand) {
      navbar.appendChild(menuToggle);
    }

    // Toggle menu on click
    menuToggle.addEventListener('click', function() {
      const isActive = navLinks.classList.contains('mobile-active');

      if (isActive) {
        navLinks.classList.remove('mobile-active');
        menuToggle.innerHTML = '☰';
        document.body.style.overflow = '';
      } else {
        navLinks.classList.add('mobile-active');
        menuToggle.innerHTML = '✕';
        document.body.style.overflow = 'hidden';
      }
    });

    // Fermer le menu quand on clique sur un lien
    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', function() {
        navLinks.classList.remove('mobile-active');
        menuToggle.innerHTML = '☰';
        document.body.style.overflow = '';
      });
    });

    // Fermer le menu si on clique en dehors
    navLinks.addEventListener('click', function(e) {
      if (e.target === navLinks) {
        navLinks.classList.remove('mobile-active');
        menuToggle.innerHTML = '☰';
        document.body.style.overflow = '';
      }
    });
  }

  // Initialiser quand le DOM est prêt
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMobileMenu);
  } else {
    initMobileMenu();
  }
})();
