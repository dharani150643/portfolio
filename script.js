// Dark mode toggle
document.getElementById("dark-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Carousel logic
const track = document.querySelector(".carousel-track");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const items = document.querySelectorAll(".carousel-item");
let index = 0;

function updateCarousel() {
  const width = items[0].offsetWidth;
  track.style.transform = `translateX(-${index * width}px)`;
}

nextBtn.addEventListener("click", () => {
  if (index < items.length - 1) {
    index++;
    updateCarousel();
  }
});

prevBtn.addEventListener("click", () => {
  if (index > 0) {
    index--;
    updateCarousel();
  }
});

window.addEventListener("resize", updateCarousel);

// Contact form validation
document.getElementById("contact-form").addEventListener("submit", function (e) {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill all fields.");
    e.preventDefault();
  }
});
