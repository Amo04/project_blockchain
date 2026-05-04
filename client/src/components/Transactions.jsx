import React, { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";

const TransactionCard = ({ addressFrom, addressTo, amount, message, timestamp }) => (
  <div className="bg-gray-800 p-4 rounded-lg m-2 hover:bg-gray-700">
    <p className="text-white text-sm">
      <span className="text-gray-400">De : </span>
      {addressFrom.slice(0, 10)}...
    </p>
    <p className="text-white text-sm">
      <span className="text-gray-400">À : </span>
      {addressTo.slice(0, 10)}...
    </p>
    <p className="text-green-400 font-bold">{amount} ETH</p>
    <p className="text-gray-400 text-xs">{message}</p>
    <p className="text-gray-500 text-xs">{timestamp}</p>
  </div>
);

const Transactions = () => {
  const { currentAccount, transactions } = useContext(TransactionContext);

  return (
    <div className="bg-gray-900 p-6">
      <h2 className="text-white text-2xl font-bold text-center mb-6">
        {currentAccount ? "Latest Transactions" : "Connect your account"}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[...transactions].reverse().map((t, i) => (
          <TransactionCard key={i} {...t} />
        ))}
      </div>
    </div>
  );
};

export default Transactions;