
function scrollGallery(direction) {
  const galleryContainer = document.getElementById('galleryContainer');
  const scrollAmount = 320;
  galleryContainer.scrollLeft += direction * scrollAmount;
}

// can add auto-scroll in every 3 seconds
setInterval(() => {
  scrollGallery(1);
}, 3000);

const contactForm = document.getElementById('contactForm');
contactMe(contactForm);

function contactMe(form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault(); // prevennt from default submitting
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if(!name || !email || !message) {
      alert('All fields are required');
      return;
    }

    console.log("Form submitted", {
      name, 
      email, 
      message
    });

    alert(`Thank you for your message, ${name}`);
    // reset form
    form.reset();
    // to submit to actual form, can make use of form.submit()
    return ;
  })
 

}
