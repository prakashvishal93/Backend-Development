### console.log

    1. This is not a part of EcmaScript. It is a runtime based feature.
    2. The behaviour of console.log changes by changing the run time environment. It may perform syncronous or asynchronous
        due to the run time environment.

### Callback

    Callback is function passed into another function.

    DISADVANTAGE OF CALLBACKS:
    1. Callback Hell - A callback inside a callback. Its make the code hard to read.
    2. Biggest disadvantage of Callback is :
        INVERSION OF CONTROL ---> If there is some part of code whose control we are passing to someone else and we don't know
                                    how that part will be executed. This problem is called Inversion of Control.

# Promises

    1. Promises are special Js Object, that are also considered readiblity enhancer. They get immediately return from a function setup to return a Promise.
    2. They acts as Placeholder for the data we hope to get back from some future task.
    3. We also attach the functionalities we want to defer until the future task is done And Promise object also handles execution of this functionality.

    ### Promises does two things , One inside js and one outside js.
        1. It signs up the process require to run in the runtime and give a placeholder in JS, which has value property.
        2.
