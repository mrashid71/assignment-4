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

function checkEmpty(count) {
  if (count === 0) {
    emptyMessage.classList.remove("hidden");
  } else {
    emptyMessage.classList.add("hidden");
  }
}

function updateCounts() {
  cards = document.querySelectorAll("#allCards > div"); // refresh NodeList
  let total = cards.length;
  let interviewCount = 0;
  let rejectedCount = 0;

  cards.forEach(card => {
    if (card.dataset.status === "interview") interviewCount++;
    if (card.dataset.status === "rejected") rejectedCount++;
  });

  totalCountText.innerText = total;
  jobsCountText.innerText = total + " jobs";
  document.getElementById("interviewCount").innerText = interviewCount;
  document.getElementById("rejectedCount").innerText = rejectedCount;
}

// FILTER BUTTONS
allMenu.onclick = function () {
  setActive(allMenu);
  cards.forEach(card => card.style.display = "block");
  updateCounts();
  emptyMessage.classList.add("hidden");
};

intMenu.onclick = function () {
  setActive(intMenu);
  let count = 0;
  cards.forEach(card => {
    if (card.dataset.status === "interview") {
      card.style.display = "block";
      count++;
    } else card.style.display = "none";
  });
  jobsCountText.innerText = count + " jobs";
  checkEmpty(count);
};

rejMenu.onclick = function () {
  setActive(rejMenu);
  let count = 0;
  cards.forEach(card => {
    if (card.dataset.status === "rejected") {
      card.style.display = "block";
      count++;
    } else card.style.display = "none";
  });
  jobsCountText.innerText = count + " jobs";
  checkEmpty(count);
};
