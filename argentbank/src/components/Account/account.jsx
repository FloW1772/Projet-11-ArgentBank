import React, { useState } from 'react';

const Account = ({ accountData }) => {
  const [showTransactions, setShowTransactions] = useState(false);

  const handleViewTransactions = () => {
    setShowTransactions(!showTransactions);
  };

  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{accountData.title}</h3>
        <p className="account-amount">{accountData.amount}</p>
        <p className="account-amount-description">{accountData.description}</p>
      </div>
      <div className="account-content-wrapper cta">
        <button
          className="transaction-button"
          onClick={handleViewTransactions}
        >
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

export default Account;
