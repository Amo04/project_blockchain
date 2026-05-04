import React, { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";

const Navbar = () => {
  const { connectWallet, currentAccount } = useContext(TransactionContext);

  return (
    <nav className="w-full flex justify-between items-center p-4 bg-gray-900">
      <h1 className="text-white text-2xl font-bold">Krypt</h1>
      {!currentAccount ? (
        <button
          onClick={connectWallet}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Connect Wallet
        </button>
      ) : (
        <p className="text-green-400 text-sm">
          {currentAccount.slice(0, 6)}...{currentAccount.slice(-4)}
        </p>
      )}
    </nav>
  );
};

export default Navbar;