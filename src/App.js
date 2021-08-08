import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { addNewTask, fetchTodos } from "./store/todoSlice";
import ToDoList from "./components/TodoItems";
import InputField from "./components/Input";

function App() {
  const [text, setText] = useState("");
  const { status, error } = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const addTask = () => {
    if (text.trim().length) {
      dispatch(addNewTask(text));
      setText("");
    }
  };
  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);
  return (
    <div className="App">
      <InputField text={text} setText={setText} setSubmit={addTask} />
      {status === "loading" && <h2>Loading</h2>}
      {error && <h2>Error {error}</h2>}
      <ToDoList />
    </div>
  );
}

export default App;
