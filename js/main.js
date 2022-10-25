$(document).ready(function(){

    $("#toolbar-btn-more").click(function() {
        $(this).children(".multi-delete").toggleClass("hide")
    })

    $("body").on('DOMSubtreeModified', "tbody", function() {
        const recordTableCount = $(this).children().length
        if (recordTableCount > 0) {
            $(".content").removeClass("hide")
            $(".content--non-data").addClass("hide")
        } else {
            $(".content").addClass("hide")
            $(".content--non-data").removeClass("hide")
        }
    });
});