// ESERCIZIO 1

const localStorageKey = "writtenName";
const inputField = document.getElementById("input-area");
const saveButton = document.getElementById("save-button");
const deleteButton = document.getElementById("delete-button");

const saveName = function () {
  const content = inputField.value;
  localStorage.setItem(localStorageKey, content);
  alert("Name saved correctly!");
  inputField.value = "";
};

const deleteName = () => {
  const content = inputField.value;
  localStorage.removeItem(localStorageKey, content);
  alert("Name removed correctly!");
  inputField.value = "";
};

saveButton.addEventListener("click", saveName);
deleteButton.addEventListener("click", deleteName);
inputField.value = localStorage.getItem(localStorageKey);

// ESERCIZIO 2
// const timer = () => {
//   let interval = setInterval(() => {
//     const timeArray = [];
//     timeArray.push(console.log("1"));
//   }, 1000);
//   const pNumber = document.getElementById("numbers");
//     pNumber.innertext = timeArray.lenght;
//     console.log(timeArray);
// };

// timer();

let timer = () => {
  let time = Date.now();
  if (sessionStorage.getItem("time")) {
    time = parseInt(sessionStorage.getItem("time"));
  }
  const interval = setInterval(function () {
    const currentTime = Date.now();
    const timePassed = Math.floor((currentTime - timePassed) / 1000);
    sessionStorage.setItem("time", time.toString());
    document.getElementById(
      "timer"
    ).textContent = `Time elapsed ${timePassed} seconds`;
  }, 1000);
};
timer();
