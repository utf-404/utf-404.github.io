const menuButton = document.querySelector(".menu-button");
const siteNav = document.querySelector("#siteNav");
const themeButton = document.querySelector(".theme-button");
const savedTheme = localStorage.getItem("portfolio-theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark");
}

if (menuButton && siteNav) {
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

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && siteNav.classList.contains("open")) {
      siteNav.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.focus();
    }
  });
}

const updateThemeLabel = () => {
  if (!themeButton) return;
  themeButton.setAttribute(
    "aria-label",
    document.body.classList.contains("dark") ? "밝은 테마로 변경" : "어두운 테마로 변경"
  );
};

updateThemeLabel();

themeButton?.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem(
    "portfolio-theme",
    document.body.classList.contains("dark") ? "dark" : "light"
  );
  updateThemeLabel();
});

const projectTocLinks = [...document.querySelectorAll(".project-toc a")];
const detailSections = projectTocLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

if (projectTocLinks.length && detailSections.length && "IntersectionObserver" in window) {
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      const visibleSection = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!visibleSection) return;

      projectTocLinks.forEach((link) => {
        const isCurrent = link.getAttribute("href") === `#${visibleSection.target.id}`;
        if (isCurrent) link.setAttribute("aria-current", "true");
        else link.removeAttribute("aria-current");
      });
    },
    { rootMargin: "-25% 0px -60%", threshold: [0, 0.2, 0.5] }
  );

  detailSections.forEach((section) => sectionObserver.observe(section));
}
