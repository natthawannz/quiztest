// pages/index.js
import { useEffect, useState } from 'react';
import RecordForm from '../components/RecordForm';
import RecordList from '../components/RecordList';

export default function Home() {
  const [records, setRecords] = useState([]);

  const fetchRecords = async () => {
    const response = await fetch('/api/records');
    const data = await response.json();
    setRecords(data);
  };

  const handleAddRecord = (newRecord) => {
    setRecords((prevRecords) => [...prevRecords, newRecord]);
  };

  const totalIncome = records
    .filter((record) => record.type === 'income')
    .reduce((sum, record) => sum + record.amount, 0);

  const totalExpenses = records
    .filter((record) => record.type === 'expense')
    .reduce((sum, record) => sum + record.amount, 0);

  useEffect(() => {
    fetchRecords();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Income & Expenses Tracker</h1>
      <RecordForm onAddRecord={handleAddRecord} />
      <RecordList records={records} />
      <div className="mt-4">
        <h2 className="text-lg">Total Income: ${totalIncome}</h2>
        <h2 className="text-lg">Total Expenses: ${totalExpenses}</h2>
      </div>
    </div>
  );
}
