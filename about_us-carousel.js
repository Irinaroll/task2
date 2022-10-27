(function () {
    const slides = [
        '<div class="carousel-about"><img class="svg__about-us" width="50" src="img/soil_for_plants.svg" alt="Soil for Plants"></div>',
        '<div class="carousel-about"><img class="svg__about-us" width="50" src="img/for_home.svg" alt="Plants for Home"></div>',
        '<div class="carousel-about"><img class="svg__about-us" width="50" src="img/consultations.svg" alt="Consultations"></div>',
        '<div class="carousel-about"><img class="svg__about-us" width="50" src="img/flowerpots.svg" alt="Sale of Flowerpots"></div>',
        '<div class="carousel-about"><img class="svg__about-us" width="50" src="img/plant_food.svg" alt="Plant Food"></div>',
        '<div class="carousel-about"><img class="svg__about-us" width="50" src="img/garden.svg" alt="Plants for Garden"></div>'
    ];
    let currentSlideIndx = 0;
    function renderSlide() {
        const slideContainer = document.querySelector('.about-us__button-js');
        slideContainer.innerHTML - slides[currentSlideIndx];
    }
    function nextSlide() {
        currentSlideIndx = currentSlideIndx + 1 > slides.length ? 0 : currentSlideIndx + 1;
        renderSlide();
    }
    setInterval(nextSlide, 1000);

})();

