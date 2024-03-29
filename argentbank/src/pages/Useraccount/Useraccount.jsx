import React from 'react';
import './useraccount.scss';

function App() {
  return (
    <main className="main bg-dark">
      <header className="header">
        <h1>Bienvenue <br />Tony Jarvis !</h1>
        <button className="edit-button">Modifier le nom</button>
      </header>
      <h2 className="sr-only">Comptes</h2>
      <section className="account">
        <Compte titre="Argent Bank Chèques (x8349)" montant="$2,082.79" description="Solde disponible" />
        <button className="transaction-button">Voir les transactions</button>
      </section>
      <section className="account">
        <Compte titre="Argent Bank Épargne (x6712)" montant="$10,928.42" description="Solde disponible" />
        <button className="transaction-button">Voir les transactions</button>
      </section>
      <section className="account">
        <Compte titre="Carte de crédit Argent Bank (x8349)" montant="$184.30" description="Solde actuel" />
        <button className="transaction-button">Voir les transactions</button>
      </section>
    </main>
  );
}

function Compte({ titre, montant, description }) {
  return (
    <div className="account-content-wrapper">
      <h3>{titre}</h3>
      <p className="account-amount">{montant}</p>
      <p className="account-amount-description">{description}</p>
    </div>
  );
}

export default App;
