# Changelog

## 0.3.1

- Ottimizzazione UI breadcrumb.

## 0.3.0

- Aggiunto supporto a ruoli nella gestione utenze.

## 0.2.4

- Aggiunta configurazione per applicare il nome del gruppo sull'header al posto del nome applicativo nel caso in cui il gruppo è stato selezionato.

## 0.2.3

- Correzione nome funzione json_errors_command.

## 0.2.2

- Aggiunta configurazione per specificare l'url di redirect dell'utente nel caso in cui la sessione non sia valida.

## 0.2.1

- Rinominato controller AppMembership in Membership.
- Aggiunto stimulus controller InputSelect con gestione dei select e possibilità di aggiungere opzioni custom.
- Aggiunta variabile globale $matildaCore per accesso rapido all'oggetto application e alle funzioni utils.

## 0.2.0

- Fix vari.

## 0.1.9

- Aggiunto supporto a permessi di default per gli utenti invitati ad un gruppo.
- Aggiunta personalizzazione footer.

## 0.1.8

- Aggiunto supporto a logo.

## 0.1.7

- Aggiunta mail di notifica invito nuovo utente.

## 0.1.6

- Aggiunta possibilità di rimuovere voci di menu dalla sidebar.
- Aggiunta possibilità di personalizzare il redirect post autenticazione.

## 0.1.5

- Fixato logout quando la sessione utente non esiste.
- Cambiati index voci menu di default.
- Aggiunti comando ed evento per rimozione utente dal gruppo.

## 0.1.4

- Fix bug selettore lingua nel caso di una sola lingua.
- Modificata struttura CSS per semplificare personalizzazione dell'interfaccia.
- Aggiunta configurazione per impostare il mittente delle email.
- Aggiornamento documentazione.
- Corretto bug su schermata di gestione utenti in fase di aggiornamento permessi.

## 0.1.3

- Completamento supporto multilingua.
- Traduzione sistema in inglese.

## 0.1.2

- Inizio predisposizione al multilingua.

- Aggiunto metodo **serialize_authentication** su modello **User** che ritorna un hash con i dati dell'utente da ritornare nelle actions di login e di signup di **AuthenticationController**.

- Aggiunto sul comando **Authentication::SignupCommand** il parametro non obbligatorio **:privacy** per specificare la versione della privacy policy accettata dall'utente. IL SALVATAGGIO DELLA PRIVACY DEVE ESSERE COMPLETATO A LIVELLO DI EVENTI.

- Aggiunta configurazione **global_version** che permette di sepecificare la versione dell'applicazione. Se non viene impostata prende come valore di default la versione della gemma.

- Aggiunta componente front-end tile utilizzata in dashboard per mostrare shortcut cliccabili alle sezioni dell'applicazione.

- Vari fix relativi alla visualizzazione responsive.