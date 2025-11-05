// Social Sharing Component
// Crée automatiquement des boutons de partage sur les pages

(function() {
  'use strict';

  // Configuration
  const SHARE_PLATFORMS = {
    facebook: {
      name: 'Facebook',
      icon: '📘',
      color: '#1877F2',
      url: (pageUrl, pageTitle) => `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`
    },
    twitter: {
      name: 'Twitter/X',
      icon: '𝕏',
      color: '#000000',
      url: (pageUrl, pageTitle) => `https://twitter.com/intent/tweet?url=${encodeURIComponent(pageUrl)}&text=${encodeURIComponent(pageTitle)}`
    },
    linkedin: {
      name: 'LinkedIn',
      icon: '💼',
      color: '#0A66C2',
      url: (pageUrl, pageTitle) => `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(pageUrl)}`
    },
    whatsapp: {
      name: 'WhatsApp',
      icon: '💬',
      color: '#25D366',
      url: (pageUrl, pageTitle) => `https://wa.me/?text=${encodeURIComponent(pageTitle + ' ' + pageUrl)}`
    },
    email: {
      name: 'Email',
      icon: '✉️',
      color: '#666666',
      url: (pageUrl, pageTitle) => `mailto:?subject=${encodeURIComponent(pageTitle)}&body=${encodeURIComponent(pageUrl)}`
    }
  };

  // Créer le composant de partage
  function createShareButtons() {
    const pageUrl = window.location.href;
    const pageTitle = document.title;

    const container = document.createElement('div');
    container.className = 'social-share-container';
    container.innerHTML = `
      <style>
        .social-share-container {
          position: fixed;
          right: 20px;
          top: 50%;
          transform: translateY(-50%);
          z-index: 1000;
          background: white;
          padding: 0.75rem;
          border-radius: 50px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.15);
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        @media (max-width: 768px) {
          .social-share-container {
            bottom: 20px;
            top: auto;
            right: 20px;
            transform: none;
            flex-direction: row;
            padding: 0.5rem;
          }
        }

        .social-share-btn {
          width: 45px;
          height: 45px;
          border-radius: 50%;
          border: none;
          cursor: pointer;
          font-size: 1.2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s;
          text-decoration: none;
          color: white;
        }

        .social-share-btn:hover {
          transform: scale(1.1);
          box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        }

        .share-label {
          writing-mode: vertical-rl;
          font-size: 0.7rem;
          color: #666;
          font-weight: 600;
          padding: 0.5rem 0;
        }

        @media (max-width: 768px) {
          .share-label {
            writing-mode: horizontal-tb;
            padding: 0;
          }
          .social-share-btn {
            width: 40px;
            height: 40px;
            font-size: 1rem;
          }
        }
      </style>
      <div class="share-label">PARTAGER</div>
    `;

    // Ajouter les boutons
    Object.keys(SHARE_PLATFORMS).forEach(platform => {
      const config = SHARE_PLATFORMS[platform];
      const btn = document.createElement('a');
      btn.href = config.url(pageUrl, pageTitle);
      btn.className = 'social-share-btn';
      btn.style.background = config.color;
      btn.innerHTML = config.icon;
      btn.target = '_blank';
      btn.rel = 'noopener noreferrer';
      btn.title = `Partager sur ${config.name}`;

      btn.addEventListener('click', function(e) {
        if (platform !== 'email') {
          e.preventDefault();
          window.open(this.href, 'share', 'width=600,height=400');
        }

        // Track share event
        if (typeof trackEvent !== 'undefined') {
          trackEvent('share', {
            event_category: 'social',
            event_label: platform
          });
        }
      });

      container.appendChild(btn);
    });

    document.body.appendChild(container);
  }

  // Initialiser quand le DOM est prêt
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createShareButtons);
  } else {
    createShareButtons();
  }
})();
