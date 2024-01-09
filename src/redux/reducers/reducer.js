// reducer.js
import { ADD_TASK, DELETE_TASK } from "../constant/actionType";

const initialState = { todoListData: [] };

export default function todoData(state = initialState, action) {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        todoListData: [...state.todoListData, action.task],
      };
    case DELETE_TASK:
      return {
        ...state,
        todoListData: state.todoListData.filter((task) => task.id !== action.taskId),
      };
    default:
      return state;
  }
}
