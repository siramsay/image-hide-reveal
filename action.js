const trackerElement = document.getElementById("outer");
const topImage = document.getElementById("top-image");
const handle = document.getElementById("handle");

handle.addEventListener('mousedown', function () {

    trackerElement.addEventListener('mousemove', trackMousePosition);

    handle.onmouseup = function (e) {
        trackerElement.removeEventListener('mousemove', trackMousePosition);
    };
    window.addEventListener('mouseup', function (event) {
        trackerElement.removeEventListener('mousemove', trackMousePosition);
    })

    function trackMousePosition(theEvent) {

        const trackerDOMRect = trackerElement.getBoundingClientRect();


        let mousePointerPos;
        mousePointerPos = theEvent.clientX - trackerDOMRect.left;

        let imageWrapperWidth = mousePointerPos / 10;

        if (imageWrapperWidth <= 100) {
            topImage.style.width = imageWrapperWidth + "%";
        } else {
            topImage.style.width = "100%";
        }

    }
});