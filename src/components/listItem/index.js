import React from "react";

const ListItem = (props) => {
  const { label, onDelete } = props;

  return (
    <div className="list-item">
      <p className="list-item-label">{label}</p>

      <button className="dlt-btn" onClick={onDelete}>
        Delete
      </button>
    </div>
  );
};

export default ListItem;
