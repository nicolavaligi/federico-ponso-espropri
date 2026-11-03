# Federico Ponso — Consulente Espropriativo

Sito personale di **Federico Ponso – Consulente Espropriativo** (*Dalla parte dell'espropriato*).

Espropri, occupazioni temporanee, mitigazione acustica e servitù per pubblica utilità, anche per elettrodotti.

## Aggiornamento del 3 novembre 2026

Implementate le indicazioni dei PDF «Nota per Nicola – modifiche al sito» e «Glossario – Le parole che trovi nella notifica», con la nuova foto e i file originali dello scudo allegati.

- Foto aggiornata nell'apertura, in «Chi sono», nelle anteprime social e nei riferimenti JSON-LD; descrizioni generiche. Copie JPEG ottimizzate da 800 e 1024 px.
- Scudo e favicon originali; intestazione adattiva con telefono e menu a icona, marchio da 54/64 px e da 36 px allo scorrimento.
- Glossario completo: 176 voci (25 riferimenti agli articoli e 151 termini), già presenti nell'HTML. Vista iniziale di 8 voci su due colonne, 5 su telefono; ricerca su titolo e spiegazione senza distinzione di accenti o maiuscole e con parole non consecutive; indice alfabetico e pulsante di espansione. Senza JavaScript tutte le definizioni restano leggibili.
- FAQ e dati strutturati allineati; linea del tempo adattiva; postilla dopo il passaggio 06; recapiti e testi rivisti; avviso sul diritto d'autore e deterrenti alla copia, con telefono, email e campi selezionabili. Questi deterrenti non impediscono screenshot o recupero degli asset.
- Ripristinato il CSS completo di Tailwind: `input.css` è la sorgente e `styles.css` è il file compilato da pubblicare. `glossario.js` contiene il filtro e i comandi del glossario.

### Ricompilare gli stili

```sh
npx tailwindcss@3.4.17 -i input.css -o styles.css --minify
```

### Verifiche eseguite

Controllati struttura e chiusura dei tag HTML, unicità degli ID, ancore, file locali, sintassi JavaScript e JSON-LD, presenza di tutte le voci e corrispondenza dei titoli delle 11 FAQ. Eseguito il codice del glossario su una fixture ricavata dall'HTML: vista 8/5, espansione a 176, ricerca con accenti e parole separate, nessun risultato, chiusura e azzeramento della ricerca.

La verifica visiva in browser non è stata completata: l'ambiente impedisce l'avvio di Chrome/Chromium. Prima della pubblicazione controllare almeno 320, 360, 390, 768, 1024 e 1440 px, intestazione dopo lo scorrimento, menu, fisarmoniche e invio del modulo verso WhatsApp/email.

### Passaggio al dominio definitivo

Le attività seguenti restano legate alla pubblicazione effettiva, come indicato nelle note:

- completare la verifica puntuale dei riferimenti normativi su Normattiva: il portale ha restituito errori nel caricamento dei singoli articoli durante questa sessione; le definizioni riprendono il PDF fornito e non costituiscono una validazione legale;
- verificare il funzionamento reale di `federico@federicoponso.it` e dei due canali del modulo;
- aggiornare gli URL delle immagini social e JSON-LD dal percorso GitHub al dominio definitivo;
- togliere `noindex, nofollow` e il blocco in `robots.txt` solo al passaggio in produzione; consentire anche i crawler degli assistenti AI;
- aggiungere Aruba nell'informativa solo dopo conferma dell'hosting effettivo;
- inviare la sitemap a Search Console e configurare Google Business Profile.
