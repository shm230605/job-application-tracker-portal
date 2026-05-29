import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Mon", jobs: 30 },
  { name: "Tue", jobs: 45 },
  { name: "Wed", jobs: 25 },
  { name: "Thu", jobs: 70 },
  { name: "Fri", jobs: 55 },
];

export default function TrendChart() {
  return (
    <div className="glass" style={{ height: 300 }}>
      <h3>📈 Job Vacancy Trends</h3>

      <ResponsiveContainer width="100%" height="90%">
        <LineChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="jobs"
            stroke="#06b6d4"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}