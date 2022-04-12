document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".own1").ownCarousel({
    itemPerRow: 4,
    // autoplay: 5000,
    nav: true,
    responsive: {
      1000: [4, 24],
      900: [2, 49],
      800: [2, 49],
      600: [1, 100],
      400: [1, 100],
    },
  });
  responsive();
});