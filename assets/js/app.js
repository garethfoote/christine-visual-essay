var guideCheckPauseMs = 7000;
var guideShowMs = 5000;

function hide( guideName ){

  console.log("Hide guide with name: " + guideName)

  // document.getElementsByClassName(guideName)[0].removeAttribute('style');
  var htmlEl = document.getElementsByClassName(guideName)[0]
  var animation = htmlEl.animate([
    {opacity: 1},
    {opacity: 0}
  ], {
    duration: 100,
    iteration: 1
  });

  // Tell me when fade out animation ends....
  animation.onfinish = function(){
    //...then manually opacity to 0.
    htmlEl.style.opacity = 0;
  }

}

function display( guideName ) {

  console.log("Show guide with name: " + guideName)
  // Show guide.
  document.getElementsByClassName(guideName)[0].removeAttribute('style');
  document.getElementsByClassName(guideName)[0].animate([
    {opacity: 0},
    {opacity: 1}
  ], {
    duration: 500,
    iteration: 1
  });

  // Wait 5000ms and then hide
  setTimeout(function(){
    hide(guideName)
  }, guideShowMs+500)
}

function check(){
// console.log('hello', b);
// console.log('hello1',m);
// console.log('hello2',a);

    if (b<2) {
      display( 'guide-breasts')
    }

    if (m>=3) {
        display( 'guide-muscle')
    }

    if (a<=2) {
        display( 'guide-buttocks')
    }

    if (b>=2 && m<3 && a>2) {
        display( 'guide-perfect')
    }

    setTimeout(check, guideCheckPauseMs)
}


setTimeout(check, guideCheckPauseMs)
