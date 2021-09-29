window.addEventListener('DOMContentLoaded', (event) => {
  const demoAnchor = document.getElementById("demo");
  const questionAnchor = document.getElementById("question");
  const aboutAnchor = document.getElementById("about");
  const languageAnchor = document.getElementById("language");
  const communityAnchor = document.getElementById("community");
  const contactAnchor = document.getElementById("contact");

  const demoHeader = document.getElementById("header-demo");
  const questionHeader = document.getElementById("header-question");
  const languageHeader = document.getElementById("header-language");
  const contactHeader = document.getElementById("header-contact");
  const communityHeader = document.getElementById("header-community");
  const aboutHeader = document.getElementById("header-about");

  const positionIndicatorClassName = "position-indicator";

  const setPositionIndicatorClass = (ele) => {
    ele.classList.add(positionIndicatorClassName)
  }

  const unsetPositionIndicatorClass = (ele) => {
    ele.classList.remove(positionIndicatorClassName)
  }

  const unsetPositionIndicatorClassForAll = () => {
    unsetPositionIndicatorClass(contactHeader)
    unsetPositionIndicatorClass(aboutHeader)
    unsetPositionIndicatorClass(communityHeader)
    unsetPositionIndicatorClass(languageHeader)
    unsetPositionIndicatorClass(demoHeader)
    unsetPositionIndicatorClass(questionHeader)
  }

  const header = document.getElementById("header")
  const headerLargeClassName = "header-large"
  const headerSmallClassName = "header-small"

  const setHeaderLarge = () => {
    header.classList.remove(headerLargeClassName)
    header.classList.remove(headerSmallClassName)
    header.classList.add(headerLargeClassName)
  }

  const setHeaderSmall = () => {
    header.classList.remove(headerLargeClassName)
    header.classList.remove(headerSmallClassName)
    header.classList.add(headerSmallClassName)
  }

  window.onscroll = () => {
    let positionY = document.documentElement.scrollTop || document.body.scrollTop
    positionY = positionY + 80;
    let aboutAnchorY = aboutAnchor.offsetTop
    let languageAnchorY = languageAnchor.offsetTop
    let communityAnchorY = communityAnchor.offsetTop
    let contactAnchorY = contactAnchor.offsetTop
    let demoAnchorY = demoAnchor.offsetTop
    let questionAnchorY = questionAnchor.offsetTop

    if (positionY >= 220) {
      setHeaderSmall()
    } else {
      setHeaderLarge()
    }

    unsetPositionIndicatorClassForAll()

    if (positionY >= contactAnchorY) {
      setPositionIndicatorClass(contactHeader)
      return
    } else if (positionY >= demoAnchorY) {
      setPositionIndicatorClass(demoHeader)
      return
    } else if (positionY >= communityAnchorY) {
      setPositionIndicatorClass(communityHeader)
      return
    } else if (positionY >= languageAnchorY) {
      setPositionIndicatorClass(languageHeader)
      return
    } else if (positionY >= aboutAnchorY) {
      setPositionIndicatorClass(aboutHeader)
      return
    } else if (positionY >= questionAnchorY) {
      setPositionIndicatorClass(questionHeader)
      return
    }
  }

  const slides = document.getElementsByClassName("carousel-item")
  const carouselPrev = document.getElementById("carousel-prev")
  const carouselNext = document.getElementById("carousel-next")
  let slideIndex = 1;

  const showSlides = (n) => {
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "flex";
  }

  const plusSlides = (n) => {
    showSlides(slideIndex += n);
  }

  const currentSlide = (n) => {
    showSlides(slideIndex = n);
  }

  showSlides(slideIndex);

  carouselPrev.addEventListener("click", (e) => plusSlides(-1), false)
  carouselNext.addEventListener("click", (e) => plusSlides(1), false)

  const questionGo0 = document.getElementById("question-go-0")
  const questionDetail0 = document.getElementById("question-detail-0")
  const questionClose0 = document.getElementById("question-close-0")

  questionGo0.addEventListener("click", (e) => {
    questionDetail0.style.display = "block";
  }, false)

  questionClose0.addEventListener("click", (e) => {
    questionDetail0.style.display = "none";
  }, false)

  const questionGo1 = document.getElementById("question-go-1")
  const questionDetail1 = document.getElementById("question-detail-1")
  const questionClose1 = document.getElementById("question-close-1")

  questionGo1.addEventListener("click", (e) => {
    questionDetail1.style.display = "block";
  }, false)

  questionClose1.addEventListener("click", (e) => {
    questionDetail1.style.display = "none";
  }, false)

  const questionGo2 = document.getElementById("question-go-2")
  const questionDetail2 = document.getElementById("question-detail-2")
  const questionClose2 = document.getElementById("question-close-2")

  questionGo2.addEventListener("click", (e) => {
    questionDetail2.style.display = "block";
  }, false)

  questionClose2.addEventListener("click", (e) => {
    questionDetail2.style.display = "none";
  }, false)

  const questionGo3 = document.getElementById("question-go-3")
  const questionDetail3 = document.getElementById("question-detail-3")
  const questionClose3 = document.getElementById("question-close-3")

  questionGo3.addEventListener("click", (e) => {
    questionDetail3.style.display = "block";
  }, false)

  questionClose3.addEventListener("click", (e) => {
    questionDetail3.style.display = "none";
  }, false)

  const questionGo4 = document.getElementById("question-go-4")
  const questionDetail4 = document.getElementById("question-detail-4")
  const questionClose4 = document.getElementById("question-close-4")

  questionGo4.addEventListener("click", (e) => {
    questionDetail4.style.display = "block";
  }, false)

  questionClose4.addEventListener("click", (e) => {
    questionDetail4.style.display = "none";
  }, false)
});
