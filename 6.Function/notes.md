### Function Expression :

        function <name>(args){
            // Implimentation
        }
    * This is called function Definition.

    Whereas
    The first line of the code is not a function is called function expression.
        var f = function(args){
            // Implementation
        }
                or
        (function (){

        })
    * these kind of things are function Expression.

\*\*\* In Js, We can pass function as an argument to another function.

### Function Expression are of Two types :

    1. Anonymous
        Function without name is called anonymous function.
            Anonymous functio is hard to debug.

    2. Named

### Scope of a Function Expression:

    var x = function gun(){      // We cannot call gun() directly. X is opening a new scope here.
                                // x is the global scope here.
        console.log("gun);
    }
