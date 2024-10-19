var tablinks = document.getElementsByClassName('tab-links');
var tabcontent = document.getElementsByClassName('tab-contents');

function opentab(tabname) {
    // Hide all tab contents
    for (var i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = 'none';
        tabcontent[i].classList.remove('active-tab');
    }

    // Remove active-link from all tab links
    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove('active-link');
    }

    // Show the clicked tab and add active-link to clicked tab
    document.getElementById(tabname).style.display = 'block';
    document.getElementById(tabname).classList.add('active-tab');
    event.currentTarget.classList.add('active-link');
}

// Show the button when the user scrolls down 100px from the top
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    const scrollBtn = document.getElementById("scrollBtn");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollBtn.style.display = "block"; // Show the button
    } else {
        scrollBtn.style.display = "none"; // Hide the button
    }
}

// Scroll to the top when the button is clicked
function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}