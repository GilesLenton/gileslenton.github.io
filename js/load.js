var panel = document.getElementById('container');
var nav = document.getElementById('navigation');
panel.classList.add('load');
navigation.classList.add('load');

// Fade images when loaded
var images = document.getElementsByClassName('fade-img')

Array.prototype.forEach.call(images, function(e) {
  function loaded(image) {
    image.parentNode.classList.add('fadein');
  }

  if (e.complete) {
    loaded(e);
  } else {
    e.addEventListener('load', loaded(e));
  }
});
