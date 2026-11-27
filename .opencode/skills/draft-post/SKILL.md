---
name: draft-post
description: Erstellt aus 3 Kernaussagen einen Social-Media-Post mit Hook, den 3 Punkten und einer abschließenden Frage. Nutze diesen Skill als letzten Schritt, wenn aus Kernaussagen ein fertiger Post entstehen soll.
---

# draft-post

## Eingabe
Genau 3 nummerierte Aussagen (vom Skill `adapt-audience`).

## Aufgabe
Baue daraus einen Post in dieser festen Struktur:
1. **Hook**: ein Satz, der neugierig macht, ohne die Aussagen zu wiederholen
2. **3 Punkte**: die 3 Aussagen als kurze Absätze oder Aufzählung
3. **Abschlussfrage**: eine Frage, die zum Kommentieren einlädt

## Schritte
1. Formuliere den Hook aus dem Kern der 3 Aussagen. Keine Floskeln wie "Heute möchte ich...".
2. Übernimm die 3 Punkte inhaltlich unverändert. Kürze nur die Formulierung, nicht die Aussage.
3. Formuliere eine offene Frage, die sich auf die Punkte bezieht.
4. Prüfe: Hook, 3 Punkte und Frage sind vorhanden? Der Post ist unter 120 Wörtern?
5. Gib ausschließlich den fertigen Post aus.

## Ausgabeformat
```
<Hook>

1. <Punkt 1>
2. <Punkt 2>
3. <Punkt 3>

<Abschlussfrage>
```

## Nächster Schritt
Dies ist der letzte Schritt der Kette. Gib den fertigen Post an den Nutzer zurück.
