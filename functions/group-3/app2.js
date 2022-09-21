// FizzBuzz, ett så kallat typiskt test vid anställningsintervju *sägs det*

// Skriv ut nummer 1 - 100

// Debug, sätt ut en breakpoint. 

for (let i = 1; i < 101; i++) {

    // Om "i" är jämnt delbart med 15 så skriv ut "FizzBuzz" istället. Tex 1/15 blir en massa decimaler, så den kommer skrivas ut längst ner. Räknar ut med modulus operatorn. 
    if (i % 15 == 0) {
        console.log("FizzBuzz");
    }
    // Det här kommer skrivas ut när räknaren "i" blir 3
    else if (i % 3 == 0) {
        console.log("Fizz");
    } else if (i % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }

}