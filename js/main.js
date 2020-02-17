function showHamburger() {
    document.getElementsByTagName("nav")[0].style.display = "block";
}

function dismissHamburger() {
    document.getElementsByTagName("nav")[0].style.display = "none";
}

// Dismiss the hamburger menu when we click one of the links
let navLinks = document.getElementsByClassName("navLinks"); 

for (var i = 0; i <  navLinks.length; i++) {
    navLinks[i].addEventListener("click", function() {
        dismissHamburger();
    })
}

$(document).ready(function() { 
    let request;

    // AJAX methods for the find location form
    $("body").on("submit", $('#contactForm'), function(event) {
        event.preventDefault(); 

        request = $.ajax({
            url: '/contact.php', 
            type: 'POST', 
            data: $('#contactForm').serialize() 
        });

        request.done(function(data) {
            // thanks(); 
            $('#contactForm').trigger("reset");
            console.log("SUCCESS SUBMITTING LOCATION FORM");
        });

        request.fail(function(data) {
            console.error("ERROR SUBMITTING LOCATION FORM");
        });
    });
});