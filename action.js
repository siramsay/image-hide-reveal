const trackerElement = document.getElementById("outer");
const topImage = document.getElementById("top-image");
const handle = document.getElementById("handle");
let maxWidth = 1010;

window.onload = function() {
  document.onselectstart = function() {return false;} // ie
  document.onmousedown = function() {return false;} // mozilla
}

handle.addEventListener('mousedown', function () {

  var windowWidth = document.body.clientWidth;

  trackerElement.addEventListener('mousemove', trackMousePosition);

  handle.onmouseup = function (e) {
    trackerElement.removeEventListener('mousemove', trackMousePosition);
  };
  window.addEventListener('mouseup', function (event) {
    trackerElement.removeEventListener('mousemove', trackMousePosition);
  })

  function trackMousePosition(theEvent) {

    const xPos = theEvent.clientX;

    const trackerDOMRect = trackerElement.getBoundingClientRect();

    let mousePointerPos;
    mousePointerPos = theEvent.clientX - trackerDOMRect.left;
    console.log('mouse pointer pos: ', mousePointerPos);

    //Check window width
    if (windowWidth <= maxWidth) {

      if (xPos <= windowWidth) {
        topImage.style.width = xPos + "px";
      } else {
        topImage.style.width = windowWidth;
      }

    } else {

      let imageWrapperWidth = mousePointerPos / 10;

      if (imageWrapperWidth <= 100) {
        topImage.style.width = imageWrapperWidth + "%";
      } else {
        topImage.style.width = "100%";
      }

    }

  }

});

handle.addEventListener('touchstart', function (e) {

  var windowWidth = document.body.clientWidth;

  trackerElement.addEventListener('touchmove', trackMousePosition);

  // Initial handle functionality set on handle. Set it on outer.
  handle.ontouchend = function (e) {
    handle.style.background ="none";
    handle.style.display ="none";
  }

  /*outer.ontouchstart = function (e) {
    handle.style.display ="block";
    console.log('outer touch start')
  }
  outer.ontouchend = function (e) {
    handle.style.display ="none";
    console.log('outer touch ended')
  }*/

  function trackMousePosition(e) {

    const xTouchPos = e.clientX || e.targetTouches[0].pageX;
    console.log('boo: ', xTouchPos)

    const trackerDOMRect = trackerElement.getBoundingClientRect();

    let mousePointerPos;
    mousePointerPos = xTouchPos - trackerDOMRect.left;
    console.log('boo boo 2: ', mousePointerPos);
    //Check window width
    if (windowWidth <= maxWidth) {

      if (xTouchPos <= windowWidth) {
        topImage.style.width = xTouchPos + "px";
      } else {
        topImage.style.width = windowWidth;
      }

    } else {

      let imageWrapperWidth = mousePointerPos / 10;

      if (imageWrapperWidth <= 100) {
        topImage.style.width = imageWrapperWidth + "%";
      } else {
        topImage.style.width = "100%";
      }

    }

  }

}, false);
