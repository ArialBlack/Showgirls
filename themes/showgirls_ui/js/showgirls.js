var showgirls = window.showgirls || {};

define(['jquery'], function($) {
    function isTouchDevice() {
        return 'ontouchstart' in window             // works on most browsers
               || (navigator.maxTouchPoints > 0)    // for IE10 and IE11
               || (navigator.msMaxTouchPoints > 0);
    };

    function Showgirls() {
        /**
         * Conditional script loading.
         * @key is a selector,
         * @value is a module identifier
         */
        var conditionalLoad = {
            //'selector': ['script-filename']
            '.fullscreen-cover, .fh': ['modules/fullscreen-cover'],
        };

        require([
            'bootstrap',
           // 'small-permanent-tasks'
        ]);

        $.each(conditionalLoad, function(selector, module) {
            if ($(selector).length) {
                require(module);
            }
        });

        // SVG <use> support for IE
        require(['svg4everybody'], function() {
            svg4everybody();
        });

        $('body').addClass(isTouchDevice() ? 'touch' : 'non-touch');
    }

    return new Showgirls();
});
