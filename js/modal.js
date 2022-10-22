$(document).ready(function () {

    const modalTitle = $(".modal__title")

    $("#btn-add").click(() => {
        modalTitle.html("Thêm hồ sơ Cán bộ, giáo viên")
        $(".modal").show()
        $("#input-teacher-code").focus()
    })

    $(".modal-close").click(() => {
        $(".modal").hide()
    })

    $(".modal__btn-close").click(() => {
        $(".modal").hide()
    })

    $(".record__field--edit").each(function () {
        $(this).click(function () {
            modalTitle.html("Sửa hồ sơ Cán bộ, giáo viên")
            $(".modal").show()
        })
    })

});