# Prompts für U4: Urlaubsplaner als Webseite

## Start-Prompt

```text
Lies reise_infos.md, orte.csv und packliste_roh.txt in diesem Ordner.
Baue daraus eine einzelne Webseite index.html (nur eine Datei, HTML mit eingebettetem CSS und JavaScript).

Inhalt:
1. Kopfbereich mit Reiseziel, Zeitraum und einer kurzen Einleitung.
2. Tagesplan für alle 5 Tage mit Überschrift je Tag, Vormittag, Nachmittag, Abend.
   Berücksichtige die Wünsche und die An- und Abreisezeiten aus reise_infos.md.
   Höchstens ein großer Programmpunkt pro Tag. Ein Tag ist der Ausflug nach Sintra.
3. Packliste: Sortiere die Einträge aus packliste_roh.txt in sinnvolle Gruppen.
   Jeder Eintrag hat eine Checkbox zum Abhaken.
4. Karte: Zeige die Orte aus orte.csv auf einer Karte (OpenStreetMap) oder, wenn das nicht geht,
   als Liste mit Links zu OpenStreetMap.

Gestaltung: ruhig und übersichtlich, gut lesbar auf dem Handy, Schrift ohne Serifen.
Erfinde keine Öffnungszeiten, Preise oder Ticketinfos. Wenn du etwas ergänzt, das nicht in
meinen Dateien steht, markiere es mit "Bitte prüfen".
Sag mir am Ende, wie ich die Seite öffne.
```

## Nachschärfen (Beispiele)

```text
Tag 3 ist zu voll. Verteile die Programmpunkte so, dass es nur noch einen großen Punkt gibt,
und zeige mir, was du verschoben hast.
```

```text
Mach die Seite farbiger im Stil von Lissabon (Blau und Weiß wie die Azulejos) und die Überschriften größer.
```

```text
Prüfe die Handyansicht: Gibt es seitliches Scrollen oder zu kleine Schrift? Behebe das.
```

## Zusatzaufgabe

```text
Speichere den Stand der Packliste im Browser (localStorage), damit abgehakte Punkte nach dem
Neuladen erhalten bleiben. Füge einen Knopf "Alles zurücksetzen" hinzu.
```
