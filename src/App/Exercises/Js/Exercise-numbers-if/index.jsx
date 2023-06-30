// import { IfStatements } from './IfStatements';
import { ifStatements } from "./IfStatements";
export function Exercise() {
  const a = 5;
  let b = 5;

  const addResult = a + b;
  const substResult = a - b;
  const multiplyResult = a * b;
  const divideResult = a / b;
  const moduloResult = a % b;
  const powerResult = a ** b;

  //Przykłady innych operacji

  const result1 = a > b;
  const result2 = a >= b;
  const result3 = a < b;
  const result4 = a <= b;
  const result5 = a === b;
  //IF
  let c = 'a123b';
  console.log(isNaN(c), 'isNaN');
  const parseINT = parseInt('5');
  const parseINT_1 = parseInt(5.7);
  const parseINT_2 = parseInt('a123b');
  // nie zadziała dla: null, undefined
  console.log(parseINT, 'parseINT');
  console.log(parseINT_1, 'parseINT_1');
  console.log(parseINT_2, 'parseINT_2');
  console.log(parseINT_2, 'parseINT_2');
  console.log(Number.isInteger(a), 'isInteger()');
  //   const d = Number(15);
  //   d... jakaś metoda, to te metody nie wszystkie są pobierane od Number

  //zaokrąglanie
  console.log(Math.round(5.6), 'Math.round()');

  //NaN
  console.log(Math.round('a5.6'), 'Math.round(5.6)');

  //Math.ceil---------------------
  console.log(Math.ceil(0.95));
  //Expected output: 1
  console.log(Math.ceil(4));
  //Expected output: 4
  console.log(Math.ceil(7.004));
  //Expected output: 8
  console.log(Math.ceil(-7.004));
  //Expected output: -7

  //Math.floor------------------
  console.log(Math.floor(4.6), 'Math.floor()');

  //Math.sqrt------------------
  console.log(Math.sqrt(8), 'Math.sqrt()');

  //Math.pow------------------
  console.log(Math.pow(8), 'Math.pow())');

  //Math.random------------------
  console.log(Math.random(), 'Random float');

  //Math.sqrt------------------
  console.log(Math.round(Math.random()), 'Random integer');

  return (
    <>
      <div>addResult{addResult}</div>
      <div>substResult{substResult}</div>
      <div>multiplyResult{multiplyResult}</div>
      <div>divideResult{divideResult}</div>
      <div>moduloResult{moduloResult}</div>
      <div>powerResult{powerResult}</div>
    </>
  );
}
