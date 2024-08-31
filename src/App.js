import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [advice, setAdvice] = useState('Advice...')
  const [counter, setCounter] = useState(0)
  let arr = ['#3c6997', '#fe9000', '#E6E8E6', '#FDCA40', '#DF2935', '#3772FF', '#DF2935', '#FDCA40']
  async function increa() {
    let api = await fetch('https://api.adviceSlip.com/advice');
    let json = await api.json()
    console.log(json.slip.advice)
    setAdvice(json.slip.advice)
    setCounter(counter + 1)
    let cont = document.querySelector('.advice-container');
   cont.style.backgroundColor = arr[Math.ceil(Math.random()*8)] 
   cont.style.color = 'black';
  }
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Advice Count <span>{counter}</span></h1>
      <h1 className='advice-container' >{advice}</h1>
      <button onClick={increa}>Generate Advice</button>
    </div>
  );
}

export default App;
