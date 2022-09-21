// Functions can also be held as the value of a variable
// They are called anonymous functions
const group6Function = function() {
    console.log("Hello"); //Lucas kommentar



    function square(number) {   // Vadzim function square 
        return number * number;
    }
    console.log(square(5,5))
    
    
    
    const addMood = (name = "Karl") => { // Karl function: returns provided name with a random mood. if name is not provided default to "Karl"
        const emojiPicker = Math.floor(Math.random() * 4); // returns an int between 0 and 3
        const emojis = ["😠","😎","🙃","😐"];
    
        return name + " " + emojis[emojiPicker]; // emojiPicker is used to get a value from the specified index in emojis
    }
    
    console.log(addMood("Karl"));
    
    
    
    function logKen(){          // Kenneth function with while loop with the name logKen
    
        let x = 1;
        while(x < 5){
            console.log("hej");
            x++;
        }
    }
    
    logKen();
    
    
    
    let mette = "forvirrad"; // en liten variabel
    
    console.log(mette);
    
    
    
    function Lucas() //Lucas funktion
    {
    let message = 'Hello group 6';
    console.log(message);
    } 
    Lucas();
    
    
    console.log("test");
}
/*
function calculateSquare(x,y) {
    return x * y // The return value can be assigned
}
*/
// anonymous functions can be passed as arguments and used in other modules
exports.group6Function = group6Function
