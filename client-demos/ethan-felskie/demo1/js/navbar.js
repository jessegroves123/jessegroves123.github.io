var navbarIsOpen = false;
var galleryIsOpen = false;
var navbarIcon = document.getElementById('navbar-widget');
var navbar = document.getElementById('navbar-wrapper');
var screenCover = document.getElementById('screen-cover');
var galleryDropdown = document.getElementById('navbuttons-gallery');

function openNavbar() {
    navbarIcon.style.left = '100%';
    navbarIcon.style.boxShadow = '#000 5px 5px 20px -5px';
    screenCover.style.opacity = '70%';
    screenCover.style.pointerEvents = 'auto'
    navbar.style.left = '0'
    navbarIsOpen = true;
}

function closeNavbar() {
    navbarIcon.style.left = '350px';
    navbarIcon.style.boxShadow = 'color-mix(in srgb, var(--fg-colour), rgb(20, 20, 20)) 5px 5px 20px -5px';
    screenCover.style.opacity = '0';
    screenCover.style.pointerEvents = 'none'
    navbar.style.left = '-350px'
    navbarIsOpen = false;
}

function toggleNavbar() {
    if (navbarIsOpen) closeNavbar();
    else openNavbar();
}

function openGallery() {
    galleryIsOpen = true;
}
function closeGallery() {
    galleryIsOpen = false;
}
function toggleGallery() {
    if (galleryIsOpen) closeGallery();
    else openGallery();
}