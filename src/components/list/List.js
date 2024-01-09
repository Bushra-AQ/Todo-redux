import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { delete_task } from "../../redux/action/action";

function List() {
  const dispatch = useDispatch();
  const todoListData = useSelector((state) => state.todoData.todoListData);
  console.log("props", todoListData);

  const handleDelete = (taskId) => {
    dispatch(delete_task(taskId));
  };

  return (
    <div>
      <h2>List</h2>
      <ul>
        {todoListData.map((task) => (
          <li style={{ listStyle: "none" }} key={task.id}>
            {task.data}
            <button onClick={() => handleDelete(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
