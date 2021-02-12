function swipeEventOnSlider(mySwiper) {
    const swiperMenuItems = document.querySelectorAll('.slider__content__info');
    mySwiper.on('slideChangeTransitionStart', () => {
        swiperMenuItems.forEach(swiperMenuItem => {
            swiperMenuItem.classList.remove('transit');
        })
        swiperMenuItems[(mySwiper.activeIndex)].classList.add('transit');
    })
}

function init() {
    const mySwiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        initialSlide: 1,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });


    const swiperMenuItems = document.querySelectorAll('.slider__content__info');
    const prevImage = document.querySelector('.slide__prev .slider__content__image img')
    swiperMenuItems.forEach(swiperMenuItem => {
        swiperMenuItem.classList.remove('transit');
    })
    swiperMenuItems[(mySwiper.activeIndex)].classList.add('transit');

    swipeEventOnSlider(mySwiper);
}

init();
