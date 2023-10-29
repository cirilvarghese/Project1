$(".header-button").mouseenter(function(){
    $(this).css({"transform":"scale(1.2)", "transition": "all linear 0.6s !important"})
    $(this).css({"border-radius":"30px", "transition": "0.9s all"})
})

$(".header-button").mouseleave(function(){
    $(this).css({"transform":"scale(1)", "transition": "all linear 0.6s !important"})

    $(this).css({"border-radius":"0px", "transition": "0.9s all"})
})

