import React from 'react';

const App = () => {
  return (
    <div>
      <header>
        <h1>Argent Bank</h1>
        <nav>
          <a href="./index.html">Accueil</a>
          <a href="./sign-in.html">Connexion</a>
        </nav>
      </header>
      <main>
        <section>
          <h2>Découvrez nos services</h2>
          <ul>
            <li>Comptes courants</li>
            <li>Épargne</li>
            <li>Prêts</li>
            <li>Assurance</li>
          </ul>
        </section>
        <section>
          <h2>Contactez-nous</h2>
          <p>
            Besoin d'aide ? Contactez-nous par téléphone au 01 23 45 67 89
            ou par email à contact@argentbank.com.
          </p>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Argent Bank</p>
      </footer>
    </div>
  );
};

export default App;
