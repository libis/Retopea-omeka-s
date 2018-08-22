(function($) {
    function fixIframeAspect() {
        $('iframe').each(function () {
            var aspect = $(this).attr('height') / $(this).attr('width');
            $(this).height($(this).width() * aspect);
        });
    }

    function framerateCallback(callback) {
        var waiting = false;
        callback = callback.bind(this);
        return function () {
            if (!waiting) {
                waiting = true;
                window.requestAnimationFrame(function () {
                    callback();
                    waiting = false;
                });
            }
        }
    }

    $(document).ready(function() {
        $('header nav ul').addClass('closed');

        $('.menu-btn').click(function() {
             $('header nav ul').toggleClass('open').toggleClass('closed');
             console.log($('.menu-btn').text());
             if($('.menu-btn').text() == '\u2630'){
               $('.menu-btn').text('\u2715');
             }else{
               $('.menu-btn').text('\u2630');
             }
        });

        // Maintain iframe aspect ratios
        $(window).on('load resize', framerateCallback(fixIframeAspect));
        fixIframeAspect();
    });
})(jQuery);
