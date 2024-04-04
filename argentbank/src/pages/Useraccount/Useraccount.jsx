// import React, { useEffect } from 'react';
// import './useraccount.scss';
// import { useDispatch, useSelector } from 'react-redux';
// import {addUserDatas} from '../../redux-toolkit/reducers/profileSlice'

// function App() {
//   const token = useSelector((state)=>state.auth.token)
//   const dispatch = useDispatch()
//   const userDatas = useSelector((state)=>state.profile)
//   useEffect(()=>{
//     const getUserAccount=async()=>{
//       console.log(token)
//       try{
//         const response = await fetch('http://localhost:3001/api/v1/user/profile',{
//           method : 'POST',
//           headers : {
//             'Authorization':`Bearer ${token}`
//           }
//         })
//         const userAccountJson= await response.json()
//         dispatch(addUserDatas(userAccountJson.body))
//       }catch(error){
//         console.log(error);
//       }

//     }
//     getUserAccount()
//   })
//   return (
//     <main className="main bg-dark">
//       <header className="header">{console.log(userDatas)}
//         <h1>Bienvenue <br />{userDatas.firstName} {userDatas.lastName} !</h1>
//         <button className="edit-button">Modifier le nom</button>
//       </header>
import React, { useEffect, useState } from 'react';
import './useraccount.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addUserDatas } from '../../redux-toolkit/reducers/profileSlice';

function App() {
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [userName, setUserName] = useState(useSelector((state) => state.profile.userName));
  const [firstName, setFirstName] = useState(useSelector((state) => state.profile.firstName));
  const [lastName, setLastName] = useState(useSelector((state) => state.profile.lastName));

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

  const handleChangeUserName = (event) => {
    setUserName(event.target.value);
  };

  const handleChangeFirstName = (event) => {
    setFirstName(event.target.value);
  };

  const handleChangeLastName = (event) => {
    setLastName(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          firstName,
          lastName
        })
      });
      const updatedUserData = await response.json();
      dispatch(addUserDatas(updatedUserData.body));
      setIsEditing(false);
    } catch (error) {
      console.error(error);
      // Handle errors appropriately, e.g., display an error message to the user
    }
  };

  return (
    <main className="main bg-dark">
      <header className="header">
        <h1>
          Bienvenue <br />
          {isEditing ? (
            <form className="user-edit-form" onSubmit={handleSubmit}>
              <input type="text" value={userName} placeholder="Surnom" onChange={handleChangeUserName} />
              <input type="text" value={firstName} placeholder="Prénom" className="non-cliquable" onChange={handleChangeFirstName} />
              <input type="text" value={lastName} placeholder="Nom" className="non-cliquable" onChange={handleChangeLastName} />
              <button type="submit">Enregistrer</button>
              <button type="button" onClick={() => setIsEditing(false)}>Annuler</button>
            </form>
          ) : (
            <span>{firstName} {lastName}</span>
          )}
        </h1>
        {!isEditing && <button className="edit-button" onClick={() => setIsEditing(true)}>Modifier le nom</button>}
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
