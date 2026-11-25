# Prompts für U2: Serienbriefe

## Start-Prompt

```text
In diesem Ordner liegen kunden.xlsx (20 Kunden) und vorlage_einladung.docx (Brief mit Platzhaltern
in doppelten eckigen Klammern, z. B. [[Vorname]]).

Erstelle für jeden Kunden einen eigenen Brief als Word-Datei im Unterordner "briefe".
Dateiname: Brief_<Kundennummer>_<Nachname>.docx

Regeln:
- Ersetze alle Platzhalter durch die Daten aus kunden.xlsx.
- [[Briefanrede]] bildest du selbst: "Sehr geehrte Frau <Titel> <Nachname>," bzw.
  "Sehr geehrter Herr <Titel> <Nachname>,". Ist die Anrede leer, schreibe "Guten Tag <Vorname> <Nachname>,".
- Ist die Firma leer, darf im Adressfeld keine leere Zeile bleiben.
- Postleitzahlen müssen mit führender Null erhalten bleiben (z. B. 01067).
- Layout und Schrift der Vorlage bleiben unverändert.
- kunden.xlsx und vorlage_einladung.docx dürfen nicht verändert werden.

Erstelle zuerst NUR den Brief für Kunde K-1001 als Probe und zeige mir das Ergebnis.
Die übrigen Briefe erst nach meiner Freigabe.
```

## Nach der Freigabe

```text
Die Probe passt. Erstelle jetzt alle übrigen Briefe. Prüfe danach selbst:
Anzahl der Dateien, keine übrig gebliebenen [[Platzhalter]], und zeig mir die Briefe für
K-1005 (keine Anrede), K-1009 (keine Firma) und K-1006 (Titel Prof.) zur Kontrolle.
```

## Nachschärfen (Beispiele)

```text
In Brief K-1005 steht noch eine doppelte Leerstelle in der Anrede. Behebe das und prüfe alle Briefe
auf doppelte Leerzeichen.
```

```text
Schreibe die Briefanrede für Kunden mit Titel immer in der Form "Sehr geehrter Herr Dr. Weiß".
```

## Zusatzaufgabe

```text
Erstelle eine Datei versandliste.xlsx mit Kundennummer, Name, Firma und Dateiname des jeweiligen Briefs.
```
