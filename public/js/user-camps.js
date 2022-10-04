//query selector variables go here 👇
let audioButton = document.getElementById('audio-button');
let campDescription = document.getElementById('campsite-desc');

//global variables go here 👇

//event listeners go here 👇
audioButton.addEventListener('click', playAudio, {once : true});

//functions and event handlers go here 👇
function playAudio() {
  let desc = campDescription.textContent;
  if (!desc || desc === null || desc === "" || desc.length < 100) {
    textToSpeech('No description is available for this campsite.');
  } else {
    textToSpeech(campDescription.textContent);
  }
};


