/* ==========================================================================
   Docklands Flood Safety — script.js
   Everything you are likely to edit is in the CONFIG section below.
   ========================================================================== */

/* ============================== CONFIG ================================== */

/* Poster locations. The phone's GPS position is matched to the nearest one.
   - name: shown to visitors. A plain string, or an object per language,
           e.g. { en: "NewQuay Promenade", zh: "新码头步道" }.
   - note: optional short flood-risk note. Use "" to hide it.
           Can also be a plain string or an object per language.
   - lat, lng: where the sign is (decimal degrees). In Google Maps,
           right-click the spot and click the numbers to copy them.
   - risk: "low", "moderate", "high" or "extreme". Shown on the risk meter.
           STATIC DEMO DATA for now; later this can come from a live feed.
   The key is also used in the QR code URL (index.html?loc=newquay). It is
   only a fallback, used when the phone can't or won't share its location.
   Ids: lowercase letters, numbers and dashes only. */
const LOCATIONS = {
  "harbour-esplanade": {
    name: "Docklands tram stop, Harbour Esplanade",
    note: "TODO: add a short flood-risk note for this spot (e.g. \"Close to the river edge.\")",
    lat: -37.8167, lng: 144.9455, // TODO: check against the real sign position
    risk: "high"
  },
  "newquay": {
    name: "NewQuay Promenade",
    note: "TODO: add a short flood-risk note for this spot.",
    lat: -37.8126, lng: 144.9402, // TODO: check against the real sign position
    risk: "moderate"
  },
  "victoria-harbour": {
    name: "Victoria Harbour, Docklands Park",
    note: "TODO: add a short flood-risk note for this spot.",
    lat: -37.8207, lng: 144.9399, // TODO: check against the real sign position
    risk: "extreme"
  }
};

/* How close (in metres) the phone must be to a sign to count as "at" it.
   Further away than this from every sign, the general Docklands level is shown. */
const NEAR_METRES = 500;

/* Risk level for Docklands as a whole (static demo data). */
const AREA_RISK = "high";

/* Languages, in the order the buttons appear.
   - code:  must match a key in translations.js
   - name:  the language written in its own script
   - lang:  HTML lang attribute (helps screen readers and fonts)
   - dir:   "rtl" for right-to-left scripts
   - match: browser language prefixes that should auto-highlight it */
const LANGUAGES = [
  { code: "en", name: "English",          lang: "en",      dir: "ltr", match: ["en"] },
  { code: "zh", name: "简体中文",           lang: "zh-Hans", dir: "ltr", match: ["zh"] },
  { code: "vi", name: "Tiếng Việt",       lang: "vi",      dir: "ltr", match: ["vi"] },
  { code: "hi", name: "हिन्दी",             lang: "hi",      dir: "ltr", match: ["hi"] },
  { code: "ar", name: "العربية",           lang: "ar",      dir: "rtl", match: ["ar"] },
  { code: "id", name: "Bahasa Indonesia", lang: "id",      dir: "ltr", match: ["id", "in"] }
];

const DEFAULT_LANG = "en";

/* OPTIONAL scan tracking via Google Forms (disabled by default).
   When enabled, tapping Continue sends ONLY the location id and language
   code to your form. No names, no device info, no personal data.
   See README.md → "Optional: scan tracking" for how to fill these in. */
const TRACKING = {
  enabled: false,
  formResponseUrl: "https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse",
  entryLocation: "entry.1111111111",
  entryLanguage: "entry.2222222222"
};

/* =========================== END OF CONFIG ============================== */

(function () {
  "use strict";

  var STORAGE_KEY = "docklands-flood-lang";
  var T = window.TRANSLATIONS || {};

  /* ---------- helpers ---------- */

  function getLang(code) {
    for (var i = 0; i < LANGUAGES.length; i++) {
      if (LANGUAGES[i].code === code) return LANGUAGES[i];
    }
    return null;
  }

  function validLoc(id) {
    return id && Object.prototype.hasOwnProperty.call(LOCATIONS, id) ? id : null;
  }

  function lookup(obj, key) {
    return key.split(".").reduce(function (o, k) { return o == null ? undefined : o[k]; }, obj);
  }

  // Translated text for a key, falling back to English.
  function t(lang, key) {
    var v = lookup(T[lang], key);
    if (v == null) v = lookup(T[DEFAULT_LANG], key);
    return v == null ? "" : v;
  }

  // A config value that is either a string or { en: ..., zh: ... }.
  function localText(value, lang) {
    if (!value) return "";
    if (typeof value === "string") return value;
    return value[lang] || value[DEFAULT_LANG] || "";
  }

  function remembered() {
    try { return localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
  }

  function remember(code) {
    try { localStorage.setItem(STORAGE_KEY, code); } catch (e) { /* private mode */ }
  }

  function browserLang() {
    var list = navigator.languages || [navigator.language || ""];
    for (var i = 0; i < list.length; i++) {
      var prefix = String(list[i]).toLowerCase().split("-")[0];
      for (var j = 0; j < LANGUAGES.length; j++) {
        if (LANGUAGES[j].match.indexOf(prefix) !== -1) return LANGUAGES[j];
      }
    }
    return null;
  }

  // URL ?lang= wins, then the last choice on this phone, then the browser.
  function startingLang(param) {
    var l = getLang(param) || getLang(remembered()) || browserLang() || getLang(DEFAULT_LANG);
    return l.code;
  }

  function buildUrl(page, loc, lang) {
    var p = new URLSearchParams();
    if (loc) p.set("loc", loc);
    if (lang) p.set("lang", lang);
    var qs = p.toString();
    return page + (qs ? "?" + qs : "");
  }

  // Fill every [data-i18n] / [data-i18n-list] element and set lang + dir.
  function applyLanguage(code) {
    var L = getLang(code);
    var root = document.documentElement;
    root.lang = L.lang;
    root.dir = L.dir;

    var els = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < els.length; i++) {
      els[i].textContent = t(code, els[i].getAttribute("data-i18n"));
    }

    var lists = document.querySelectorAll("[data-i18n-list]");
    for (var j = 0; j < lists.length; j++) {
      var items = t(code, lists[j].getAttribute("data-i18n-list")) || [];
      lists[j].textContent = "";
      for (var k = 0; k < items.length; k++) {
        var li = document.createElement("li");
        li.textContent = items[k];
        lists[j].appendChild(li);
      }
    }

    document.title = t(code, "appName");
  }

  function sendScan(loc, lang) {
    if (!TRACKING.enabled || !window.fetch) return;
    var body = new URLSearchParams();
    body.set(TRACKING.entryLocation, loc || "none");
    body.set(TRACKING.entryLanguage, lang);
    // no-cors: we can't read the reply, and we don't need to.
    // keepalive: lets the request finish while the next page loads.
    fetch(TRACKING.formResponseUrl, {
      method: "POST",
      mode: "no-cors",
      keepalive: true,
      body: body
    }).catch(function () { /* never block the visitor */ });
  }

  function makeOption(name, value, text, checked, langAttr, dir) {
    var label = document.createElement("label");
    label.className = "option";
    var input = document.createElement("input");
    input.type = "radio";
    input.name = name;
    input.value = value;
    input.checked = checked;
    var span = document.createElement("span");
    span.className = "option__text";
    span.textContent = text;
    if (langAttr) { span.lang = langAttr; span.dir = dir; }
    label.appendChild(input);
    label.appendChild(span);
    return label;
  }

  /* ---------- location + risk meter ---------- */

  var RISK_LEVELS = ["low", "moderate", "high", "extreme"];

  // Needle angle in degrees from straight up: the middle of each segment.
  function needleAngle(level) {
    var i = RISK_LEVELS.indexOf(level);
    return i === -1 ? 0 : -67.5 + 45 * i;
  }

  // Straight-line distance in metres between two lat/lng points.
  function metresBetween(lat1, lng1, lat2, lng2) {
    var rad = Math.PI / 180;
    var dLat = (lat2 - lat1) * rad;
    var dLng = (lng2 - lng1) * rad;
    var h = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * rad) * Math.cos(lat2 * rad) * Math.sin(dLng / 2) * Math.sin(dLng / 2);
    return 6371000 * 2 * Math.asin(Math.sqrt(h));
  }

  // Id of the nearest sign within NEAR_METRES, or null.
  function nearestLoc(lat, lng) {
    var best = null, bestDist = NEAR_METRES;
    Object.keys(LOCATIONS).forEach(function (id) {
      var L = LOCATIONS[id];
      if (typeof L.lat !== "number" || typeof L.lng !== "number") return;
      var d = metresBetween(lat, lng, L.lat, L.lng);
      if (d <= bestDist) { best = id; bestDist = d; }
    });
    return best;
  }

  /* ---------- index.html ---------- */

  function initIndex() {
    var params = new URLSearchParams(location.search);
    var qrLoc = validLoc(params.get("loc"));
    var lang = startingLang(params.get("lang"));

    // "locating" → waiting for the phone; "gps" → matched a sign;
    // "outside" → not near any sign; "nogps" → location denied or unavailable.
    var state = "locating";
    var loc = null;

    var hereLabel = document.getElementById("here-label");
    var hereName = document.getElementById("here-name");
    var hereStatus = document.getElementById("here-status");
    var hereNote = document.getElementById("here-note");
    var needle = document.getElementById("needle");
    var riskNow = document.getElementById("risk-now");
    var riskLevel = document.getElementById("risk-level");
    var langOptions = document.getElementById("lang-options");
    var cont = document.getElementById("continue");

    // Point an element at a translation key; applyLanguage() fills it in.
    function setKey(el, key) {
      if (key) el.setAttribute("data-i18n", key);
      else el.removeAttribute("data-i18n");
      el.hidden = !key;
    }

    function render() {
      var locating = state === "locating";
      var status = null;
      if (state === "outside") status = "locOutside";
      if (state === "nogps") status = loc ? "locNoGps" : "locUnknown";

      setKey(hereLabel, locating ? "locating" : "youAreAt");
      setKey(hereStatus, status);

      var level = locating ? "" : (loc ? LOCATIONS[loc].risk : AREA_RISK);
      if (RISK_LEVELS.indexOf(level) === -1) level = "";
      setKey(riskLevel, level ? "risk." + level : null);
      riskLevel.hidden = false;
      if (!level) riskLevel.textContent = "…";
      riskNow.setAttribute("data-level", level);
      needle.style.transform = "rotate(" + needleAngle(level) + "deg)";

      applyLanguage(lang);

      hereName.hidden = locating;
      hereName.textContent = loc ? localText(LOCATIONS[loc].name, lang) : t(lang, "defaultLocation");
      var note = loc && !locating ? localText(LOCATIONS[loc].note, lang) : "";
      hereNote.textContent = note;
      hereNote.hidden = !note;

      cont.href = buildUrl("safety.html", loc, lang);
    }

    // Fall back to the sign in the QR code, or to Docklands in general.
    function noPosition() {
      if (state !== "locating") return;
      state = "nogps";
      loc = qrLoc;
      render();
    }

    function locate() {
      if (!navigator.geolocation || window.isSecureContext === false) { noPosition(); return; }
      // The coordinates are only compared with LOCATIONS here and then dropped.
      navigator.geolocation.getCurrentPosition(function (pos) {
        loc = nearestLoc(pos.coords.latitude, pos.coords.longitude);
        state = loc ? "gps" : "outside";
        render();
      }, noPosition, { enableHighAccuracy: true, timeout: 10000, maximumAge: 60000 });
      // The browser's permission prompt has no timeout; don't wait on it forever.
      // A later answer still updates the page.
      setTimeout(noPosition, 15000);
    }

    LANGUAGES.forEach(function (L) {
      langOptions.appendChild(makeOption("lang", L.code, L.name, L.code === lang, L.lang, L.dir));
    });

    langOptions.addEventListener("change", function (e) {
      if (!getLang(e.target.value)) return;
      lang = e.target.value;
      render();
    });

    cont.addEventListener("click", function () {
      remember(lang);
      sendScan(loc, lang);
    });

    render();
    locate();
  }

  /* ---------- safety.html ---------- */

  function initSafety() {
    var params = new URLSearchParams(location.search);
    var loc = validLoc(params.get("loc"));
    var lang = startingLang(params.get("lang"));

    var select = document.getElementById("lang-select");
    var locName = document.getElementById("loc-name");
    var changeLink = document.getElementById("change-link");

    LANGUAGES.forEach(function (L) {
      var opt = document.createElement("option");
      opt.value = L.code;
      opt.textContent = L.name;
      opt.lang = L.lang;
      select.appendChild(opt);
    });

    function render() {
      applyLanguage(lang);
      select.value = lang;
      locName.textContent = loc ? localText(LOCATIONS[loc].name, lang) : t(lang, "defaultLocation");
      changeLink.href = buildUrl("index.html", loc, lang);
    }

    select.addEventListener("change", function () {
      if (!getLang(select.value)) return;
      lang = select.value;
      remember(lang);
      render();
      if (history.replaceState) history.replaceState(null, "", buildUrl("safety.html", loc, lang));
    });

    render();
  }

  /* ---------- start ---------- */

  var page = document.body.getAttribute("data-page");
  if (page === "index") initIndex();
  if (page === "safety") initSafety();
})();
