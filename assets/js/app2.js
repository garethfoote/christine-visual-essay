var guideCheckPauseMs = 7000;
var guideShowMs = 5000;

function hide(guideName) {
  console.log("hide guide w name" + guideName)

  var htmlEl = document.getElementsByClassName(guideName)[0]
  var animation = htmlEl.animate([
    {opacity: 1},
    {opacity: 0}
  ], {
    duration: 100,
    iteration: 1
  });

  animation.onfinish = function(){
    htmlEl.style.opacity = 0;
  }
}

function display(guideName){
  console.log("show guide w name" + guideName)

  document.getElementsByClassName(guideName)[0].removeAttribute('style');
  document.getElementsByClassName(guideName)[0].animate([
    {opacity:0},
    {opacity:1}
  ], {
    duration: 500,
    iteration:1
  });

  setTimeout(function(){
    hide(guideName)
  }, guideShowMs+500)
}

function check(){
  if(m<=3){
    display('guide-muscle')
  }
  if(p>=3){
    display('guide-fat')
  }
  if (m>3 && p<3){
    display('guide-perfect')
  }
  setTimeout(check, guideCheckPauseMs)
}

setTimeout(check, guideCheckPauseMs)
