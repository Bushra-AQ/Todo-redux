import { ADD_TASK, DELETE_TASK } from "../constant/actionType";

let nextTaskId = 1;

export const add_task = (data) => {
  const task = {
    id: nextTaskId++,
    data: data,
  };
  return {
    type: ADD_TASK,
    task,
  };
};

export const delete_task = (taskId) => {
  return {
    type: DELETE_TASK,
    taskId,
  };
};
