import { person } from "./person";


// Arrow Function
const showDetails = () => {

    // Template Literals
    console.log(`Name : ${person.name}`);
    console.log(`Age : ${person.age}`);
};

showDetails();