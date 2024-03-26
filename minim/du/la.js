document.addEventListener('touchstart', function(event) {
  let xDown = null;
  let yDown = null;
  let isTouching = false;

  const firstTouch = event.touches[0];
  xDown = firstTouch.clientX;
  yDown = firstTouch.clientY;

  function moveHandler(event) {
    if (!isTouching) return;

    const firstTouch = event.touches[0];
    const xMove = firstTouch.clientX - xDown;
    const yMove = firstTouch.clientY - yDown;

    // Do something with the movement data
  }

  function endHandler() {
    isTouching = false;
    document.removeEventListener('touchmove', moveHandler);
    document.removeEventListener('touchend', endHandler);
  }

  if (!isTouching) {
    document.addEventListener('touchmove', moveHandler);
    document.addEventListener('touchend', endHandler);
    isTouching = true;
  }
});
