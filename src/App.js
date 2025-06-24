import { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleDelete = () => {
    setInput(input.slice(0, -1));
  };

  const handleEqual = () => {
    try {
      let expr = input
        .replace(/sin\(/g, 'Math.sin(')
        .replace(/cos\(/g, 'Math.cos(')
        .replace(/tan\(/g, 'Math.tan(')
        .replace(/log\(/g, 'Math.log10(')
        .replace(/ln\(/g, 'Math.log(')
        .replace(/√\(/g, 'Math.sqrt(')
        .replace(/\^/g, '**');

      let result = Function('"use strict"; return (' + expr + ')')();

      if (result === undefined || isNaN(result)) {
        setInput('Erro');
      } else {
        setInput(result.toString());
      }
    } catch (error) {
      setInput('Erro');
    }
  };

  return (
    <div className="App">
      <div className="calculator">
        <input type="text" value={input} readOnly className="display" />
        <div className="buttons">
          <button className="operator" onClick={() => handleClick('(')}>(</button>
          <button className="function" onClick={handleClear}>C</button>
          <button className="function" onClick={handleDelete}>←</button>
          <button className="function" onClick={() => handleClick('Math.PI')}>π</button>
          <button className="operator" onClick={() => handleClick(')')}>)</button>


          <button className="function" onClick={() => handleClick('sin(')}>sin</button>
          <button className="function" onClick={() => handleClick('cos(')}>cos</button>
          <button className="function" onClick={() => handleClick('tan(')}>tan</button>
          <button className="operator" onClick={() => handleClick('/')}>÷</button>

          <button onClick={() => handleClick('7')}>7</button>
          <button onClick={() => handleClick('8')}>8</button>
          <button onClick={() => handleClick('9')}>9</button>
          <button className="operator" onClick={() => handleClick('*')}>×</button>

          <button onClick={() => handleClick('4')}>4</button>
          <button onClick={() => handleClick('5')}>5</button>
          <button onClick={() => handleClick('6')}>6</button>
          <button className="operator" onClick={() => handleClick('-')}>−</button>

          <button onClick={() => handleClick('1')}>1</button>
          <button onClick={() => handleClick('2')}>2</button>
          <button onClick={() => handleClick('3')}>3</button>
          <button className="operator" onClick={() => handleClick('+')}>+</button>

          <button className="function" onClick={() => handleClick('log(')}>log</button>
          <button onClick={() => handleClick('0')}>0</button>
          <button onClick={() => handleClick('.')}>.</button>
          <button className="equal" onClick={handleEqual}>=</button>

          <button className="function" onClick={() => handleClick('ln(')}>ln</button>
          <button className="function" onClick={() => handleClick('√(')}>√</button>
          <button className="function" onClick={() => handleClick('^')}>^</button>


        </div>
      </div>
    </div>
  );
}

export default App;
