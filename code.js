function factorial(n) { // O(n)
    let table = new Array(n+1); // O(1)
    table[0] = 1; // O(1)
    table[1] = 1; // O(1)

    for (i = 2; i <= n; i++) { // runs n-2 times -> O(n)
        table[i] = i * table[i-1]; // O(1)
    }
    return table; // O(1)
}

function e(n) { // O(n)
    let eTable = new Array(n+1); // O(1)
    let facTable = factorial(n); // O(n)
    eTable[0] = 1; // O(1)

    for (i = 1; i <= n; i++) { // runs n-1 times -> O(n)
        eTable[i] = 1.0 / facTable[i] + eTable[i-1]; // O(1)
    }
    return eTable[n]; // O(1)
}
