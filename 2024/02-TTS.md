
　6//sp1it=1　6//?r=⭐　&d=2024/2/2 14:50:38　&💻=0　&b=ls4adffw　&!=🌸
使用 JavaScript 原生 API 开发文本转语音（tts）开发 · excing/blog · Discussion #17
https://github.com/excing/blog/discussions/17

textToSpeech('当鼠标在页面上移动时', 'zh-CN-liaoning', '')

function textToSpeech(text, lang, voiceURI) {
  const synth = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = lang;
  const voices = synth.getVoices();
  const voice = voices.find(v => v.voiceURI === voiceURI);
  utterance.voice = voice;
  utterance.rate = 0.5;
  synth.speak(utterance);
}
