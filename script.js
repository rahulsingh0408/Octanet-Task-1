// Image URLs (replace with your actual image paths)
const imageUrls = [
  "https://www.moogway.com/cdn/shop/files/young-handsome-man-coat-outside-street_5a1daba5-1861-4e11-9bdc-a8fa90bcd098.jpg?v=1698146806&width=980",
  "https://www.mensjournal.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_700/MjAzMjMwMjk1NzIwMjA3NTQy/mj-best-trends-knitpolos.webp",
  "https://www.mensjournal.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_700/MjAzMjA4ODkwMTQwMDc1NTg3/mj-best-trends-cardigans.webp",
  "https://www.mensjournal.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_700/MjAzMjA4NzAyNTAzNjkxODQz/mj-best-trends-chore.webp",
  "https://www.mensjournal.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_700/MjAzMjA4MzE3Mjk4ODEyMDg2/mj-best-trends-blazers2.webp",
  "https://www.mensjournal.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_700/MjAzMjA3Mzc0NTUzNDkxMDEx/mj-best-trends-jeans2.webp",
  "https://www.mensjournal.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_700/MjAzMjA4MTQ2MDM2OTkxMTU4/mj-best-trends-bomber.webp",
  "https://www.mensjournal.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_700/MjAzMjMxOTYxMzYyMjEyMDIy/mj-mixed-hero-best-trends.webp"
];

// Current image index
let currentImageIndex = 0;

// Function to change background image
function changeBackgroundImage() {
  // Get all background image elements
  const images = document.querySelectorAll('.background-carousel img');

  // Set the current image to invisible
  images[currentImageIndex].style.opacity = 0;

  // Increment the index, handling overflow
  currentImageIndex = (currentImageIndex + 1) % imageUrls.length;

  // Set the new image to visible
  images[currentImageIndex].style.opacity = 1;

  // Schedule the next image change after 1 second (you can adjust the delay)
  setTimeout(changeBackgroundImage, 3000);
}

// Create background image elements dynamically
const backgroundCarousel = document.querySelector('.background-carousel');
imageUrls.forEach(imageUrl => {
  const image = document.createElement('img');
  image.src = imageUrl;
  image.alt = "Men's fashion background image";
  backgroundCarousel.appendChild(image);
});

// Start the background image transition
changeBackgroundImage();
