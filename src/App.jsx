import useInput from "./hooks/useInput";

function App() {
  const [name, bindName, resetName] = useInput("");
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(name);
    resetName();
  };
  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={onSubmit}>
          <input {...bindName} />
          <input type="submit" value="Send" />
        </form>
      </header>
    </div>
  );
}

export default App;
