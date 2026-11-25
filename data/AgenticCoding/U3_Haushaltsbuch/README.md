# U3: Haushaltsbuch

**Kontext:** Privat · **Dauer:** ca. 25 Minuten · **Vorkenntnisse:** keine

## Worum geht es?

Aus dem Kontoauszug von drei Monaten (Januar bis März 2026) soll eine verständliche Auswertung entstehen: Wohin geht das Geld, und wo lässt sich sparen?

## Das liegt im Ordner

- `kontoauszug_jan-maerz_2026.csv` mit 115 Buchungen (Buchungstag, Buchungstext, Verwendungszweck, Betrag)

Die Datei ist ein typischer Bankexport: Trennzeichen Semikolon, Dezimalkomma („-45,67“), Datum als TT.MM.JJJJ. Alle Daten sind frei erfunden.

## So gehst du vor

1. Kopiere den Ordner und starte den Agenten darin.
2. Gib den Start-Prompt aus `PROMPT.md` ein.
3. Prüfe zuerst die **Kategorien**: Lass dir zeigen, welche Buchung in welcher Kategorie gelandet ist. Zweifelsfälle (z. B. Amazon) entscheidest du, nicht der Agent.
4. Prüfe die Summen mit den Kontrollwerten.
5. Bitte den Agenten um drei konkrete Spartipps, begründet mit den Daten.

## Fertig, wenn …

- [ ] Jede Buchung hat eine Kategorie.
- [ ] Eine Excel-Datei oder ein Bericht zeigt die Ausgaben pro Kategorie und Monat.
- [ ] Ein Kreisdiagramm zeigt die Ausgabenverteilung.
- [ ] Die Abos sind in einer eigenen Liste mit Monats- und Jahreskosten zusammengefasst.
- [ ] Drei Spartipps nennen konkrete Zahlen aus den Daten.

### Kontrollwerte

| Größe | Betrag |
|---|---|
| Einnahmen (Gehalt, 3 × 2.850 €) | 8.550,00 € |
| Ausgaben gesamt (inkl. Sparplan, nach Abzug der Zalando-Erstattung) | 6.950,61 € |
| Saldo (Einnahmen minus Ausgaben) | +1.599,39 € |
| Abos pro Monat ab Februar (Netflix, Spotify, Fitness, Zeitung, Disney+) | 76,86 € |

Ausgaben pro Kategorie (leichte Abweichungen sind möglich, je nachdem, wie du Grenzfälle einordnest):

| Kategorie | Summe |
|---|---|
| Wohnen (Miete, Strom, Internet, Mobilfunk) | 3.290,94 € |
| Lebensmittel | 1.157,97 € |
| Essen gehen | 679,47 € |
| Sparen (ETF-Sparplan) | 450,00 € |
| Mobilität | 434,71 € |
| Shopping | 411,03 € |
| Abos | 221,59 € |
| Drogerie und Gesundheit | 159,40 € |
| Versicherung | 145,50 € |

## Typische Stolpersteine

- Der Agent liest „-45,67“ falsch ein, weil das Komma als Dezimaltrenner nicht erkannt wird. Die Summen weichen dann stark ab.
- Der Sparplan wird als „Ausgabe“ gezählt. Das ist Ansichtssache. Entscheide, wie du ihn zeigen willst.
- Der Agent ordnet Buchungen wie „AMAZON PAYMENTS“ pauschal zu. Lass dir die Zuordnung zeigen.

## Zusatzaufgabe

Fahre das Haushaltsbuch mit einem Folge-Prompt fort: „Wie würde sich mein Saldo entwickeln, wenn ich zwei Abos kündige und Essen gehen auf 150 Euro im Monat begrenze?“
