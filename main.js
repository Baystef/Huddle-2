const growCurveTop = document.querySelector('.grow-curve__top');
const growCurveBottom = document.querySelector('.grow-curve__bottom');
const usersCurveTop = document.querySelector('.users-curve__top');
const usersCurveBottom = document.querySelector('.users-curve__bottom');
const footerCurveTop = document.querySelector('.footer-curve__top');

function switchImage(width) {
    if (width.matches) {
        growCurveTop.src = 'images/bg-section-top-desktop-1.svg';
        growCurveBottom.src = 'images/bg-section-bottom-desktop-1.svg';
        usersCurveTop.src = 'images/bg-section-top-desktop-2.svg';
        usersCurveBottom.src = 'images/bg-section-bottom-desktop-2.svg';
        footerCurveTop.src = 'images/bg-footer-top-desktop.svg';
    } else {
        growCurveTop.src = 'images/bg-section-top-mobile-1.svg';
        growCurveBottom.src = 'images/bg-section-bottom-mobile-1.svg';
        usersCurveTop.src = 'images/bg-section-top-mobile-2.svg';
        usersCurveBottom.src = 'images/bg-section-bottom-mobile-2.svg';
        footerCurveTop.src = 'images/bg-footer-top-mobile.svg';
    }
}

let width = window.matchMedia("(min-width: 40rem)");

switchImage(width);

// width.addEventListener(switchImage);