import logo from './logo.svg';
import { useState } from 'react';
import {Button, Space, Row, Col, Input} from 'antd';
import './App.css';

function App() {
  const [textVal, setTextVal] = useState("");
  const [final, setFinal] = useState(null);
  
  const handleClick = (e) => {
    if(final){
      setFinal(null)
      setTextVal(e.currentTarget.textContent)
    }
    else{
    setTextVal(textVal+e.currentTarget.textContent)
    }
    
  }

  const handleClickSym = (e) => {
      setFinal(null)
      setTextVal(textVal+e.currentTarget.textContent) 
  }

  const clear = () => {
    setTextVal("")
    setFinal(null)
  }

  const calculate = () => {
    setFinal(eval(textVal))
    setTextVal(eval(textVal).toString())
  }

  return (
    <div className="App">
      <Row>
        <Input type='text' readOnly value={final ? final : textVal}/>
      </Row>
       <Row>
          <Col span={6}>
           <Button onClick={handleClickSym}>+</Button>
          </Col>
          <Col span={6}>
           <Button onClick={handleClickSym}>-</Button>
          </Col>
          <Col span={6}>
           <Button onClick={handleClickSym}>/</Button>
          </Col>
          <Col span={6}>
           <Button onClick={handleClickSym}>*</Button>
          </Col>
       </Row>
       <Row>
          <Col span={6}>
           <Button onClick={handleClick}>9</Button>
          </Col>
          <Col span={6}>
           <Button onClick={handleClick}>8</Button>
          </Col>
          <Col span={6}>
           <Button onClick={handleClick}>7</Button>
          </Col>
          <Col span={6}>
           <Button onClick={clear}>CLEAR</Button>
          </Col>
       </Row>
       <Row>
          <Col span={6}>
           <Button onClick={handleClick}>6</Button>
          </Col>
          <Col span={6}>
           <Button onClick={handleClick}>5</Button>
          </Col>
          <Col span={6}>
           <Button onClick={handleClick}>4</Button>
          </Col>
          <Col span={6}>
           <Button onClick={calculate}>=</Button>
          </Col>
       </Row>
       <Row>
          <Col span={6}>
           <Button onClick={handleClick}>3</Button>
          </Col>
          <Col span={6}>
           <Button onClick={handleClick}>2</Button>
          </Col>
          <Col span={6}>
           <Button onClick={handleClick}>1</Button>
          </Col>
          <Col span={6}>
           <Button onClick={handleClick}>0</Button>
          </Col>
       </Row>
    </div>
  );
}

export default App;
