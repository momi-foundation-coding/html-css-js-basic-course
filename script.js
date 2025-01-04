
function scrollGallery(direction) {
  const galleryContainer = document.getElementById('galleryContainer');
  const scrollAmount = 320;
  galleryContainer.scrollLeft += direction * scrollAmount;
}

// can add auto-scroll in every 3 seconds
setInterval(() => {
  scrollGallery(1);
}, 3000);
