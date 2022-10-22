$(document).ready(function () {

    handleStateSidebar()
    hanldeActiveSidebarItems()
});

const hanldeActiveSidebarItems = () => {
    $(".sidebar-menu-item").each(function () {
        $(this).click(() => {
            $(".item-active").removeClass("item-active")
            $(this).addClass("item-active")
        })
    });
}

const handleStateSidebar = () => {
    $(".btn-navigate").click(() => {
        $(".sidebar").toggleClass("sidebar-mini")

        if ($(".sidebar-mini").length > 0) {
            // state mini side bar 
            $(".logo").hide()
            $(".sidebar-menu-item .item-title").hide()
            $(".sidebar-header").css("justify-content", "center")
        } else {
            // state normal side bar
            setTimeout(() => {
                //transition delay
                
                $(".logo").show()
                $(".sidebar-menu-item .item-title").show()
                $(".sidebar-header").css("justify-content", "space-between")
            }, 300)
        }
    })
}