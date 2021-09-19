$(function () {

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
        $(this)
            .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
            .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });
      
    function tiggleSlide(item){
        $('item').each(function (i) {
            $(this).on('click', function (e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            }) 
        });
    };
    tiggleSlide('.catalog-item__link');
    tiggleSlide('.catalog-item__back');


    $('.carousel__inner').slick({
        spped: 2200,
        responsive: [{
            breakpoint: 1024,
            settings: {
                dots: true,
                arrow: false
            }
        }]
    });

});