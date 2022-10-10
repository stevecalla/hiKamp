//query selector variables go here 👇
let audioButton = document.getElementById('audio-button');
let campDescription = document.getElementById('campsite-desc');

//global variables go here 👇

//event listeners go here 👇
audioButton.addEventListener('click', addListener);

//functions and event handlers go here 👇
function addListener() {
  playAudio();
  audioButton.removeEventListener('click', addListener);
  setTimeout(() => {
    audioButton.addEventListener('click', addListener);
  }, 10000);
}

function playAudio() {
  let desc = campDescription.textContent;
  if (!desc || desc === null || desc === '' || desc.length < 100) {
    textToSpeech('No description is available for this campsite.');
  } else {
    textToSpeech(campDescription.textContent);
  }
}

function textToSpeech(text) {
  let speech = new SpeechSynthesisUtterance();

  let voiceUsed;
  var voices = speechSynthesis.getVoices();

  for (let i = 0; i < voices.length; i++) {
    if (voices[i].name === 'Alex') {
      voiceUsed = voices[i];
    }
  }
  speech.text = text;
  speech.rate = 1;
  speech.volume = 1;
  speech.pitch = 1;
  speech.voice = voiceUsed;
  speechSynthesis.speak(speech);
}
