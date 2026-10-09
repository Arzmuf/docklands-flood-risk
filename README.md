# Docklands Flood Safety (ENGR90051)

A small, mobile-first static website for the Docklands "flood risk meter" posters.
People scan a QR code on a poster, choose their language, and get short flood safety
advice based on VicSES guidance, with tap-to-call emergency numbers.

- Plain HTML, CSS and vanilla JavaScript. No frameworks, no build step, no external requests.
- About 65 KB in total, uncompressed (GitHub Pages serves it gzipped).
- 6 languages: English, 简体中文, Tiếng Việt, हिन्दी, العربية (right-to-left), Bahasa Indonesia.

> ⚠️ **Before going live**
> 1. Have **every non-English translation reviewed by a native speaker** (see `translations.js`).
> 2. Fill in the location notes, which currently say `TODO`, in `script.js`.
> 3. Resolve the `TODO` fact checks listed at the top of `translations.js` and in `safety.html`.
> 4. Re-check all safety content against current advice at <https://www.ses.vic.gov.au/>.

## Files

| File | What it is |
|---|---|
| `index.html` | Page 1: location ("You scanned the sign at…") and language choice |
| `safety.html` | Page 2: emergency contacts, prepare, during, what NOT to do, hazards |
| `styles.css` | All styles (mobile-first, RTL-aware) |
| `script.js` | **Config** (locations, languages, scan tracking) and page logic |
| `translations.js` | All text, keyed by language code |
| `.nojekyll` | Tells GitHub Pages to serve the files as-is |

## Run locally

From the project folder:

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000/index.html?loc=newquay>.
Opening `index.html` directly from disk (double-click) also works.

To check the mobile view in Chrome, open DevTools → Toggle device toolbar (Ctrl/Cmd + Shift + M) and set the width to 360.

## Deploy to GitHub Pages

1. Push this folder to a GitHub repository (it must be public on a free account).
2. On GitHub, go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, then branch `main`, folder `/ (root)`, and click **Save**.
4. After a minute the site is live at `https://<username>.github.io/<repo-name>/`.

Every later push to `main` redeploys automatically. All paths are relative, so nothing needs changing.

## Locations and QR codes

Locations are in the `LOCATIONS` object at the top of `script.js`:

```js
const LOCATIONS = {
  "harbour-esplanade": {
    name: "Docklands tram stop, Harbour Esplanade",
    note: "Close to the river edge."   // optional; "" hides it
  },
  ...
};
```

The key (`harbour-esplanade`) is the location id used in the QR code. Use lowercase letters, numbers and dashes, and don't rename an id once its poster is printed.

**The URL for each poster** is:

```
https://<username>.github.io/<repo-name>/index.html?loc=<location-id>
```

For example, with the current config:

```
https://arzmuf.github.io/docklands-flood-risk/index.html?loc=harbour-esplanade
https://arzmuf.github.io/docklands-flood-risk/index.html?loc=newquay
https://arzmuf.github.io/docklands-flood-risk/index.html?loc=victoria-harbour
```

**Making the QR codes:**

- Paste each URL into any QR code generator, ideally one that makes *static* codes with no redirect or tracking, or
- use the command line: `brew install qrencode`, then
  `qrencode -o harbour-esplanade.png -s 12 -l M "https://…/index.html?loc=harbour-esplanade"`.

Test-scan every printed code with both an iPhone and an Android phone before putting it up.
An unknown or missing `?loc=` is safe: the visitor just sees the list of locations.

## Languages and translations

- All text is in `translations.js`, keyed by language code. English (`en`) is the master copy. A key missing from another language falls back to English.
- **Adding a language:** copy the `en` block in `translations.js`, give it a new code (e.g. `ko`) and translate it. Then add one line to `LANGUAGES` in `script.js`:
  ```js
  { code: "ko", name: "한국어", lang: "ko", dir: "ltr", match: ["ko"] },
  ```
  Use `dir: "rtl"` for right-to-left scripts (Arabic, Persian, Urdu, Hebrew).
- The visitor's browser language is highlighted automatically when it matches, but they can always choose. Their last choice is remembered on that phone.

## Optional: scan tracking (Google Form)

This is off by default. When on, tapping **Continue** silently sends **only** the location id and language code to a Google Form. No names, cookies or device details are sent. (As with any web request, Google's servers see the request itself, but the form only stores the two answers.) Navigation is never blocked if the request fails.

1. Create a Google Form with two **Short answer** questions, e.g. "Location" and "Language".
   In Settings, make sure it does **not** require sign-in.
2. In the form editor, click **⋮ → Get pre-filled link**. Type `test-loc` and `test-lang` into the two questions and click **Get link**, then copy it.
3. The link looks like:
   ```
   https://docs.google.com/forms/d/e/1FAIpQLS.../viewform?usp=pp_url&entry.123456789=test-loc&entry.987654321=test-lang
   ```
   - The **form response URL** is the part before `?`, with `viewform` changed to `formResponse`.
   - The **entry IDs** are `entry.123456789` (location) and `entry.987654321` (language).
4. Put them into the `TRACKING` block in `script.js` and set `enabled: true`:
   ```js
   const TRACKING = {
     enabled: true,
     formResponseUrl: "https://docs.google.com/forms/d/e/1FAIpQLS.../formResponse",
     entryLocation: "entry.123456789",
     entryLanguage: "entry.987654321"
   };
   ```
5. Test by tapping Continue, then check the form's **Responses** tab.

Because the request uses `no-cors`, the browser can't confirm success. Check the Responses tab to make sure it works.

## Accessibility notes

- Semantic landmarks (`header`, `main`, `section`, `footer`), a skip link, and real radio buttons in `fieldset`/`legend` groups.
- All tap targets are at least 48 px; calls and main buttons are 56–64 px.
- Illustrations are decorative and hidden from screen readers (`aria-hidden`), because each one sits next to a heading or text that says the same thing.
- The `lang` and `dir` attributes change with the chosen language, so screen readers pronounce the text correctly and Arabic is laid out right-to-left.
- Phone numbers are forced left-to-right so they read correctly inside Arabic text.

## Content sources

Safety advice is based on public guidance from VicSES (<https://www.ses.vic.gov.au/>) and
VicEmergency (<https://emergency.vic.gov.au/>). Emergency numbers: 000 (life-threatening),
VicSES 132 500, VicEmergency Hotline 1800 226 226. This is a student project and not an official source.
All illustrations are simple SVGs drawn for this project.
