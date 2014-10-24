$(document).ready(function () {

    //Header Transform
    $(function () {
        $('.MainHeader').data('size', 'big');
    });
    $(window).scroll(function () {
        if ($(document).scrollTop() > 0) {
            if ($('.MainHeader').data('size') == 'big') {
                $('.MainHeader').data('size', 'small');
                $('.MainHeader').fadeOut(250, function () {
                    $('.MainHeader').addClass("sticky").css("margin-top", "0px");
                    $(".LogoImage").attr("src", "/Assets/Img/LogoBlack.png");
                    $('.MainHeader').fadeIn(250);
                });
            }
        }
        else {
            if ($('.MainHeader').data('size') == 'small') {
                $('.MainHeader').data('size', 'big');
                $('.MainHeader').fadeOut(250, function () {
                    $('.MainHeader').removeClass("sticky").css("margin-top", "10px");
                    $(".LogoImage").attr("src", "/Assets/Img/LogoWhite.png");
                    $('.MainHeader').fadeIn(250);
                });
            }
        }
    });

    //Triger element animation
    $(window).scroll(function (event) {
        $(".animated").each(function (i, el) {
            var el = $(el);
            if (el.visible(true)) {
                el.addClass("visible");
            }
        });
    });

    //Close PopUp button
    if ($(".ClosePopUp").length > 0) {
        $(".ClosePopUp").click(function (e) {
            $(".PopUp").removeClass("active");
            e.preventDefault();
        });
    }

    //Tooltip
    if ($(".TooltipHolder").length > 0) {
        $(".TooltipHolder").tooltip();
    }

});