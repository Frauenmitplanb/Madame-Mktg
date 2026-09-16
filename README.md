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
  `logo.png` (Header/Footer), `ueber-uns.jpg` (Über uns),
  `einblick-strategie.jpg` / `einblick-workspace.jpg` / `einblick-checkliste.jpg` (Bildstreifen).
  Aktuell ungenutzt, aber verfügbar: `hero-team.jpg` (Hero läuft testweise mit animierter
  SVG-Grafik statt Foto – siehe unten), `produkt-detail.jpg`, `social-detail.jpg`, `notizen-arbeit.jpg`.

## Hero-Hintergrund (Test)
Der Hero läuft aktuell mit einer selbstgebauten, animierten SVG-Grafik im Hintergrund
(Wachstumskurve + dezente Icons, komplett CSS/SVG, kein Videofile) statt einem Foto –
inline in `index.html`, Styles/Animationen unter „Hero" in `css/style.css`. Ein echtes
Video kann jederzeit an gleicher Stelle eingesetzt werden, sobald eins vorliegt.

## Offene Punkte vor Launch
- [ ] Impressum-Pflichtangaben ergänzen (§ 5 DDG)
- [ ] Datenschutzerklärung final ausformulieren, sobald Tools (Hosting, Analytics, Buchungstool) feststehen
- [ ] Echten Namen im „Über uns"-Bereich ergänzen (aktuell Platzhalter „XY")
- [ ] Finale Texte für alle Sektionen einpflegen
- [ ] Echte Kund:innen-Stimmen im Proof-Bereich ergänzen, sobald verfügbar
- [x] Hosting eingerichtet (GitHub Pages, Branch `main`)

## Lokal ansehen
Einfach `index.html` im Browser öffnen, kein Build-Schritt nötig.
