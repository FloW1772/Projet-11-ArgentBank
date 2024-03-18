// import React from 'react'

// export default function Useraccount() {
//   return (
//     <div>Useraccount</div>
//   )
// }
import React from 'react';
import './useraccount.scss';
import { useSelector, useDispatch } from 'react-redux';


const accountData = [
  { type: 'Checking', accountNumber: 'x8349', balance: 2082.79 },
  { type: 'Savings', accountNumber: 'x6712', balance: 10928.42 },
  { type: 'Credit Card', accountNumber: 'x8349', balance: 184.30 },
];

function App() {
  return (
    <div className="App">
      <h1>Welcome back, Tony Jarvis!</h1>
      <AccountList accounts={accountData} />
    </div>
  );
}

function AccountList({ accounts }) {
  return (
    <ul>
      {accounts.map((account) => (
        <Account key={account.accountNumber} account={account} />
      ))}
    </ul>
  );
}

function Account({ account }) {
  return (
    <li>
      <strong>{account.type}</strong> ({account.accountNumber}) - ${account.balance.toFixed(2)}
    </li>
  );
}

export default App;