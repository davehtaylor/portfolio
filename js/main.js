function thanks() {
    document.getElementsByClassName("overlay")[0].style.display = "block";
    console.log("Summoning thanks overlay");
}

function thanksOff() {
    document.getElementsByClassName("overlay")[0].style.display = "none";
    console.log("Dismissing thanks overlay");
}

// Slide in and out the hamburger menu
document.getElementById("hamburger").addEventListener("click", function() {
    document.getElementsByTagName("nav")[0].style.right = '0';    
});

document.getElementById("closeHamburger").addEventListener("click", function() {
    if (document.documentElement.clientWidth >= 480) {
        document.getElementsByTagName("nav")[0].style.right = '-30vw';
    }
    else {
        document.getElementsByTagName("nav")[0].style.right = '-70vw';
    }
        
});

// Dismiss the hamburger menu when we click one of the links
let navLinks = document.getElementsByClassName("navLinks"); 
for (var i = 0; i <  navLinks.length; i++) {
    navLinks[i].addEventListener("click", function() {
        if (document.documentElement.clientWidth >= 480) {
            document.getElementsByTagName("nav")[0].style.right = '-30vw';
        }
        else {
            document.getElementsByTagName("nav")[0].style.right = '-70vw';
        }
    })
}

// Functions to handle the back to top button on the bottom right
function scrollFunction() {
    let BTTbutton = document.getElementsByClassName("backToTop")[0];

    if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
        BTTbutton.style.display = "block";
    } else {
        BTTbutton.style.display = "none";
    }
}

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function changeBTTarrowColor() {
    let BTTbutton = document.getElementsByClassName("backToTop")[0];
    let skills = document.getElementById("skills");

    if (BTTbutton.getBoundingClientRect().top > skills.getBoundingClientRect().top &&
        BTTbutton.getBoundingClientRect().bottom < skills.getBoundingClientRect().bottom) {

        BTTbutton.style.color = "#F0C562";
    }
    else {
        BTTbutton.style.color = "#464646";
    }
}

window.addEventListener("scroll", function() {
    if (document.documentElement.clientWidth > 768 && 
        document.documentElement.clientHeight > 480) {
        scrollFunction();
        changeBTTarrowColor();
    }
})

$(document).ready(function() { 
    // :)
    console.log("DDDDDDDDDDDDDDDDDDDDDDDDDDDDD\nD                           D\nD     dDDDDDDDDDDDDDD       D\nD      dD           dD      D\nD      dD            DD     D\nD      dD             DD    D\nD      dD             DD    D\nD      dD            DD     D\nD      dD          dD       D\nD     dDDDDDDDDDDDDD        D\nD                           D\nDDDDDDDDDDDDDDDDDDDDDDDDDDDDD\n\n\n IT'S DANGEROUS TO GO ALONE!\n          TAKE ME.\n\n          D\n          A\n          V\n          E\n         ___\n          |\n          d DD\n          dDDDDd\n           DDDD\n           DDDD\n           d  d\n\nIf you're looking for a developer\nfor your next web project, give me\na shout: davehtaylor@me.com ");

    let request;

    // AJAX method for the contact form. Submit the form then put up a 
    // thank you confirmation
    $("body").on("submit", $('#contactForm'), function(event) {
        event.preventDefault(); 

        request = $.ajax({
            url: '/contact.php', 
            type: 'POST', 
            data: $('#contactForm').serialize() 
        });

        request.done(function(data) {
            thanks(); 
            $('#contactForm').trigger("reset");
            console.log("SUCCESS SUBMITTING LOCATION FORM");
        });

        request.fail(function(data) {
            console.error("ERROR SUBMITTING LOCATION FORM");
        });
    });
});