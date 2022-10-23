$(document).ready(function(){
    const modalTitle = $(".modal__title")

    $("#btn-add").click(() => {
        modalTitle.html("Thêm hồ sơ Cán bộ, giáo viên")
        $("#modal-add").show()
        $("#input-teacher-code").focus()
    })

    $("#toolbar-btn-more").click(function() {
        $(this).children(".multi-delete").toggleClass("hide")
    })
});