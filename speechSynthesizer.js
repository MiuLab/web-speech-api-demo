const synthesis = window.speechSynthesis;
const synthesisText = document.querySelector('#synthesisText');

function speak(){
  const utter = new SpeechSynthesisUtterance(synthesisText.value);
  // the list of all available voices
  const voices = synthesis.getVoices();
  
  for(i = 0; i < voices.length; ++i) {
    if(voices[i].name === "Google 國語（臺灣）") {
      utter.voice = voices[i];
    }
  }
  
  utter.rate = 1;
  utter.pitch = 1;
  synthesis.speak(utter);
}