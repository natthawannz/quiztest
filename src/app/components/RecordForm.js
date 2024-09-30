// components/RecordForm.js
import { useState } from 'react';

const RecordForm = ({ onAddRecord }) => {
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [type, setType] = useState('income');
  const [notes, setNotes] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newRecord = {
      amount: parseFloat(amount),
      date,
      type,
      notes,
    };

    const response = await fetch('/api/records', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newRecord),
    });

    if (response.ok) {
      const data = await response.json();
      onAddRecord(data);
      setAmount('');
      setDate('');
      setType('income');
      setNotes('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4 p-4 border rounded-md shadow-md">
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
        required
        className="p-2 border rounded"
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
        className="p-2 border rounded"
      />
      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="p-2 border rounded"
      >
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
      <textarea
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        placeholder="Notes"
        className="p-2 border rounded"
      />
      <button type="submit" className="p-2 bg-blue-500 text-white rounded">
        Add Record
      </button>
    </form>
  );
};

export default RecordForm;
