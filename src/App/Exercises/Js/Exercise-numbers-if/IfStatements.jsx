export function ifStatements() {
  const iAmMan = true;
  const a = 11;

  //if(!iAmMan){
  //console.log('You are not a man!!!')
  //} {

  //if else statement
  if (iAmMan) {
    console.log('You are man');
  } else {
    console.log('You are not man');
  }
  //   if (a < 10 || iAmMan) {
  //   if (a < 10 && iAmMan) {
  if (a < 10) {
    console.log('a < 10');
  } else if ('a > 10') {
    console.log('a > 10');
  } else {
    console.log('a = 10');
  }
  //switch statement
  const exp = 'Pink';
  switch (exp) {
    case 'Czerwony':
      console.log('Kolor jest czerwony');

    case 'Blue':
      console.log('Kolor jest niebieski');
    case 'Green':
      console.log('Kolor jest zielony');
      break;
    default:
      console.log('Przykro mi, niestety nie mamy takiego koloru w bazie');
  }
}
// conditional (ternary) operator

// const conditionalIf =
//   a > 10 ? console.log('Większe od 10') : console.log('Mniejsze lub równe 10');

// const extraConditionalIf =
//   a > 10 ? console.log('Większe od 10') : console.log('Mniejsze lub równe 10');

// function example() {
// return (condition1 ? value1 : condition2) ? (value 2)
// : condition3 ? value3
// : value4;
// }
// const result1 = iAmMan && 'You are man';
// const result2 = !iAmMan && 'You are woman';

// return (
//   <div>
//     {result1 === 'You are man' && <div>Jesteś mężczyzną</div>}
//     {result2 === 'You are woman' && <div>Jesteś kobietą</div>}

//     {iAmMan && <div>Jesteś mężczyzną</div>}
//     {!iAmMan && <div>Jesteś kobietą</div>}
//   </div>
// );
