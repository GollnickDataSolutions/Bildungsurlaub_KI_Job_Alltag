# U2: Serienbriefe

**Kontext:** Beruf · **Dauer:** ca. 25 Minuten · **Vorkenntnisse:** keine

## Worum geht es?

„Nordlicht Kaffee“ lädt 20 Kundinnen und Kunden zum Kundenabend am 11. Dezember 2026 ein. Aus einer Adressliste in Excel und einer Brief-Vorlage in Word sollen 20 persönliche Briefe entstehen, jeder als eigene Word-Datei.

## Das liegt im Ordner

- `kunden.xlsx` mit 20 Kunden (Anrede, Titel, Vorname, Nachname, Firma, Straße, PLZ, Ort, Kundennummer)
- `vorlage_einladung.docx` mit Platzhaltern in doppelten eckigen Klammern, z. B. `[[Vorname]]`

Die Daten haben Eigenheiten, auf die dein Auftrag achten muss:

- 2 Kunden haben **keine Anrede** (Spalte leer). Sie sollen neutral angesprochen werden.
- 1 Kunde hat **keine Firma**. Die Zeile im Adressfeld soll nicht leer bleiben.
- 3 Kunden haben einen **Titel** (Dr., Prof.), der in die Anrede gehört.
- 3 Postleitzahlen beginnen mit **0** (z. B. 01067). Die Null darf nicht verloren gehen.

## So gehst du vor

1. Kopiere den Ordner und starte den Agenten darin.
2. Öffne die Vorlage und die Excel-Liste kurz selbst, damit du weißt, was drinsteht.
3. Gib den Start-Prompt aus `PROMPT.md` ein.
4. Lass dir zuerst **einen Brief als Probe** zeigen, bevor alle 20 entstehen.
5. Prüfe die Briefe mit der Prüfliste.

## Fertig, wenn …

- [ ] Es gibt **20 Word-Dateien** in einem Unterordner `briefe/`, jede mit sprechendem Namen (z. B. `Brief_K-1001_Hoffmann.docx`).
- [ ] In keinem Brief steht noch ein `[[...]]`-Platzhalter.
- [ ] Die Anrede passt: „Sehr geehrte Frau Hoffmann“, „Sehr geehrter Herr Dr. Weiß“, „Guten Tag Alex Kern“.
- [ ] Der Brief an Felix Albrecht (K-1009) hat keine leere Firmenzeile.
- [ ] Die Postleitzahl 01067 (Dresden) steht mit führender Null im Brief.
- [ ] Layout und Schrift der Vorlage sind erhalten.
- [ ] `vorlage_einladung.docx` und `kunden.xlsx` sind unverändert.

## Typische Stolpersteine

- Der Agent füllt nur die ersten 2 bis 3 Briefe und behauptet, alle seien fertig. Zähle die Dateien.
- Bei fehlender Anrede steht „Sehr geehrte/r  Kern“ oder ein Leerzeichen-Loch. Prüfe genau diese beiden Briefe.
- Aus 01067 wird 1067. Das passiert, wenn Excel die PLZ als Zahl liest.

## Zusatzaufgabe

Bitte den Agenten zusätzlich um eine Übersichtsdatei `versandliste.xlsx` mit Kundennummer, Name und Dateiname des Briefs. So kannst du später nachvollziehen, wer welchen Brief bekommen hat.
