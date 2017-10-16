$(function() {
    //Simple filter controls
    $('.photos__grid__choice .choice-item--top').click(function() {
        $('.photos__grid__choice .choice-item--filter').removeClass('filter_active');
        $(this).next().addClass('filter_active');
    });

});