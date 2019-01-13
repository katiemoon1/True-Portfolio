$(document).ready(() => {

// Initializing AOS library
AOS.init({
    duration: 1200
})

// Highlights the menu item that corresponds to the section when the section is being viewed
$('body').scrollspy({ target: '#navigation' })

})