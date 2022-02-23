(function ($) {
    document.getElementById('courseID').value = "";

    'use strict';
    try {
        var body = $('body,html');

        var selectSpecial = $('#js-select-special');
        var dropdownSelect = selectSpecial.parent().find('.dropdown-select');

        selectSpecial.on('click', function (e) {
            e.stopPropagation();
            $(this).toggleClass("open");
            dropdownSelect.toggleClass("show");
        });

        dropdownSelect.on('click', function (e) {
            e.stopPropagation();
        });

        body.on('click', function () {
            selectSpecial.removeClass("open");
            dropdownSelect.removeClass("show");
        });

    } catch (e) {
        console.log(e);
    }

})(jQuery);