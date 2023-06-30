// a shold be loggimg function and b should be a string
// const customLogger = (logger, stringToPrint) => {
//   // let logger, stringToPrint;;
//   // a = console.log;
//   // b = 'Hello World';
//   if(logger && typeof stringToPrint === "string" && stringToPrint.lenght > 0 ) return logger (stringToPrint)
//   console.error("Some args are wrong!")
// };
// const isProduction = false;
// // console.log("Ended")
// customLogger(isProduction ? customLogger :  console.log, "Anna");
//===========================]
// const employess = [
//   { name: 'Jan', surname: 'Kowalski', age: 99, occupation: 'CEO' },
//   { name: 'John', surname: 'Doe', age: 18, occupation: 'Printer' },
// ];
// const listPersonalData = (employee) => {
//   console.log(
//     '${employee.name} ${employee.surname} is ${employee.age} years old and works as a ${employee.occupation} in our firm'
//   );
// };
// const listPersonalData2 = (employee) => {
//   let employee;
//   employee = { forstName: 'Jan', lastName };
//   console.log(
//     `${employee.name} ${employee.surname} is ${employee.age} years old and works as a ${employee.occupation} in our firm`
//   );
// };
// const pet = {
//   furColor: "brown",
//   legLength: 1,
//   eyesCount: 3,
//   name: "Burek",
//   age: 9999,
//   legs: [
//     {endsWith: "hook"};
//     {endsWith: "hoof"};
//     {endsWith: "talon"};
//     {endsWith: "hook"};
//   ]
// }
// // const hybridDog = {}
// const displayMutationDetails = ({eyesCount, legLength, legs}) => {
//   const legsEndWith = `Legs end with ${legs.map(leg=>leg.endsWith)}`
//   console.log(`New mutation has ${eyesCount} eyes and is ${legLength}m tall.`)
// }
// const Sum = (props) => {
// // braki
// }
// displayMutationDetails(mutant)
// //tablica[5]
// // for (const employee of employess ) {
// //   listPersonalData(employee)
// // }

// employess.map((employee) => listPersonalData2(employee));

//+_+++++++++++++++++++++++++++++++++++++++++++++++++++++
// const setCookie = (key, value) => {
//   console.log(`Under the ${key} there's ${value}` being set`);
//   cookies[key] = value
// }
const person = {
  name: 'Clyde',
  age: 18,
};

const bar = {
  name: 'THE bar',
  minimumAge: 16,
};

/* 
  Create a function that takes in 2 arguments: 
  name and age and logs if the specified data 
  classifies user to enter a bar in USA.
  Returns the outcome in Boolean value
*/

const checkIfAllowedToDrink = (person, drinkingPlace) => {
  if (person.age >= drinkingPlace.minimumAge) {
    return true;
  } else {
    return false;
  }
};

// if(checkIfAllowedToDrink(person, bar)) {
//   console.log(`${person.name} może pić w barze ${bar.name}`)
// } else {
//   console.error(`${person.name} nie może pić w barze ${bar.name}`)
// }

/* 
  Based on the previous function returned value I'd like to be
  able to alert a message that tells me if the person can visit the provided bar. 
*/

// checkIfAllowedToDrink(person)

//

/* 
  Now, let's say we kinda need to know if Hobbits can visit taverns... Er, Bars... too.
  We need a way to tell how old the hobbit is in human years and see if he/she can enter the bar
*/
const HOBBIT_TO_HUMAN_AGE = 1.83;
const hobbit = {
  name: 'Bilbo',
  // In hobbit age
  age: 27.9,
};
const tavern = {
  name: 'Prancing Pony',
  // In human age
  minimumAge: 40,
};

// const bilboInHumanYears = hobbit.age * HOBBIT_TO_HUMAN_AGE
// hobbit.age = bilboInHumanYears

// hobbit.age = hobbit.age * HOBBIT_TO_HUMAN_AGE

// const hobbitAsAHuman = { ...hobbit, age: hobbit.age * HOBBIT_TO_HUMAN_AGE }

if (checkIfAllowedToDrink(hobbit, tavern)) {
  console.log(`${hobbit.name} może pić w barze ${tavern.name}`);
} else {
  console.error(`${hobbit.name} nie może pić w barze ${tavern.name}`);
}

// ===========================================

/* 
  # Task 1
- [x] function takes in 2 arguments:
- [x] name and age
- [x] logs if person can go to bar
- [x] Returns the outcome in Boolean value
*/

const AGE_ELIGIBLE_TO_DRINK_USA = 21;

const isAllowedToDrinkInUSA = ({ name, age, race }, bar) => {
  const racesRatios = { human: 1, hobbit: 1.83, elves: 5 };

  const calculatedAge = age * racesRatios[race];
  const drinkingAge = bar?.minimumAge || AGE_ELIGIBLE_TO_DRINK_USA;

  console.log(
    `${name} ${
      calculatedAge >= drinkingAge
        ? `can drink ${bar.name}`
        : `can not drink ${bar.name}`
    }`
  );

  return calculatedAge >= drinkingAge;
};

const guestList = [{ name: 'Łukasz', age: 8, race: 'elves' }, hobbit];

const bar1 = {
  name: 'Himmel & Holle',
  minimumAge: 32,
};

const bar2 = {
  name: 'Blue Oyster',
  minimumAge: 2,
};

guestList.map((guest) => {
  isAllowedToDrinkInUSA(guest, tavern);
});
