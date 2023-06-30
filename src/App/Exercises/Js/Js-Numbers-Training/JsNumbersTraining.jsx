export function JsNumbersTraining() {
  
  return <div>
    {result1 === 'You are man' && <div>Jesteś mężczyzną</div>}
    {result2 === 'You are woman' && <div>Jesteś kobietą</div>}

    {iAmMan && <div>Jesteś mężczyzną</div>}
    {!iAmMan && <div>Jesteś kobietą</div>}
  </div>
  
}

let age = 18;
let hasDriverLicense = true;
let hasCar = true;
function canDrive1 (age, hasDriverLicense, hasCar) {
  let resultFromTenary = '';

    if (age < 18 && 'You are too young to drive.') {
    if (hasDriverLicense) {
        if (hasCar) {
            return "You can drive your car!";
        } else {
            return "You can drive a rental car.";
        }
    } else {
    return "You can't drive without a driver's license.";
    }
    } else {
    return "You are too young to drive.";
    }
   }
   

 
function hasEnough(hasEnough) {
 if (hasEnough) {
    return true
 } else {
    return false
 }
}
 
canDrive(18, true, true)
hasEnough(true)