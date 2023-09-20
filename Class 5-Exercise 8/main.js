function counterWithReset() {
    //Defie a count variable here

    let counter = 0;

    return function() {
        //Increment and print the count
        if(counter >= 5) {
            counter = 0;
        }

        counter++;
        console.log(counter);
    }
}

let counterTest = counterWithReset();

counterTest();
counterTest();
counterTest();
counterTest();