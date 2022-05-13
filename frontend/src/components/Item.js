import React from "react";
import { Link } from "react-router-dom";

const Item = ({
  item,
  markAsWatchedHandler,
  markAsToWatchHandler,
  deleteItemHandler,
}) => {
  const { id, name, addedAt, watchedAt, status } = item;
  const isWatched = status === "WATCHED";

  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{addedAt}</td>
      <td>{watchedAt}</td>
      <td>{status}</td>
      <td>
        {isWatched ? (
          <button type="button" onClick={() => markAsToWatchHandler(item)}>
            UNDONE
          </button>
        ) : (
          <button type="button" onClick={() => markAsWatchedHandler(item)}>
            DONE
          </button>
        )}
        <Link to={`/edit/${id}`}>
          <button type="button">EDIT</button>
        </Link>
        <button type="button" onClick={() => deleteItemHandler(id)}>
          DELETE
        </button>
      </td>
    </tr>
  );
};

export default Item;
