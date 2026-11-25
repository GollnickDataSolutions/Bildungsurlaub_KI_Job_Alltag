# U4: Urlaubsplaner als Webseite

**Kontext:** Privat · **Dauer:** ca. 30 Minuten · **Vorkenntnisse:** keine

## Worum geht es?

Aus ein paar Rohnotizen zu einer Städtereise (Lissabon, 5 Tage) soll eine Webseite entstehen. Sie zeigt Tagesplan, Packliste zum Abhaken und eine Karte der Orte. Du kannst sie im Browser öffnen und aufs Handy schicken.

## Das liegt im Ordner

- `reise_infos.md` mit Eckdaten, Wünschen und Orten
- `orte.csv` mit sieben Orten und ungefähren Koordinaten
- `packliste_roh.txt` mit der unsortierten Packliste

Du kannst die Dateien durch deine eigene Reise ersetzen. Das Prinzip bleibt gleich.

## So gehst du vor

1. Kopiere den Ordner und starte den Agenten darin.
2. Gib den Start-Prompt aus `PROMPT.md` ein. Die Webseite entsteht als Datei `index.html`.
3. Öffne `index.html` per Doppelklick im Browser.
4. Prüfe die Seite mit der Prüfliste und lass dir Änderungen schicken, bis sie passt.
5. Teste die Handyansicht: Verkleinere das Browserfenster oder bitte den Agenten um einen Hinweis, wie du die Seite auf dem Handy öffnest.

## Fertig, wenn …

- [ ] `index.html` öffnet sich im Browser ohne Fehlermeldung.
- [ ] Es gibt einen Tagesplan für **5 Tage**, jeder Tag mit höchstens einem großen Programmpunkt.
- [ ] Der Ankunftstag berücksichtigt die Landung um 11:20 Uhr, der Abreisetag den Abflug um 19:05 Uhr.
- [ ] Ein Tag ist der Ausflug nach Sintra.
- [ ] Die Packliste ist in Gruppen sortiert (z. B. Dokumente, Technik, Kleidung) und lässt sich **abhaken**.
- [ ] Eine Karte oder eine Kartenlink-Liste zeigt die Orte aus `orte.csv`.
- [ ] Die Seite sieht auf dem Handy gut aus (kein seitliches Scrollen).
- [ ] Die Seite funktioniert auch ohne Internet, abgesehen von der Karte.

## Typische Stolpersteine

- Der Agent erfindet Öffnungszeiten, Preise oder Tickets. Frag nach, was aus deinen Dateien stammt und was ergänzt wurde. Prüfe solche Angaben vor der Reise selbst.
- Der Tagesplan ist zu voll. Sag deutlich: maximal ein großer Punkt pro Tag.
- Die Checkboxen vergessen beim Neuladen den Stand. Das ist normal, solange du nichts anderes verlangst. Als Zusatzaufgabe kannst du das ändern.

## Zusatzaufgabe

Bitte den Agenten, dass die abgehakten Punkte der Packliste im Browser gespeichert werden. Teste: Hake etwas ab, lade die Seite neu, und der Haken bleibt.
