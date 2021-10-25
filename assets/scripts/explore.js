// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  var synth = window.speechSynthesis;
  const textarea = document.querySelector("textarea");
  const button = document.querySelector("button");
  const select = document.querySelector("select");
  const img = document.querySelector("img")

  window.addEventListener('load', () => {
    const voices = synth.getVoices();
    for (let i = 0; i < voices.length; ++i) {
      let option = document.createElement("option");
      option.textContent = voices[i].name + ' (' + voices[i].lang + ')';

      if (voices[i].default) {
        option.textContent += ' -- DEFAULT';
      }

      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      select.appendChild(option);
    }
  })

  button.addEventListener("click", (e) => {
    const voices = synth.getVoices();
    let utterThis = new SpeechSynthesisUtterance(textarea.value);
    var selectedOption = select.selectedOptions[0].getAttribute('data-name');
    for (var i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }
    synth.speak(utterThis);
  })
  window.setInterval( function(){
    if (synth.speaking) {
      img.src = "assets/images/smiling-open.png"
    } else {
      img.src = "assets/images/smiling.png"
    }
  },10)
}