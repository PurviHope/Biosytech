// BIOSYTECH CUSTOM JS

// Wait for DOM to load
document.addEventListener("DOMContentLoaded", function () {
    
    // Animate on scroll initialization (requires AOS library)
    if (typeof AOS !== "undefined") {
        AOS.init({
            duration: 800,
            once: true,
            easing: 'ease-in-out'
        });
    }

    // Optional smooth scrolling (if using anchor links)
    const links = document.querySelectorAll("a[href^='#']");
    for (const link of links) {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    }

    // Optional: auto-advance carousel every 5 seconds
    const bsCarousel = new bootstrap.Carousel(carousel, {
    interval: 3000,
    ride: 'carousel'
});

    }

});
//Testmonial script
const API_KEY = "YOUR_API_KEY";
const PLACE_ID = "YOUR_PLACE_ID";
const slider = document.getElementById("testimonial-slider");
let reviews = [];
let current = 0;

function showTestimonial() {
  // Clear current content
  slider.innerHTML = "";

  // Create testimonial container
  const t = document.createElement("div");
  t.classList.add("testimonial");

  // Add review text & stars
  t.innerHTML = `
    <p class="testimonial-text">"${reviews[current].text}"</p>
    <div class="stars">★★★★★</div>
  `;

  // Add animation class
  t.style.animation = "rotateIn 1s forwards";

  // Append to slider
  slider.appendChild(t);

  // Move to next index
  current = (current + 1) % reviews.length;
}

fetch(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews&key=${API_KEY}`)
  .then(res => res.json())
  .then(data => {
    reviews = data.result.reviews
      .filter(r => r.rating === 5) // Only 5-star reviews
      .map(r => ({
        text: r.text
      }));

    if (reviews.length > 0) {
      showTestimonial();
      setInterval(showTestimonial, 4000); // Change every 4 sec
    }
  })
  .catch(err => console.error(err));
//Testimonial
// Testimonials Data (you can add more here)
document.addEventListener("DOMContentLoaded", function () {
  const testimonials = [
    {
      text: "Biosytech Laboratory left a very good impression on me. The staff were kind, approachable, and always willing to assist with any questions. I also appreciated how quickly and efficiently the results were delivered. Overall, it’s a well-organized facility that values both accuracy and service.",
      author: "– Namitha Hanna Aby"
    },
    {
      text: "Sabitha was wonderful, came on time, finished on time, so pleasant throughout, continuously smiling. Took blood samples like a magician. Kudos to Sabitha. Thank you.",
      author: "– Ahmad Abou El Naja"
    },
    {
      text: "I was impressed by the professionalism and the latest technology used at Biosytech. Results were quick and highly reliable.",
      author: "– Dr. Kiran Patel"
    },
    {
      text: "Excellent lab facilities and courteous staff. They made me feel comfortable and guided me through the entire process.",
      author: "– Sneha Menon"
    },
    {
      text: "Highly recommend Biosytech! Clean, efficient, and accurate — everything you want from a medical lab.",
      author: "– Rajesh Sharma"
    }
  ];

  let index = 0;
  const textElement = document.getElementById("testimonial-text");
  const authorElement = document.getElementById("testimonial-author");

  function showTestimonial() {
    // Hide first (fade out + slide down)
    textElement.classList.remove("show");
    authorElement.classList.remove("show");

    setTimeout(() => {
      // Update content
      textElement.innerText = testimonials[index].text;
      authorElement.innerText = testimonials[index].author;

      // Show again (fade in + slide up)
      textElement.classList.add("show");
      authorElement.classList.add("show");

      // Next testimonial
      index = (index + 1) % testimonials.length;
    }, 800); // matches CSS transition time
  }

  // Show first immediately
  textElement.innerText = testimonials[0].text;
  authorElement.innerText = testimonials[0].author;
  textElement.classList.add("show");
  authorElement.classList.add("show");
  index = 1;

  // Auto change every 6s
  setInterval(showTestimonial, 6000);
});
//auto increment for counter
//document.addEventListener("DOMContentLoaded", () => {
//  const counter = document.querySelector(".counter-patient");
//  if (!counter) return; // prevent error if element missing
//  
//  const updateCount = () => {
//    const target = +counter.getAttribute("data-target");
//    const count = +counter.innerText.replace(/\D/g, "") || 0;
//    const increment = target / 200;
//
//    if (count < target) {
//      counter.innerText = Math.ceil(count + increment).toLocaleString() + "+";
//      requestAnimationFrame(updateCount);
//    } else {
//      counter.innerText = target.toLocaleString() + "+";
//    }
//  };
//
//  // Trigger only when in view
//  const observer = new IntersectionObserver(entries => {
//    entries.forEach(entry => {
//      if (entry.isIntersecting) {
//        updateCount();
//        observer.unobserve(counter);
//      }
//    });
//  }, { threshold: 0.5 });
//
//  observer.observe(counter);
//});
