$(document).ready(() => {

// On click function for scrolling to different sections on the page
$("nav").find("a").click(function (event) {
    event.preventDefault()
    var section = $(this).attr("href")
    $("html, body").animate({
        scrollTop: $(section).offset().top
    })
})

// Highlights the menu item that corresponds to the section when the section is being viewed
$('body').scrollspy({ target: '#navigation' })

// Starts the carousel of images for my about me section
$(".carousel").carousel({ interval: 7000 })

})

