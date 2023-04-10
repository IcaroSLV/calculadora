import './App.css';
import { useState, useEffect } from 'react'
function App() {

  const [primaryNumber, setPrimaryNumber] = useState()
  const [SecondNumber, setSecondNumber] = useState()
  const [inputNumber, setInputNumber] = useState()
  const [mathOperation, setMathOperation] = useState("")


  // COLOCAR O NUMERO NO INPUT QUANDO APERTAR O BOTÃO
  const handleAddNumber = (e) => {

      if(inputNumber === undefined) {
        setInputNumber(e)
      } else {
        if(inputNumber.length <= 4) {
          setInputNumber(inputNumber + e)
        }
        
      }

  }

  const handleCalculate = (e) => {

    setPrimaryNumber(parseInt(inputNumber))
      
    setInputNumber()
    setMathOperation(e)
    
  }
  const handleResult = () => {

    setSecondNumber(parseInt(inputNumber))

  }

  useEffect(() => {
    if(mathOperation === "division") {
      setInputNumber(primaryNumber / SecondNumber)
    }
    if(mathOperation === "multiplication") {
      setInputNumber(primaryNumber * SecondNumber)
    }
    if(mathOperation === "addition") {
      setInputNumber(primaryNumber + SecondNumber)
    }
    if(mathOperation === "subtraction") {
      setInputNumber(primaryNumber - SecondNumber)
    }
  }, [SecondNumber])

  const handleClear = () => {
    setInputNumber()
    setPrimaryNumber()
    setSecondNumber()
    setMathOperation()
  }

  return (
    <div className="App">
      <div className="Calculator">
        <div className="Result-Content">{inputNumber? inputNumber : 0}</div>
        <div className="Buttons">
          <div>
            <button onClick={() => handleAddNumber("7")}>7</button>
            <button onClick={() => handleAddNumber("8")}>8</button>
            <button onClick={() => handleAddNumber("9")}>9</button>
            <button onClick={() => handleCalculate("division")}>%</button>
          </div>
          <div>
            <button onClick={() => handleAddNumber("4")}>4</button>
            <button onClick={() => handleAddNumber("5")}>5</button>
            <button onClick={() => handleAddNumber("6")}>6</button>
            <button onClick={() => {handleCalculate("multiplication"); handleCalculate("multiplication");}}>*</button>
          </div>
          <div>
            <button onClick={() => handleAddNumber("3")}>3</button>
            <button onClick={() => handleAddNumber("2")}>2</button>
            <button onClick={() => handleAddNumber("1")}>1</button>
            <button onClick={() => handleCalculate("addition")}>+</button>
          </div>
          <div>
            <button onClick={() => handleAddNumber("0")}>0</button>
            <button onClick={() => handleClear()}>C</button>
            <button onClick={() => handleResult()}>=</button>
            <button onClick={() => handleCalculate("subtraction")}>-</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
