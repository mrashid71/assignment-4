// MENU
const allMenu = document.getElementById("all-Menu");
const intMenu = document.getElementById("int-Menu");
const rejMenu = document.getElementById("rej-Menu");
let cards = document.querySelectorAll("#allCards > div"); // use fresh NodeList each time
const emptyMessage = document.getElementById("emptyMessage");
const jobsCountText = document.querySelector("#available");
const totalCountText = document.getElementById("total");

function setActive(button) {
  allMenu.classList.remove("bg-blue-500", "text-white");
  intMenu.classList.remove("bg-blue-500", "text-white");
  rejMenu.classList.remove("bg-blue-500", "text-white");
  button.classList.add("bg-blue-500", "text-white");
}