"use strict";

// This block will run when the DOM is loaded (once elements exist), it's really only necessary as a IE 9 fallback for lack of support for defer
window.addEventListener("DOMContentLoaded", () => {

    const logoLink = document.querySelector('.logo');

    const homeLink = document.querySelector('#home-link');
    const aboutLink = document.querySelector('#about-link');
    const portfolioLink = document.querySelector('#portfolio-link');
    const contactLink = document.querySelector('#contact-link');

    const viewPortfolioBtn = document.querySelector('#view-portfolio-btn');

    const heroSection = document.querySelector('#hero');
    const aboutMeSection = document.querySelector('#about');
    const portfolioSection = document.querySelector('#portfolio');

    //Move to home
    if (logoLink != null && heroSection != null) {

        logoLink.addEventListener('click', (event) => {
            event.preventDefault();
            heroSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    }

    if (homeLink != null && heroSection != null) {

        homeLink.addEventListener('click', (event) => {
            event.preventDefault();
            heroSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    }

    //To move to the About section

    if (aboutLink != null && heroSection != null) {

        aboutLink.addEventListener('click', (event) => {
            event.preventDefault();
            const heroEndPosition = heroSection.offsetTop + heroSection.offsetHeight - 50;
            window.scrollTo({
                top: heroEndPosition,
                behavior: 'smooth'
            });
        });
    }
    //Portfolio link
    if (portfolioLink != null && aboutMeSection != null) {
        portfolioLink.addEventListener('click', (event) => {
            event.preventDefault();
            const aboutMeEndPosition = aboutMeSection.offsetTop + aboutMeSection.offsetHeight - 50;
            window.scrollTo({
                top: aboutMeEndPosition,
                behavior: 'smooth'
            });
        });

    }


    //To move to the portfolio section 
    if (viewPortfolioBtn != null && aboutMeSection != null) {
        viewPortfolioBtn.addEventListener('click', (event) => {
            event.preventDefault();
            const aboutMeEndPosition = aboutMeSection.offsetTop + aboutMeSection.offsetHeight - 50;

            window.scrollTo({
                top: aboutMeEndPosition,
                behavior: 'smooth'
            });
        });
    }

    //Move to contact
    if (contactLink != null && portfolioSection != null) {
        contactLink.addEventListener('click', (event) => {
            event.preventDefault();
            const portfolioEndPosition = portfolioSection.offsetTop + portfolioSection.offsetHeight - 50;

            window.scrollTo({
                top: portfolioEndPosition,
                behavior: 'smooth'
            });
        });
    }

    var images = [];

    for (var i = 1; i <= 14; i++) {
        images.push("img/selfi-" + i + ".png");
    }

    var currentImageIndex = 0;
    var imageElement = document.querySelector(".hero-image img"); // get the image element

    function changeImage() {
        // Fade out the current image
        imageElement.style.opacity = 0;

        // Wait for the fade out transition to complete
        setTimeout(function () {
            // Change the source of the image to the next image
            currentImageIndex = (currentImageIndex + 1) % images.length;
            imageElement.src = images[currentImageIndex];

            // Fade in the new image
            imageElement.style.opacity = 1;
        }, 1000);
    }

    // Change the image every 2 seconds
    setInterval(changeImage, 2000);

});