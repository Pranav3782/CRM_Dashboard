import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

// Dummy data
const data = [
  { month: "Jan", revenue: 4000, leads: 2400, customers: 2400 },
  { month: "Feb", revenue: 3000, leads: 1398, customers: 2210 },
  { month: "Mar", revenue: 2000, leads: 9800, customers: 2290 },
  { month: "Apr", revenue: 2780, leads: 3908, customers: 2000 },
  { month: "May", revenue: 1890, leads: 4800, customers: 2181 },
  { month: "Jun", revenue: 2390, leads: 3800, customers: 2500 },
  { month: "Jul", revenue: 3490, leads: 4300, customers: 2100 },
  { month: "Aug", revenue: 3490, leads: 5300, customers: 2400 },
  { month: "Sep", revenue: 3490, leads: 6300, customers: 2700 },
  { month: "Oct", revenue: 3490, leads: 7300, customers: 3000 },
  { month: "Nov", revenue: 3490, leads: 8300, customers: 3200 },
  { month: "Dec", revenue: 3490, leads: 9300, customers: 3400 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

const Card = ({ children, title }) => (
  <div
    style={{
      border: "1px solid #e2e8f0",
      borderRadius: "0.375rem",
      padding: "1rem",
      margin: "0.5rem",
    }}
  >
    <h3
      style={{
        fontSize: "1.25rem",
        fontWeight: "bold",
        marginBottom: "0.5rem",
      }}
    >
      {title}
    </h3>
    {children}
  </div>
);

const Dashboard = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState("1 month");

  // Implement filtering logic based on the selected timeframe
  const filteredData = data.slice(
    0,
    12 - parseInt(selectedTimeframe.split(" ")[0])
  );

  return (
    <div style={{ padding: "1rem" }}>
      <div style={{ marginBottom: "1.5rem" }}>
        <h1 style={{ fontSize: "1.875rem", fontWeight: "bold" }}>
          CRM Statistics
        </h1>
        <p style={{ color: "#6b7280" }}>View your key business metrics</p>
      </div>

      <div style={{ marginBottom: "1.5rem" }}>
        <select
          value={selectedTimeframe}
          onChange={(e) => setSelectedTimeframe(e.target.value)}
          style={{
            padding: "0.5rem 1rem",
            backgroundColor: "#e2e8f0",
            borderRadius: "0.375rem",
            border: "none",
          }}
        >
          <option value="1 day">1 Day</option>
          <option value="1 week">1 Week</option>
          <option value="1 month">1 Month</option>
          <option value="3 months">3 Months</option>
          <option value="6 months">6 Months</option>
          <option value="1 year">1 Year</option>
        </select>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "1rem",
        }}
      >
        <Card title="Revenue">
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={filteredData}>
              <XAxis dataKey="month" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        <Card title="Leads">
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={filteredData}>
              <XAxis dataKey="month" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="leads" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        <Card title="Customers">
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={filteredData}>
              <XAxis dataKey="month" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="customers" stroke="#ffc658" />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        <Card title="Revenue Breakdown">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={[
                  { name: "Product A", value: 400 },
                  { name: "Product B", value: 300 },
                  { name: "Product C", value: 300 },
                ]}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                label
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </Card>

        <Card title="Key Metrics">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1rem",
            }}
          >
            <div>
              <h3 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>$120K</h3>
              <p style={{ color: "#6b7280" }}>Revenue</p>
            </div>
            <div>
              <h3 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>1,200</h3>
              <p style={{ color: "#6b7280" }}>Leads</p>
            </div>
            <div>
              <h3 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>800</h3>
              <p style={{ color: "#6b7280" }}>Customers</p>
            </div>
            <div>
              <h3 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>25%</h3>
              <p style={{ color: "#6b7280" }}>Conversion Rate</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
