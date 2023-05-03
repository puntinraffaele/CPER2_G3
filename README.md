# CPER2_G3
## Orologion
## Project work, richieste:
- API Rest per acquisizione dati (C#/fastify) da smartwatch e salvataggio su db (Qualcosa)
  - da gestire nel cloud (Azure)  
- Applicazione web per la visualizzazione dei dati del proprio orologio (React/Blazor)  
  - da gestire nel cloud  
- Applicazione web per il test dei dispositivi (usata dall’azienda produttrice), come da specifiche del documento d’esame (React/Blazor)  
  - da gestire on premise  
- i dati dei lotti di produzione non devono essere inviati nel cloud, ma rimanere solo all'interno dell'azienda  
- gli ultimi dati degli orologi o le anomalie devono venir recuperate dal cloud  

### Descrizione del Sistema

Assumiamo che, al momento della fabbricazione di ogni batch di orologi, il loro GUID e quello del loro batch venga inserito nel db on prem.

#### Orologio
	- GUID
	- Ogni 10 sec all API
		- GUID
 		- Conteggio Vasche
		- Battito
		- Posizione
	- (Correttezza dati)
	- Batch di produzione
	
	
#### API Rest
	- Post su db
	- Get da data store
	- Acquisizione dati
	
#### Data Store
	- Memorizzazione

#### Portale Web esterno
	- Autenticazione
	- Dati singolo orologio

#### Portale Web interno
	- Dati tutti gli orologi 
	- Dati in locale
	- Anomalie dei dati

#### Simulatore orologio con invio ad PAI => db [TBA]

#### App in react esterna su Azure

#### App in react interna in locale

#### API con fastify 

#### DB [tba]

### db [utenti]

Tabella dati orologio
- guid orologio
- guid sessione
- reset (?)
- userid (?)

Tabella attività
- guid sessione
- guid attività
- conteggio vasche
- battiti
- posizione (latitudine/longitudine)
- timestamp
- velocità
- temperatura corporea
- temperatura esterna

Tabella dati utente (?)
- userid
- nome
- cognome
- datan
- codice fiscale
- luogon
- email
- password
- indirizzo casa

### db[azienda]
Tabella orologio
- guid orologio
- batch id
- userid

#### BATCH ID struttura
[prov] + [nfabbrica] + [data ISO 8601]  + [incrementale]
