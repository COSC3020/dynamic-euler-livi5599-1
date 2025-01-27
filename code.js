function factorial(n) {
    let table = new Array(n+1);
    table[0] = 1;
    table[1] = 1;

    for (i = 2; i <= n; i++) {
        table[i] = i * table[i-1];
    }
    return table;
}

function e(n) {
    let eTable = new Array(n+1);
    let facTable = factorial(n);
    eTable[0] = 1;

    for (i = 1; i <= n; i++) {
        eTable[i] = 1.0 / facTable[i] + eTable[i-1];
    }
    return eTable[n];
}
