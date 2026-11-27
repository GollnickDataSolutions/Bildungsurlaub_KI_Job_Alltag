---
name: summarize
description: Verdichtet einen Text (Artikel, Produktbeschreibung o. Ä.) auf genau 3 Kernaussagen. Nutze diesen Skill, wenn ein Text auf die drei wichtigsten Punkte reduziert werden soll.
---

# summarize

## Aufgabe
Lies den übergebenen Text und liefere genau 3 Kernaussagen, die den Inhalt am besten tragen.

## Schritte
1. Lies den gesamten Text, bevor du etwas formulierst.
2. Bestimme die 3 Aussagen mit dem größten Nutzen für den Leser. Keine Nebenaspekte, keine Beispiele, keine Zahlen ohne Kontext.
3. Formuliere jede Aussage als vollständigen, eigenständigen Satz (max. 25 Wörter).
4. Prüfe: Sind es genau 3 Punkte? Ist jeder Punkt ohne den übrigen Text verständlich?
5. Gib ausschließlich die drei nummerierten Punkte aus. Keine Einleitung, kein Fazit.

## Ausgabeformat
```
1. <Kernaussage 1>
2. <Kernaussage 2>
3. <Kernaussage 3>
```

## Nächster Schritt
Übergib die drei nummerierten Punkte **und** die Zielgruppe an den Skill `adapt-audience`. Übergib keinen Originaltext und keine Erläuterungen.
