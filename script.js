const nouns = document.getElementsByClassName("highlight");
for (let i = 0; i < nouns.length; i++) {
  nouns[i].textContent = "planets";
}


const event = document.getElementsByClassName("event")[0];
event.textContent = "i am a star";

const eventArray = [
  "i look at the sky and think",
];
const randomIndex = Math.floor(Math.random() * eventArray.length);
const eventArrayElement = document.getElementsByClassName("event-array")[0];
eventArrayElement.textContent = eventArray[randomIndex];
