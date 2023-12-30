import React from "react";

const Card = (props) => {
  const { children } = props;
  return (
    <div className="card">
      <h1>Todo List</h1>
      <div className="todo-wrapper">{children}</div>
    </div>
  );
};

export default Card;
