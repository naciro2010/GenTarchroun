// Google Analytics 4 Configuration
// Remplacer 'G-XXXXXXXXXX' par votre vrai ID Google Analytics

(function() {
  // Configuration
  const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // À remplacer par votre ID

  // Charger Google Analytics
  if (GA_MEASUREMENT_ID !== 'G-XXXXXXXXXX') {
    // Script Google Analytics
    const gaScript = document.createElement('script');
    gaScript.async = true;
    gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(gaScript);

    // Configuration gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', GA_MEASUREMENT_ID);

    console.log('Google Analytics initialized');
  } else {
    console.log('Google Analytics not configured - replace GA_MEASUREMENT_ID');
  }

  // Event Tracking Helper
  window.trackEvent = function(eventName, eventParams) {
    if (typeof gtag !== 'undefined') {
      gtag('event', eventName, eventParams);
    }
  };

  // Track external links
  document.addEventListener('click', function(e) {
    const target = e.target.closest('a');
    if (target && target.href && target.host !== window.location.host) {
      trackEvent('click', {
        event_category: 'outbound',
        event_label: target.href
      });
    }
  });

  // Track button clicks
  document.addEventListener('click', function(e) {
    const btn = e.target.closest('.btn');
    if (btn) {
      const btnText = btn.textContent.trim();
      trackEvent('button_click', {
        event_category: 'engagement',
        event_label: btnText
      });
    }
  });

  // Track form submissions
  document.addEventListener('submit', function(e) {
    const form = e.target;
    if (form.tagName === 'FORM') {
      trackEvent('form_submit', {
        event_category: 'engagement',
        event_label: form.id || 'unnamed_form'
      });
    }
  });
})();
