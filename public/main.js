// Orientaion
function getBrowser() {
    const agent = window.navigator.userAgent.toLowerCase()
    switch (true) {
      case agent.indexOf('chrome') > -1 && !!window.chrome:
        return 'chrome';
      case agent.indexOf('safari') > -1:
        return 'safari';
      default:
        return undefined;
    }
}
 
const browsers = {
    safari: {
        '180': 'orient90', 
        '90': 'orient0',
        '0': 'orient90',
        '-90': 'orient0'
    },
    chrome: {
        '180': 'orient0', 
        '90': 'orient90',
        '0': 'orient0',
        '-90': 'orient90'
    },
    undefined: {
        '180': 'orient0', 
        '90': 'orient90',
        '0': 'orient0',
        '-90': 'orient90'
    }
}

function setClass() {
    document.getElementsByClassName('text')[0].textContent=`Угол ориентации = ${window.orientation}`;
    document.getElementsByTagName('body')[0].className = browsers[getBrowser()][window.orientation];
}

window.addEventListener('orientationchange', function () {
    setClass();
}, true);

setClass();

// Scale
window.addEventListener('keydown', function (event) {
    if (event.ctrlKey==true && (event.which == '61' || event.which == '107' || event.which == '173' || event.which == '109'  || event.which == '187'  || event.which == '189'  ) ) {
        event.preventDefault();
     }
}, true)

window.addEventListener('wheel', function (event) {
    if (event.ctrlKey == true) {
        event.preventDefault();
        return false;
    }
}, {passive: false});
