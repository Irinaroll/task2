(function () {
    const slides = [
        '<div class="slide"><img src="img/soil_for_plants.svg" alt="Soil for Plants"></div>',
        '<div class="slide"><img src="img/for_home.svg" alt="Plants for Home"></div>',
        '<div class="slide"><img src="img/consultations.svg" alt="Consultations"></div>',
        '<div class="slide"><img src="img/flowerpots.svg" alt="Sale of Flowerpots"></div>',
        '<div class="slide"><img src="img/plant_food.svg" alt="Plant Food"></div>',
        '<div class="slide"><img src="img/garden.svg" alt="Plants for Garden"></div>'
    ];
    let currentSlideIdx = 0;
    function renderSlide() {
        const slideContainer = document.querySelector('.about-us__button-js');
        slideContainer.innerHTML - slides[currentSlideIdx];
    }
    function nextSlide() {
        currentSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
        renderSlide();
    }
    setInterval(nextSlide, 1000);

})();

