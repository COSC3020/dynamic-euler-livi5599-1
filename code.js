function e(n) { //O(n)
    let eulerVal = 1.0; //O(1)
    let fact = 1; //O(1)

    for (let i = 1; i <= n; i++) { //runs n times -> O(n)
        eulerVal += (1.0 / (fact *= i)); //O(1)
    }
    return eulerVal; //O(1)
}
