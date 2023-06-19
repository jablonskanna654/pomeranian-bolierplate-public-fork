import './styles.css';
import { useState } from 'react';

export const Click5 = () => {
  const [click, setClick] = useState(0);
  const [message, setMessage] = useState('');

  function clickHandler() {
  
    let currentClick = click;
    setClick(currentClick + 1);

    console.log(click);
let myVar = 0;
    if (myVar > 1) {
      console.log('> 1');
    } else if(myVar === 0) {
      console.log('Zmienna = 0');
  } 
  else if(myVar === 3) {
    console.log('Zmienna = 3');
    // (1 > 2) {
    //   console.log('2 jest większe od 1');
    } else {
      console.log('pozostałe');
    }

  } 
  return (<div>
    <h1>Kliknij 5</h1>
    <button className="btn" onClick={clickHandler}>{'START'}
    </button>
    <h2>{message}</h2>
    </div>);
  };
