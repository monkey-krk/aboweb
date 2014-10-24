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

    //Popup Open
    $(".BtnRegister, .BtnRegisterFooter, .BtnGetStarted").click(function (e) {
        $(".PopUp.CreateAccount").addClass("active");
        e.preventDefault();
    });
    $(".BtnLogIn, .BtnLogInFooter").click(function (e) {
        $(".PopUp.LogIn").addClass("active");
        e.preventDefault();
    });
    $(".BtnRegisterPopup").click(function (e) {
        $(".PopUp.LogIn").removeClass("active");
        $(".PopUp.CreateAccount").addClass("active");
        e.preventDefault();
    });
    $(".BtnLoginPopup").click(function (e) {
        $(".PopUp.CreateAccount").removeClass("active");
        $(".PopUp.LogIn").addClass("active");
        e.preventDefault();
    });
    $(".BtnCreditCard").click(function (e) {
        $(".PopUp.CreditCard").addClass("active");
        e.preventDefault();
    });
    $(".BtnWireTransfer").click(function (e) {
        $(".PopUp.Sepa").addClass("active");
        e.preventDefault();
    });
    $(".BtnWatchDemo").click(function (e) {
        $(".PopUp.WatchDemo").addClass("active");
        $('.WatchDemoVideo')[0].play();
        e.preventDefault();
    });
    $(".CloseWatchDemoPopUp").click(function (e) {
        $('.WatchDemoVideo')[0].pause();
        $(".PopUp.WatchDemo").removeClass("active");
        e.preventDefault();
    });

});