# Dynamic Programming Euler's Number

The mathematical constant $e$ (Euler's number) is defined as follows:

$$ e = \sum^{\infty}_{i=0} \frac{1}{i!} = \frac{1}{1} + \frac{1}{1} +
\frac{1}{1\cdot 2} + \frac{1}{1\cdot 2\cdot 3} + \frac{1}{1\cdot 2\cdot 3\cdot
4} + \ldots$$

I've provided an implementation of a function to approximate $e$ up to a number
of $n$ terms in `code.js` for you. However, it does repeated work -- identify
where the repeated work occurs and avoid it through bottom-up dynamic
programming (not memoization). Change the implementation accordingly.

Test your new functions; I've provided some basic testing code in `code.test.js`
but you need to go beyond that.

## Runtime Analysis

What is the worst-case big $\Theta$ time complexity of your algorithm?

The worst-case time complexity is big $\Theta(n^2)$.  This is because of the factorial() function that has a runtime of big $\Theta(n)$ that is in the for loop that runs n times, giving the e() function an overall runtime of big $\Theta(n^2)$.  I included comments in my code file stating the runtime of each line, which further explains how I got my answer of big $\Theta(n^2)$.

I recieved help from Ali.  He gave me guidance on how to implement the algorithm without using tables to store values by explaining that I can set the initial value of the euler approximation to 1.0 and build it up from there.  From his guidance I was able to write the algorithm.

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models.  All of the work is my own, except where stated otherwise.  I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.

-----

I submitted this assignment last semester and added on to it.
