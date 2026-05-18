const sceneArtwork = document.querySelector(".scene-artwork");

sceneArtwork?.addEventListener(
  "error",
  () => {
    const fallback = sceneArtwork.dataset.fallback;

    if (fallback && sceneArtwork.getAttribute("src") !== fallback) {
      sceneArtwork.src = fallback;
    }
  },
  { once: true }
);
