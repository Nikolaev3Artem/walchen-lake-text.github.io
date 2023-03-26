"use strict"

const img_wrapper = document.querySelector(".img--wrapper")
const right_button = document.querySelector(".right")
const left_button = document.querySelector(".left")
const images_value = document.querySelector(".images-value")
const images = [
    'https://nikolaev3artem.github.io/walchen-lake-text.github.io/assets/images/top-section--bg1.jpg',
    'https://nikolaev3artem.github.io/walchen-lake-text.github.io/assets/images/top-section--bg2.jpg',
    'https://nikolaev3artem.github.io/walchen-lake-text.github.io/assets/images/top-section--bg3.jpg',
    'https://nikolaev3artem.github.io/walchen-lake-text.github.io/assets/images/top-section--bg4.jpg',
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

function ReadMore(BlockName) {
  var WindowWidth = window.innerWidth;

  var dots_desktop = document.getElementById(`${BlockName}-dots-desktop`);
  var moreText_desktop = document.getElementById(`${BlockName}-more-desktop`);
  var dots_tablet = document.getElementById(`${BlockName}-dots-tablet`);
  var moreText_tablet = document.getElementById(`${BlockName}-more-tablet`);
  var dots_mobile = document.getElementById(`${BlockName}-dots-mobile`);
  var moreText_mobile = document.getElementById(`${BlockName}-more-mobile`);
  var btnText = document.getElementById(`${BlockName}-ReadMoreBtn`);

  if (dots_desktop.style.display === "none" || dots_tablet.style.display === "none" || dots_mobile.style.display === "none") {
    btnText.innerHTML = "Read more";
    dots_desktop.style.display = "inline";
    moreText_desktop.style.display = "none"
    if(WindowWidth >= 1024){
      dots_desktop.style.display = "inline";
      moreText_desktop.style.display = "none"
    }
    else if(WindowWidth >= 426){
      dots_tablet.style.display = "inline";
      moreText_tablet.style.display = "none";
    }
    else if(WindowWidth <= 426){
      dots_mobile.style.display = "inline";
      moreText_mobile.style.display = "none";
    }


  } else{
    btnText.innerHTML = "Read less";

    if(WindowWidth >= 1024){
      dots_desktop.style.display = "none";
      moreText_mobile.style.display = "inline";
      moreText_tablet.style.display = "inline";
      moreText_desktop.style.display = "inline";
    }
    else if(WindowWidth >= 426){
      dots_tablet.style.display = "none";
      moreText_mobile.style.display = "inline";
      moreText_tablet.style.display = "inline";
      moreText_desktop.style.display = "inline";
    }
    else if(WindowWidth <= 426){
      dots_mobile.style.display = "none";
      moreText_mobile.style.display = "inline";
      moreText_tablet.style.display = "inline";
      moreText_desktop.style.display = "inline";
    }   

  }
}