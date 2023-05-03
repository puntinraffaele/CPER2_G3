# Configurazione / utilizzo simulatore:

File `.env`:
```
# intervallo di aggiornamento, in secondi:
INTERVAL=10
```

Meccanismo di provisioning:
 - tabella di anagrafica in cui sono salvati tutti gli UUID + SKU
 - script per generare il tutto:  
   - Genera un timestamp e 20(?) UUID, li salva nel db
   - aumenta il ts di tot, genera altri UUID
   - ... ecc

Sarebbe anche simp che il simulatore invii i dati su un canale [MQTT](https://mqtt.org/getting-started/)