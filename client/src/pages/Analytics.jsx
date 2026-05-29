import {
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Analytics() {
  const lineData = [
    { month: "Jan", apps: 12 },
    { month: "Feb", apps: 22 },
    { month: "Mar", apps: 35 },
    { month: "Apr", apps: 48 },
  ];

  const pieData = [
    {
      name: "Interviews",
      value: 12,
    },

    {
      name: "Offers",
      value: 3,
    },

    {
      name: "Rejected",
      value: 8,
    },
  ];

  const barData = [
    {
      company: "Google",
      jobs: 14,
    },

    {
      company: "Amazon",
      jobs: 20,
    },

    {
      company: "Meta",
      jobs: 10,
    },
  ];

  return (
    <div>

      <h1 className="section-title">
        Analytics Dashboard
      </h1>

      <div className="analytics-grid">

        <div className="card">

          <h2>
            Application Trends
          </h2>

          <div style={{ height: 300 }}>

            <ResponsiveContainer
              width="100%"
              height="100%"
            >

              <LineChart
                data={lineData}
              >

                <XAxis
                  dataKey="month"
                />

                <YAxis />

                <Tooltip />

                <Line
                  type="monotone"
                  dataKey="apps"
                  stroke="#8b5cf6"
                  strokeWidth={3}
                />

              </LineChart>

            </ResponsiveContainer>

          </div>

        </div>

        <div className="card">

          <h2>
            Recruitment Pipeline
          </h2>

          <div style={{ height: 300 }}>

            <ResponsiveContainer
              width="100%"
              height="100%"
            >

              <PieChart>

                <Pie
                  data={pieData}
                  dataKey="value"
                  outerRadius={100}
                >

                  {pieData.map(
                    (_, i) => (
                      <Cell
                        key={i}
                      />
                    )
                  )}

                </Pie>

                <Tooltip />

              </PieChart>

            </ResponsiveContainer>

          </div>

        </div>

      </div>

      <div className="card mt">

        <h2>
          Top Hiring Companies
        </h2>

        <div style={{ height: 350 }}>

          <ResponsiveContainer
            width="100%"
            height="100%"
          >

            <BarChart data={barData}>

              <XAxis
                dataKey="company"
              />

              <YAxis />

              <Tooltip />

              <Bar dataKey="jobs" />

            </BarChart>

          </ResponsiveContainer>

        </div>

      </div>

    </div>
  );
}