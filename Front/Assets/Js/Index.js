/// <reference path="../External/jQuery/jquery-2.1.1.min.js" />

$(document).ready(function () {

    // TopBanner Image Height
    var WindowHeight = $(window).height();
    if (WindowHeight > 520) {
        $(".TopBanner .ImageBox").css("height", WindowHeight);
        $(".TopBanner .ImageBox  > div").css("height", WindowHeight);
        $(".TopBanner .ImageOverBox").css("height", WindowHeight);
    }

    //TopBanner Image Blur Effect
    $(window).scroll(function () {
        oVal = ($(window).scrollTop() / ($(window).height() / 2.2));
        $('.ImageBox .blur').css('opacity', oVal);
    });

    //Reminders Slider
    if ($(".RemindersSlider").length > 0) {
        $(".RemindersSlider .Slide").mouseenter(function (e) {
            if (!$(this).hasClass("active")) {
                var slideno = $(this).attr("data-slideno");
                ShowSlide(slideno);
            }
        });
        $(".Reminders .Reminder").click(function (e) {
            var slideno = $(this).attr("data-slideno");
            ShowSlide(slideno);
            e.preventDefault();
        });
        function ShowSlide(slideno) {
            $(".RemindersSlider .Slide").removeClass("active");
            $(".RemindersSlider .Slide .Title").removeClass("active").hide();
            $(".Reminders .Reminder").removeClass("active");
            var Slide = $('.RemindersSlider .Slide[data-slideno="' + slideno + '"]');
            var Span = $('.RemindersSlider .Slide[data-slideno="' + slideno + '"] .Title');
            var Button = $('.Reminders .Reminder[data-slideno="' + slideno + '"]');

            Slide.addClass("active");
            Button.addClass("active");
            Span.fadeIn(500);
            Span.addClass("active");

        }
    }

      





});