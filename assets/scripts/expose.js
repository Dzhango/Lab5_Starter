// expose.js

window.addEventListener('DOMContentLoaded', init);
import './js-confetti.browser.js'

function init() {
  const jsConfetti = new JSConfetti()

  //selectors
  const imageHorn = document.querySelector("img");
  const selection = document.querySelector("select");
  //array of options
  const options = selection.options
  const soundImg = document.getElementById("volume-controls").querySelector("img");
  const playButton = document.querySelector("button");
  const audio = document.querySelector("audio")
  //slider
  const slider = document.querySelector("[type='range']")
  const audioImg = document.getElementById("volume-controls").querySelector("img");
  let volume = 50;
  
  selection.addEventListener("change", (e) => {
    // e.target.selectedIndex is the option selected
    if (e.target.selectedIndex === 1){
      imageHorn.src = 'assets/images/air-horn.svg'
      audio.src = 'assets/audio/air-horn.mp3'
    } else if (e.target.selectedIndex === 2){
      imageHorn.src = 'assets/images/car-horn.svg'
      audio.src = 'assets/audio/car-horn.mp3'
    } else if (e.target.selectedIndex === 3){
      imageHorn.src = 'assets/images/party-horn.svg'
      audio.src = 'assets/audio/party-horn.mp3'
      jsConfetti.addConfetti()
    }
  })

  slider.addEventListener('change', (e) => {
    volume = parseInt(e.target.value)
    if (e.target.value === '0'){
      audioImg.src = "assets/icons/volume-level-0.svg"
    } else if (e.target.value < 33){
      audioImg.src = "assets/icons/volume-level-1.svg"
    } else if (e.target.value < 67){
      audioImg.src = "assets/icons/volume-level-2.svg"
    } else {
      audioImg.src = "assets/icons/volume-level-3.svg"
    }
  })

  playButton.addEventListener('click', () => {
    audio.volume = volume * 0.01;
    audio.play()
  })


}