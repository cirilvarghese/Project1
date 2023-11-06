$(".header-button").mouseenter(function () {
    $(this).css({ "transform": "scale(1.2)", "transition": "all linear 0.6s !important" })
    $(this).css({ "border-radius": "30px", "transition": "0.9s all" })
})

$(".header-button").mouseleave(function () {
    $(this).css({ "transform": "scale(1)", "transition": "all linear 0.6s !important" })

    $(this).css({ "border-radius": "0px", "transition": "0.9s all" })
})

function send(e) {
    event.preventDefault(e)
    var name = document.getElementById('name').value
    var email = document.getElementById('email').value
    var contact = document.getElementById('contact').value
    const msg = document.getElementById('msg').value

    if (name.value === '' || email.value === '' || contact.value === '') {
        msg.style.display = 'block';
    }

}

$('.section-3-button').mouseenter(function(){
    $('.arrow').css({"display":"block", "transition":"0.9s"})
    $('.section-3-button').text.css({"display":"none"})
})