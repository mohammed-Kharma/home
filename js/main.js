$(function(){
    $(".list ul li").click(function(){
        $(".list ul li").removeClass("active");
        $(this).addClass("active");
    });
});