var MyClass = React.createClass({
    render: function() {
      return (
        // Conteneur principal avec fond sombre
        <main className="main bg-dark">
          <section className="sign-in-content">
            {/* Icône d'utilisateur */}
            <i className="fa fa-user-circle sign-in-icon" />
            <h1>Sign In</h1>
  
            {/* Formulaire de connexion */}
            <form>
              {/* Champ nom d'utilisateur */}
              <div className="input-wrapper">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" />
              </div>
  
              {/* Champ mot de passe */}
              <div className="input-wrapper">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" />
              </div>
  
              {/* Case à cocher "Se souvenir de moi" */}
              <div className="input-remember">
                <input type="checkbox" id="remember-me" />
                <label htmlFor="remember-me">Remember me</label>
              </div>
  
              {/* Bouton de connexion */}
              <a href="./user.html" className="sign-in-button">Sign In</a>
            </form>
          </section>
        </main>
      );
    }
  });
  
  ReactDOM.render(<MyClass />, document.getElementById("root"));
  