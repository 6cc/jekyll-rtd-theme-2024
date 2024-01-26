<input type="text" id="apiBaseUrl" value="https://api.ocr.space/parse/imageurl?apikey=K88766003188957&url=">
    <input type="text" id="imageUrl" placeholder="Paste Image URL here">
    <input type="text" id="apiParams" value="&language=chs&OCREngine=2">
    <input type="text" id="output" placeholder="OCR Result">
    
    <script>
        document.getElementById('imageUrl').addEventListener('input', function () {
            // Get input values
            const apiBaseUrl = document.getElementById('apiBaseUrl').value;
            const imageUrl = this.value;
            const apiParams = document.getElementById('apiParams').value;

            // Construct API URL
            const apiUrl = apiBaseUrl + imageUrl + apiParams;

            // Fetch data from OCR API
            fetch(apiUrl)
                .then(response => response.json())
                .then(data => {
                    // Get the ParsedText value from the JSON
                    const parsedText = data.ParsedResults[0].ParsedText;

                    // Display result in the output text box
                    document.getElementById('output').value = parsedText;

                    // Use Web Speech API for text-to-speech
                    const utterance = new SpeechSynthesisUtterance(parsedText);
                    utterance.lang = 'zh-CN-liaoning';

                    // 获取语音合成对象
      const synth = window.speechSynthesis;

      // 查找 Microsoft Yunxi Online (Natural) - Chinese (Mainland) 语音
      const voices = synth.getVoices();
      const yunxiVoice = voices.find(voice => voice.name === 'Microsoft Yunxi Online (Natural) - Chinese (Mainland)');

      // 如果找到语音，则设置为朗读时使用的语音
      if (yunxiVoice) {
        utterance.voice = yunxiVoice;
      } else {
        console.warn('Microsoft Yunxi Online (Natural) - Chinese (Mainland) voice not found.');
      }

      // 将要朗读的文本添加到队列中
                    speechSynthesis.speak(utterance);

                    // Copy result to clipboard
                    document.getElementById('output').select();
                    document.execCommand('copy');
                })
                .catch(error => console.error('Error:', error));
        });
    </script>