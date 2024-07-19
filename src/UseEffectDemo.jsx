import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';

const UseEffectDemo = () => {
    const [input1, setInput1] = useState(0);
    const [input2, setInput2] = useState(0);
    const [operation, setOperation] = useState('+');
    const [result, setResult] = useState(0);

    const calculateResult = () => {
        const num1 = parseFloat(input1);
        const num2 = parseFloat(input2);
        let res;
        switch (operation) {
            case '+':
                res = num1 + num2;
                break;
            case '-':
                res = num1 - num2;
                break;
            case '*':
                res = num1 * num2;
                break;
            case '/':
                res = num2 !== 0 ? num1 / num2 : 'Infinity';
                break;
            default:
                res = 0;
        }
        setResult(res);
    };

    useEffect(() => {
        calculateResult();
    }, [input1, input2, operation]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'num1') {
            setInput1(value);
        } else if (name === 'num2') {
            setInput2(value);
        }
    };

    const handleOperation = (op) => {
        setOperation(op);
    };

    return (
        <div>
            <Card style={{ width: '30rem' }}>
                <div>
                    <h3>A Value</h3>
                    <input
                        style={{ margin: '1rem' }}
                        type="text"
                        name="num1"
                        value={input1}
                        maxLength={12}
                        onChange={handleChange}
                        placeholder="Enter first number"
                    />
                    <h3>B Value</h3>
                    <input
                        style={{ margin: '1rem' }}
                        type="text"
                        name="num2"
                        value={input2}
                        onChange={handleChange}
                        placeholder="Enter second number"
                    />
                </div>
            </Card>
            <Card className='buttons' style={{ width: '30rem' }}>
                <div className='d-flex justify-content-between'>
                    <Button onClick={() => handleOperation('+')}>+ Add</Button>
                    <Button onClick={() => handleOperation('-')}>- Subtract</Button>
                    <Button onClick={() => handleOperation('*')}>* Multiply</Button>
                    <Button onClick={() => handleOperation('/')}>/ Division</Button>
                </div>
            </Card>
            <div>
                <h2 className='result'>Result:</h2>
                <input
                    type="text"
                    className='result'
                    readOnly
                    value={result !== null ? result : ''}
                />
            </div>
        </div>
    );
};

export default UseEffectDemo;
