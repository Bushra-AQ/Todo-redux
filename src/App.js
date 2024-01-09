import "./App.css";
import List from "./components/list/List";
import Record from "./components/input/Input";
function App() {
  return (
    <div className="App">
      <Record />
      <List todoListData={[{ task: "Some task" }]} />
    </div>
  );
}

export default App;
