// import React from 'react';
// import './Connectpage.scss';

// export function ConnectPage() {
//   return (
//     <main className="main bg-dark">
//       <section className="sign-in-content">
//         <i className="fa fa-user-circle sign-in-icon" />
//         <h1>Sign In </h1>
//         <form>
//           <div className="input-wrapper">
//             <label htmlFor="username">Username</label>
//             <input type="text" id="username" />
//           </div>
//           <div className="input-wrapper">
//             <label htmlFor="password">Password</label>
//             <input type="password" id="password" />
//           </div>
//           <div className="input-remember">
//             <input type="checkbox" id="remember-me" />
//             <label htmlFor="remember-me">Remember me</label>
//           </div>
//           <button className="sign-in-button">Sign In</button>
//         </form>
//       </section>
//     </main>
//   );  
// }
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './Connectpage.scss';

export function ConnectPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const LOGIN = 'LOGIN';

  const loginAction = (token) => ({
    type: LOGIN,
    payload: token,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError('Tous les champs sont obligatoires');
      return;
    }

    try {
      const response = await fetch('https://api.swagger.io/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const token = await response.json();
        dispatch(loginAction(token));
        window.location.href = '/';
      } else {
        const error = await response.json();
        setError(error.message);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon" />
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          {error && <p className="error error-top">{error}</p>}
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p className="error">{error}</p>}
          <button type="submit">Sign In</button>
        </form>
      </section>
    </main>
  );
}

export default ConnectPage;
