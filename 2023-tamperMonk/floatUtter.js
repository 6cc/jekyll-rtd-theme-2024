// ==UserScript==
// @name        floatUtterance-0.519
// @namespace   Violentmonkey Scripts
// @match       *://*/*
// @grant       none
// @version     1.0
// @author      -
// @description 2024/5/20 05:10:00
// ==/UserScript==

const bottomHorizonBar = () => {
  const topBar = document.createElement('div');
  topBar.id = 'topBar';
  topBar.className = 'tooltiptext';
  topBar.style.position = 'fixed';
  topBar.style.overflow = 'auto';
  topBar.style.zIndex = 702;
  topBar.style.opacity = .9;
  topBar.style.backgroundColor = 'rgba(34,34,34,.9)';
  topBar.style.transition = 'height 0.3s';
  topBar.style.left = '40px';
  topBar.style.bottom = '0';
  topBar.style.width = '960px';
  topBar.style.height = '16px';
  document.body.appendChild(topBar);

  let isHFixed = false;
  let isHExpanded = false;

  document.addEventListener('mousemove', (event) => {
    if (!isHFixed) {
      const distanceToEdge = event.clientY;
      if (distanceToEdge > window.innerHeight - 10 && !isHExpanded) {
        topBar.style.height = '40px';
        isHExpanded = true;
      } else if (distanceToEdge < window.innerHeight - 40 && isHExpanded) {
        topBar.style.height = '1px';
        isHExpanded = false;
      }
    }
  });

    const pinHorizon = document.createElement('input');
    pinHorizon.type = 'checkbox';
    pinHorizon.className = 'tooltiptext';
    pinHorizon.style.position = 'absolute';
    pinHorizon.style.left = '40px';
    pinHorizon.addEventListener('change', () => {
      isHFixed = pinHorizon.checked;
      if (isHFixed) {
        sidebar.style.width = '40px';
        isHExpanded = true;
      }
    });
    topBar.appendChild(pinHorizon);

    const topHorizonPara = document.createElement('p');
    topHorizonPara.id = 'topHorizonPara';
    topHorizonPara.style.color = '#ADFF2F';
    topBar.appendChild(topHorizonPara);
};

const sideVertialBar = () => {
  const sidebar = document.createElement('div');
  sidebar.id = 'sidebar';
  sidebar.style.position = 'fixed';
  sidebar.style.zIndex = 702;
  sidebar.style.overflow = 'auto';
  sidebar.style.transition = 'width 0.3s';
  sidebar.style.opacity = .9;
  sidebar.style.backgroundColor = 'rgba(241,241,241,.9)';
  sidebar.style.borderWidth = '1px';
  sidebar.style.borderStyle = 'dashed';
  sidebar.style.borderColor = '#1E90FF';
  sidebar.style.right = '0';
  sidebar.style.top = '64px';
  sidebar.style.width = '0px';
  sidebar.style.height = '640px';
  document.body.appendChild(sidebar);

    let isVFixed = false;
    let isVExpanded = false;

    document.addEventListener('mousemove', (event) => {
      if (!isVFixed) {
        const distanceToEdge = event.clientX;
        if (distanceToEdge > window.innerWidth - 19 && !isVExpanded) {
          sidebar.style.width = '228px';
          isVExpanded = true;
        } else if (distanceToEdge < window.innerWidth - 244 && isVExpanded) {
          sidebar.style.width = '0px';
          isVExpanded = false;
        }
      }
    });

  const sideVertialPara = document.createElement('p');
  sideVertialPara.className = 'tooltiptext';
  sideVertialPara.style.color = '#000';
  sideVertialPara.innerText = 'sidebar-装睡';
  sidebar.appendChild(sideVertialPara);

  const pinVertial = document.createElement('input');
  pinVertial.type = 'checkbox';
  pinVertial.style.position = 'absolute';
  pinVertial.style.top = '40px';
  pinVertial.className = 'tooltiptext';
  pinVertial.addEventListener('change', () => {
    isVFixed = pinVertial.checked;
    if (isVFixed) {
        sidebar.style.width = '40px';
        isVExpanded = true;
    }
  });
  sidebar.appendChild(pinVertial);

  const enableHover = document.createElement('input');
  enableHover.type = 'checkbox';
    enableHover.style.position = 'absolute';
  enableHover.style.top = '80px';
  enableHover.id = 'enableHover';
  enableHover.className = 'tooltiptext';
  sidebar.appendChild(enableHover);
};

const pierceElem = (hoverElem) => {
  const divFloat = document.createElement('div');
    divFloat.id = 'divFloat';
    divFloat.className = 'tooltiptext';
    divFloat.style.position = 'absolute';
    divFloat.style.overflow = 'auto';
    divFloat.style.zIndex = '9999';
    divFloat.style.backgroundColor = 'rgba(241,241,241,.9)';
    divFloat.style.boxShadow = 'inset 0 -3em 3em rgba(0, 0, 0, 0.1),' +
    '0 0 0 2px rgb(255, 255, 255),' +
    '0.3em 0.3em 1em rgba(0, 0, 0, 0.3)';

    const utterText = document.createElement('textarea');
    utterText.id = 'utterText';
    utterText.className = 'tooltiptext';
    utterText.value = hoverElem.innerText;
    divFloat.appendChild(utterText);

    const br = document.createElement('br');
    divFloat.appendChild(br);

    const bUtterance = document.createElement('button');
    bUtterance.className = 'tooltiptext';
    bUtterance.textContent = 'utterance';
    bUtterance.addEventListener('mouseover', function() {
      if (utterText.value.length <= 40) {
        artIculate(utterText.value, 68);
      }
    });
    bUtterance.addEventListener('mouseup', function() {
      artIculate(utterText.value);
    });
    divFloat.appendChild(bUtterance);

    const buttJp = document.createElement('button');
    buttJp.className = 'tooltiptext';
    buttJp.textContent = 'buttJp';
    buttJp.addEventListener('mouseover', function() {
      if (utterText.value.length <= 40) {
        artIculate(utterText.value, 180);
      }
    });
    buttJp.addEventListener('mouseup', function() {
      artIculate(utterText.value, 180);
    });
    divFloat.appendChild(buttJp);

    const buttOcr = document.createElement('button');
    buttOcr.className = 'tooltiptext';
    buttOcr.textContent = 'ocrSpace';
  const conditImg = hoverElem.localName === 'img';
  const conditMsnArticle = matchHref() === 'msnCn' && hoverElem.localName === 'a'
  && hoverElem.className === 'image_switchModeLinkContainer';
  let conditImgSrc = '';
  if (conditImg) {
    conditImgSrc = hoverElem.src;
  } else if (conditImg && conditMsnArticle) {
    const divWrapper = hoverElem.parentElement.querySelector('div.article-image-height-wrapper');
    conditImgSrc = divWrapper.querySelector('img.article-image').src;
  }
    buttOcr.addEventListener('mouseover', function() {
      const srcTrim = filterUrl ('trim', conditImgSrc);
      ocrSpace(srcTrim, utterText);
    });
    buttOcr.addEventListener('mouseup', function() {
      buttOcr.title = filterUrl ('trim', conditImgSrc);
    });
    divFloat.appendChild(buttOcr);

    const hr = document.createElement('hr');
    divFloat.appendChild(hr);
    const elemSpec = document.createElement('pre');
    elemSpec.id = 'elemSpec';
    divFloat.appendChild(elemSpec);

    hoverElem.parentElement.insertBefore(divFloat, hoverElem);
};

const titleUrlSelecTime = (elemContent) => {
  const resultCombine = `
　6//?r=⭐　&d=${new Date().toLocaleString()}　&b=${(Date.now()).toString(36)}
${document.title}
${window.location.href}
|
${window.getSelection().toString()}
${elemContent}
`;
  return resultCombine;
};

const matchHref = () => {
  const msnCn = /\bhttps?:\/\/www\.msn\.cn\/zh-cn\/\w+\/\w+\/[%-\w]+\/[-\w]+/i;
  const youLiao = /\bhttps?:\/\/(pc\.yiyouliao|alphago\.sndo)\.com\/microsoft\/article\/rivers\/newsfeed\/\d+\/\w+\.html/i;
  switch (true) {
    case msnCn.test(window.location.href):
      return 'msnCn';
      break;
    case msnCn.test(window.location.href) && param == 'allImgS':
      const msnArticleImages = retrieveMsn();
      return msnArticleImages;
      break;
    default:
      return '';
      break;
  }
};

const retrieveMsn = () => {
  const msnCpArticle = document.querySelector('cp-article');
  const map1 = msnCpArticle._data.articleImages;
  let entityImg = [];
  let imgCount = 0;
  const iterator1 = map1[Symbol.iterator]();
  for (const item of iterator1) {
    const msnImg = filterUrl ('trim', item[1].url);
    entityImg.push(msnImg);
    imgCount ++;
  }
  return entityImg;
};

const iMpaleShadowN = (hoverElem) => {
  const shadowInput = document.createElement('input');
  shadowInput.type = 'checkbox';
  shadowInput.className = 'shadowInput';
  shadowInput.addEventListener('mouseover', () => {
    shadowInput.checked = ! shadowInput.checked;
    pierceElem(hoverElem);
    shadowInput.title = shadowInput.style.top + ' ' + shadowInput.style.top;
  });
  hoverElem.insertBefore(shadowInput, hoverElem.firstChild);
};

const ocrSpace = async (urlImg, destElem) => {
  const preFix = 'https://api.ocr.space/parse/imageurl?apikey=K88766003188957&url=';
  const param = '&language=chs&OCREngine=2';
  try {
    // 发送 API 请求
    const response = await fetch(preFix + urlImg + param);
    const data = await response.json();
    // 获取 OCR 解析结果
    const parsedText = data.ParsedResults[0].ParsedText;
    destElem.value = parsedText;
    artIculate(parsedText, 61);
  } catch (error) {
    console.error(error);
  }
}
//GPT3.5 Turbo

const filterUrl = (funcParam, queryUrl) => {
  const rankTag = /\b6\/\/.r=\d/i;
  const twImgR = /\bhttps?:\/\/pbs.twimg.com\/media\/([\w-]{15,})/i;
  const youtuBeR = /^https?:\/\/(?:(?:youtu\.be\/)|(?:(?:www\.)?youtube\.com\/(?:(?:watch\?(?:[^&]+&)?vi?=)|(?:vi?\/)|(?:shorts\/))))([a-zA-Z0-9_-]{11,})/i;
  const baiduR = /\bhttps?:\/\/pics\d\.baidu\.com\/feed\/[0-9A-z]+\.(?:jpe?g|gif|png).+/i;
  const bingR = /^https?:\/\/.*(cn|mm).bing.(net|com)\/th.id.(.*rik=\w+|.*ORMS.\w+|.*OIP-C.[-\w]+|.*OJ.\w+)/i;
  const gtimgR = /^https?:\/\/inews\.gtimg\.com\/newsapp_bt\/0\/\d*\//i;
  const imgRegEX = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])\.(?:gif|img|jpe?g|png|mp4|svg|webp)+/i;
  const music163R = /^https?:\/\/music\.163\.com\/#?\/?\w+\?id\=\d+/i;
  const urlRegex = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/i;

  switch (true) {
      case rankTag.test(queryUrl):
      return 'rankTag';
      break;

      case twImgR.test(queryUrl):
      return 'twImgR';
      break;

      case youtuBeR.test(queryUrl):
      return 'youtuBeR';
      break;

      case baiduR.test(queryUrl):
      return 'imgHttp';
      break;

      case bingR.test(queryUrl):
      return funcParam !== 'trim' ?
        'img' : queryUrl.match(bingR)[0];
      break;

      case gtimgR.test(queryUrl):
      return 'img';
      break;

      case imgRegEX.test(queryUrl):
      return funcParam !== 'trim' ?
        'img' : queryUrl.match(imgRegEX)[0];
      break;

      case music163R.test(queryUrl):
      return 'meting-js';
      break;

      case urlRegex.test(queryUrl):
      return funcParam !== 'trim' ?
        'a' : queryUrl;
      break;

      default:
      return funcParam !== 'trim' ?
        '' : queryUrl;
      break;
  }

}

const articuExpress = (text, vol) => {
  const msg = new SpeechSynthesisUtterance(text);
  msg.lang = 'zh-CN-liaoning';
  msg.volume = vol || 1;
  window.speechSynthesis.speak(msg);
}

const getVoices = () => {
  return new Promise(resolve => {
    let voices = speechSynthesis.getVoices();
    if (voices.length) {
      resolve(voices);
      return;
    }
    const voiceschanged = () => {
      voices = speechSynthesis.getVoices();
      resolve(voices);
    }
    speechSynthesis.onvoiceschanged = voiceschanged;
  })
}

const artIculate = async (text, voiceIndex, vol) => {
  const ttsVoices = await getVoices();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.voice = ttsVoices[voiceIndex || 61];
  const currentOur = new Date().getHours();
  const decentVol = currentOur > 10 ? 1 : .2;
  utterance.volume = vol || decentVol;
  speechSynthesis.speak(utterance);
}
//appreciate koldobika https://stackoverflow.com/questions/66951019/async-await-promise-does-not-work-promiseresult-is-undefined
//appreciate docta_faustus https://stackoverflow.com/questions/61016951/changing-the-speechsynthesis-voice-not-working

const articleMsn = class retrieveShadowEtc  {
  constructor( hoverElem ) {
    this.hoverElem = hoverElem;
  }
  // getter 方法
  get imgSrc() {
    return this.hoverImgSrc();
  }
  // 方法
  hoverImgSrc() {
    const hoverLClass = this.hoverElem.localName;
    switch (hoverLClass) {
      case 'cp-article-image':
        const imgModeSwtchr = this.hoverElem.shadowRoot.querySelector(
        'a.image_switchModeLinkContainer');
        if (imgModeSwtchr.querySelector('input.shadowInput') === null) {
          iMpaleShadowN(imgModeSwtchr);
        }
        const articleImgSrc = this.hoverElem._imageSource;
        return articleImgSrc;
        break;
      case 'cp-article':
        const cpArticle = this.hoverElem.shadowRoot.querySelectorAll('p[data-t]');
        for (const item of cpArticle) {
          if (item.innerText !== '' && item.querySelector('input.shadowInput') == null) {
            iMpaleShadowN(item);
          }
        }
        break;
      case 'img':
        return this.hoverElem.src;
        break;
      default:
        return this.hoverElem.textContent;
    }
  }
}

sideVertialBar();
bottomHorizonBar();
let elementContent = '';
let cpImageSource = '';
pierceRefer();
let statusElem = document.querySelector('#status');
let progressElem = document.querySelector('progress');
let loadedImageCount, imageCount;

document.addEventListener('mouseover', function(event) {
  const hoverElem = event.target;
  elementContent = hoverElem.innerText ||
    hoverElem.href || hoverElem.src ||
    hoverElem.value;
  const topHorizonPara = document.querySelector('#topHorizonPara');
  topHorizonPara.innerText = '[Tag]' + hoverElem.tagName + ' ' +
    elementContent + ' [class]' + hoverElem.className;

  const enableHover = document.querySelector('#enableHover');
  const divFloat = document.querySelector('#divFloat');
  if (divFloat !== null && hoverElem.className !== 'tooltiptext') {
    divFloat.remove();
  } else if ( hoverElem.tagName !== 'body' &&
             hoverElem.className !== 'tooltiptext' &&
             hoverElem.querySelector('div.tooltiptext') == null &&
             enableHover.checked ) {
    pierceElem( hoverElem );
  }

  if ( matchHref() === 'msnCn') {
    cpImageSource = new articleMsn(hoverElem).imgSrc;
  }

});

document.addEventListener('keydown', function(event) {
    switch (event.altKey && event.key) {
      case '[':
        const msnArticleImages = retrieveMsn();
        const adjacentAccumulate = document.createElement('div');
        adjacentAccumulate.className = 'dynamic-container';
        adjacentAccumulate.style.padding = '4px';
        Fancybox.bind("[data-fancybox]", {
          // Your custom options
        });
        const sidebar = document.querySelector('#sidebar');
        reloadBullet('', msnArticleImages, adjacentAccumulate);
        sidebar.appendChild(adjacentAccumulate);
        break;
      case ']':
        ocrSpace(elementContent);
        break;
      case ',':
        if ( matchHref() === 'msnCn') {
          elementContent = cpImageSource;
        }
        const currentOur = new Date().getHours();
        const decentVol = currentOur > 10 ? NaN : .2;
        navigator.clipboard.writeText(titleUrlSelecTime (elementContent));
        articuExpress(document.title.slice(0, 10) + '共' + 0 + '张屠', decentVol);
        break;
      case '\\':
        const entityImg = matchHref();
        const imgCount = 0;
        const virtualClipboard = `6//?r=⭐\n${document.title}\n${window.location.href}\n|\n${entityImg}${imgCount}图
        `;
        const topHorizonPara = document.querySelector('#topHorizonPara');
        topHorizonPara.title = virtualClipboard;
        break
    }
  });

const pierceRefer = () => {
  let javasS = document.createElement('script');
  javasS.id = 'java-sript';
  javasS.setAttribute('type', 'text/javascript');
  javasS.src = "https://cdnjs.cloudflare.com/ajax/libs/jquery.imagesloaded/5.0.0/imagesloaded.pkgd.min.js";
  document.documentElement.appendChild(javasS);
  let styleSheet = document.createElement('link');
  styleSheet.id = 'style-sheet';
  styleSheet.setAttribute('rel', 'stylesheet');
  styleSheet.setAttribute('type', 'text/css');
  styleSheet.href = "https://cdnjs.cloudflare.com/ajax/libs/fancyapps-ui/5.0.31/fancybox/fancybox.min.css";
  document.documentElement.appendChild(styleSheet);
  let javasSript = document.createElement('script');
  javasSript.id = 'java-sript';
  javasSript.setAttribute('type', 'text/javascript');
  javasSript.src = "https://cdnjs.cloudflare.com/ajax/libs/fancyapps-ui/5.0.31/fancybox/fancybox.umd.min.js";
  document.documentElement.appendChild(javasSript);

  let statusDiv = document.createElement('div');
  statusDiv.id = 'status';
  let progress = document.createElement('progress');
  progress.max = 7;
  progress.value = 0;
  statusDiv.appendChild(progress);
  document.body.appendChild(statusDiv);
};

const getImageItem = (imgUrl) => {
  let img = new Image();
  let start_time = Date.now();
  img.style.maxHeight = '75px';
  img.style.maxWidth = '100px';
  img.style.borderRadius = '4px';
  img.src = imgUrl;
  let anchorTag = document.createElement('a');

  let check = function(){
    let diff = Date.now() - start_time;
    let voidBoolean = '';
    if(img.naturalWidth>0 || img.naturalHeight>0){
    }
    else{
      voidBoolean = '❌';
      img.alt = imgUrl;
    }
    clearInterval(set);
    let imgResp = voidBoolean + '🏳‍🌈' + img.naturalWidth
     + '📶' + img.naturalHeight + '⌛' + diff;
     anchorTag.setAttribute('data-caption', imgResp);
  };
  let set = setInterval(check,40);

  let liTag = document.createElement('span');
  liTag.className = 'is-loading';
  liTag.style.margin = '0 2px 2px 0';
  liTag.appendChild(img);
  anchorTag.setAttribute('data-fancybox', 'gallery');
  anchorTag.href = imgUrl;
  anchorTag.appendChild(liTag);
  return anchorTag;
};

const reloadBullet = (triggerType, urlData, currentContainer) => {
  let fragment = triggerType !== 'sequence' ?
   getItemsFragment(urlData) : sequenceGenerate(urlData);
  currentContainer.insertBefore( fragment, currentContainer.firstChild );
  updateProgress( currentContainer );
};

const updateProgress = (currentContainer) => {
  let imgLoad = imagesLoaded( currentContainer );
  imgLoad.on( 'progress', onProgress );
  imgLoad.on( 'always', onAlways );
  imageCount = imgLoad.images.length;
  resetProgress();
  progressElem.setAttribute( 'value', 0 );
};

const resetProgress = () => {
  statusElem.style.opacity = 1;
  loadedImageCount = 0;
  progressElem.setAttribute( 'max', imageCount );
};

const onProgress = (imgLoad, image) => {
  image.img.parentNode.className = image.isLoaded ? '' : 'is-broken';
  loadedImageCount++;
  progressElem.setAttribute( 'value', loadedImageCount );
};

const onAlways = () => {
  statusElem.style.opacity = 0;
};

const getItemsFragment = (arrayIn) => {
  let parseStr = Array.isArray(arrayIn) ? arrayIn : [arrayIn];
  let fragment = document.createDocumentFragment();
  let arrayLength = parseStr.length;
  for ( let i = 0; i < arrayLength; i++ ) {
    let item = getImageItem(parseStr[i]);
    fragment.appendChild( item );
  }
  return fragment;
};

const func2 = (x, y) => {
  console.log(undefined);
};

const sequenceGenerate = (urlFinal) => {
  let fileName = urlFinal.match(/[^\/=\D]+(?=\.[^\/.]*$)/)[0].
  match(/[]?\d*\.?\d+(?:[Ee][\+\-]?\d+)?/)[0];
  let urlRazor = urlFinal.split(/[^\/=\D]+(?=\.[^\/.]*$)/);
  let fragment = document.createDocumentFragment();
  for ( let i = 0; i < fileName; i++ ) {
    let item = getImageItem(urlRazor[0] + i + urlRazor[1]);
    fragment.appendChild( item );
  }
  return fragment;
};
