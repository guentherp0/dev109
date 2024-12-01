document.addEventListener("DOMContentLoaded", function() {
    // Get references to the image, buttons, and description div
    var imgElement = document.getElementById("slideshowImg");
    var descElement = document.getElementById("description");
    var prevButton = document.getElementById("slideshowPrev");
    var nextButton = document.getElementById("slideshowNext");

    // Set the starting image and total number of images
    var currentImageIndex = 1;
    var totalImages = 5;

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
        imgElement.src = "images/" + currentImageIndex + ".png";
		// changes indexing from 1 to indexing from 0
        descElement.textContent = descriptions[currentImageIndex - 1];
    }

    // Event listener for the Previous button
    prevButton.addEventListener("click", function() {
        currentImageIndex = currentImageIndex - 1;
        if (currentImageIndex < 1) {
            currentImageIndex = totalImages; // Wrap to the last image
        }
        updateImageAndDescription();
    });

    // Event listener for the Next button
    nextButton.addEventListener("click", function() {
        currentImageIndex = currentImageIndex + 1;
        if (currentImageIndex > totalImages) {
            currentImageIndex = 1; // Wrap to the first image
        }
        updateImageAndDescription();
    });

    // Initial update when the page loads
    updateImageAndDescription();
});
