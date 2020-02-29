"use strict";
//IIFE - Immediately Invoked Function Expression
// mean? -> anonymous self-executing function

let app;
(function(app){
    // Declare Function Variables here...
    console.log("%cDeclaring Variables", "color: red;")

    /**
     * Variable initialization in this function
     *
     */

    function Start()
    {
        console.log("%cInitializing Variables", "color: blue;")
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