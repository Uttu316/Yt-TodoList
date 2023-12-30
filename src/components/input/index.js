import React, { useState } from "react";

const Input = (props) => {
  const { setTasks } = props;
  const [task, setTask] = useState("");

  const onChange = (e) => {
    const { value } = e.target;
    setTask(value);
  };
  const onClickBtn = () => {
    if (task === "") return;
    setTasks((prev) => [
      {
        task,
        id: new Date().getTime(),
      },
      ...prev,
    ]);
    setTask("");
  };

  return (
    <div className="input-wrapper">
      <input
        placeholder="Write your task"
        onChange={onChange}
        className="input"
        value={task}
      />
      <button className="add-btn" onClick={onClickBtn}>
        Add Task
      </button>
    </div>
  );
};

export default Input;
