

(function(objects){

    class Student extends Person
    {

        constructor(name, age, studentID)
        {
            super(name, age);
            this.studentID = studentID;
        }
    
        isStudying()
        {
            console.log(`${this.name} with a studentID of ${this.studentID} is studying.`);
        }
    }
    ////attaches the class Student to the objects namespaces
    objects.Student = Student;
})(objects || (objects = {}));



