/* It may seem you can replace any operator with a function. But is it so?

Write a function ifElse. The function takes a boolean condition and two
 values of any type.
If the condition is true, the first value is returned. 
Otherwise – the second.
 */

function ifElse(cond, ifTrue, ifFalse) {
    return (cond ? ifTrue : ifFalse) ;
  }
  
  ifElse(true, 1, 2);  // 1
  ifElse(false, 1, 2); // 2

  console.log(ifElse);
/*   Is there any substantial (non-syntactic) difference between this
 function and the statement / expression it was built upon?

 No Answer.
 */