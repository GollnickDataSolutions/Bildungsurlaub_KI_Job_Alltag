# Übungen: Agentic Coding für Job und Alltag

Fünf Aufgaben ohne Programmierkenntnisse. Du beschreibst, was du willst. Der Agent (z. B. Claude Code) erledigt die Arbeit an deinen Dateien.

| Nr. | Übung | Kontext | Dauer | Ergebnis |
|---|---|---|---|---|
| U1 | [Excel aufräumen](U1_Excel_Aufraeumen/README.md) | Beruf | ca. 20 Min | saubere Tabelle, Monatsübersicht, Diagramm |
| U2 | [Serienbriefe](U2_Serienbriefe/README.md) | Beruf | ca. 25 Min | 20 personalisierte Word-Briefe |
| U3 | [Haushaltsbuch](U3_Haushaltsbuch/README.md) | Privat | ca. 25 Min | Auswertung nach Kategorien mit Diagramm |
| U4 | [Urlaubsplaner als Webseite](U4_Urlaubsplaner/README.md) | Privat | ca. 30 Min | eine Webseite mit Tagesplan, Packliste, Karte |
| U5 | [Visitenkarten-Webseite](U5_Visitenkarte/README.md) | Beides | ca. 30 Min | eine One-Page-Seite für Verein, Gewerbe oder dich |

Empfohlene Reihenfolge: U1 bis U5. Wer wenig Zeit hat, nimmt eine Übung aus dem Beruf und eine aus dem Privaten.

## In jedem Ordner

| Datei | Inhalt |
|---|---|
| `README.md` | Aufgabe, Vorgehen, Prüfliste, Stolpersteine |
| `PROMPT.md` | Fertiger Start-Prompt zum Einfügen plus Prompts zum Nachschärfen |
| Beispieldaten | Frei erfundene Dateien, mit denen du üben kannst |

## So arbeitest du in jeder Übung

1. **Kopie anlegen:** Kopiere den Übungsordner an einen eigenen Ort (z. B. auf den Desktop). Die Originale bleiben unverändert.
2. **Agent im Ordner starten:** Öffne ein Terminal im kopierten Ordner und starte deinen Agenten, z. B. mit `claude`.
3. **Start-Prompt einfügen:** Nimm den Prompt aus `PROMPT.md`. Lies ihn vorher einmal durch.
4. **Ergebnis prüfen:** Öffne die erzeugten Dateien selbst. Gleiche sie mit der Prüfliste aus der `README.md` ab.
5. **Nachschärfen:** Stimmt etwas nicht, sag dem Agenten konkret, was. Beispiele stehen in `PROMPT.md`.

## Vier Regeln für gute Aufträge

- **Ziel:** Was soll am Ende da sein? („Eine Excel-Datei mit …“)
- **Kontext:** Womit arbeitet der Agent? („Die Datei `kunden.xlsx` in diesem Ordner.“)
- **Grenzen:** Was darf er nicht tun? („Die Originaldatei nicht verändern.“)
- **Prüfbarkeit:** Woran erkennst du, dass es stimmt? („Zeige mir die Summe zum Gegenprüfen.“)

## Datenschutz

Die Beispieldaten sind erfunden. Lade bei eigenen Daten keine echten Kontoauszüge, Kundendaten oder Gesundheitsdaten in einen Agenten, solange du nicht weißt, wohin sie gesendet werden. Im Zweifel anonymisiere die Daten zuerst.
