import React, { useState } from "react";
import TransactionsTable from "./components/TransactionsTable";
import Statistics from "./components/Statistics";
import BarChart from "./components/BarChart";
import { MONTHS } from "./utils/constants";

const App = () => {
  const [selectedMonth, setSelectedMonth] = useState(3); // Default to March

  return (
    <div>
      <header>
        <h1>Transactions Dashboard</h1>
        <label htmlFor="month-select">Select Month: </label>
        <select
          id="month-select"
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(Number(e.target.value))}
        >
          {MONTHS.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </header>

      <TransactionsTable selectedMonth={selectedMonth} />
      <Statistics selectedMonth={selectedMonth} />
      <BarChart selectedMonth={selectedMonth} />
    </div>
  );
};

export default App;
