window.addEventListener('DOMContentLoaded', (event) => {


    /*
    * Elements
    * */

    const elm_home = document.getElementById("home");

    /*
    * Highlight navbar position
    * */

    const classname_highlighted = "highlighted";

    const sethighlightedClass = (ele) => {
        ele.classList.add(classname_highlighted);
    }

    const unsethighlightedClass = (ele) => {
        ele.classList.remove(classname_Highlighted);
    }

    /*
    * Resize header (navbar)
    * */

    const header = document.getElementById("header");
    const logo = document.getElementById("logo");
    const className_headerLarge = "header-large";
    const className_headerSmall = "header-small";
    const className_logoLarge = "logo-large";
    const className_logoSmall = "logo-small";

    const setHeaderLarge = () => {
        header.classList.remove(className_headerLarge);
        header.classList.remove(className_headerSmall);
        header.classList.add(className_headerLarge);
        logo.classList.remove(className_logoLarge);
        logo.classList.remove(className_logoSmall);
        logo.classList.add(className_logoLarge);
    }

    const setHeaderSmall = () => {
        header.classList.remove(className_headerLarge);
        header.classList.remove(className_headerSmall);
        header.classList.add(className_headerSmall);
        logo.classList.remove(className_logoLarge);
        logo.classList.remove(className_logoSmall);
        logo.classList.add(className_logoSmall);
    }

    /*
    * Event on scroll: resize header and highlight navbar
    * */

    window.onscroll = () => {
        let position_y= window.scrollY;
        if (position_y >= 220) {
            setHeaderSmall();
        } else {
            setHeaderLarge();
        }
    }

    /*
    *   Carousel
    * */

    const slideList = document.getElementsByClassName("carousel-item");
    const carouselPrev = document.getElementById("carousel-prev");
    const carouselNext = document.getElementById("carousel-next");
    let slideIdx = 1;

    const showSlides = (n) => {
        if (n > slideList.length) { slideIdx = 1; }
        if (n < 1) { slideIdx = slideList.length; }
        for (let i = 0; i < slideList.length; i++) {
            slideList[i].style.display = "none";
        }
        slideList[slideIdx - 1].style.display = "flex";
    }

    const forwardSlides = (n) => {
        showSlides(slideIdx += n);
    }

    const currentSlide = (n) => {
        showSlides(slideIndex = n);
    }

    showSlides(slideIdx);

    carouselPrev.addEventListener("click", (e) => forwardSlides(-1), false)
    carouselNext.addEventListener("click", (e) => forwardSlides(1), false)
});
