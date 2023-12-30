import React from "react";
import ListItem from "../listItem";

const dummy = [
  {
    task: "saxsas",
    id: 324324242,
  },
  {
    task: "dsxsas",
    id: 324324242,
  },
];

const List = (props) => {
  const { tasks, setTasks } = props;
  const isEmpty = tasks.length === 0;

  const onDelete = (id) => {
    const newTasks = tasks.filter((i) => i.id !== id);
    setTasks(newTasks);
  };
  return (
    <div className="list">
      {isEmpty && <h2>List is Empty!</h2>}
      {tasks.map((item) => (
        <ListItem
          key={item.id}
          onDelete={() => onDelete(item.id)}
          label={item.task}
        />
      ))}
    </div>
  );
};

export default List;
