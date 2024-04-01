
　6//sp1it=1　6//?r=⭐　&d=2024/3/29 13:50:42　&💻=0　&b=luc8w1j8　&!=🌸
javascript - Changing the SpeechSynthesis voice not working - Stack Overflow
https://stackoverflow.com/questions/61016951/changing-the-speechsynthesis-voice-not-working

utterThis.voice=synth.getVoices()[61];

61云溪
64辽宁
68陕西

lang:
zh-CN-liaoning
zh-CN-shaanxi

name:
voiceURI:
Microsoft Xiaobei Online (Natural) - Chinese (Northeastern Mandarin)

Microsoft Yunxi Online (Natural) - Chinese (Mainland)

　6//sp1it=1　6//?r=⭐　&d=2024/2/2 14:50:38　&💻=0　&b=ls4adffw　&!=🌸
使用 JavaScript 原生 API 开发文本转语音（tts）开发 · excing/blog · Discussion #17
https://github.com/excing/blog/discussions/17

<button onclick="textToSpeech('当鼠标在页面上移动时', 'zh-CN-liaoning', 'Microsoft Xiaobei Online (Natural) - Chinese (Northeastern Mandarin) (zh-CN-liaoning)')">Xiaobei</button>

textToSpeech('三观相近之人的互相吸引。', 'zh-CN-liaoning', 'Microsoft Yunxi Online (Natural) - Chinese (Mainland)');

function textToSpeech(text, lang, voiceURI) {
  const synth = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = lang;
  const voices = synth.getVoices();
  const voice = voices.find(v => v.voiceURI === voiceURI);
  utterance.voice = voice;
  utterance.rate = 1;
  synth.speak(utterance);
}

　6//sp1it=1　6//?r=⭐　&d=2024/3/3 16:09:34　&💻=0　&b=ltb8ehv9　&!=🌸
Text To Speech - 在线文本转语音
https://www.text-to-speech.cn/

上海河南山东

　6//sp1it=1　6//?r=⭐⭐　&d=2024/2/2 14:20:54　&💻=0　&b=ls49b6qn　&!=🌸
Zhongyuan Shaanxi Text to Speech Service by SpeechGen (zh-CN-shaanxi)
https://speechgen.io/en/tts-chinese-zhongyuan-mandarin-shaanxi-simplified/

　6//sp1it=1　6//?r=⭐　&d=2024/3/3 11:13:06　&💻=0　&b=ltaxt81p　&!=🌸
微软-文字转语音.语音合成--逆向爬虫实战 - 知乎
https://zhuanlan.zhihu.com/p/611561836

　6//sp1it=1　6//?r=⭐　&d=2024/3/3 17:45:34　&💻=0　&b=ltbbtxuf　&!=🌸
带有播放、暂停、停止按钮以及选择语言和语音的SpeechSynthesisUtterance脚本-腾讯云开发者社区-腾讯云
https://cloud.tencent.com/developer/ask/sof/1429716/answer/1961304

　6//sp1it=1　6//?r=⭐　&d=2024/3/3 17:46:01　&💻=0　&b=ltbbuizr　&!=🌸
Text to speech player with buttons Play, Pause, Stop and voice choice | <alebal web Blog>
https://www.alebalweb-blog.com/85-text-to-speech-player-with-buttons-play-pause-stop-and-voice-choice.html

https://jsfiddle.net/sb5wfomk/2/

　6//sp1it=1　6//?r=⭐　&d=2024/3/4 10:11:13　&💻=0　&b=ltcb1ia7　&!=🌸
Text to speech demo
https://www.alebalweb-blog.com/text-to-speech-demo/

　6//sp1it=1　6//?r=⭐　&d=2024/2/2 10:27:23　&💻=0　&b=ls40yw16　&!=🌸
歴代演目：SAMURAI SPIRITS OFFICIAL WEBSITE
https://samuraianiv.snk-corp.co.jp/title/samurai-spirits4/index.php

https://samuraianiv.snk-corp.co.jp/title/samurai-spirits4/img/title.jpg

sennanahyaku hachijuu kyuu
一七八九年
kansei no kaikaku ga hitoodoriji wa appaku se shi koro
寛政の改革が人々を圧迫せし頃
hitotsu no mashou no tamashii ga
一つの魔性の魂が
rinka wa age te yomigaetsu ta .
燐火を上げて甦った。
daichi wa yurugashi shutsugen shi ta shiro wa
大地を揺るがし 出現した城は
shimabara no hitoodoriji wa wazawai ni some te itsu ta .
島原の人々を 災いに染めていった。
soreni koou suru ga gotoku
それに呼応するが如く
ko ga mi wa shura ni kae
己が身を修羅に変え
sadame ni ikiru mono tachi ga araware ta .
定めに生きる者達が現れた。

　6//sp1it=1　6//?r=⭐　&d=2024/2/2 11:02:42　&💻=0　&b=ls428awg　&!=🌸
JavaScript speech synthesis cheatsheet
https://devhints.io/js-speech

function speak (message) {
  var msg = new SpeechSynthesisUtterance(message)
  var voices = window.speechSynthesis.getVoices()
  msg.lang = 'zh-CN-liaoning';
  window.speechSynthesis.speak(msg)
}

speak('只能保证玛修能像正常人一样活到七老八十。');

　6//sp1it=1　6//?r=⭐　&d=2024/2/2 14:13:38　&💻=0　&b=ls491tu8　&!=🌸
edge-tts微软文本转语音库，来看看这些语音你是不是很熟悉 - 知乎
https://zhuanlan.zhihu.com/p/619612276
