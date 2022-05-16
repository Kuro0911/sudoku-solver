import React from "react";
import SudokuTableWraper from "./Sudoku.style";

function Sudoku() {
  const data = [
    ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
    ["4", "5", "6", "7", "8", "9", "1", "2", "3"],
    ["7", "8", "9", "1", "2", "3", "4", "5", "6"],
    ["2", "3", "4", "5", "6", "7", "8", "9", "1"],
    ["5", "6", "7", "8", "9", "1", "2", "3", "4"],
    ["8", "9", "1", "2", "3", "4", "5", "6", "7"],
    ["3", "4", "5", "6", "7", "8", "9", "1", "2"],
    ["6", "7", "8", "9", "1", "2", "3", "4", "5"],
    ["9", "1", "2", "3", "4", "5", "6", "7", "8"],
  ];
  console.log(data);
  return (
    <SudokuTableWraper>
      <table>
        {data.map((val) => {
          return (
            <tr>
              {val.map((i) => {
                return <td>{i}</td>;
              })}
            </tr>
          );
        })}
      </table>
    </SudokuTableWraper>
  );
}

export default Sudoku;
