import useToastify from './useToastify.js'

$(document).ready(() => {
    const table = $(".content-table")
    const toast = useToastify
    $(".column-edit").each((_, element) => {
        // handle click delete field
        $(element).children(".record__field--delete").click(() => {
            $("#modal-delete").show()
            $("#btn-accept-delete").click(() => {
                $(element).parent().remove()
                $("#modal-delete").hide()
                toast.success("Thông báo", "Đã xóa thành công")
            })
        })
        // handle click edit field
        $(element).children(".record__field--edit").click(() => {
            const modalTitle = $(".modal__title")
            modalTitle.html("Sửa hồ sơ Cán bộ, giáo viên")
            $("#modal-add").show()
        })

    })

    // multi delete 
    $(".multi-delete").click(function() {
        const checkboxs = $(".record .m-checkbox")
        $("#modal-delete").show()
            $("#btn-accept-delete").click(() => {
                checkboxs.each((_, checkbox) => {
                    if (checkbox.checked) {
                        checkbox.closest(".record").remove()
                    }
                })
                $("#modal-delete").hide()
                toast.success("Thông báo", "Đã xóa thành công")
            })
    })
})