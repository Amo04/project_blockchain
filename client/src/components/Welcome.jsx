import React, { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";
import Loader from "./Loader";

const Welcome = () => {
  const {
    connectWallet,
    currentAccount,
    formData,
    handleChange,
    sendTransaction,
    isLoading,
  } = useContext(TransactionContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { addressTo, amount, keyword, message } = formData;
    if (!addressTo || !amount || !keyword || !message) return;
    sendTransaction();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-4">
      <h2 className="text-white text-3xl font-bold mb-8">
        Send Crypto across the world
      </h2>

      {!currentAccount && (
        <button
          onClick={connectWallet}
          className="bg-blue-500 text-white px-6 py-3 rounded-lg mb-8 hover:bg-blue-600"
        >
          Connect Wallet
        </button>
      )}

      <div className="bg-gray-800 p-6 rounded-lg w-full max-w-md">
        <input
          placeholder="Address To (0x...)"
          name="addressTo"
          type="text"
          onChange={(e) => handleChange(e, "addressTo")}
          className="w-full bg-gray-700 text-white p-3 rounded mb-3 outline-none"
        />
        <input
          placeholder="Amount (ETH)"
          name="amount"
          type="number"
          step="0.0001"
          onChange={(e) => handleChange(e, "amount")}
          className="w-full bg-gray-700 text-white p-3 rounded mb-3 outline-none"
        />
        <input
          placeholder="Keyword (GIF)"
          name="keyword"
          type="text"
          onChange={(e) => handleChange(e, "keyword")}
          className="w-full bg-gray-700 text-white p-3 rounded mb-3 outline-none"
        />
        <input
          placeholder="Enter Message"
          name="message"
          type="text"
          onChange={(e) => handleChange(e, "message")}
          className="w-full bg-gray-700 text-white p-3 rounded mb-4 outline-none"
        />

        {isLoading ? (
          <Loader />
        ) : (
          <button
            onClick={handleSubmit}
            className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600 font-bold"
          >
            Send Now
          </button>
        )}
      </div>
    </div>
  );
};

export default Welcome;