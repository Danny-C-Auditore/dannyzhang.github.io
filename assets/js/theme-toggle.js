(function () {
  "use strict";

  var root = document.documentElement;
  var toggle = document.getElementById("theme-toggle");
  var icon = document.getElementById("theme-icon");
  var control = toggle ? toggle.querySelector("[role='button']") : null;

  if (!toggle || !control || !icon) {
    return;
  }

  function savedTheme() {
    try {
      return localStorage.getItem("theme");
    } catch (error) {
      return null;
    }
  }

  function saveTheme(theme) {
    try {
      localStorage.setItem("theme", theme);
    } catch (error) {
      // Theme switching still works when storage is unavailable.
    }
  }

  function systemTheme() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function applyTheme(theme) {
    var dark = theme === "dark";
    root.toggleAttribute("data-theme", dark);
    if (dark) {
      root.setAttribute("data-theme", "dark");
    }

    icon.classList.toggle("fa-sun", !dark);
    icon.classList.toggle("fa-moon", dark);
    control.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
  }

  applyTheme(savedTheme() || systemTheme());

  control.addEventListener("click", function (event) {
    event.preventDefault();
    event.stopImmediatePropagation();

    var nextTheme = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    saveTheme(nextTheme);
    applyTheme(nextTheme);
  });
})();
