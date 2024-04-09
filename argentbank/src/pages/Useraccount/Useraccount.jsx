import React, { useEffect, useState } from 'react';
import './useraccount.scss';
import { useDispatch, useSelector } from 'react-redux';
import { editUserName, addUserDatas } from '../../redux-toolkit/reducers/profileSlice';

function App() {
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [userName, setUserName] = useState(useSelector((state) => state.profile.userName));
  // const [firstName, setFirstName] = useState(useSelector((state) => state.profile.firstName));
  const firstName = useSelector((state) => state.profile.firstName)
  // const [lastName, setLastName] = useState(useSelector((state) => state.profile.lastName));
  const lastName = useSelector((state) => state.profile.lastName)
  const [newUserName, setNewUserName] = useState('')
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
        // console.log(userAccountJson)
        dispatch(addUserDatas(userAccountJson.body));
      } catch (error) {
        console.error(error);
      }
    };
    getUserAccount();
  }, []);

  const handleSubmit = async (event, newUserName) => {
    console.log(userName)
    console.log(newUserName)
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'PUT',
        headers: {
          'Content-Type':'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          userName:newUserName,
        })
      });
      const updatedUserData = await response.json();
      console.log(updatedUserData)
      dispatch(editUserName(updatedUserData.body.userName));
      setIsEditing(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className="main bg-dark">
      <section className="header">
        <h1>
          Bienvenue <br />
          {isEditing ? (
            <form className="user-edit-form" onSubmit={(e)=>handleSubmit(e,newUserName)}>
              <input type="text" value={newUserName} placeholder="Surnom" onChange={(e)=>setNewUserName(e.target.value)} />
              <input type="text" value={firstName} placeholder="Prénom" className="non-cliquable"  readOnly={true} />
              <input type="text" value={lastName} placeholder="Nom" className="non-cliquable" readOnly={true} />
              <button type="submit">Enregistrer</button>
              <button type="button" onClick={() => setIsEditing(false)}>Annuler</button>
            </form>
          ) : (
            <span>{firstName} {lastName}</span>
          )}
        </h1>
        {!isEditing && <button className="edit-button" onClick={() => setIsEditing(true)}>Modifier le nom</button>}
      </section>
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
