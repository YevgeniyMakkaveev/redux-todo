import { useDispatch } from "react-redux";
import { deleteTodo, toggleStatus } from "../store/todoSlice";
const ToDoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();

  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(toggleStatus(id))}
      />
      <span> {title}</span>
      <span className="point" onClick={() => dispatch(deleteTodo(id))}>
        &times;
      </span>
    </li>
  );
};
export default ToDoItem;
