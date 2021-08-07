import "./App.css";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addTodo } from "./store/todoSlice";
import ToDoList from "./components/TodoItems";
import InputField from "./components/Input";

function App() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const addTask = () => {
    if (text.trim().length) {
      dispatch(addTodo({ text }));
      setText("");
    }
  };

  return (
    <div className="App">
      <InputField text={text} setText={setText} setSubmit={addTask} />
      <ToDoList />
    </div>
  );
}

export default App;
