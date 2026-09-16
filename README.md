# Madame Mktg

Dienstleistungswebsite für Online Marketing (Demo/Aufbau-Stand).

Schwestermarke von „Frauen mit Plan B" – Farbwelt (`#5D6E60`, `#dab880`) und Headline-Schrift
(selbstgehostet „Old Standard TT") sind bewusst angelehnt, Layout, Komponenten und Texte sind eigenständig.

## Struktur
- `index.html` – Startseite (Hero, Problem, Leistungen, Ablauf, Proof, Über mich, FAQ, Kontakt)
- `impressum.html`, `datenschutz.html` – rechtliche Seiten, **noch mit TODO-Platzhaltern**, bevor die Seite live geschaltet wird
- `css/style.css`, `js/main.js` – Styles & Interaktion (Mobile-Nav, Cookie-Banner)
- `assets/fonts/` – selbstgehostete Schrift (SIL Open Font License, kein Google-Fonts-Request)
- `assets/images/` – Logo & Fotos (komprimiert, Original-Uploads bewusst nicht im Repo). Im Einsatz:
  `logo.png` (Header/Footer), `hero-team.jpg` (Hero-Hintergrund, siehe unten), `ueber-uns.jpg` (Über uns),
  `einblick-strategie.jpg` / `einblick-workspace.jpg` / `einblick-checkliste.jpg` (Bildstreifen).
  Aktuell ungenutzt, aber verfügbar: `produkt-detail.jpg`, `social-detail.jpg`, `notizen-arbeit.jpg`.

## Hero-Hintergrund
Der Hero läuft mit `hero-team.jpg` als volle-Breite-Hintergrund mit sehr langsamem,
sanftem Dauer-Zoom (CSS-Animation, kein Videofile, daher kein zusätzliches Datengewicht).
Ein radialer Schleier-Verlauf sorgt dafür, dass die Textzone in der Mitte klar lesbar bleibt
und das Foto nur an den Rändern durchscheint. Styles/Animation unter „Hero" in `css/style.css`.
Ein echtes Video kann jederzeit an gleicher Stelle eingesetzt werden (`.hero__bg-img` durch
`<video>` ersetzen), sobald eins vorliegt.

## Offene Punkte vor Launch
- [ ] Impressum-Pflichtangaben ergänzen (§ 5 DDG)
- [ ] Datenschutzerklärung final ausformulieren, sobald Tools (Hosting, Analytics, Buchungstool) feststehen
- [ ] Echten Namen im „Über uns"-Bereich ergänzen (aktuell Platzhalter „XY")
- [ ] Finale Texte für alle Sektionen einpflegen
- [ ] Echte Kund:innen-Stimmen im Proof-Bereich ergänzen, sobald verfügbar
- [x] Hosting eingerichtet (GitHub Pages, Branch `main`)

## Lokal ansehen
Einfach `index.html` im Browser öffnen, kein Build-Schritt nötig.
