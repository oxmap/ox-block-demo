// Orientaion
function getMobileOS() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;

  // Windows Phone must come first because its UA also contains "Android"
  if (/windows phone/i.test(userAgent)) {
    return "unknown";
  }

  if (/android/i.test(userAgent)) {
    return "android";
  }

  if ([
    'iPad Simulator',
    'iPhone Simulator',
    'iPod Simulator',
    'iPad',
    'iPhone',
    'iPod'
  ].includes(navigator.platform)
  // iPad on iOS 13 detection
  || (navigator.userAgent.includes("Mac") && "ontouchend" in document)) {
    return "ios";
  }

  return "unknown";
}

const browsers = {
  ios: {
    180: "orient90",
    90: "orient0",
    0: "orient90",
    "-90": "orient0",
  },
  android: {
    180: 'orient0',
    90: 'orient0',
    0: 'orient90',
    "-90": 'orient90',
  },
  unknown: {
    180: "orient0",
    90: "orient90",
    0: "orient0",
    "-90": "orient90",
  },
};

function setClass() {
  document.getElementsByClassName(
    "text"
  )[0].textContent = `Угол ориентации = ${window.orientation}`;
  document.getElementsByTagName('html')[0].className = browsers[getMobileOS()][window.orientation];
}

window.addEventListener(
  "orientationchange",
  function () {
    setClass();
  },
  true
);

setClass();

// Scale
window.addEventListener(
  "keydown",
  function (event) {
    if (
      event.ctrlKey == true &&
      (event.which == "61" ||
        event.which == "107" ||
        event.which == "173" ||
        event.which == "109" ||
        event.which == "187" ||
        event.which == "189")
    ) {
      event.preventDefault();
    }
  },
  true
);

window.addEventListener(
  "wheel",
  function (event) {
    if (event.ctrlKey == true) {
      event.preventDefault();
      return false;
    }
  },
  { passive: false }
);

window.visualViewport.addEventListener("resize", viewportHandler);
function viewportHandler() {
    document.body.style.transform = `scale(${1/devicePixelRatio})`;
}

function toggleFullScreen() {
  if (screenfull.isEnabled) {
    screenfull.toggle();
  }
}