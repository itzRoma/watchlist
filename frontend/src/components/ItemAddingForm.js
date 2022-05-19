import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../api/ItemApi";

const ItemAddingForm = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");

  const addRequest = async (item) => {
    await api
      .post("/watchlist", item)
      .then(() => navigate("/"))
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
          setName("");
        }
      });
  };

  const addItem = (e) => {
    e.preventDefault();
    addRequest({ name: name.trim() });
  };

  return (
    <>
      <h2>Add Item</h2>
      <form onSubmit={addItem}>
        <label>Name</label>
        <input
          autoFocus
          type="text"
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Add</button>
        <Link to="/">
          <button type="button">Cancel</button>
        </Link>
      </form>
    </>
  );
};

export default ItemAddingForm;
