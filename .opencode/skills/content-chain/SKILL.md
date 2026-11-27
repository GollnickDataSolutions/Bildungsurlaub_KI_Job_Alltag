---
name: content-chain
description: Orchestriert die Kette summarize → adapt-audience → draft-post. Nutze diesen Skill, wenn der Nutzer einen Text und eine Zielgruppe übergibt und daraus in einem Durchlauf einen Social-Media-Post erstellt werden soll.
---

# content-chain

## Eingabe
- Ein Text (Artikel, Produktbeschreibung o. Ä.)
- Eine Zielgruppe

## Ablauf
1. Rufe den Skill `summarize` mit dem Text auf. Ergebnis: 3 nummerierte Kernaussagen.
2. Rufe den Skill `adapt-audience` auf mit den 3 Kernaussagen **und** der Zielgruppe. Ergebnis: 3 angepasste Aussagen.
3. Rufe den Skill `draft-post` auf mit ausschließlich den 3 angepassten Aussagen. Ergebnis: fertiger Post.
4. Gib den fertigen Post aus.

## Regeln
- Jeder Schritt bekommt nur das Ergebnis des vorherigen Schritts, nicht den Originaltext.
- Brich ab und melde den Fehler, wenn ein Schritt nicht genau 3 Punkte liefert.
- Gib zusätzlich die drei Zwischenergebnisse aus, wenn der Nutzer die Kette nachvollziehen möchte.
