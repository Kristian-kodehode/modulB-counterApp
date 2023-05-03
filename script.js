let count = 0;
const success = "!Success!";
let counter = document.getElementById("counter");
let card = document.getElementsByClassName(".card");

const minFunc = () => {
  //An if statement to only run the code if count is bigger than 0.
  if (count > 0) {
    count--;
    counter.textContent = count;
  }
};
const buyFunc = () => {
  //Changes counter to a string showing "Success"
  counter.textContent = success;
  //Changes the button text from Kjøp to Kjøpt.
  const button = document.querySelector(".bigBtn");
  button.innerText = "Kjøpt";
};
const plusFunc = () => {
  count++;
  counter.textContent = count;
};
//Button that refreshes the browser window.
const refresh = () => {
  window.location.reload();
};
