# U1: Excel aufräumen

**Kontext:** Beruf · **Dauer:** ca. 20 Minuten · **Vorkenntnisse:** keine

## Worum geht es?

Die Vertriebsleitung der erfundenen Firma „Nordlicht Kaffee“ hat dir eine Verkaufsliste für das erste Halbjahr 2026 geschickt. Die Liste ist chaotisch. Du sollst sie bereinigen und eine Monatsübersicht mit Diagramm daraus machen.

## Das liegt im Ordner

- `verkaufsliste_chaos.xlsx` mit den Spalten Datum, Kunde, Produkt, Menge, Einzelpreis, Region

Was in der Datei schiefläuft (das findest du am besten mit dem Agenten heraus):

- Datumsangaben in mehreren Formaten, teils als Text
- Kundennamen in verschiedenen Schreibweisen
- Menge und Preis teils als Text („3 Stk“, „18,90 €“)
- doppelte Zeilen und Leerzeilen mitten in den Daten
- eine Titelzeile über der Tabelle

## So gehst du vor

1. Kopiere den Ordner und starte den Agenten darin (siehe Haupt-README).
2. Lass den Agenten zuerst **nur analysieren**: Welche Probleme gibt es? Noch nichts ändern.
3. Gib den Start-Prompt aus `PROMPT.md` ein. Die bereinigte Datei soll als **neue Datei** entstehen.
4. Prüfe das Ergebnis anhand der Prüfliste.
5. Schärfe nach, bis alles stimmt.

## Fertig, wenn …

- [ ] Die Originaldatei ist unverändert. Das Ergebnis liegt in einer neuen Datei.
- [ ] Alle Datumswerte sind echte Datumswerte im selben Format.
- [ ] Es gibt genau **8 verschiedene Kunden** (nicht mehr).
- [ ] Menge und Preis sind Zahlen, keine Texte.
- [ ] Es sind **96 Zeilen** übrig (aus 104 Zeilen mit 8 Dubletten).
- [ ] Eine Spalte **Umsatz** (Menge × Einzelpreis) ist vorhanden.
- [ ] Ein zweites Blatt zeigt den Umsatz pro Monat, mit einem Diagramm.

### Kontrollwerte

Gesamtumsatz: **16.053,40 €**

| Monat | Umsatz |
|---|---|
| Januar | 2.838,40 € |
| Februar | 3.258,50 € |
| März | 2.573,50 € |
| April | 2.702,20 € |
| Mai | 3.666,90 € |
| Juni | 1.013,90 € |

Weichen deine Zahlen ab, bitte den Agenten, **zu erklären, wie er gerechnet hat**. Das ist die wichtigste Gewohnheit bei KI-Ergebnissen: nachrechnen, nicht glauben.

## Typische Stolpersteine

- Der Agent löscht die Dubletten, sagt aber nicht, wie viele. Frag nach der Zahl.
- Er rät bei unklaren Datumsformaten wie „5. Jan 26“. Lass dir diese Fälle zeigen.
- Er überschreibt die Originaldatei. Deshalb steht „neue Datei“ im Prompt.

## Zusatzaufgabe

Ergänze ein drittes Blatt: Umsatz pro Kunde, sortiert vom größten zum kleinsten. Welcher Kunde ist der beste?
