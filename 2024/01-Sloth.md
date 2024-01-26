<script type="text/javascript">

function texEt () {
  console.log(undefined);
  let code = document.getElementById('code').value;
  let resultEl = document.getElementById('result');
  let fn = new Function(code);
  resultEl.innerHTML = fn();
}
  
</script>

<textarea rows="30" cols="60" id="code">
// 替换为你的API路径和路径参数
const apiPath = `
https://api.ocr.space/parse/imageurl?apikey=K88766003188957&url=
{param}
&language=chs&OCREngine=2
`;
const pathParam = `
https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1hdbg9.img
`;

// 构建完整的API URL
const apiUrl = apiPath.replace('{param}', pathParam);

// 使用fetch调用API
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    // 将返回的数据转换为字符串
    const responseData = JSON.stringify(data);

    // 将数据写入剪贴板
    navigator.clipboard.writeText(data.ParsedResults[0].ParsedText)
      .then(() => {
        let code = document.getElementById('code').value;
        let resultEl = document.getElementById('result');
        resultEl.innerHTML = data.ParsedResults[0].ParsedText;
        console.log('数据已写入剪贴板：', data.ParsedResults[0].ParsedText);
      })
      .catch(err => {
        console.log(data.ParsedResults);
        console.error('写入剪贴板时发生错误：', err);
      });
  })
  .catch(error => {
    console.error('调用API时发生错误：', error);
  });

</textarea>

<fieldset style="border-width: 1px;border-style: dashed;border-color: 
#1E90FF;;background-color:#F0F8FF;">
	<legend style="border-width: 1px;border-style: dashed;border-color: 
  #1E90FF;background-color:#F0F8FF;">health information</legend>

  <button onclick="texEt();">Run</button>
  <pre id="result"></pre>

</fieldset>

<style type="text/css">
textarea {
  background-color:#222222;
  color: #ADFF2F;
  font-size: 16px;
}
</style>