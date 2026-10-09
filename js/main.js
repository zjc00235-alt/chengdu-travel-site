const header = document.querySelector("[data-header]");
const toggle = document.querySelector("[data-menu-toggle]");
const menu = document.querySelector("[data-menu]");

function updateHeader() {
  if (!header) return;
  header.classList.toggle("scrolled", window.scrollY > 24);
}

toggle?.addEventListener("click", () => {
  menu?.classList.toggle("open");
});

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();
