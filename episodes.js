document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll("[data-season]");
  const episodes = document.querySelectorAll(".episode");

  function setSeason(season) {
    episodes.forEach((ep) => {
      const epSeason = ep.getAttribute("data-season");
      const show = (season === "all") || (epSeason === season);
      ep.style.display = show ? "" : "none";
    });

    // Optional: make active button look pressed
    buttons.forEach((btn) => {
      btn.classList.toggle("primary", btn.getAttribute("data-season") === season);
    });
  }

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => setSeason(btn.getAttribute("data-season")));
  });

  setSeason("all");
});
