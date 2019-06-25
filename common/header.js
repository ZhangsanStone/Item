//包含页头相关的所有代码
$(function () {
    $.ajax({
        url: "common/header.html",
        type: "get",
        success: function (html) {
            $(html).replaceAll("#headers");
            $(`<script src="js/active.js"></script>`).appendTo("head")
        }
    })
})