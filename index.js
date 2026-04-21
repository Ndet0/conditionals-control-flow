function scuberGreetingForFeet(feet){
  if(feet <= 400){
    return "This one is on me!"
  }
  else if(feet <= 2000){
    return "That will be twenty bucks."
  }
  else if(feet <= 2500){
    return "I will gladly take your thirty bucks."
  }
  else{
    return "No can do."
  }
  // Write your code here!
}
console.log(scuberGreetingForFeet(399));
console.log(scuberGreetingForFeet(401));
console.log(scuberGreetingForFeet(2001));
console.log(scuberGreetingForFeet(2501));

function ternaryCheckCity(city){
  return city === 'NYC' ? "Ok, sounds good.":"No go."
  // Write your code here!
}
console.log(ternaryCheckCity('NYC'));
console.log(ternaryCheckCity('Miami'));

function switchOnCharmFromTip(tip){
  switch(tip){
    case 'generous':
      return "Thank you so much."
      case 'not as generous':
        return "Thank you."
        default:
          return "Bye."
  }
  // Write your code here!
}
console.log(switchOnCharmFromTip('generous'));
console.log(switchOnCharmFromTip('not as generous'));
console.log(switchOnCharmFromTip('bad tip'));