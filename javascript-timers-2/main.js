var h1 = document.createElement('h1');
h1.textContent = 'Ready?';

var body = document.querySelector('body');
body.appendChild(h1);

setInterval(changeH1, 1000);

function changeH1() {
  var text = [3, 2, 1, 'Hello World!'];
  for (var i = 0; i < text.length; i++) {
    h1.textContent = text[i];
  }
}
