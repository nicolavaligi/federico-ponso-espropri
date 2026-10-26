# Federico Ponso — Consulente Espropri & Tutela Indennità (D.P.R. 327/2001)

Landing page istituzionale ad alta conversione dedicata all'attività di consulenza tecnica ed estimativa in materia di **Espropriazioni per Pubblica Utilità e Servitù Coattive (Testo Unico D.P.R. 327/2001)** per **Federico Ponso**.

## Caratteristiche Implementate

- **Posizionamento Tecnico-Giuridico (D.P.R. 327/2001)**: focus su valore venale effettivo (Corte Cost. 348/2007 e 181/2011), esproprio parziale e deprezzamento del residuo (Art. 33), indennità aggiuntive Coltivatore Diretto / IAP / Fittavolo (Art. 40 e 42) e Terna Arbitrale (Art. 21).
- **Guida Interattiva alle 4 Fasi dell'Esproprio**:
  1. *Fase 1 (Art. 11 e 16)*: Avviso di Avvio del Procedimento e osservazioni entro 30 giorni.
  2. *Fase 2 (Art. 20)*: Notifica dell'Indennità Provvisoria e deposito presso MEF / Cassa Depositi e Prestiti.
  3. *Fase 3 (Art. 22-bis)*: Occupazione d'urgenza e verbalizzazione in contraddittorio dello Stato di Consistenza.
  4. *Fase 4 (Art. 21)*: Nomina del tecnico di parte nella Terna Arbitrale.
- **Simulatore / Check-up Preliminare Voci di Indennizzo**: diagnosi dinamica delle voci risarcitorie spettanti in base a tipologia bene, superficie, offerta dell'Ente e condizioni specifiche del fondo, con trasferimento automatico nel modulo di richiesta.
- **Architettura Web Moderna Zero-Dipendenze**: HTML5 semantico (`<dialog>` nativo, `<details name="espropri-faq">` esclusivo), validazione accessibile `:user-invalid` + `aria-invalid`, JSON-LD `ProfessionalService` e OpenGraph.

## Avvio Locale

```bash
python3 -m http.server 8508 --directory /Users/houdinick/federico-ponso-espropri
```
