import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button, Card} from 'react-bootstrap'

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'num1') {
      setNum1(value);
    } else if (name === 'num2') {
      setNum2(value);
    }
  };

  const handleOperation = (operation) => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);
    let res;

    switch (operation) {
      case '+':
        res = number1 + number2;
        break;
      case '-':
        res = number1 - number2;
        break;
      case '*':
        res = number1 * number2;
        break;
      case '/':
        res = number2 !== 0 ? number1 / number2 : 'Cannot divide by zero';
        break;
      default:
        res = 'Invalid Operation';
    }

    setResult(res);
  };

  return ( 
    <div>
      <Card style={{ width: '30rem'}}>
      <div>
        <h3>A Value</h3>
        <input style={{margin: '1rem'}}
          type="text"
          name="num1"
          value={num1}
          maxLength={12}
          onChange={handleChange}
          placeholder="Enter first number"
        />
        <h3>B Value</h3>
        <input  style={{margin: '1rem'}}
          type="text"
          name="num2"
          value={num2}
          onChange={handleChange}
          placeholder="Enter second number"
        />
      </div>
      </Card>
      <Card className='buttons' style={{ width: '30rem',}}>
      <div className='d-flex justify-content-between'>
        <Button onClick={() => handleOperation('+')}>+ Add</Button>
        <Button onClick={() => handleOperation('-')}>- Subtract</Button>
        <Button onClick={() => handleOperation('*')}>* Multiply</Button>
        <Button onClick={() => handleOperation('/')}>/ Division</Button>
      </div>
      </Card>
      <div>
        <h2 className='result'>Result:</h2>
        <input type="text" className='result' readOnly style={{background: '#fdfdfd'}} placeholder={result !== null ? result : ''} />
      </div>
    </div>
  );
};


export default Calculator
