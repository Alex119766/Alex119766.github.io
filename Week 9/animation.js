function Move() {
  const element = document.querySelector('.animation');
  let position = 360;
  const interval = setInterval(() => {
    if (position == 0) {
      clearInterval(interval);
    } else {
      position -= 1;
      element.style.top = position + 'px';
    }
  }, 5);
}