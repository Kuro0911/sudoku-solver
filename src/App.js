import "./App.css";
import Sudoku from "./components/sudoku/Sudoku";

function App() {
  return (
    <div className="App">
      <div className="head">Sudoku Solver</div>
      <Sudoku />
    </div>
  );
}

export default App;
