document.addEventListener("DOMContentLoaded", () => {
  const discord = document.getElementById("discordLink");
  const social = document.getElementById("socialLink");

  if (discord) {
    discord.addEventListener("click", (e) => {
      e.preventDefault();
      alert("Add your Discord invite link here!");
    });
  }

document.addEventListener("DOMContentLoaded", () => {
  const isHome =
    location.pathname.endsWith("index.html") ||
    location.pathname === "/" ||
    location.pathname === "";

  const cornerLogo = document.querySelector(".corner-logo");

  if (cornerLogo && !isHome) {
    cornerLogo.style.display = "block";
  }
});


  if (social) {
    social.addEventListener("click", (e) => {
      e.preventDefault();
      alert("Add your Twitter/X or Instagram link here!");
    });
  }
});
