function factorial(n) { //O(n)
    let fact = 1; //O(1)
    if (fact >= n) { //O(1)
        return fact; //O(1)
    }
    for (let i = 1; i <= n; i++) { //runs n times -> O(n)
        fact *= i; //O(1)
    }
    return fact; //O(1)
}

function e(n) { //O(n^2)
    let eulerVal = 1.0; //O(1)

    for (let i = 1; i <= n; i++) { //runs n times -> O(n^2)
        eulerVal += (1.0 / factorial(i)); //O(n)
    }
    return eulerVal; //O(1)
}
