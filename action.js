const trackerElement = document.getElementById("outer");
const topImage  =  document.getElementById("top-image");
//topImage.style.width = '75%';

//topImage.addEventListener('mousemove', trackMousePosition );
trackerElement.addEventListener('mousemove', trackMousePosition );

function trackMousePosition(theEvent) {
  //alert ('the mouse moved');
  console.log(theEvent.clientX);

  // topImage.style.width = theEvent.clientX + 'px';
  // const tracker = document.getElementById("tracker");
  const trackerDOMRect = trackerElement.getBoundingClientRect();
  console.log(trackerDOMRect.left);

  let mousePointerPos;
  mousePointerPos = theEvent.clientX - trackerDOMRect.left;
  console.log(mousePointerPos);
  let imageWrapperWidth =  mousePointerPos/10;
  console.log(imageWrapperWidth + '%');
  topImage.style.width = imageWrapperWidth + '%';

}