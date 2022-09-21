// Calling module prompt
// const prompt = require( "prompt-sync" )()

/****************************
 * FUNCTION DECLARATIONS
/*****************************/

// This function draws result in the calculator
function drawCalculator( res ) {
  console.log( `
  \n\n\n*****Welcome to CALCULATOR ™ACME*****
      -------------
      | result = ${res}|
      -------------     MENU
      | 1 | 2 | 3 |     1 = Add two numbers
      | 4 | 5 | 6 |     2 = Substract two numbers
      | 7 | 8 | 9 |     3 = Multiply two numbers
      | + | 0 | - |     4 = Divide two numbers
      | * |   | / |     5 = Power of two numbers (x^y)
      |   |Pow|   |     6 = EXIT
      -------------
`)
}

// This function calculates addition of 2 numbers
function addition( val1, val2 ) {
  return val1 + val2
}

// This function calculates subtraction of 2 numbers
function subtraction( val1, val2 ) {
  return val1 - val2
}

// This function calculates multiplication of 2 numbers
function multiply( val1, val2 ) {
  return val1 * val2
}

// This function calculates division of 2 numbers
let varDivision = function ( val1, val2 ) {
  if ( val2 === 0 ) {
    console.log( "Division by Zero is Infinity" )
    return val1 / val2
  }
  return val1 / val2
}

// This function calculates the power of two  numbers
function powerFunction( val1, val2 ) {
  return Math.pow( val1, val2 )
}

/****************************
* BEGINNING OF THE PROGRAM
*****************************/
let menuOption = 0
let result = 0

do {
  console.clear()
  menuOption = 0
  result = 0

  drawCalculator( result )

  menuOption = parseInt( prompt( `Select one option from the menu: ` ) )

  if ( menuOption === 6 ) {
    console.log( `Hej då!! 🎈👋😃\n\n` )
    break
  }

  let value1 = parseInt( prompt( `Enter value 1 = ` ) )
  let value2 = parseInt( prompt( `Enter value 2 = ` ) )

  switch ( menuOption ) {
    case 1: // Addition
      result = addition( value1, value2 )
      drawCalculator( result )
      console.log( value1 + " added with " + value2 + " = " + addition( value1, value2 ) )
      break
    case 2: //Substraction
      result = subtraction( value1, value2 )
      drawCalculator( result )
      console.log( value1 + " subtracted with " + value2 + " = " + subtraction( value1, value2 ) )
      break
    case 3: // Multiplication
      result = multiply( value1, value2 )
      drawCalculator( result )
      console.log( value1 + " multiplied with " + value2 + " = " + multiply( value1, value2 ) )
      break
    case 4: // Division
      result = varDivision( value1, value2 )
      drawCalculator( result )
      console.log( `${value1} divided by ${value2} = ${varDivision( value1, value2 )}` ) // Interpolation
      break
    case 5: // Power
      result = powerFunction( value1, value2 )
      drawCalculator( result )
      console.log( `The power of value1 and value2 = ${result}` )
      break
    case 6: // EXIT
      console.log( `Hej då! 🎈👋😁` )
      break
    default: // Others
      console.log( `Enter a valid menu option` )
      break
  }

  // Waits until the user press the keyboard 'c' and then ENTER
  let varContinue = prompt( `To continue press the letter "c" and then ENTER --->  ` ).trim().toLowerCase()
  while ( varContinue !== `c` ) {
    /* Waiting */
  }

} while ( menuOption !== 6 )
