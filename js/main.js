const menuButton = document.querySelector(".menu-button");
const siteNav = document.querySelector("#siteNav");
const themeButton = document.querySelector(".theme-button");

menuButton.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

siteNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    siteNav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

themeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeButton.setAttribute(
    "aria-label",
    document.body.classList.contains("dark") ? "밝은 테마로 변경" : "어두운 테마로 변경"
  );
});
