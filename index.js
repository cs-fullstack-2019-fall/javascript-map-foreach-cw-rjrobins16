//### Problem 1
//Ask the user to enter a word. Keep asking them to enter a word until they enter the letter 'q'.


let userInput = prompt("Enter a word.");

while (userInput !== "q")
{
    console.log(userInput);
    userInput = prompt("Enter a word or 'q' to quit.")
}


    // ### Problem 2
    //Make any string array all lower case strings. If you don't remember how to use that Google it.

var lettering = ["a","B","c","D","e"];

lettering.forEach(casing);
function casing(eachElement) {

    console.log(eachElement.toLowerCase());


}





    //### Challenge
    //Make any string array return an array of objects with the specified class below


    //class Student{
    // constructor(name)
   // {
//          this.name = name;
//   }
//}
