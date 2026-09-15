/* ==========================================================
   Madame Mktg — Interaction layer
   Mobile-Nav, Cookie-Banner, Footer-Jahr. Bewusst schlank
   gehalten (keine Animations-Libraries) für eine schnelle,
   konversionsfokussierte Dienstleistungsseite.
   ========================================================== */
(function () {
  "use strict";

  /* ---------- Mobile nav toggle ---------- */
  document.querySelectorAll(".nav-toggle").forEach(function (btn) {
    var nav = btn.parentElement.querySelector(".nav");
    if (!nav) return;
    btn.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
      btn.textContent = open ? "✕" : "☰";
    });
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        btn.setAttribute("aria-expanded", "false");
        btn.textContent = "☰";
      });
    });
  });

  /* ---------- Cookie banner ---------- */
  (function () {
    var banner = document.getElementById("cookie-banner");
    if (!banner) return;
    var STORAGE_KEY = "mm-cookie-consent";
    var already = null;
    try { already = localStorage.getItem(STORAGE_KEY); } catch (e) {}
    if (!already) {
      setTimeout(function () { banner.classList.add("is-visible"); }, 1000);
    }
    function setConsent(value) {
      try { localStorage.setItem(STORAGE_KEY, value); } catch (e) {}
      banner.classList.remove("is-visible");
    }
    var btnNecessary = document.getElementById("cookie-necessary");
    var btnAll = document.getElementById("cookie-all");
    if (btnNecessary) btnNecessary.addEventListener("click", function () { setConsent("necessary"); });
    if (btnAll) btnAll.addEventListener("click", function () { setConsent("all"); });
  })();

  /* ---------- Footer year ---------- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
