$(function(){
    $.ajax({
        url:"common/footer.html",
        type:"get",
        success: function(html) {
            $(html).replaceAll("#footers");
        }
    })
})