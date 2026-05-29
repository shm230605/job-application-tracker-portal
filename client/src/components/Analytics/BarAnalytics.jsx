import {
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Bar,
} from "recharts";

const BarAnalytics = ({
  data,
}) => {
  return (
    <BarChart
      width={500}
      height={300}
      data={data}
    >
      <CartesianGrid strokeDasharray="3 3" />

      <XAxis dataKey="name" />

      <YAxis />

      <Tooltip />

      <Bar
        dataKey="value"
        fill="#6366F1"
      />
    </BarChart>
  );
};

export default BarAnalytics;