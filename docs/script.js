document.addEventListener("DOMContentLoaded", () => {
  // Blurred thumbnail backgrounds for "contain" images
  document.querySelectorAll(".thumb").forEach((thumb) => {
    const img = thumb.querySelector("img");
    if (img && img.src) {
      thumb.style.setProperty("--thumb-bg", `url("${img.src}")`);
    }
  });

  // Keep your placeholder Social behavior (optional)
  const social = document.getElementById("socialLink");
  if (social && social.getAttribute("href") === "#") {
    social.addEventListener("click", (e) => {
      e.preventDefault();
      alert("Add your Twitter/X or Instagram link here!");
    });
  }
});
