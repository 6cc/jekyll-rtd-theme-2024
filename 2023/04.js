preprocessPrecast();
let statusElem = document.querySelector('#status');
let progressElem = document.querySelector('progress');
let loadedImageCount, imageCount;
preprocessP2();
processFramework();

function preprocessPrecast() {
  let statusDiv = document.createElement('div');
  statusDiv.id = 'status';
  let progress = document.createElement('progress');
  progress.max = 7;
  progress.value = 0;
  statusDiv.appendChild(progress);
  let areaCode = document.querySelector('textarea#codeRAW');
  areaCode.parentNode.appendChild(statusDiv);
}

function preprocessP2() {
  let optionElem = [];
  let optInner = ['None', 1, 'All',undefined , 'r', 0, null];
  optInner[3] = String.fromCharCode(92) + 'r ' + optInner[5] + optInner[6]
  let selParam = document.createElement('select');
  selParam.id = 'variable-parameter';
  for (let i = 0; i < 6; i++) {
    optionElem[i] = document.createElement('option');
    optionElem[i].innerText = optInner[i];
    selParam.appendChild(optionElem[i]);
  }
  optionElem[1].selected = true;
  let interactBar = document.createElement('div');
  interactBar.id = 'interact-bar';
  interactBar.appendChild(selParam);
  let butTrig = document.createElement('button');
  butTrig.innerText = 'Proces';
  butTrig.onclick = function(){removeFrame();processFramework();};
  let butFunc = document.createElement('button');
  butFunc.innerText = 'roces';
  butFunc.onclick = function(){removeFrame();locateDoc();};
  interactBar.appendChild(butFunc);
  let urlPriority = document.querySelector('input#url-priority');
  urlPriority.addEventListener("click", (event) => {
    sourceSwitch();
  });
  interactBar.appendChild(urlPriority);
  let alterLocatElem = document.querySelector('input#alternate-location');
  interactBar.appendChild(alterLocatElem);
  interactBar.appendChild(butTrig);
  let areaCode = document.querySelector('textarea#codeRAW');
  areaCode.parentNode.insertBefore(interactBar, areaCode);
}

function processFramework() {
  let contentDiv = containerCastin();
  let alterLocat = document.querySelector('input#alternate-location').value;
  fetchMyDocument(contentDiv, alterLocat);
}

async function fetchMyDocument(contentDiv, strURL) {      
  try {
    let response = await fetch(strURL); // Gets a promise
    let rawData = await response.text(); // Replaces body with response
    contentDiv.appendChild(htmlAlchemy(rawData));
  } catch (err) {
    console.log('Fetch error:' + err); // Error handling
  }
}

function sourceSwitch() {
  let urlPriority = document.querySelector('input#url-priority');
  let source = urlPriority.checked == true ?
  processFramework() : locateDoc();
}

function containerCastin() {
  let interactBar = document.querySelector('div#interact-bar');
  let contentDiv = document.createElement('div');
  contentDiv.id = 'frame-division';
  let areaCode = document.querySelector('textarea#codeRAW');
  areaCode.parentNode.insertBefore(contentDiv, interactBar
  .nextElementSibling);
  return contentDiv;
}

function locateDoc() {
  let rawData = document.querySelector('textarea#codeRAW').value;
  let contentDiv = containerCastin();
  contentDiv.appendChild(htmlAlchemy(rawData));
}

function htmlAlchemy(tecStImBed) {
  let a6Tag = /\b6\/\/sp1it=1/g;
  let segmentS = tecStImBed.split(a6Tag).filter(line => line.trim() !== '');
  let matchedRetrieve = tecStImBed.match(a6Tag)||[];
  let singleLineS = [];
  for (let i=0;i<segmentS.length;i++)
  {
    singleLineS[i] = segmentS[i].split(String.fromCharCode(10))
    .filter(line => line.trim() !== '');
    singleLineS[i].splice(singleLineS[i].length, 0, matchedRetrieve[i]||'');
  }

  let seqTag = /\b6\/\/s=1/i;
  let tabTag = /\b6\/\/t=1/i;
  let adjacentAccumulate = [];
  let dynaContain = [];
  let htmlGain = document.createDocumentFragment();
  for (let i=0;i<singleLineS.length;i++)
  {
    adjacentAccumulate[i] = identifyGallery(singleLineS[i]);
    dynaContain[i] = document.createElement('div');
    let tabSLegend = document.createElement('div');
    tabSLegend.className = 'dynamic-container';
    for (let l = 0; l < singleLineS[i].length; l++) {
      if(filterUrl('', singleLineS[i][l]) === 'img' && tabTag.test(segmentS[i])) {
        let tabIndividual = assemblePackage('Tab', singleLineS[i][l]);
        tabSLegend.appendChild(tabIndividual);
      }
    }
    
    for (let j = 0; j < adjacentAccumulate[i].length; j++) {
      let elemSCombo = '';
      if (j == 1) {
        elemSCombo = assemblePackage('h3', adjacentAccumulate[i][j]);
      } else if (filterUrl('', singleLineS[i][j]) === 'img' && tabTag.test(segmentS[i])) {
        elemSCombo = document.createDocumentFragment();
      } else {
        elemSCombo = assemblePackage( filterUrl('', adjacentAccumulate[i][j]),
       adjacentAccumulate[i][j]);
      }
      dynaContain[i].appendChild(elemSCombo);
      
      if(seqTag.test(singleLineS[i][j])) {
        let seqT = assemblePackage('seqTag', singleLineS[i][j + 1]);
        dynaContain[i].appendChild(seqT);
      }
    }
    
    if(tabTag.test(segmentS[i])) {
      let dynaField = document.createElement('div');
      dynaField.className = 'dynamic-container';
      dynaContain[i].insertBefore(tabSLegend, dynaContain[i].childNodes[2]);
      dynaContain[i].insertBefore(dynaField, dynaContain[i].childNodes[3]);
    }

    let visiVar = queryString('visible', singleLineS[i][0]);
    dynaContain[i].className = visiVar == 1 ? 'cell-card' : 'not-visible';
    let voidDiv = document.createElement('div');
    voidDiv.className = visiVar;
    let varParam = document.querySelector('select#variable-parameter');
    let selOpt = [, , , , '\r', 0, null];
    switch (varParam.selectedIndex) {
      case 0:
        htmlGain.appendChild(voidDiv);
        break;
        
      case 2:
        htmlGain.appendChild(dynaContain[i]);
        break;

      case 3:
      htmlGain.appendChild(visiVar == selOpt[4] | visiVar == selOpt[5] | visiVar ==
      selOpt[6] ? dynaContain[i] : voidDiv);
        break;
        
      case 4:
      case 5:
      case 6:
        htmlGain.appendChild(visiVar == selOpt[varParam.selectedIndex] ? dynaContain[i] : voidDiv);
        break;
        
      default:
        htmlGain.appendChild(visiVar == 1 ? dynaContain[i] : voidDiv);
        break;
    }
  }
  return htmlGain;
}

function identifyGallery(data){
  let res = [];
  for (let i = 0; i < data.length; i++) {
    let c = filterUrl('trim', data[i]);
    let str = c;
    for (let j = i + 1; j < data.length && filterUrl('', c) === 'img'
     && filterUrl('', data[j]) === 'img'; j++ , i++) {
      str += '\n' + filterUrl('trim', data[i + 1]);
    }
  res.push(str.split(String.fromCharCode(10)));
  }
  return res;
}

function filterUrl(parameterType, strURL){
let rankTag = /\b6\/\/.r=\d/i;
let twImgR = /\bhttps?:\/\/pbs.twimg.com\/media\/([\w-]{15,})/i;
let youtuBeR = /^https?:\/\/(?:(?:youtu\.be\/)|(?:(?:www\.)?youtube\.com\/(?:(?:watch\?(?:[^&]+&)?vi?=)|(?:vi?\/)|(?:shorts\/))))([a-zA-Z0-9_-]{11,})/i;
let baiduR = /\bhttps?:\/\/pics\d\.baidu\.com\/feed\/[0-9A-z]+\.(?:jpe?g|gif|png).+/i;
let bingR = /^https?:\/\/.*(cn|mm).bing.(net|com)\/th.id.(.*rik=\w+|.*ORMS.\w+|.*OIP-C.[-\w]+|.*OJ.\w+)/i;
let gtimgR = /^https?:\/\/inews\.gtimg\.com\/newsapp_bt\/0\/\d*\//i;
let imgRegEX = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])\.(?:gif|img|jpe?g|png|mp4|svg|webp)+/i;
let music163R = /^https?:\/\/music\.163\.com\/#?\/?\w+\?id\=\d+/i;
let urlRegex = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/i;

switch (true) {
  case rankTag.test(strURL):
    return 'rankTag';
    break;

  case twImgR.test(strURL):
    return 'twImgR';
    break;

  case youtuBeR.test(strURL):
    return 'youtuBeR';
    break;

  case baiduR.test(strURL):
    return 'imgHttp';
    break;

  case bingR.test(strURL):
  return parameterType !== 'trim' ?
    'img' : strURL.match(bingR)[0];
    break;

  case gtimgR.test(strURL):
    return 'img';
    break;

  case imgRegEX.test(strURL):
    return parameterType !== 'trim' ?
    'img' : strURL.match(imgRegEX)[0];
    break;

  case music163R.test(strURL):
    return 'meting-js';
    break;

  case urlRegex.test(strURL):
    return parameterType !== 'trim' ?
    'a' : strURL;
    break;

  default:
    return parameterType !== 'trim' ?
    '' : strURL;
    break;
  }
}

function assemblePackage(tagType, strURL){
  switch (tagType) {
    case 'seqTag':
      let seqAuto = document.createElement("div");
      seqAuto.className = 'dynamic-container';
      reloadBullet('sequence', strURL, seqAuto);
      return seqAuto;
    break;

    case 'rankTag':
      let iconRank = document.createElement('img');
      let randomColor = Math.floor(Math.random()*16777215).toString(16);
      iconRank.height = 24;
      iconRank.src = "https://img.shields.io/badge/"
       + ratingStar(queryString('r', strURL.toString()))
       + '-推荐度-' + randomColor;
      return iconRank;
    break;

    case 'Tab':
      let imgTab = document.createElement('img');
      imgTab.src = strURL;
      imgTab.onclick = function(){reloadBullet('sequence', strURL
      .toString(), this.parentNode.parentNode.nextElementSibling);};
      let spanTab = document.createElement('li');
      spanTab.className = 'is-loading';
      spanTab.appendChild(imgTab);
      updateProgress( spanTab );
      return spanTab;
    break;

    case 'h3':
      let h3Text = document.createElement('h3');
      h3Text.innerText = strURL;
      return h3Text;
    break;

    case 'twImgR':
      let preFixT = document.getElementById('prefixKit').value;
      let urlIntegrity = preFixT + 'https://pbs.twimg.com/media/' + strURL +
       '?format=jpg&name=orig';
      return getImageItem( urlIntegrity );
    break;

    case 'img':
      let adjacentAccumulate = document.createElement('div');
      adjacentAccumulate.className = 'dynamic-container';
      reloadBullet('', strURL, adjacentAccumulate);
      return adjacentAccumulate;
    break;

    case 'youtuBeR':
      let HyperLinkY = document.createElement('a');
      HyperLinkY.href = 'https://youtu.be/' + strURL;
      HyperLinkY.innerText = 'https://youtu.be/' + strURL;
      let preFix = document.getElementById('prefixKit').value;
      let urlIntegrit = preFix + 'https://i.ytimg.com/vi/' + strURL + '/hqdefault.jpg';
      let FancySuite = getImageItem( urlIntegrit );
      let urlIntegri = preFix + 'https://i.ytimg.com/vi/' + strURL + '/maxresdefault.jpg';

      (async () => {
        if (await imageExists(urlIntegri)){
          FancySuite.querySelector('li img').src = urlIntegri;
          FancySuite.querySelector('a').href = urlIntegri;
        }
      })()

      let FancySuiteY = document.createElement("div");
      FancySuiteY.appendChild(HyperLinkY);
      FancySuiteY.appendChild(FancySuite);
      return FancySuiteY;
    break;

    case 'meting-js':
      let hyPlayERLink = document.createElement("a");
      hyPlayERLink.href = strURL;
      hyPlayERLink.innerText = strURL;
      let breakLine = document.createElement("br");
      let thumbSwitch = document.createElement('img');
      thumbSwitch.height = 64;
      
      fetch('https://api.i-meto.com/meting/api?type=song&id='
       + queryString('id', strURL)).then(
        function(u){ return u.json();}
        ).then(
          function(json){
            thumbSwitch.src = json[0].pic;
        }
      )
      
      thumbSwitch.onclick = function(){switchMeting(this.parentNode, strURL);};
      let metingTag = document.createElement("div");
      metingTag.appendChild(hyPlayERLink);
      metingTag.appendChild(breakLine);
      metingTag.appendChild(thumbSwitch);
      return metingTag;
    break;

    case 'a':
      let hyperLink = document.createElement('a');
      hyperLink.href = strURL;
      hyperLink.innerText = strURL;
      let hoverLink = document.createElement('div');
      hoverLink.appendChild(hyperLink);
      hoverLink.className = 'urlCollapsing';
      return hoverLink;
    break;

    default:
      let PureText = document.createElement('div');
      let HoRizonDelimit = document.createElement('hr');
      PureText.append(strURL);
      PureText.appendChild(HoRizonDelimit);
      return PureText;
    break;
  }
}

function getImageItem(imgUrl) {
  let img = new Image();
  let start_time = Date.now();
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
  
  let liTag = document.createElement('li');
  liTag.className = 'is-loading';
  liTag.appendChild(img);
  anchorTag.setAttribute('data-fancybox', 'gallery');
  anchorTag.href = imgUrl;
  anchorTag.appendChild(liTag);
  return anchorTag;
}

async function imageExists(imgUrl) {
  if (!imgUrl) {
    return false;
    }
    return new Promise(res => {
      const image = new Image();
      image.onload = () => res(true);
      image.onerror = () => res(false);
      image.src = imgUrl;
    });
}

function switchMeting(currentNode, url) {
  let ElementE = document.querySelector('div.onePlayer');
  ElementE.remove();
  let metingJs = document.createElement('meting-js');
  metingJs.setAttribute('autoplay', true);
  metingJs.setAttribute('auto', url);
  metingJs.setAttribute('loop', 'none');
  let divc = document.createElement('div');
  divc.className = 'onePlayer';
  divc.appendChild(metingJs);
  currentNode.appendChild(divc);
}

function queryString(item, text){
   foundString = text.match(new RegExp("[\?\&]" + item + "=([^\&]*)(\&?)","i"));
   return foundString ? foundString[1] : foundString;
}

function reloadBullet(triggerType, urlData, currentContainer) {
  let fragment = triggerType !== 'sequence' ?
   getItemsFragment(urlData) : sequenceGenerate(urlData);
  currentContainer.insertBefore( fragment, currentContainer.firstChild );
  updateProgress( currentContainer );
}

function updateProgress( currentContainer ) {
  let imgLoad = imagesLoaded( currentContainer );
  imgLoad.on( 'progress', onProgress );
  imgLoad.on( 'always', onAlways );
  imageCount = imgLoad.images.length;
  resetProgress();
  progressElem.setAttribute( 'value', 0 );
}

function resetProgress() {
  statusElem.style.opacity = 1;
  loadedImageCount = 0;
  progressElem.setAttribute( 'max', imageCount );
}

function onProgress( imgLoad, image ) {
  image.img.parentNode.className = image.isLoaded ? '' : 'is-broken';
  loadedImageCount++;
  progressElem.setAttribute( 'value', loadedImageCount );
}

function onAlways() {
  statusElem.style.opacity = 0;
}

function getItemsFragment(arrayIn) {
  let parseStr = Array.isArray(arrayIn) ? arrayIn : [arrayIn];
  let fragment = document.createDocumentFragment();
  let arrayLength = parseStr.length;
  for ( let i = 0; i < arrayLength; i++ ) {
    let item = getImageItem(parseStr[i]);
    fragment.appendChild( item );
  }
  return fragment;
}

function sequenceGenerate(urlFinal) {
  let fileName = urlFinal.match(/[^\/=\D]+(?=\.[^\/.]*$)/)[0].
  match(/[]?\d*\.?\d+(?:[Ee][\+\-]?\d+)?/)[0];
  let urlRazor = urlFinal.split(/[^\/=\D]+(?=\.[^\/.]*$)/);
  let fragment = document.createDocumentFragment();
  for ( let i = 0; i < fileName; i++ ) {
    let item = getImageItem(urlRazor[0] + i + urlRazor[1]);
    fragment.appendChild( item );
  }
  return fragment;
}

function ratingStar(evaluateScore) {
  let resultBlank = '';
  let resultStarS = '';
  let blankEmoji = '🔲';
  let starEmoji = '⭐';
  for (let i = 0; i < evaluateScore - 1; i++) {
    resultBlank += blankEmoji;
  }
  for (let i = 0; i < 4 - evaluateScore; i++) {
    resultStarS += starEmoji;
  }
  return resultBlank + resultStarS;
}

function removeFrame() {
  let contentDiv = document.querySelector('div#frame-division');
  contentDiv !== null ? contentDiv.remove() : void(0);
}