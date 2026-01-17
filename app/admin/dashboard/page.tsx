"use client";

import DashboardStatCards from "@/components/dashboard/dashboard-stat-cards";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Bar,
  BarChart,
  Line,
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

const barData = [
  { month: "Jan", sales: 400 },
  { month: "Feb", sales: 300 },
  { month: "Mar", sales: 500 },
  { month: "Apr", sales: 450 },
];

const lineData = [
  { day: "Mon", users: 120 },
  { day: "Tue", users: 210 },
  { day: "Wed", users: 180 },
  { day: "Thu", users: 260 },
  { day: "Fri", users: 300 },
];

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-5">
      <DashboardStatCards />

      <div className="grid gap-5 lg:grid-cols-2">
        <Card>
          <CardHeader className="px-4 py-3">
            <CardTitle className="text-sm font-medium">
              Monthly Sales
            </CardTitle>
          </CardHeader>
          <CardContent className="px-3 pb-4 pt-0">
            <ChartContainer
              config={{
                sales: {
                  label: "Sales",
                  color: "var(--chart-1)",
                },
              }}
            >
              <BarChart data={barData} margin={{ left: 6, right: 6 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" tickLine={false} />
                <YAxis tickLine={false} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar
                  dataKey="sales"
                  radius={4}
                  fill="var(--chart-6)"
                />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* ===== LINE CHART ===== */}
        <Card>
          <CardHeader className="px-4 py-3">
            <CardTitle className="text-sm font-medium">
              Active Users
            </CardTitle>
          </CardHeader>
          <CardContent className="px-3 pb-4 pt-0">
            <ChartContainer
              config={{
                users: {
                  label: "Users",
                  color: "var(--chart-6)",
                },
              }}
            >
              <LineChart data={lineData} margin={{ left: 6, right: 6 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" tickLine={false} />
                <YAxis tickLine={false} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Line
                  type="monotone"
                  dataKey="users"
                  stroke="var(--chart-6)"
                  strokeWidth={2.5}
                  dot={{ r: 3 }}
                />
              </LineChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
