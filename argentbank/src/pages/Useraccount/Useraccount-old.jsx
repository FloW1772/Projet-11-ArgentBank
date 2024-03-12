import React, { useState } from 'react';

const Account = ({ accountData, showTransactions, handleViewTransactions }) => {
  const handleToggleTransactions = () => {
    handleViewTransactions(accountData.title);
  };

  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{accountData.title}</h3>
        <p className="account-amount">{accountData.amount}</p>
        <p className="account-amount-description">{accountData.description}</p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button" onClick={handleToggleTransactions}>
          {showTransactions ? 'Hide Transactions' : 'View Transactions'}
        </button>
      </div>
      {showTransactions && (
        <ul className="transactions-list">
          {accountData.transactions.map((transaction) => (
            <li key={transaction.id}>
              <p>{transaction.date}</p>
              <p>{transaction.description}</p>
              <p>{transaction.amount}</p>
            </li>
          ))}
        </ul>
        
      )}
    </section>
  );
};

const App = () => {
  const accountsData = [
    {
      title: 'Argent Bank Checking (x8349)',
      amount: '$2,082.79',
      description: 'Available Balance',
      transactions: [
        {
          id: 1,
          date: '2023-11-16',
          description: 'Deposit',
          amount: '$1,000.00',
        },
        {
          id: 2,
          date: '2023-11-17',
          description: 'Withdrawal',
          amount: '$200.00',
        },
      ],
    },
    {
      title: 'Argent Bank Savings (x6712)',
      amount: '$10,928.42',
      description: 'Available Balance',
      transactions: [
        {
          id: 3,
          date: '2023-11-14',
          description: 'Interest earned',
          amount: '$10.00',
        },
      ],
    },
    {
      title: 'Argent Bank Credit Card (x8349)',
      amount: '$184.30',
      description: 'Current Balance',
      transactions: [
        {
          id: 4,
          date: '2023-11-15',
          description: 'Purchase',
          amount: '$150.00',
        },
      ],
    },
  ];

  const [showTransactions, setShowTransactions] = useState(false);

  const handleViewTransactions = (accountTitle) => {
    setShowTransactions(accountTitle === showTransactions ? false : accountTitle);
  };

  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>Welcome back<br />Tony Jarvis!</h1>
        <button className="edit-button">Edit Name</button>
      </div>
      <h2 className="sr-only">Accounts</h2>
      {accountsData.map((account) => (
        <Account
          key={account.title}
          accountData={account}
          showTransactions={account.title === showTransactions}
          handleViewTransactions={handleViewTransactions}
        />
      ))}
    </main>
  );
};

export default App;
