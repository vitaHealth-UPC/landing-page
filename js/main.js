document.addEventListener("DOMContentLoaded", () => {
  const year = document.querySelector("[data-current-year]");
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  const menuButton = document.querySelector("[data-mobile-menu]");
  const navigation = document.querySelector(".main-nav");

  menuButton?.addEventListener("click", () => {
    const isOpen = navigation?.classList.toggle("is-open") ?? false;
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  });

  navigation?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navigation.classList.remove("is-open");
      menuButton?.setAttribute("aria-expanded", "false");
      menuButton?.setAttribute("aria-label", "Open navigation");
    });
  });

  const appCarousel = document.querySelector(".app-showcase-phones");
  const appSlides = appCarousel ? Array.from(appCarousel.querySelectorAll(".app-phone")) : [];
  const carouselMedia = window.matchMedia("(max-width: 767px)");
  let appSlideIndex = 1;
  let appCarouselTimer = null;

  const renderAppCarousel = () => {
    const mobile = carouselMedia.matches;
    appSlides.forEach((slide, index) => {
      slide.classList.toggle("is-active", mobile && index === appSlideIndex);
      if (mobile) {
        slide.setAttribute("aria-hidden", String(index !== appSlideIndex));
      } else {
        slide.removeAttribute("aria-hidden");
      }
    });
  };

  const stopAppCarousel = () => {
    if (appCarouselTimer) {
      window.clearInterval(appCarouselTimer);
      appCarouselTimer = null;
    }
  };

  const startAppCarousel = () => {
    stopAppCarousel();
    if (!carouselMedia.matches || appSlides.length < 2) return;
    appCarouselTimer = window.setInterval(() => {
      appSlideIndex = (appSlideIndex + 1) % appSlides.length;
      renderAppCarousel();
    }, 4500);
  };

  const moveAppCarousel = (delta) => {
    if (!carouselMedia.matches || appSlides.length < 2) return;
    appSlideIndex = (appSlideIndex + delta + appSlides.length) % appSlides.length;
    renderAppCarousel();
    startAppCarousel();
  };

  appCarousel?.querySelector('[data-app-carousel="prev"]')?.addEventListener("click", () => moveAppCarousel(-1));
  appCarousel?.querySelector('[data-app-carousel="next"]')?.addEventListener("click", () => moveAppCarousel(1));

  carouselMedia.addEventListener?.("change", () => {
    renderAppCarousel();
    startAppCarousel();
  });

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) stopAppCarousel();
    else startAppCarousel();
  });

  renderAppCarousel();
  startAppCarousel();

});
