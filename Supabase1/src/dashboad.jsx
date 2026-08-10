import { useEffect, useState } from "react";
import supabase from "./supabase-client";

function Dashboard() {
  const [deals, setDeals] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const { data, error } = await supabase
      .from("sales_deals")
      .select("name, value")
      .order("value", { ascending: false })
      .limit(2);

    if (error) {
      console.log("Error:", error);
      return;
    }

    console.log("Data:", data);
    setDeals(data);
  }

  return (
    <div>
      <h1>Dashboard</h1>

      {deals.map((deal) => (
        <div key={deal.name}>
          <h2>{deal.name}</h2>
          <p>Value: ₹{deal.value}</p>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;