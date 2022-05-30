import styled from "styled-components";

const SudokuTableWraper = styled.div`
  display: inline-grid;
  table {
    display: inline-table;
    border: 2px solid forestgreen;
    width: 800px;
    height: 200px;
  }
  td {
    border: 1px solid black;
    text-align: center;
  }
`;

export default SudokuTableWraper;
