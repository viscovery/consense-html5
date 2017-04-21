# ConSense-html5-sdk
Document and demo of Viscovery ConSense javascript sdk

## Intro

ConSense aims to help our video publishers to monetize their video content with content-relative ads. The whole adTech includes the integration of Viscovery's FITAMOS computer vision recognition technology.

## Prerequisites

Before you begin, setup the following files

+ index.html
+ style.css

Setup a basic server to host your file

+ If you have python, you can run python -m SimpleHTTPServer in the directory containing index.html and point your browser to localhost:8000

+ You can also use gulp to serve the static files

## Get Start

### Import

The IMA SDK and ViscoverySDK need to be import to your html file

<b>Import inside head tag</b>
```html
<script src="//imasdk.googleapis.com/js/sdkloader/ima3.js"></script>
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-55LM2S9');</script>
```

<b>Import after body tag</b>
```html
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-55LM2S9"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
```

### Dom position structure of player and adContainer

Below is the sample html/css layout, shown the integration of your H5 video tag platyer and conSense SDK

<b>index.html</b>
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta http-equiv="Content-Type" content="text/html;charset=utf-8">
    <title>Viscovery ConSense javascript SDK Demo</title>
    <meta name="description" content="Viscovery 成立於2013年，專注於影音辨識技術開發，擁有多項演算法專利，被 Google 評選為成功企業與創新科技公司。經過多年圖像辨識技術研發的積累，及實地操作大量應用場景的基礎上，Viscovery 成功開發出 VDS 智能影音探索平台。"/>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link type="image/png" rel="shortcut icon" href="./favicon.ico" />
    <link type="text/css" rel="stylesheet" href="./style.css" />
    <!-- STEP1: import ima -->
    <script src="//imasdk.googleapis.com/js/sdkloader/ima3.js"></script>
    <!-- STEP2: import ConSense SDK -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-55LM2S9');</script>
  </head>
  <body>
    <div id="container">
      <div id="content">
        <video id="content-player" class="player-layout" preload="metadata" width="854" height="480" playsinline controls>
          <source src="https://viscovery-vsp-dev.s3.amazonaws.com/sdkdemo/Videos/%E5%95%9F%E5%8B%95%E6%84%9B%E6%83%85%E9%80%99%E4%BB%B6%E4%BA%8B-%E7%AC%AC%E4%B8%80%E8%A9%B1-%E5%8B%87%E6%B0%A3-EP01-%E7%AC%AC%E4%B8%80%E9%9B%86.mp4"></source>
        </video>
      </div>
      <div id="adContainer"></div>
    </div>
  </body>
  <!-- STEP2: import ConSense SDK -->
  <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-55LM2S9"
  height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
</html>
```

<b>style.css</b>
```css
* {
  padding: 0;
  margin: 0;
  border: 0;
}

#container {
  position: relative;
  width: 854px;
  height: 480px;
}

#content, #adContainer {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 854px;
  height: 480px;
}

#content-player {
  width: 854px;
  height: 480px;
  overflow: hidden;
}

```

### SDK initialize

Intialize the SDK with the video domNode and adContainer domNode after the html body tag

```javascript
conSense.init(Argument1, Argument2, Argument3)
```

<b>Argument1</b> is the html vidoe tag player. Here select it through #content-player and indicates it to <b>Argument1</b>.

```javascript
conSense.init('#content-player', ...)
```

<b>Argument2</b> is the html adContainer div. Here select it through #adContainer and indicates it to <b>Argument2</b>.

```javascript
conSense.init('#content-player', '#adContainer', ...)
```

<b>Argument3</b> is an object which required the unique parameter for the publisher

<table>
  <tr>
    <td>key</td>
    <td>description</td>
  </tr>
  <tr>
    <td>api_key</td>
    <td>the applied api key for the currentr publisher</td>
  </tr>
  <tr>
    <td>video_id</td>
    <td>the video content source url</td>
  </tr>
</table>

<b>whole SDK init sample</b>
```html 
<script type="text/javascript">
  window.onload = function() {
    conSense.init('#content-player', '#adContainer', {
      api_key: '<api_key>', // the applied api key of conSense
      video_id: 'https://video.site.url/<video_id>', // video content url
    });
  }
</script>
```

## Current Support player
- [Ｏ] html video tag
- [TBD] videojs
- [TBD] dailyMotion
- ...

## Current Support Inventory size
- PC instrem linear
- PC instream non-linear
- mobile instream linear (non-skippable)
- mobile instream non-linear



