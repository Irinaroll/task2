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
$(document).ready(function(){
    let sliderPosition = 0; // начальная позиция дорожки
    const sliderContainer = $('.slider-container');
    const sliderTrack = $('.slider-track');
    const sliderItem = $('.slider-item');
    const sliderItemWidth = sliderItem.width();
    const sliderContainerWidth = sliderContainer.width();
    // ширина дорожки определяется как разница между шириной всех картинок и шириной контейнера
    // разница нужна для того, чтобы прокрутка не проводилась дальше последнего фото
    const sliderTrackWidth = sliderItem.length * sliderItemWidth - sliderContainerWidth; 
    const sliderButtonPrev = $('.arrow-left');
    const sliderButtonNext = $('.arrow-right');

    sliderButtonPrev.on('click', function(){
        sliderPosition += sliderItemWidth; // увеличиваем отступ при нажатии назад

        // поскольку отступ будет всегда отрицательный, нужно сравнивать с нулем, 
        // чтобы исключить пустые прокрутки
        if (sliderPosition > 0) {
            sliderPosition = 0;
        }
        sliderTrack.css('transform', `translateX(${sliderPosition}px`);
        sliderButtons();
    });

    sliderButtonNext.on('click', function(){
        sliderPosition -= sliderItemWidth;

        // так как отступы отрицательные, нужно сравнить с отрицательной длинной дорожки, 
        // чтобы исключить пустые прокрутки
        if (sliderPosition < -sliderTrackWidth) {
            sliderPosition = -sliderTrackWidth;
        }
        sliderTrack.css('transform', `translateX(${sliderPosition}px`);
        sliderButtons();
    });


    // скрываем кнопки prev/next, когда нельзя больше крутить
    const sliderButtons = () => {
        if (sliderPosition == 0) {
            sliderButtonPrev.hide();
        } else {
            sliderButtonPrev.show();
        }
        if (sliderPosition == -sliderTrackWidth) {
            sliderButtonNext.hide();
        } else {
            sliderButtonNext.show();
        }
    };
    sliderButtons();
});

