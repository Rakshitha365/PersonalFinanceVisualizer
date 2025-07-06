"use client";

export default function TransactionList({ transactions }: { transactions: any[] }) {
  return (
    <div className="max-w-md mx-auto mt-6">
      <h2 className="text-xl font-bold mb-4">Transactions</h2>
      {transactions.length === 0 ? (
        <p>No transactions yet.</p>
      ) : (
        <ul className="space-y-2">
          {transactions.map((tx) => (
            <li key={tx._id} className="p-3 border rounded flex justify-between">
              <div>
                <p className="font-medium">{tx.description}</p>
                <p className="text-sm text-gray-500">{new Date(tx.date).toLocaleDateString()}</p>
              </div>
              <span className="text-blue-600 font-semibold">${tx.amount.toFixed(2)}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}