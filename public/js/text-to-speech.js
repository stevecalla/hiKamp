function textToSpeech(text) {
  let speech = new SpeechSynthesisUtterance();

  let voiceUsed;
  var voices = speechSynthesis.getVoices();

  for (let i = 0; i < voices.length; i++) {
    if (voices[i].name === 'Alex') {
      voiceUsed = voices[i]
    } 
  }
  speech.text = text;
  speech.rate = 1;
  speech.volume = 1;
  speech.pitch = 1;
  speech.voice = voiceUsed;
  speechSynthesis.speak(speech);
}