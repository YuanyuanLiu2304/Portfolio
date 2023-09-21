import styled from "styled-components";
import { useState } from "react";
import Decimal from "decimal.js";

const Calculator = () => {
  const [calc, setCalc] = useState({
    current: "0",
    total: "0",
    isInitial: true,
    preOp: "",
  });

  function handleNum(e) {
    let newValue = e.target.value;
    if (!calc.isInitial) {
      newValue = calc.current + e.target.value;
    }
    setCalc({
      current: newValue,
      total: calc.total,
      isInitial: false,
      preOp: calc.preOp,
    });
  }

  function handleOper(e) {
    const total = doCalc();
    setCalc({
      current: total,
      total: total,
      isInitial: true,
      preOp: e.target.value,
    });
  }

  function doCalc() {
    let total = new Decimal(parseFloat(calc.total));
    if (calc.current !== calc.total) {
      switch (calc.preOp) {
        case "+":
          total = total.plus(parseFloat(calc.current));
          break;
        case "-":
          total = total.minus(parseFloat(calc.current));
          break;
        case "×":
          total = total.times(parseFloat(calc.current));
          break;
        case "÷":
          total = total.dividedBy(parseFloat(calc.current));
          break;
        default:
          total = new Decimal(parseFloat(calc.current));
          break;
      }
    }

    return total.toString();
  }

  function handleReverse() {
    let reverseValue = -parseFloat(calc.current);
    setCalc({
      current: reverseValue.toString(),
      total: "0",
      isInitial: true,
      preOp: "",
    });
  }

  function handlePercentage() {
    let newValue = new Decimal(parseFloat(calc.current)).dividedBy(100);
    setCalc({
      current: newValue.toString(),
      total: "0",
      isInitial: true,
      preOp: "",
    });
  }

  function handClear() {
    setCalc({
      current: "0",
      total: "0",
      isInitial: true,
      preOp: "",
    });
  }

  return (
    <Wrapper>
      <div className="bg-emerald-50 header">
        <h1>Basic Calculator</h1>
        <p>Calculator App &nbsp; | &nbsp; REACT &nbsp; TYPESCRIPT</p>
        <div className="alert alert-success mt-5 fs-5">
          This Calculator is designed with a responsive layout that works on all
          screen sizes, it allows users to perform basic arithmetic operations
          such as addition, subtraction, multiplication, and division. It also
          includes additional features such as percentage calculation and the
          ability to clear the calculator screen.
        </div>
      </div>

      <div className="calculator_container ">
        <h2 className="caption">Welcome to the Calculator App</h2>
        <div className="display"> {calc.current} </div>

        <div className="calculator_wrapper">
          <button className="bg_color" onClick={handClear} value="C">
            C
          </button>
          <button className="bg_color" onClick={handleReverse} value="+/-">
            +/-
          </button>
          <button className="bg_color" onClick={handlePercentage} value="%">
            %
          </button>
          <button className="operator" onClick={handleOper} value="÷">
            ÷
          </button>
          {Array.from({ length: 3 }, (_, index) => {
            const buttonValue = index + 7;
            return (
              <button key={buttonValue} value={buttonValue} onClick={handleNum}>
                {buttonValue}
              </button>
            );
          })}

          <button className="operator" onClick={handleOper} value="×">
            ×
          </button>
          {Array.from({ length: 3 }, (_, index) => {
            const buttonValue = index + 4;
            return (
              <button key={buttonValue} value={buttonValue} onClick={handleNum}>
                {buttonValue}
              </button>
            );
          })}

          <button className="operator" onClick={handleOper} value="-">
            -
          </button>

          {Array.from({ length: 3 }, (_, index) => {
            const buttonValue = index + 1;
            return (
              <button key={buttonValue} value={buttonValue} onClick={handleNum}>
                {buttonValue}
              </button>
            );
          })}
          <button className="operator" onClick={handleOper} value="+">
            +
          </button>

          <button value="0" className="element" onClick={handleNum}>
            0
          </button>
          <button className="fw-bold" value="." onClick={handleNum}>
            .
          </button>
          <button className="equals" onClick={handleOper} value="=">
            =
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  color: #334155;

  .header {
    padding: 4rem;
    align-items: center;
  }

  .header h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  .calculator_container {
    width: 50%;
    max-width: 576px;
    margin: 130px auto;
  }

  .caption {
    color: #0f172a;
    text-align: center;
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 60px;
  }

  .calculator_wrapper {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(4, 1fr);
  }

  .display {
    color: #fff;
    text-align: right;
    font-size: 22px;
    font-weight: 500;
    padding: 30px 15px 15px 0;
    background-color: #4b5154;
  }

  button {
    color: #e9e9e8;
    padding: 10px;
    line-height: 34px;
    font-size: 18px;
    font-weight: 600;
    text-align: center;
    background-color: #807f80;
    border-width: 1px;
    border-color: #334155;
    border-collapse: collapse;
  }

  .bg_color {
    background-color: #606669;
  }

  .operator {
    font-size: 20px;
    font-weight: 500;
    background-color: #f2a33c;
  }

  .operator_small {
    font-size: 1.1em;
  }

  .equals {
    color: #fdf1e1;
    background-color: #0d6efd;
  }

  .element {
    grid-column: span 2;
  }

  @media only screen and (max-width: 768px) {
    .calculator_container {
      width: 90%;
    }
  }
`;

export default Calculator;
