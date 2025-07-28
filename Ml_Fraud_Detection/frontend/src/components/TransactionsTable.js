
export default function TransactionsTable({ transactions, onApprove, onReject }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Risk Score</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {transactions.map((tx) => (
            <tr key={tx.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{tx.id}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${tx.amount}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  tx.riskScore > 0.8 ? "bg-red-100 text-red-800" : 
                  tx.riskScore > 0.5 ? "bg-yellow-100 text-yellow-800" : 
                  "bg-green-100 text-green-800"
                }`}>
                  {Math.round(tx.riskScore * 100)}%
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button
                  onClick={() => onApprove(tx.id)}
                  className="mr-2 text-green-600 hover:text-green-900"
                >
                  Approve
                </button>
                <button
                  onClick={() => onReject(tx.id)}
                  className="text-red-600 hover:text-red-900"
                >
                  Reject
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}