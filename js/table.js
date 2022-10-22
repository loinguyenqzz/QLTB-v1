$(document).ready(() => {
    const table = $(".content-table")

    $(".column-edit").each((_, element) => {
        $(element).children(".record__field--delete").click(() => {
            $(element).parent().remove()
        })
    })
})