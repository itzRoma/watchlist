import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import api from "../api/ItemApi";

const ItemEditingForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [item, setItem] = useState({});
  const [newName, setNewName] = useState("");

  const editRequest = async (item) => {
    await api
      .put(`/watchlist/${item.id}`, item)
      .then(() => navigate("/"))
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        }
      });
  };

  const editItem = (e) => {
    e.preventDefault();

    if (newName.trim() === "") {
      alert("Name cannot be empty!");
      setNewName("");
      return;
    }

    editRequest({ ...item, name: newName.trim() });
  };

  useEffect(() => {
    const findByIdRequest = async () => {
      await api
        .get(`/watchlist/${id}`)
        .then((response) => {
          const item = response.data;
          setItem(item);
          setNewName(item.name);
        })
        .catch((error) => {
          if (error.response) {
            alert(error.response.data.message);
            navigate("/");
          }
        });
    };

    findByIdRequest();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <h2>Edit Item</h2>
      <form onSubmit={editItem}>
        <label>New name</label>
        <input
          autoFocus
          type="text"
          value={newName}
          placeholder="New name"
          onChange={(e) => setNewName(e.target.value)}
        />
        <button type="submit">Save</button>
        <Link to="/">
          <button type="button">Cancel</button>
        </Link>
      </form>
    </>
  );
};

export default ItemEditingForm;
