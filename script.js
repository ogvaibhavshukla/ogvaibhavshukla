// Enhanced Gallery Scrolling with all functionality
document.addEventListener('DOMContentLoaded', function() {
  const slider = document.getElementById('gallery-scroll');
  const thumb = document.getElementById('gallery-thumb');
  
  if (!slider) return; // Exit if element doesn't exist
  
  let isDown = false;
  let startX;
  let scrollLeft;
  let velocity = 0;
  let prevScrollLeft = 0;
  let momentumInterval;

  // Thumbnail position tracking
  function updateThumb() {
    if (!thumb) return;
    const maxScroll = slider.scrollWidth - slider.clientWidth;
    const scrollPercent = slider.scrollLeft / maxScroll;
    const maxThumbMove = slider.clientWidth - thumb.offsetWidth;
    thumb.style.transform = `translate3d(${scrollPercent * maxThumbMove}px, 0, 0)`;
  }

  // Mouse wheel horizontal scrolling
  slider.addEventListener('wheel', function (e) {
    if (e.deltaY !== 0) {
      e.preventDefault();
      slider.scrollLeft += e.deltaY;
    }
  }, { passive: false });

  // Drag scrolling with momentum
  slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('dragging');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
    prevScrollLeft = slider.scrollLeft;
    cancelMomentumTracking();
  });

  slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('dragging');
  });

  slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('dragging');
    beginMomentumTracking();
  });

  slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = x - startX;
    slider.scrollLeft = scrollLeft - walk;
    velocity = slider.scrollLeft - prevScrollLeft;
    prevScrollLeft = slider.scrollLeft;
  });

  // Scroll and resize event listeners
  slider.addEventListener('scroll', updateThumb);
  window.addEventListener('resize', updateThumb);
  updateThumb(); // Initial position

  function beginMomentumTracking() {
    cancelMomentumTracking();
    momentumInterval = setInterval(() => {
      slider.scrollLeft += velocity;
      velocity *= 0.95; // friction
      if (Math.abs(velocity) < 0.5) {
        clearInterval(momentumInterval);
      }
    }, 16); // ~60fps
  }

  function cancelMomentumTracking() {
    clearInterval(momentumInterval);
  }
});
