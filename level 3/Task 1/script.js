// Get all thumbnail images
var thumbnails = document.querySelectorAll('.thumbnail');

// Get the enlarged image container
var enlargedImageContainer = document.querySelector('.enlarged-image-container');

// Get the enlarged image element
var enlargedImage = document.querySelector('.enlarged-image');

// Add click event listener to each thumbnail image
thumbnails.forEach(function(thumbnail) {
    thumbnail.addEventListener('click', function() {
        // Get the source of the clicked thumbnail image
        var src = this.querySelector('img').src;
        
        // Set the source of the enlarged image
        enlargedImage.src = src;
        
        // Display the enlarged image container
        enlargedImageContainer.classList.add('show');
    });
});

// Add click event listener to the enlarged image container to close it
enlargedImageContainer.addEventListener('click', function() {
    // Hide the enlarged image container when clicked outside the image
    enlargedImageContainer.classList.remove('show');
});
