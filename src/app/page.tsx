"use client";
import { useEffect, useState } from 'react';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';
import MonthlyExpensesChart from './components/MonthlyExpensesChart';

export default function HomePage() {
  const [transactions, setTransactions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  async function fetchTransactions() {
    setLoading(true);
    const res = await fetch('/api/transactions');
    const data = await res.json();
    setTransactions(data);
    setLoading(false);
  }

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Personal Finance Visualizer</h1>
      <TransactionForm onAdd={fetchTransactions} />
      {loading ? <p className="text-center mt-4">Loading...</p> : (
        <>
          <MonthlyExpensesChart transactions={transactions} />
          <TransactionList transactions={transactions} />
        </>
      )}
    </main>
  );
}