"use strict"

const img_wrapper = document.querySelector(".img--wrapper")
const right_button = document.querySelector(".right")
const left_button = document.querySelector(".left")
const images_value = document.querySelector(".images-value")
const images = [
    '/assets/images/top-section--bg1.jpg',
    '/assets/images/top-section--bg2.jpg',
    '/assets/images/top-section--bg3.jpg',
    '/assets/images/top-section--bg4.jpg',
];

let currentIndex = 0;

function changeBackgroundImage() {
    img_wrapper.style.background = "linear-gradient(to bottom, transparent calc(50% - 30px), transparent calc(50% + 30px), rgba(40,39,42,1) calc(70% + 160px), rgba(40,39,42,1) 100%),url(" + images[currentIndex] + ") no-repeat top center";
    img_wrapper.style.backgroundSize = "100%"
}

changeBackgroundImage()
images_value.innerHTML = currentIndex + 1 + "/" +  images.length

right_button.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = images.length - 1;
    }
    images_value.innerHTML = currentIndex+1 + "/" +  images.length
    changeBackgroundImage();
});

left_button.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >= images.length) {
      currentIndex = 0;
    }
    images_value.innerHTML = currentIndex+1 + "/" +  images.length
    changeBackgroundImage();
});