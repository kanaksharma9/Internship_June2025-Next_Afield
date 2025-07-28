import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SummaryCard from "../components/SummaryCard";
import FraudChart from "../components/FraudChart";
import TransactionsTable from "../components/TransactionsTable";

export default function Dashboard() {
  const [stats, setStats] = useState({
    totalTransactions: 0,
    flaggedTransactions: 0,
    confirmedFraud: 0,
    accuracy: 0,
  });
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Fetch dashboard data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) navigate("/login");

        const [statsRes, transactionsRes] = await Promise.all([
          axios.get("http://localhost:8000/api/stats", {
            headers: { Authorization: `Bearer ${token}` },
          }),
          axios.get("http://localhost:8000/api/transactions/flagged", {
            headers: { Authorization: `Bearer ${token}` },
          }),
        ]);

        setStats(statsRes.data);
        setTransactions(transactionsRes.data);
      } catch (err) {
        console.error("Failed to fetch data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [navigate]);

  // Handle approve/reject actions
  const handleDecision = async (transactionId, isFraud) => {
    try {
      await axios.post(
        `http://localhost:8000/api/transactions/${transactionId}/review`,
        { isFraud },
        { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
      );
      
      // Update UI optimistically
      setTransactions(transactions.filter(tx => tx.id !== transactionId));
      setStats(prev => ({
        ...prev,
        confirmedFraud: isFraud ? prev.confirmedFraud + 1 : prev.confirmedFraud,
        flaggedTransactions: prev.flaggedTransactions - 1,
      }));
    } catch (err) {
      console.error("Failed to submit decision:", err);
    }
  };

  if (loading) return <div className="p-8 text-center">Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <h1 className="text-2xl font-bold mb-6">Fraud Detection Dashboard</h1>
      
      {/* Summary Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <SummaryCard 
          title="Total Transactions" 
          value={stats.totalTransactions} 
          icon="📊"
        />
        <SummaryCard 
          title="Flagged Cases" 
          value={stats.flaggedTransactions} 
          icon="⚠️"
          trend={stats.flaggedTransactions > 0 ? "up" : "down"}
        />
        <SummaryCard 
          title="Confirmed Fraud" 
          value={stats.confirmedFraud} 
          icon="🕵️"
        />
        <SummaryCard 
          title="Model Accuracy" 
          value={`${stats.accuracy}%`} 
          icon="🎯"
        />
      </div>

      {/* Fraud Trend Chart */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4">Fraud Trends (Last 30 Days)</h2>
        <FraudChart />
      </div>

      {/* Flagged Transactions Table */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Recent Flagged Transactions</h2>
        <TransactionsTable 
          transactions={transactions} 
          onApprove={(id) => handleDecision(id, false)}
          onReject={(id) => handleDecision(id, true)}
        />
      </div>
    </div>
  );
}