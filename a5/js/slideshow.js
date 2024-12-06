document.addEventListener("DOMContentLoaded", function() {
    // Get references to the image, buttons, and description div
    var imgElement = document.getElementById("slideshowImg");
    var descElement = document.getElementById("description");
    var prevButton = document.getElementById("slideshowPrev");
    var nextButton = document.getElementById("slideshowNext");

    // Set the starting image and total number of images
    var currentImageIndex = 0;
    var totalImages = 5
    let autoSlideInterval;;

    // Descriptions for each image
    var descriptions = [
        "A red pentagon on an orange background.", 
        "BRAT — CharlieXCX", 
        "A dignified tophat with a cloudy accessory.", 
        "An amateurish model of the human form — Sky Gardener", 
        "Gaze up at the stars knowing that I see the same sky and wish the same sweet dreams."
    ];

    // Function to update the image source and description
    function updateImageAndDescription() {
        imgElement.src = "images/" + (currentImageIndex + 1) + ".png";
		// changes indexing from 1 to indexing from 0
        descElement.textContent = descriptions[currentImageIndex];
    }

    function showNext() {
        currentImageIndex = (currentImageIndex + 1) % totalImages;
        updateImageAndDescription();
    }

    function showPrev() {
        currentImageIndex = (currentImageIndex - 1) % totalImages;
        if (currentImageIndex === -1) {
            currentImageIndex = 4;
        }
        updateImageAndDescription();
    }
    // Event listener for the Previous button
    prevButton.addEventListener("click", function() {
        showPrev();
        startAutoSlideshow(); // resets the timer
    });

    // Event listener for the Next button
    nextButton.addEventListener("click", function() {
        showNext();
        startAutoSlideshow(); // resets the timer
    });

    function startAutoSlideshow() {
        clearInterval(autoSlideInterval); // Clear any existing interval
        autoSlideInterval = setInterval(showNext, 3000); // Change image every 3 seconds
    }

    // Initial update when the page loads
    updateImageAndDescription();
    startAutoSlideshow();
});
