const btn = document.getElementById("menu-btn")
const nav = document.getElementById("menu")

btn.addEventListener('click', () => {
  btn.classList.toggle('open')
  nav.classList.toggle('flex')
  nav.classList.toggle('hidden')
})

// Function to move the carousel
function moveCarousel() {
    const carouselTrack = document.getElementById('carousel-track');
    const firstCard = carouselTrack.children[0];
    const cardWidth = firstCard.offsetWidth;
  
    // Slide the carousel to the left
    carouselTrack.style.transition = 'transform 0.5s ease-in-out';
    carouselTrack.style.transform = `translateX(-${cardWidth}px)`;
  
    // Remove the first card and add it to the end
    setTimeout(() => {
      carouselTrack.appendChild(firstCard);
      carouselTrack.style.transition = 'none';
      carouselTrack.style.transform = 'translateX(0)';
    }, 500);
  }
  
  // Start moving the carousel every 3 second if there are more than 3 cards
  const carouselTrack = document.getElementById('carousel-track');
  if (carouselTrack.children.length > 3) {
    let interval = setInterval(moveCarousel, 3000);
  
    // Pause the carousel when the cursor hovers over it
    const carouselContainer = document.querySelector('.carousel-container');
    carouselContainer.addEventListener('mouseenter', () => {
      clearInterval(interval);
    });
  
    // Resume the carousel when the cursor leaves
    carouselContainer.addEventListener('mouseleave', () => {
      interval = setInterval(moveCarousel, 3000);
    });
  }
  