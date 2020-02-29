"use strict";
//IIFE - Immediately Invoked Function Expression
// mean? -> anonymous self-executing function
let object = {};
object.firstProperty = "Some String Property";
object.secondProperty = 5;
object.thirdProperty = function(num) 
{
    num *= num;
    return num;
}
object.fourthProperty = ['Tom', 45, 'funky dog', 25.3];

let object2 = 
{
    "firstProperty": "Some String",
    "secondProperty": 10,
    "thirdProperty": [1, 2, 3, 4, "some weird thing"]
}

let myObjectFunction = function(anObject)
{
    anObject.firstProperty = "another String";
    return anObject;
}

let myNewObject = myObjectFunction(object2);

let object3 = new Object();

object3.myFunction = new Function();
object3.myFunction.someValue = 5;
object3.myFunction.someArray = new Array(20);

Student.prototype.myNewFunction = () => 
{
    console.log("hello");
}

console.log(Student);

let app;
(function(app){
    // Declare Function Variables here...
    console.log("%cDeclaring Variables", "color: red;")
    let h2;
    /**
     * Variable initialization in this function
     *
     */

    function Start()
    {
        console.log("%cInitializing Variables", "color: blue;")
        h2 = document.createElement('h2');
        h2.textContent = "Heading 2";
        
        //attach properties to the app object
        app.h2 = h2;

       app.tom = "whatever";
        Main();
    }

    /**
     * Main Program entry point is here
     *
     */
    function Main()
    {
        console.log("%cMain Program Body", "color: green;")
    }
    
    window.addEventListener("load", Start);
    
})(app || (app = {}));