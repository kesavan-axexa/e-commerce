import React from "react";
import { Users, ShoppingCart, IndianRupee } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
const DashboardStatCards = () => {
  const stats = [
    {
      title: "Users",
      value: "1,248",
      icon: Users,
    },
    {
      title: "Orders",
      value: "320",
      icon: ShoppingCart,
    },
    {
      title: "Revenue",
      value: "₹2,45,000",
      icon: IndianRupee,
    },
  ];
  return (
    <div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <Card key={item.title} className="p-0">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className=" font-medium text-muted-foreground">
                  {item.title}
                </CardTitle>
                <div className="rounded-xl bg-foreground border p-2 text-white">
                  <Icon className="h-5 w-5" />
                </div>
              </CardHeader>
              <CardContent className="px-4 pb-3 pt-0">
                <div className="text-xl font-semibold">{item.value}</div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default DashboardStatCards;
