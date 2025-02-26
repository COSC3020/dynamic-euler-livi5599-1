function factorial(n) {
    let fact = 1;
    if (fact >= n) {
        console.log("Returning fact: fact = ", fact);
        return fact;
    }
    for (i = 1; i <= n; i++) {
        fact = fact * i;
    }
    console.log("Returning fact: fact = ", fact);
    return fact;
}

function e(n) {
    //let eTable = new Array(n+1);
    let eTable = [];
    //console.log("eTable = ", eTable);
    //let facTable = factorial(n);
    eTable[0] = 1;
    console.log("eTable.length = ", eTable.length);
    console.log("eTable should be [1]: ", eTable);

    for (i = 1; i <= n; i++) {
        console.log("i = ", i);
        console.log("factorial(", i, ") = ", factorial(i));
        console.log("eTable[", i-1, "] = ", eTable[i-1]);
        eTable[i] = 1.0 / factorial(i) + eTable[i-1];
        //console.log("eTable.length after for loop = ", eTable.length);
        console.log("factorial(", i, ") = ", factorial(i));
        console.log("eTable[", i-1, "] = ", eTable[i-1]);
        console.log("eTable = ", eTable);
    }
    return eTable[n];
}

console.log("e(3) = ", e(3));
