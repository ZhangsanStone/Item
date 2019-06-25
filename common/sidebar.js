$(function(){
    $.ajax({
        url:"common/sidebar.html",
        type:"get",
        success: function(html) {
            $(html).replaceAll("#sidebar");
        }
    })
})