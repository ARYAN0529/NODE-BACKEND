
import { useEffect, useState } from "react";
import supabase from "./supabase-client";

function Add() {
  const [deals, setDeals] = useState([]);
  const [selectedId, setSelectedId] = useState("");
  const [newValue, setNewValue] = useState("");
  const [message, setMessage] = useState("");

  // Get all deals
  useEffect(() => {
    getDeals();
  }, []);

  async function getDeals() {
    const { data, error } = await supabase
      .from("sales_deals")
      .select("id, name, value");

    if (error) {
      console.error("Error fetching deals:", error);
      return;
    }

    setDeals(data);
  }

  // Update value
  async function updateValue(e) {
    e.preventDefault();

    if (!selectedId || newValue === "") {
      setMessage("Please select a deal and enter a value.");
      return;
    }

    const { error } = await supabase
      .from("sales_deals")
      .update({ value: Number(newValue) })
      .eq("id", selectedId);

    if (error) {
      console.error("Error updating value:", error);
      setMessage("Failed to update value.");
      return;
    }

    setMessage("Value updated successfully!");

    // Refresh data
    getDeals();

    // Clear input
    setNewValue("");
  }

  return (
    <div>
      <h1>Update Deal Value</h1>

      <form onSubmit={updateValue}>
        {/* Select deal */}
        <label>Select Deal: </label>

        <select
          value={selectedId}
          onChange={(e) => setSelectedId(e.target.value)}
        >
          <option value="">-- Select a deal --</option>

          {deals.map((deal) => (
            <option key={deal.id} value={deal.id}>
              {deal.name} - ₹{deal.value}
            </option>
          ))}
        </select>

        <br />
        <br />

        {/* New value */}
        <label>New Value: </label>

        <input
          type="number"
          placeholder="Enter new value"
          value={newValue}
          onChange={(e) => setNewValue(e.target.value)}
        />

        <br />
        <br />

        <button type="submit">
          Update Value
        </button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}

export default Add;

