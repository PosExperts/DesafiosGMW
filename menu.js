document.addEventListener('DOMContentLoaded', function () {
    const posterList = document.getElementById('posterList');
    const posterContainer = document.getElementById('posterContainer');
    const focusedPoster = document.getElementById('focusedPoster');
    const title = document.getElementById('title');
    const description = document.getElementById('description');
    const closeButton = document.getElementById('closeButton');
    const playButton = document.getElementById('playButton');

    let isTransitioning = false;

    posterList.addEventListener('click', function (event) {
        if (isTransitioning) return;

        const selectedPoster = event.target.closest('li');

        if (selectedPoster) {
            const posterTitle = selectedPoster.getAttribute('data-title');
            const posterDescription = selectedPoster.getAttribute('data-description');
            const posterImageSrc = selectedPoster.querySelector('img').src;
            const posterPageURL = selectedPoster.getAttribute('data-url'); // Retrieve the URL

            // Display the title, description, close button, and focused poster container
            title.textContent = posterTitle;
            description.textContent = posterDescription;
            posterContainer.style.display = 'block';

            // Preload the image and set it as the source after loading
            const preloadImage = new Image();
            preloadImage.onload = function () {
                focusedPoster.src = posterImageSrc;

                // Hide all posters without fade-out effect
                const allPosters = document.querySelectorAll('#posterList li');
                isTransitioning = true;

                allPosters.forEach(poster => {
                    poster.style.display = 'none';
                });

                isTransitioning = false;
            };
            preloadImage.src = posterImageSrc;

            // Show the "Play" button and set its URL
            playButton.style.display = 'block';
            playButton.setAttribute('data-url', posterPageURL);
        }
    });

    closeButton.addEventListener('click', function () {
        if (isTransitioning) return;

        // Clear the title, description, show all posters, and hide the focused poster and container
        title.textContent = '';
        description.textContent = 'Click on a poster to view its description.';
        posterContainer.style.display = 'none';

        const allPosters = document.querySelectorAll('#posterList li');

        // Show all posters without fade-out effect
        allPosters.forEach(poster => {
            poster.style.display = 'block';
        });

        // Reset the transitioning flag
        isTransitioning = false;
    });

    playButton.addEventListener('click', function () {
        if (isTransitioning) return;

        const posterPageURL = playButton.getAttribute('data-url');

        if (posterPageURL) {
            // Redirect to the poster page
            window.location.href = posterPageURL;
        }
    });
});
