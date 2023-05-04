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

handle.addEventListener('touchmove', function (e) {

  //console.log("touchmove");

  var windowWidth = document.body.clientWidth;

  trackerElement.addEventListener('touchmove', trackMousePosition);

  function trackMousePosition(theEvent) {

    const xTouchPos = e.clientX || e.targetTouches[0].pageX;

    const trackerDOMRect = trackerElement.getBoundingClientRect();

    let mousePointerPos;
    mousePointerPos = xTouchPos - trackerDOMRect.left;

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

});
