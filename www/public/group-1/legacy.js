// This is a very important project
// * Semantic names (variables and functions)
// * Write files in the order Variables, Functions, Actions (when possible)
// * Pure functions when possible (easier testing and error handling)
// * Single point of return

// TODO: let u = setU(u).addXAndY(x, y);
// TODO: define functions at the top of the file
// Stress Manager (beta)
const yearsInSchool = 2;
// let burnout = false;
function timeToGraduate() {
    return yearsInSchool;
}
function addTimeLostAndRehab(timeLost, rehab) { // TODO: rename
    let output;
    timeLost = Number(timeLost);
    rehab = Number(rehab);
    output = isNaN(x) || isNaN(y) ? null : x + y; // TODO: declare variable and checkdata datatypes

    return output;
} // TODO: remove extra semicolon

//TODO: unclear name and purpose
function dubblera(x) {
    x = x * 2;
    return x;
}

let timeToGrad = timeToGraduate();
// if(burnout) {
    timeToGrad += addTimeLostAndRehab(1, 2);
    console.log("timetograd", timeToGrad) // TODO: create function pipe
    document.writeln(timeToGrad);
// }

//TODO: put back in
// document.writeln('häääy');
// document.writeln('hääääääy på daaj');
// document.writeln(addXAndYToTwo("HEj", 7));

// document.writeln("Häj då! Vi ses imorgon!");
// document.writeln("Det gör vi :D");
// document.writeln(dubblera(4));

