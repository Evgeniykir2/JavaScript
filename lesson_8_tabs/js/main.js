$(document).ready(function() {
    $("#secondblock").hide();
    $("#thirdblock").hide();
    $(".tabs--item").on("click", function(e) {
        console.log($(this));
        $(this).siblings().removeClass("active");
        $(this).addClass("active");
        let ind = $(".tabs--item").index(this);
        console.log(ind);
        if (ind == 0) {
            $("#secondblock").hide();
            $("#thirdblock").hide();
            $("#firstblock").show();
        } else if (ind == 1) {

            $("#thirdblock").hide();
            $("#firstblock").hide();
            $("#secondblock").show();
        } else if (ind == 2) {

            $("#firstblock").hide();
            $("#secondblock").hide();
            $("#thirdblock").show();
        }
    });
});