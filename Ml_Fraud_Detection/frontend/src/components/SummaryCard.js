// components/SummaryCard.js
export default function SummaryCard({ title, value, icon, trend }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-gray-500 text-sm">{title}</p>
          <p className="text-2xl font-bold mt-1">{value}</p>
        </div>
        <span className="text-2xl">{icon}</span>
      </div>
      {trend && (
        <p className={`text-xs mt-2 ${trend === "up" ? "text-red-500" : "text-green-500"}`}>
          {trend === "up" ? "↑ Increase" : "↓ Decrease"} from yesterday
        </p>
      )}
    </div>
  );
}