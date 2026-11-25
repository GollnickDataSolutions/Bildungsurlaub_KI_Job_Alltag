# Prompts für U3: Haushaltsbuch

## Start-Prompt

```text
In diesem Ordner liegt kontoauszug_jan-maerz_2026.csv (Bankexport, Trennzeichen Semikolon,
Dezimalkomma, Datum TT.MM.JJJJ). Die Daten sind frei erfunden.

Erstelle daraus ein Haushaltsbuch als Excel-Datei haushaltsbuch.xlsx:
1. Blatt "Buchungen": alle Buchungen, ergänzt um die Spalten Monat und Kategorie.
   Kategorien: Wohnen, Lebensmittel, Essen gehen, Mobilität, Shopping, Abos,
   Drogerie/Gesundheit, Versicherung, Sparen, Einnahmen.
2. Blatt "Auswertung": Ausgaben pro Kategorie und Monat, dazu ein Kreisdiagramm der Gesamtausgaben.
3. Blatt "Abos": alle wiederkehrenden Abos mit Monats- und Jahreskosten.

Die CSV-Datei darf nicht verändert werden.
Zeige mir vor der Excel-Datei zuerst die Zuordnung "Buchungstext -> Kategorie" als Tabelle,
damit ich Grenzfälle korrigieren kann. Nenne danach Einnahmen, Ausgaben und Saldo
und erkläre kurz, wie du gerechnet hast.
```

## Nach der Prüfung der Kategorien

```text
Die Zuordnung passt bis auf: AMAZON PAYMENTS gehört zu "Shopping". Den ETF-Sparplan führst du als
"Sparen" und zählst ihn in der Auswertung getrennt von den Ausgaben. Erstelle jetzt die Excel-Datei.
```

## Spartipps

```text
Gib mir drei konkrete Spartipps. Jeder Tipp muss mit Zahlen aus meinen Buchungen begründet sein
(z. B. "Abos kosten ab Februar 76,86 Euro im Monat"). Keine allgemeinen Ratschläge.
```

## Nachschärfen (Beispiele)

```text
Die Summe der Ausgaben stimmt nicht mit meiner eigenen Rechnung überein. Prüfe, ob die Beträge
mit Dezimalkomma richtig eingelesen wurden, und zeig mir die fünf größten Einzelbuchungen.
```

```text
Zeige in der Auswertung zusätzlich den Durchschnitt pro Monat und markiere die Kategorie mit dem
größten Anstieg von Januar zu März.
```
