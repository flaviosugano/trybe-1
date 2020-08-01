// name
var personName = document.querySelector('#name').value;
let name = document.querySelector('#name');
function complainMessage() {
  let personName = document.querySelector('#name').value;
  alert("I told you not to do that " + personName);
}
name.addEventListener('change', complainMessage);

// dont click me 
let clickButton = document.querySelector('#dontClick');
function typeAndScream() {
  document.getElementById("audio").play();
  personName = document.getElementById("name").value;
}
clickButton.addEventListener('click', typeAndScream);

// get in the mood
let moodButton = document.querySelector('#mood')
function goDark() {
  var body = document.getElementsByTagName("body")[0];
  if (body.className == "") {
    body.className = "dark";
  }
  else {
    body.className = "";
  }
}
moodButton.addEventListener('click', goDark);

// tell me what happened
let finishStory = document.querySelector('#finishStory');
function finishTheStory() {
  document.getElementById("story").innerHTML = "So I carefully searched the damp dungeon. There you are! I grinned a smile with all 98 of my gleaming teeth. Dinner time!";
}
finishStory.addEventListener('click', finishTheStory);