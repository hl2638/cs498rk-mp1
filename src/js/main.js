window.addEventListener('DOMContentLoaded', (event) => {


    const resizeHeader = (positionY) =>{
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

        if(positionY >= 140){
            setHeaderSmall();
        }else{
            setHeaderLarge();
        }
    }

    const positionIndicator = (positionY) =>{

        /*
        * Highlight navbar position
        * */


        const elm_home = document.getElementById("home");
        const elm_whois = document.getElementById("whois");
        const elm_members = document.getElementById("members");
        const elm_songs = document.getElementById("songs");
        const elm_demoVideo = document.getElementById("demoVideo");

        const header_home = document.getElementById("header-home");
        const header_whois = document.getElementById("header-whois");
        const header_members = document.getElementById("header-members");
        const header_songs = document.getElementById("header-songs");
        const header_demoVideo = document.getElementById("header-demoVideo");

        const classname_highlighted = "highlighted";

        const setHighlightedClass = (ele) => {
            // console.log("setHighlightedClass", ele);
            ele.classList.add(classname_highlighted);
        }

        const unsetHighlightedClass = (ele) => {
            // console.log("setHighlightedClass", ele);
            ele.classList.remove(classname_highlighted);
        }

        const unsetHighlightedClassAll = () => {
            unsetHighlightedClass(header_home);
            unsetHighlightedClass(header_whois);
            unsetHighlightedClass(header_members);
            unsetHighlightedClass(header_songs);
            unsetHighlightedClass(header_demoVideo);
        }

        let homeY = elm_home.offsetTop;
        let whoisY = elm_whois.offsetTop;
        let membersY = elm_members.offsetTop;
        let songsY = elm_songs.offsetTop;
        let demoVideoY = elm_demoVideo.offsetTop;
        let documentHeight = document.body.scrollHeight || document.body.offsetHeight;


        unsetHighlightedClassAll();


        if(positionY+window.innerHeight >= documentHeight-2){
            setHighlightedClass(header_demoVideo);
        }
        else if (positionY+window.innerHeight*0.1 >= demoVideoY) {
            setHighlightedClass(header_demoVideo);
        } else if (positionY+window.innerHeight*0.1 >= songsY) {
            setHighlightedClass(header_songs);
        } else if (positionY+window.innerHeight*0.1 >= membersY) {
            setHighlightedClass(header_members);
        } else if (positionY+window.innerHeight*0.1 >= whoisY) {
            setHighlightedClass(header_whois);
        } else if (positionY+window.innerHeight*0.1 >= homeY) {
            setHighlightedClass(header_home);
        }
    }


    /*
    * Event on scroll: resize header and highlight navbar
    * */

    window.onscroll = () => {
        let positionY= window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
        positionY;
        // console.log(window.innerHeight);
        // console.log(positionY);
        resizeHeader(positionY);
        positionIndicator(positionY);
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

    carouselPrev.addEventListener("click", (e) => forwardSlides(-1), false);
    carouselNext.addEventListener("click", (e) => forwardSlides(1), false);

    /*
    *   Modal
    * */

    const ayase = document.getElementById("ayase-button");
    const detailsAyase = document.getElementById("details-ayase");
    const detailsCloseAyase = document.getElementById("details-close-ayase");


    ayase.addEventListener("click", (e) => {
        detailsAyase.style.display = "block";
    });

    detailsCloseAyase.addEventListener("click", (e) => {
        detailsAyase.style.display = "none";
    });

    const ikura = document.getElementById("ikura-button");
    const detailsIkura = document.getElementById("details-ikura");
    const detailsCloseIkura = document.getElementById("details-close-ikura");


    ikura.addEventListener("click", (e) => {
        detailsIkura.style.display = "block";
    });

    detailsCloseIkura.addEventListener("click", (e) => {
        detailsIkura.style.display = "none";
    });
});
