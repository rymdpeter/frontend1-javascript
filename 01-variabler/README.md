# Variabler
```let = ... // används för att deklarera variabler som ska kunna byta värde
    const // används för att deklarera variabler som inte ska byta värde
    var // legacy notation that is always mutable```
 
## Strings
Strings can be declared by using single och double quotation marks. ('' or "")
Backticks are used to declare literal strings that can contain variables injected by interpolation (`words ${variables} words`)

### Funktioner
let name = "Peter"
name = name.toLowerCase() // makes a string lower case
trim() // removes spaces at the start and end of string


## Int and Float
Use parseInt(arg) or parseFloat(arg) to parse an  
Will result in NaN (Not a Number) if the argument is not parsable as a number.
Use isNaN() to check the result. 

## Boolean
True or False.

## Array
Used to store sets of data and retrieve it later 
let arr = [1,2,3]
arr[1] // => 2