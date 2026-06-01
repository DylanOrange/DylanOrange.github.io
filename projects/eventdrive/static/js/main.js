const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav-links");
const navLinks = [...document.querySelectorAll(".nav-links a")];

toggle?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    toggle?.setAttribute("aria-expanded", "false");
  });
});

const sections = [...document.querySelectorAll("main section[id]")];
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
      });
    });
  },
  { rootMargin: "-32% 0px -62%", threshold: 0 }
);
sections.forEach((section) => observer.observe(section));

const copyButton = document.querySelector("[data-copy-bibtex]");
copyButton?.addEventListener("click", async () => {
  const bibtex = document.querySelector("#bibtex")?.textContent;
  if (!bibtex) return;
  await navigator.clipboard.writeText(bibtex);
  copyButton.textContent = "Copied";
  window.setTimeout(() => {
    copyButton.textContent = "Copy BibTeX";
  }, 1600);
});
