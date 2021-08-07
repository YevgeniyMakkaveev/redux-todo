const InputField = ({ text, setText, setSubmit }) => {
  return (
    <label>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={setSubmit}>Add Todo</button>
    </label>
  );
};
export default InputField;
