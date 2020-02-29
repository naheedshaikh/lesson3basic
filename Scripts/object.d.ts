declare module objects
{
    declare class Student extends objects.Person
    {
        constructor(name:string, age:number, studentID:string);
        isStudying():void       
    }

    declare class Person
    {
        constructor(name:string, age:number);
        saysHello():void       
    }
}