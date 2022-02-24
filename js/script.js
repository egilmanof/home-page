
const addSlider = document.querySelector('.today_slider');
document.querySelector('.today_btn-loading').addEventListener('click', function () {

    const html = document.querySelector('.today_slider-card').outerHTML;
    for (let i = 0; i < 3; i++) {
        addSlider.insertAdjacentHTML('beforeend', html)
    }
});









// SLICK
$(document).ready(function(){
    $('.auction_slick').slick({
        dots: true,
        dotsClass: "dots",
        adaptiveHeight: true,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    })
});





