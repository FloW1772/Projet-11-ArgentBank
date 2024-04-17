import React, { useEffect, useState } from 'react';
import './useraccount.scss';
import { useDispatch, useSelector } from 'react-redux';
import { editUserName, addUserDatas } from '../../redux-toolkit/reducers/profileSlice';

function App() {
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [userName, setUserName] = useState(useSelector((state) => state.profile.userName));
  const firstName = useSelector((state) => state.profile.firstName)
  const lastName = useSelector((state) => state.profile.lastName)
  const [newUserName, setNewUserName] = useState('')
  const [errorNewUserName, setErrorNewUserName] = useState(false)

  useEffect(() => {
    const getUserAccount = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/v1/user/profile', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        const userAccountJson = await response.json();
        dispatch(addUserDatas(userAccountJson.body));
      } catch (error) {
        console.error(error);
      }
    };
    getUserAccount();
  }, []);

  const handleSubmit = async (event, newUserName) => {
    if (newUserName === '') {
      setErrorNewUserName(true)
      event.preventDefault();
    } else {
      setErrorNewUserName(false)
      event.preventDefault();
      try {
        const response = await fetch('http://localhost:3001/api/v1/user/profile', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({
            userName: newUserName,
          })
        });
        const updatedUserData = await response.json();
        console.log(updatedUserData)
        dispatch(editUserName(updatedUserData.body.userName));
        setIsEditing(false);
      } catch (error) {
        console.error(error);
      }

    }


  };

  return (
    <main className="main bg-dark-new">
      <section className="header">
        <h1>
          Welcome back <br />
          {isEditing ? (
            <form className="user-edit-form" onSubmit={(e) => handleSubmit(e, newUserName)}>
              <input type="text" value={newUserName} placeholder="Surnom" onChange={(e) => setNewUserName(e.target.value)} />
              {errorNewUserName === true ? (<><small className="error-message">Ce champ est requis !</small></>) : ''}
              <input type="text" value={firstName} placeholder="Prénom" className="non-cliquable" readOnly={true} />
              <input type="text" value={lastName} placeholder="Nom" className="non-cliquable" readOnly={true} />
              <button type="submit">Enregistrer</button>
              <button type="button" onClick={() => setIsEditing(false)}>Annuler</button>
            </form>
          ) : (
            <span>{firstName} {lastName}!</span>
          )}
        </h1>
        {!isEditing && <button className="edit-button" onClick={() => setIsEditing(true)}>Edit Name</button>}
      </section>
      <h2 className="sr-only">Comptes</h2>
      <section className="account">
        <Compte titre="Argent Bank Checking (x8349)" montant="$2,082.79" description="Available Balance" />
        <button className="transaction-button">View Transactions</button>
      </section>
      <section className="account">
        <Compte titre="Argent Bank Savings (x6712)" montant="$10,928.42" description="Available Balance" />
        <button className="transaction-button">View Transactions</button>
      </section>
      <section className="account">
        <Compte titre="Argent Bank Credit Card (x8349)" montant="$184.30" description="Current Balance" />
        <button className="transaction-button">View Transactions</button>
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
