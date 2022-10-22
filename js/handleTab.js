$(document).ready(() => {
    $("#btn-save").keydown((e) => {
        const code = e.keyCode || e.which
        if (code == 9) {
            e.preventDefault();
            $("#input-teacher-code").focus()
        }
    })
})