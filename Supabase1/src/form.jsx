import { useEffect, useState } from "react";

import supabase from "./supabase-client";
function Form() {
  const [deals, setDeals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getDeals();
  }, []);

  async function getDeals() {
    const { data, error } = await supabase
      .from("sales_deals")
      .select("*");

    if (error) {
      console.error("Error fetching deals:", error);
    } else {
      setDeals(data);
    }

    setLoading(false);
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Sales Deals</h1>

      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Value</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {deals.map((deal) => (
            <tr key={deal.id}>
              <td>{deal.id}</td>
              <td>{deal.name}</td>
              <td>{deal.value}</td>
              <td>{deal.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Form;