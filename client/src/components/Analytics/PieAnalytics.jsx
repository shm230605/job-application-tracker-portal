import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
} from "recharts";

const COLORS = [
  "#3B82F6",
  "#22C55E",
  "#F97316",
  "#EF4444",
];

const PieAnalytics = ({
  data,
}) => {
  return (
    <PieChart
      width={400}
      height={300}
    >
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        outerRadius={100}
        dataKey="value"
        label
      >
        {data.map(
          (entry, index) => (
            <Cell
              key={index}
              fill={
                COLORS[
                  index %
                    COLORS.length
                ]
              }
            />
          )
        )}
      </Pie>

      <Tooltip />
    </PieChart>
  );
};

export default PieAnalytics;