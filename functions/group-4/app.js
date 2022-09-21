const square = function(x,y) {
    /* 
       15 human years equals the first year of a medium-sized dog’s life.
       Year two for a dog equals about nine years for a human.
       And after that, each human year would be approximately five years for a dog.
       källa: American Kennel Club
   */
       let firstYear = 15;
       let secondYear = 9;
       let restOfAge = (x - 2) * 5;
       let totalYears = firstYear + secondYear + restOfAge;
   
       switch (x) {
           case 1: totalYears = firstYear; break;
           case 2: totalYears = firstYear + secondYear; break;
       }
   
       const dogAge = x < 1 ? 'That dog is just a baby!' : `A dog that is ${x} years old is actually ${totalYears} years old!`;
   
       return `${dogAge}\n${'🐶'.repeat(y)} "voff voff!"`;
}

// anonymous functions can be passed as arguments and used in other modules
exports.square = square
