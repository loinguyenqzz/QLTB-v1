$(document).ready(() => {
    $(".multi-select__icon--show").each(function() {
        $(this).click(() => {
            $(this).siblings(".multi-select__wrap").toggleClass("hide")
        })
    })

    $(".multi-select__wrap .m-checkbox").each(function() {
        $(this).click(function() {
            const isCheck = $(this)[0].checked
            const tagNode = $(this).siblings()[0]
            const tagValue = $(tagNode).text()
            const tagId = `tag-${this.id}`

            if (this.id == "multi-select-0") {
                if(isCheck) {
                    $(".multi-select__option .m-checkbox").each(function() {
                        const tagNode = $(this).siblings()[0]
                        const tagValue = $(tagNode).text()
                        const tagId = `tag-${this.id}`

                        if (!$(this)[0].checked) {
                            addTag(tagId, tagValue)
                            handleClickRemoveTag($('#' + tagId))
                            $(this)[0].checked = true
                        }
                    })
                } else {
                    $(".multi-select__option .m-checkbox").each(function() {
                        const tagId = `tag-${this.id}`
                        $('#' + tagId).remove()
                        $(this)[0].checked = false
                    })
                }
            } else {
                if(isCheck) {
                    addTag(tagId, tagValue)
                    handleClickRemoveTag($('#' + tagId))
                } else {
                    $("#multi-select-0")[0].checked = false
                    $('#' + tagId).remove()
                }
            }

            
        })
    })

    const addTag = (tagId, tagValue) => {
        $(".tag-wrap")
        .append(`<li id=${tagId} class="tag-picked">${tagValue}
        <div class="tag-picked__btn--close"></div>
        </li>`)
    }

    const handleClickRemoveTag = (tagNode) => {
        $(tagNode.children(".tag-picked__btn--close")).click(function() {
                const checkboxId = $(tagNode)[0].id.slice(4)

                console.log(checkboxId);

                //set checkbox option
                $('#' + checkboxId)[0].checked = false

                // remove tag element
                tagNode.remove()

                // set checkbox all
                $("#multi-select-0")[0].checked = false
            })
    }

})