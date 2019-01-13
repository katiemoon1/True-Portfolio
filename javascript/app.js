$(document).ready(() => {

// Highlights the menu item that corresponds to the section when the section is being viewed
$('body').scrollspy({ target: '#navigation' })

// Loading spinner
$(window).on('load', function() {
    $('#loading').fadeOut('slow', function() {
        $(this).remove()
    })
})

})