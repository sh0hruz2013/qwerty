let modeToggle = document.querySelector(".switch");
let body = document.querySelector("body");

const sidebar = body.querySelector("nav");
const sidebarToggle = body.querySelector(".sidebar-toggle");

modeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
});

sidebarToggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});
const loading = document.getElementById("loading");

const loadingDuration = 2000; // 2s

setTimeout(() => {
  loading.classList.add("loading-none");
}, loadingDuration);
