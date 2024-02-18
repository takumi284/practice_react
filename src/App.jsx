import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

function App() {

  function add() {
    var x = document.getElementsByClassName("example1");
    var sum = 0;
    for (var i = 0; i < x.length - 1; i++) {
      sum += parseInt(x[i].value);
    }
    document.getElementsByClassName("example1")[3].value = sum;
  }

  // 各inputの初期値をstateで管理
  const [input1, setInput1] = useState(Math.floor(Math.random() * 10));
  const [input2, setInput2] = useState(Math.floor(Math.random() * 10));
  const [input3, setInput3] = useState(Math.floor(Math.random() * 10));

  // 各inputの変更ハンドラ
  const handleInputChange1 = (e) => {
    setInput1(parseInt(e.target.value));
  };

  const handleInputChange2 = (e) => {
    setInput2(parseInt(e.target.value));
  };

  const handleInputChange3 = (e) => {
    setInput3(parseInt(e.target.value));
  };

  // 状態を管理するためのstate
  const [isToggle1, setToggle1] = useState(false);
  // 状態を管理するためのstate
  const [isToggle2, setToggle2] = useState(false);
  // 状態を管理するためのstate
  const [isToggle3, setToggle3] = useState(false);
  //合計値を管理するためのstate
  const [sum, setSum] = useState(0);

  const [p2, setP2] = useState('OFF');

  // ボタンがクリックされたときのハンドラ
  const handleButtonClick1 = () => {
    // 状態を反転させる
    setToggle1(!isToggle1);

    if (isToggle1) {
      setSum(sum - input1);
    }
    else {
      setSum(sum + input1);
    }
  };
  // ボタンがクリックされたときのハンドラ
  const handleButtonClick2 = () => {
    // 状態を反転させる
    setToggle2(!isToggle2);

    if (isToggle2) {
      setSum(sum - input2);
    }
    else {
      setSum(sum + input2);
    }
  };
  // ボタンがクリックされたときのハンドラ
  const handleButtonClick3 = () => {
    // 状態を反転させる
    setToggle3(!isToggle3);

    if (isToggle3) {
      setSum(sum - input3);
    }
    else {
      setSum(sum + input3);
    }
  };

  const handleButtonClick4 = () => {
    var lst = [input1, input2, input3];
    lst.sort(function (a, b) {
      return a - b;
    });

    if (sum == lst[1] + lst[2]) {
      setP2('ON');
    }
    else {
      setP2('OFF');
    }
  };

  // 状態に基づいてボタンの色を決定
  const buttonColor1 = isToggle1 ? '#88a0c6' : '#4c586b';
  // 状態に基づいてボタンの色を決定
  const buttonColor2 = isToggle2 ? '#88a0c6' : '#4c586b';
  // 状態に基づいてボタンの色を決定
  const buttonColor3 = isToggle3 ? '#88a0c6' : '#4c586b';

  return (
    <div className="App">
      <header className="App-header">
        <h1>My First React App</h1>
      </header>
      <body className="App-body">
        <div className="example2">
          <input type="number" className="example1" value={input1} onChange={handleInputChange1}></input>
          +
          <input type="number" className="example1" value={input2} onChange={handleInputChange2}></input>
          +
          <input type="number" className="example1" value={input3} onChange={handleInputChange3}></input>
          &rarr;
          <input type="number" className="example1"></input>
        </div>
        <button className="button1" onClick={add}>cal</button>
        <div className="example3">
          <button className="button2" onClick={handleButtonClick1} style={{ backgroundColor: buttonColor1 }}>{input1}</button>
          <button className="button2" onClick={handleButtonClick2} style={{ backgroundColor: buttonColor2 }}>{input2}</button>
          <button className="button2" onClick={handleButtonClick3} style={{ backgroundColor: buttonColor3 }}>{input3}</button>
          <p className='p1'>{sum}</p>
          <button className="button3" onClick={handleButtonClick4}>OK</button>
          <p className='p2'>{p2}</p>
        </div>
      </body>
    </div>
  );
}

export default App;
