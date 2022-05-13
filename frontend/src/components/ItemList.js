import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Item from "./Item";
import api from "../api/ItemApi";

const ItemList = () => {
  const [items, setItems] = useState([]);

  const findAllRequest = async () => {
    await api.get("/watchlist").then((response) => {
      setItems(response.data);
    });
  };

  const markAsWatched = async (item) => {
    const body = {
      ...item,
      status: "WATCHED",
    };
    await api.put(`/watchlist/${item.id}`, body).then(() => {
      findAllRequest();
    });
  };

  const markAsToWatch = async (item) => {
    const body = {
      ...item,
      status: "TO_WATCH",
    };
    await api.put(`/watchlist/${item.id}`, body).then(() => {
      findAllRequest();
    });
  };

  const deleteItem = async (id) => {
    await api.delete(`/watchlist/${id}`).then(() => {
      findAllRequest();
    });
  };

  useEffect(() => {
    findAllRequest();
  }, []);

  return (
    <>
      <h2>
        WatchList
        <Link to="/add">
          <button type="button">Add item</button>
        </Link>
      </h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>AddedAt</th>
            <th>WatchedAt</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => {
            return (
              <Item
                key={item.id}
                item={item}
                markAsWatchedHandler={markAsWatched}
                markAsToWatchHandler={markAsToWatch}
                deleteItemHandler={deleteItem}
              />
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default ItemList;
