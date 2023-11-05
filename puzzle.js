var x = document.getElementById("myAudio");
function playAudio() {
  x.play();
}

function pauseAudio() {
  x.pause();
}
function allowDrop(event) {
  event.preventDefault();
}

function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("text");
  event.target.appendChild(document.getElementById(data));
}