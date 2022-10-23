$(document).ready(function () {

    $(".modal-close").click(() => {
        $(".modal").hide()
    })

    $(".modal__btn-close").click(() => {
        $(".modal").hide()
    })

    $("#isWorking").click(function() {
        $("#quit-work").css("visibility", this.checked ? "hidden" : "visible" )
    }) 

    $("#input-teacher-code").change((e) => {
        $("#display-teacher-code").text(e.target.value)
    })

    $("#input-teacher-name").change((e) => {
        $("#display-teacher-name").text(e.target.value)
    })
});