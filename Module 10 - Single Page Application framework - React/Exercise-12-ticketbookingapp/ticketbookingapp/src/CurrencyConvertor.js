import React, { useState } from "react";

// NOTE: your screenshot showed this file inside the "ticketbookingapp" folder,
// even though the name suggests currency conversion rather than ticket booking.
// Kept as-is to match what was visible — verify this is correct for your assignment.

const rates = {
  USD: 1,
  INR: 83.5,
  EUR: 0.92,
  GBP: 0.79,
};

function CurrencyConvertor() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");

  const convert = () => {
    const usdAmount = amount / rates[fromCurrency];
    return (usdAmount * rates[toCurrency]).toFixed(2);
  };

  return (
    <div>
      <h2>Currency Convertor</h2>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
        {Object.keys(rates).map((cur) => (
          <option key={cur} value={cur}>{cur}</option>
        ))}
      </select>
      <span> to </span>
      <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
        {Object.keys(rates).map((cur) => (
          <option key={cur} value={cur}>{cur}</option>
        ))}
      </select>
      <p>
        {amount} {fromCurrency} = {convert()} {toCurrency}
      </p>
    </div>
  );
}

export default CurrencyConvertor;
