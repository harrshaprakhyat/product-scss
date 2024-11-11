// Select all the thumbnail images and the main image container
const allHoverImages = document.querySelectorAll('.img-thumbnail');
const imgContainer = document.querySelector('.img-container img');

// Set up the initial active thumbnail
window.addEventListener('DOMContentLoaded', () => {
    allHoverImages[0].classList.add('active');
});

// Add click event listeners to each thumbnail
allHoverImages.forEach((thumbnail) => {
    thumbnail.addEventListener('click', () => {
        // Change the main image to the clicked thumbnail's image
        imgContainer.src = thumbnail.src;

        // Remove the active class from all thumbnails
        resetActiveImg();

        // Add the active class to the clicked thumbnail
        thumbnail.classList.add('active');
    });
});

// Function to remove the active class from all thumbnails
function resetActiveImg() {
    allHoverImages.forEach((img) => {
        img.classList.remove('active');
    });
}
