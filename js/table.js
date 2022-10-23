import useToastify from './useToastify.js'

$(document).ready(() => {
    const table = $(".content-table")
    const toast = useToastify
    $(".column-edit").each((_, element) => {
        $(element).children(".record__field--delete").click(() => {
            $(element).parent().remove()
            toast.success("Thông báo", "Đã xóa thành công")
        })
    })
})