$(document).ready(function(){
    $(".mask").css({
        "height": ($(".item-gallery").height() - $(".title-on-item").height()) + "px"
    });    

    $(".item-gallery").css({
        "height": $(".item-gallery").width() + "px"
    });
});