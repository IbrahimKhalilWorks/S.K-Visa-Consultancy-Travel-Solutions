document.addEventListener("DOMContentLoaded", function () {
  // Mobile menu toggle functionality
  const mobileToggleBtn = document.querySelector(".mobile-toggle");
  const navMenu = document.querySelector(".nav-menu");

  mobileToggleBtn.addEventListener("click", function () {
    navMenu.classList.toggle("active_services");
    this.setAttribute(
      "aria-expanded",
      this.getAttribute("aria-expanded") === "true" ? "false" : "true"
    );
  });

  // Close mobile menu when clicking outside
  document.addEventListener("click", function (event) {
    if (
      !navMenu.contains(event.target) &&
      !mobileToggleBtn.contains(event.target)
    ) {
      navMenu.classList.remove("active");
      mobileToggleBtn.setAttribute("aria-expanded", "false");
    }
  });

  // Dropdown menu functionality
  const dropdownToggles = document.querySelectorAll(".dropdown-toggle");

  dropdownToggles.forEach((toggle) => {
    // For mobile view
    toggle.addEventListener("click", function (e) {
      // Check if we're in mobile view
      if (window.innerWidth <= 992) {
        e.preventDefault();
        this.parentElement.classList.toggle("dropdown-open");
      }
    });

    // For desktop hover functionality
    const dropdownItem = toggle.parentElement;

    dropdownItem.addEventListener("mouseenter", function () {
      if (window.innerWidth > 992) {
        this.classList.add("dropdown-open");
      }
    });

    dropdownItem.addEventListener("mouseleave", function () {
      if (window.innerWidth > 992) {
        this.classList.remove("dropdown-open");
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Counter animation function
  function animateWcuCounter(element, target, duration = 2000) {
    let start = 0;
    const end = parseInt(target);
    const range = end - start;
    const increment = end > start ? 1 : -1;
    const stepTime = Math.abs(Math.floor(duration / range));
    const startTime = new Date().getTime();
    const endTime = startTime + duration;

    function updateCounter() {
      const currentTime = new Date().getTime();
      const remaining = Math.max((endTime - currentTime) / duration, 0);
      const value = Math.round(end - remaining * range);
      element.textContent = value;

      if (value !== end) {
        setTimeout(updateCounter, stepTime);
      }
    }

    setTimeout(updateCounter, stepTime);
  }

  // Intersection Observer for triggering counter animation when in view
  const wcuObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const counters = entry.target.querySelectorAll(".wcu-stat-number");
          counters.forEach((counter) => {
            const target = counter.getAttribute("data-target");
            animateWcuCounter(counter, target);
          });
          wcuObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  // Observe the stats bar
  const wcuStatsBar = document.querySelector(".wcu-stats-bar");
  if (wcuStatsBar) {
    wcuObserver.observe(wcuStatsBar);
  }
});
