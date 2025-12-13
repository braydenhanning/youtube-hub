document.addEventListener("DOMContentLoaded", () => {
  const discord = document.getElementById("discordLink");
  const social = document.getElementById("socialLink");

  if (discord) {
    discord.addEventListener("click", (e) => {
      e.preventDefault();
      alert("Add your Discord invite link here!");
    });
  }

  if (social) {
    social.addEventListener("click", (e) => {
      e.preventDefault();
      alert("Add your Twitter/X or Instagram link here!");
    });
  }
});
