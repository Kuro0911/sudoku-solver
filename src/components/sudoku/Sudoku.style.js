import styled from "styled-components";

const SudokuTableWraper = styled.div`
  display: inline-grid;
  table {
    border-collapse: collapse;
    background-color: bisque;
    border: 3px solid bisque;
  }
  td {
    padding: 0;
  }
  .bBorder {
    border-bottom: 2px solid black;
  }
  .rBorder {
    border-right: 2px solid black;
  }
`;
export const InputWrapper = styled.div`
  .input-wrap {
    width: 50px;
    height: 50px;
    font-size: 20px;
    text-align: center;
    padding: 0px;
    border: 1px solid black;
  }
  .disable {
    width: 50px;
    height: 50px;
    font-size: 20px;
    text-align: center;
    padding: 0px;
    display: flex;
    border: 1px solid black;
    align-items: center;
    justify-content: center;
  }
`;
export const ButtonWrapper = styled.div`
  margin-top: 6%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  .button {
    cursor: pointer;
    border-radius: 20px;
    padding: 12px 20px;
    background-color: #ce9120;
    border: none;
    font-weight: bold;
    font-size: 14px;
  }
`;
export default SudokuTableWraper;
