function variableExample() {
    // 1. var
    var name = "Girish";
    var name = "Rahul"; // Re-declaration allowed
    name = "Ravi";      // Re-assignment allowed

    console.log("var:", name);

    // 2. let
    let age = 25;
    // let age=15; //Error:redecleration not allowed
    age = 30; // Re-assignment allowed

    console.log("let:", age);

    // 3. const
    const country = "India";
    // const country="Japan";//Redecleration not allowed
    // country = "USA"; // Error: Re-assignment not allowed

    console.log("const:", country);

    // Scope difference
    if (true) {
        var x = 10;
        let y = 20;
        const z = 30;
    }

    console.log("var scope:", x); // 10
    // console.log(y); // ReferenceError
    // console.log(z); // ReferenceError
}

variableExample();
