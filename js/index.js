let currentScrollPosition = 0;
    const scrollAmount = 300; // Adjust this value to control the scroll amount
    const slider = document.querySelector('.slider-content');
    const sliderContainer = document.querySelector('.slider-container');

    // Function to scroll the slider
    function scrollSlider(direction) {
        const maxScroll = slider.scrollWidth - sliderContainer.clientWidth;
        currentScrollPosition += direction * scrollAmount;

        if (currentScrollPosition < 0) {
            currentScrollPosition = 0;
        } else if (currentScrollPosition > maxScroll) {
            currentScrollPosition = maxScroll;
        }

        slider.style.transform = `translateX(-${currentScrollPosition}px)`;
    }

    // Automatic scrolling
    function autoScroll() {
        const maxScroll = slider.scrollWidth - sliderContainer.clientWidth;
        currentScrollPosition += scrollAmount;

        if (currentScrollPosition > maxScroll) {
            currentScrollPosition = 0;
        }

        slider.style.transform = `translateX(-${currentScrollPosition}px)`;
    }

    // Set the interval for automatic scrolling
    setInterval(autoScroll, 3000); // Adjust the time interval (in milliseconds) as needed

    // Function to initialize the map
    function initMap() {
        const location = { lat: -6.743673, lng: 108.453127 }; // Coordinates of Cirebon, Indonesia
        const map = new google.maps.Map(document.getElementById('map'), {
            zoom: 10,
            center: location
        });
        new google.maps.Marker({
            position: location,
            map: map
        });
    }

    document.addEventListener("DOMContentLoaded", function() {
        if (typeof google !== 'undefined' && typeof google.maps !== 'undefined') {
            initMap();
        }
    });