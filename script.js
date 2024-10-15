// document.getElementById('donor-form').addEventListener('submit', function(event) {
//     event.preventDefault();  // Prevent the form from submitting the default way

//     // Gather form data
//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const age = document.getElementById('age').value; // Include age if needed

//     // Send data to the server
//     fetch('/register', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/x-www-form-urlencoded',
//         },
//         body: new URLSearchParams({
//             'name': name,
//             'email': email,
//             'age': age
//         })
//     })
//     .then(response => {
//         if (!response.ok) {
//             // If the response is not okay, throw an error
//             return response.text().then(err => { // Get error response text
//                 throw new Error(`Network response was not ok: ${err} (Status: ${response.status})`);
//             });
//         }
//         return response.json();  // Parse as JSON if the response is okay
//     })
//     .then(data => {
//         if (data.error) {
//             document.getElementById('confirmation-message').innerText = `Error: ${data.error}`;
//         } else {
//             document.getElementById('confirmation-message').innerText = `Registration successful!`;
//         }
//     })
//     .catch(error => {
//         document.getElementById('confirmation-message').innerText = `Error: ${error.message}`;
//     });
// });



// document.addEventListener("DOMContentLoaded", function() {
//     // Counter animation logic
//     function animateCounter(element, start, end, duration) {
//         let range = end - start;
//         let current = start;
//         let increment = end > start ? 1 : -1;
//         let stepTime = Math.abs(Math.floor(duration / range));
//         let timer = setInterval(function() {
//             current += increment;
//             element.textContent = current;
//             if (current == end) {
//                 clearInterval(timer);
//             }
//         }, stepTime);
//     }

//     // Target the digit elements
//     const digits = [
//         document.getElementById('digit1'),
//         document.getElementById('digit2'),
//         document.getElementById('digit3'),
//         document.getElementById('digit4'),
//         document.getElementById('digit5'),
//         document.getElementById('digit6')
//     ];

//     // Set the target values for the counter (e.g., 200,000 donors)
//     const targetValues = [2, 0, 0, 0, 0, 0];

//     // Animate each digit
//     digits.forEach((digit, index) => {
//         animateCounter(digit, parseInt(digit.textContent), targetValues[index], 1500);
//     });
// });

// particlesJS('particles-js', {
//     particles: {
//         number: {
//             value: 80,
//             density: {
//                 enable: true,
//                 value_area: 800
//             }
//         },
//         color: {
//             value: "#ff5e57"
//         },
//         shape: {
//             type: "circle",
//             stroke: {
//                 width: 0,
//                 color: "#000000"
//             },
//             polygon: {
//                 nb_sides: 5
//             }
//         },
//         opacity: {
//             value: 0.5,
//             random: false,
//             anim: {
//                 enable: false,
//                 speed: 1,
//                 opacity_min: 0.1,
//                 sync: false
//             }
//         },
//         size: {
//             value: 3,
//             random: true,
//             anim: {
//                 enable: false,
//                 speed: 40,
//                 size_min: 0.1,
//                 sync: false
//             }
//         },
//         line_linked: {
//             enable: true,
//             distance: 150,
//             color: "#ff5e57",
//             opacity: 0.4,
//             width: 1
//         },
//         move: {
//             enable: true,
//             speed: 6,
//             direction: "none",
//             random: false,
//             straight: false,
//             out_mode: "out",
//             attract: {
//                 enable: false,
//                 rotateX: 600,
//                 rotateY: 1200
//             }
//         }
//     },
//     interactivity: {
//         detect_on: "canvas",
//         events: {
//             onhover: {
//                 enable: true,
//                 mode: "repulse"
//             },
//             onclick: {
//                 enable: true,
//                 mode: "push"
//             },
//             resize: true
//         },
//         modes: {
//             repulse: {
//                 distance: 200,
//                 duration: 0.4
//             },
//             push: {
//                 particles_nb: 4
//             }
//         }
//     },
//     retina_detect: true
// });


// // slider
// window.onload = function() {
//     let currentSlide = 0;
//     const slides = document.querySelectorAll('.slide');
//     const totalSlides = slides.length;

//     function showSlide(index) {
//         const slider = document.querySelector('.slider');
//         slider.style.transform = `translateX(-${index * 100}%)`;
//     }

//     function moveSlide(n) {
//         currentSlide = (currentSlide + n + totalSlides) % totalSlides;
//         showSlide(currentSlide);
//     }

//     document.querySelector('.prev').addEventListener('click', () => {
//         moveSlide(-1);
//     });

//     document.querySelector('.next').addEventListener('click', () => {
//         moveSlide(1);
//     });
// };
  







// Counter Animation Logic
document.addEventListener("DOMContentLoaded", function() {
    function animateCounter(element, start, end, duration) {
        let range = end - start;
        let current = start;
        let increment = end > start ? 1 : -1;
        let stepTime = Math.abs(Math.floor(duration / range));
        let timer = setInterval(function() {
            current += increment;
            element.textContent = current;
            if (current === end) {
                clearInterval(timer);
            }
        }, stepTime);
    }

    const digits = [
        document.getElementById('digit1'),
        document.getElementById('digit2'),
        document.getElementById('digit3'),
        document.getElementById('digit4'),
        document.getElementById('digit5'),
        document.getElementById('digit6')
    ];

    const targetValues = [2, 0, 0, 0, 0, 0];
    digits.forEach((digit, index) => {
        animateCounter(digit, parseInt(digit.textContent), targetValues[index], 1500);
    });
});

// Slider
const slides = document.querySelectorAll('.slide');
        const nextButton = document.querySelector('.next');
        const prevButton = document.querySelector('.prev');
        let currentIndex = 0;

        function showSlide(index) {
            const totalSlides = slides.length;
            currentIndex = (index + totalSlides) % totalSlides; // Loop back if out of bounds
            const slideWidth = slides[0].clientWidth; // Get width of a single slide
            const slider = document.querySelector('.slider');
            slider.style.transform = `translateX(${-currentIndex * slideWidth}px)`; // Move to the current slide
        }

        function nextSlide() {
            showSlide(currentIndex + 1); // Move to the next slide
        }

        function prevSlide() {
            showSlide(currentIndex - 1); // Move to the previous slide
        }

        nextButton.addEventListener('click', nextSlide);
        prevButton.addEventListener('click', prevSlide);

        // Automatic slide transition
        setInterval(nextSlide, 3000); 
    


// inspiredd stories
function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modals = document.getElementsByClassName("modal");
    for (let i = 0; i < modals.length; i++) {
        if (event.target == modals[i]) {
            modals[i].style.display = "none";
        }
    }
}


// register
document.getElementById('donationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    // Generate Donor ID
    const timestamp = Date.now();
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const donorId = 'DONOR-' + timestamp + '-' + randomNum;

    // Display Donor ID to the user
    alert('Registration Successful! Your Donor ID is: ' + donorId);

    // Here you can proceed to submit the form data to the server or save it locally
    // For demonstration, we will reset the form
    this.reset();
});

// footer
function toggleVisibility(id) {
    var content = document.getElementById(id);
    if (content.style.display === "none") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}


// carousel
let currentindex = 0;
const storiesToShow = 4; // Number of stories to show at a time
const storyWidth = 320; // Adjust based on your card width + margin
const storyContainer = document.getElementById('storyCarousel');

function moveCarousel(direction) {
    const totalStories = document.querySelectorAll('.story-card').length;

    // Update current index based on direction
    currentindex += direction;

    // Keep the index within bounds
    if (currentindex < 0) {
        currentindex = 0;
    } else if (currentindex > totalStories - storiesToShow) {
        currentindex = totalStories - storiesToShow;
    }

    const offset = -currentindex * storyWidth; // Calculate the offset
    storyContainer.style.transform = `translateX(${offset}px)`; // Apply the offset
}

function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}
