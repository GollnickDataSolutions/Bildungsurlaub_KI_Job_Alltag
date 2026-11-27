---
name: adapt-audience
description: Schreibt genau 3 Kernaussagen so um, dass sie für eine vorgegebene Zielgruppe passen (Wortwahl, Beispiele, Nutzen). Nutze diesen Skill, wenn Kernaussagen auf eine bestimmte Zielgruppe zugeschnitten werden sollen.
---

# adapt-audience

## Eingabe
- Genau 3 nummerierte Kernaussagen (vom Skill `summarize`)
- Die Zielgruppe (z. B. "Personalverantwortliche im Mittelstand", "Studierende ohne IT-Vorkenntnisse")

## Aufgabe
Schreibe jede der 3 Aussagen so um, dass sie die Zielgruppe direkt anspricht. Inhaltlich bleibt jede Aussage gleich, nur Sprache, Beispiel und Nutzenbezug ändern sich.

## Schritte
1. Lies die Zielgruppe und notiere für dich ihre Vorkenntnisse, Sorgen und Ziele.
2. Schreibe jede Aussage so um, dass sie den Nutzen für diese Gruppe nennt.
3. Ersetze Fachbegriffe, die die Zielgruppe nicht kennt, durch verständliche Wörter oder erkläre sie in einem Halbsatz.
4. Verwende ein Alltagsbeispiel oder eine Situation, die zur Zielgruppe passt.
5. Halte jede Aussage bei max. 25 Wörtern.
6. Prüfe: Sind es genau 3 Punkte? Behält jeder Punkt die Kernaussage des Originals?
7. Gib ausschließlich die drei nummerierten Punkte aus.

## Ausgabeformat
```
1. <angepasste Aussage 1>
2. <angepasste Aussage 2>
3. <angepasste Aussage 3>
```

## Nächster Schritt
Übergib ausschließlich die drei angepassten Punkte an den Skill `draft-post`. Die Zielgruppe und die ursprünglichen Aussagen gehen nicht weiter.
