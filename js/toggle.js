// Code inspired by another users github repo, thanks to them for the idea of using modulus
var toggle = document.getElementById("toggle-switch");
const basic = document.querySelector("#basic-plan");
const professional = document.querySelector("#pro-plan");
const master = document.querySelector("#master-plan");

let count = 1;
let monthly = false;

const displayMonthly = () => {
  basic.innerHTML = "<h1>$19.99</h1>";
  professional.innerHTML = "<h1>$24.99</h1>";
  master.innerHTML = "<h1>$39.99</h1>";
};

const displayAnnually = () => {
  basic.innerHTML = "<h1>$199.99</h1>";
  professional.innerHTML = "<h1>$249.99</h1>";
  master.innerHTML = "<h1>$399.99</h1>";
};

toggle.addEventListener("click", () => {
  count++;
  if (count % 2 == 0) {
    toggle.classList.add("active");
    monthly = true;
    displayMonthly();
  } else {
    toggle.classList.remove("active");
    displayAnnually();
    monthly = false;
  }
});
