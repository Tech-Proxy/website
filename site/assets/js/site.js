// Keep the copyright year current without a build step.
document.querySelectorAll('[data-year]').forEach(function (el) {
  el.textContent = String(new Date().getFullYear());
});

// Load the Google Maps embed only when the visitor asks for it, so no
// third-party cookies are set unless they choose to see the map.
document.querySelectorAll('[data-map-src]').forEach(function (box) {
  var button = box.querySelector('.map-load');
  if (!button) return;
  button.addEventListener('click', function () {
    var frame = document.createElement('iframe');
    frame.src = box.getAttribute('data-map-src');
    frame.title = 'Map showing 17 Green Lanes, London N16 9BS';
    frame.loading = 'lazy';
    frame.referrerPolicy = 'no-referrer-when-downgrade';
    frame.allowFullscreen = true;
    box.replaceChildren(frame);
    box.classList.add('is-loaded');
  });
});
