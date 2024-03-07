import React from 'react';

export function ConnectPage() {
  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon" />
        <h1>Se connecter</h1>
        <form>
          <div className="input-wrapper">
            <label htmlFor="username">Nom d'utilisateur</label>
            <input type="text" id="username" />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Mot de passe</label>
            <input type="password" id="password" />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Se souvenir de moi</label>
          </div>
          <button className="sign-in-button">Se connecter</button>
        </form>
      </section>
    </main>
  );
}

// ReactDOM.render(<Connexion />, document.getElementById("root"));
