window.onload = function () {

    // $(window).load(function(){
    //     $('.slide-img').liCover({
    //         parent: $(window),
    //         position:'absolute',
    //         veticalAlign:'middle',
    //         align:'center'
    //     })
    // });


    var boxSlider = $(".box-mainSlider");

    boxSlider.slick({

        // autoplay: true,

        autoplay: false,
        // draggable:false,

        autoplaySpeed: 4500,
        centerPadding: '0',
        dots: true,
        arrows: false,
        pauseOnDotsHover: true,

        responsive: [
            {
                breakpoint: 769,
                settings: {
                    dots: false
                }
            },
            {
                breakpoint: 320,
                settings: {
                    dots: false
                }
            }
        ]
    });

    var searchButton = $(".search-button");
    var searchBlock = $(".search_form");


    var menuButton = $(".navigation-button");
    var menuBlock = $(".box-navigation__items");


    menuButton.click(function () {

        if (menuBlock.is(':visible')) {

            menuBlock.slideUp();
        } else {

            menuBlock.slideDown();
        }
    });
    searchButton.click(function () {

        if (searchBlock.is(':visible')) {
            searchBlock.slideUp();
        } else {
            searchBlock.slideDown();
        }
    });

    ///////// Slider SNOWBOARDS

    var boxSnowboards = $(".sliderSnowboards");

    boxSnowboards.slick({
        centerMode: true,
        infinite: true,
        centerPadding: '60px',
        slidesToShow: 3,
        speed: 500,

        responsive: [{
            breakpoint: 1138,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '45px',
                slidesToShow: 2
            }
        }, {
            breakpoint: 768,
            settings: {

                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 2
            }
        }, {
            breakpoint: 586,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '30px',
                slidesToShow: 1
            }
        }]
    });


    $(window).load(function () {
        $('.wrappenBoardman').liCover({
            parent: $('.box-aboutCompany'),
            position: 'absolute',
            veticalAlign: 'middle',
            align: 'center'
        });
    });




    $("[data-fancybox]").fancybox({
        beforeShow: function () {
            $("body *:not(.fancybox-overlay, .fancybox-overlay *)").addClass("blur");
        },
        afterClose: function () {
            $("body *:not(.fancybox-overlay, .fancybox-overlay *)").removeClass("blur");
        },
        helpers : {
            overlay: {
                opacity: 0.8,
                css: {'background-color': '#ff0000'}
            }
        }
    });


};