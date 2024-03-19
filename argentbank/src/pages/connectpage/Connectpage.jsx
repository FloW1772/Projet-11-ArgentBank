import React from 'react';
import './Connectpage.scss';
import { useSelector, useDispatch } from 'react-redux';
// import { setUsername, updateLoginStatus } from '../store'; // Adjust path as needed

export function ConnectPage() {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.connect.username); // Access state from the slice

  const [password, setPassword] = React.useState(''); // State for password input
  const [errorMessage, setErrorMessage] = React.useState(''); // State for error message

  const handleUsernameChange = (event) => {
    dispatch(setUsername(event.target.value));
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    // Implement input validation (consider a separate function)
    if (!username || !password) {
      setErrorMessage('Veuillez remplir tous les champs.');
      return;
    }

    try {
      // Replace with your actual login API call
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error('Échec de la connexion');
      }

      const data = await response.json();

      // Handle successful login
      dispatch(updateLoginStatus(true));

      // Redirect or navigate to the appropriate page
      // (consider using React Router for navigation)

    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon" />
        <h1>Se connecter</h1>

        {errorMessage && <div className="error-message">{errorMessage}</div>}

        <form onSubmit={handleLogin}>
          <div className="input-wrapper">
            <label htmlFor="username">Nom d'utilisateur</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Mot de passe</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Se souvenir de moi</label>
          </div>
          <button className="sign-in-button" type="submit">
            Se connecter
          </button>
        </form>
      </section>
    </main>
  );
}

// export function ConnectPage() {
//   return (
//     <main className="main bg-dark">
//       <section className="sign-in-content">
//         <i className="fa fa-user-circle sign-in-icon" />
//         <h1>Se connecter</h1>
//         <form>
//           <div className="input-wrapper">
//             <label htmlFor="username">Nom d'utilisateur</label>
//             <input type="text" id="username" />
//           </div>
//           <div className="input-wrapper">
//             <label htmlFor="password">Mot de passe</label>
//             <input type="password" id="password" />
//           </div>
//           <div className="input-remember">
//             <input type="checkbox" id="remember-me" />
//             <label htmlFor="remember-me">Se souvenir de moi</label>
//           </div>
//           <button className="sign-in-button">Se connecter</button>
//         </form>
//       </section>
//     </main>
//   );  
// }
