# Prompts für U1: Excel aufräumen

## Schritt 1: Nur analysieren

```text
In diesem Ordner liegt die Datei verkaufsliste_chaos.xlsx. Sie ist unordentlich.
Analysiere sie, ändere aber noch nichts. Liste auf:
- Welche Probleme gibt es (Datumsformate, Schreibweisen, Textzahlen, Dubletten, Leerzeilen)?
- Wie viele Zeilen sind jeweils betroffen?
Fasse das in einer kurzen Übersicht zusammen.
```

## Schritt 2: Aufräumen und auswerten (Start-Prompt)

```text
Bereinige die Datei verkaufsliste_chaos.xlsx und speichere das Ergebnis als NEUE Datei
verkaufsliste_sauber.xlsx. Die Originaldatei darf nicht verändert werden.

Das Ergebnis soll so aussehen:
1. Blatt "Daten": Titelzeile und Leerzeilen entfernt, exakte Dubletten entfernt,
   Datum als echtes Datum im Format TT.MM.JJJJ, Kundennamen vereinheitlicht,
   Menge und Einzelpreis als Zahlen, eine neue Spalte "Umsatz" (Menge mal Einzelpreis).
2. Blatt "Monatsübersicht": Umsatz pro Monat (Januar bis Juni) mit einem Säulendiagramm.

Sag mir danach:
- wie viele Zeilen vorher und nachher da waren,
- wie viele verschiedene Kunden es gibt,
- den Gesamtumsatz,
- bei welchen Zeilen du raten musstest.
```

## Nachschärfen (Beispiele)

```text
Zeig mir die Kundennamen vor und nach der Vereinheitlichung als Gegenüberstellung.
```

```text
Der Gesamtumsatz sollte 16.053,40 Euro sein. Rechne nach und erkläre, wo die Abweichung herkommt.
```

```text
Formatiere die Spalte Umsatz als Euro-Betrag mit zwei Nachkommastellen und fixiere die Kopfzeile.
```

## Zusatzaufgabe

```text
Ergänze ein Blatt "Kunden" mit dem Umsatz pro Kunde, absteigend sortiert, plus Balkendiagramm.
```
