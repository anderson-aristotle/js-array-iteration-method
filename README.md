[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# JavaScript Array Iteration Methods

## Prerequisites

-   [JavaScript Functions "Ins & Outs"](https://github.com/ga-wdi-boston/js-functions-ins-and-outs)

## Objectives

By the end of this talk, developers should be able to:

-   Write callbacks to pass to array methods
-   Call array methods and pass callback as an argument
-   Write functions using array methods to add functionality.

## Preparation

1.  Fork and clone this repository.
 [FAQ](https://github.com/ga-wdi-boston/meta/wiki/ForkAndClone)
1.  Create a new branch, `training`, for your work.
1.  Checkout to the `training` branch.
1.  Install dependencies with `npm install`.

## Callbacks

A callback is a function that we pass as an argument to another function or
method.  This other function invokes the callback as a necessary part of
accomplishing its task.  The JavaScript Array Iteration Methods require callback
functions.

We often use predicate functions, functions returning either `true` or `false`,
as callbacks.

See [bin/callbacks.js](bin/callbacks.js) for an example.

## Arrow Functions

We frequently use `arrow` (sometimes referred to as `fat arrow`) functions as
callbacks with array iteration methods.  This is convenient when the callback is
simple and anonymous.

Arrow functions bodies that are a single expression have an added benefit, an
implicit return.  This means that arrow function bodies without `{}` return the
value of the expression without needing to use `return`.

Although the following is true of arrow functions:

```js
> typeof () => {}
'function'
> typeof (() => true)
'function'
> () => {} instanceof Function
true
> (() => true) instanceof Function
true
>
```

There are a few caveats.

Arrow functions:

-   cannot use
    [`arguments`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments)
    (trying generates: `ReferenceError: arguments is not defined`).
-   **cannot** be used as a Constructor (`new` does not bind `this`, no
    `prototype` property).
-   always have a lexically bound `this` (we'll learn more about that later).

## Array Iteration Methods

We'll explore the array methods that allow us to test and transform arrays more
simply and consistently, [Iteration
methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Iteration_methods),
and optionally at the end, we'll model some of these JavaScript Array methods as functions.  Being able to use these methods correctly is our main goal.

We'll check our work in `node` or using the scripts in `bin/`.

There are two main groups of array iteration methods:

1.  Those that must process all of the array elements
1.  Those that may only process a subset of the array elements

### Processing all array elements

#### Demo: using `forEach`

The
[forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
method iterates over all of the elements in an array. Unlike a `for` loop, it
cannot be stopped (all elements are processed).  `forEach` returns `undefined`.

From the MDN documentation:

    There is no way to stop or break a forEach() loop other than by throwing an
    exception. If you need such behavior, the forEach() method is the wrong
    tool, use a plain loop instead. If you are testing the array elements for a
    predicate and need a Boolean return value, you can use every() or some()
    instead. If available, the new methods find() or findIndex() can be used for
    early termination upon true predicates as well.

This means that `forEach` is a poor choice for an array operation that may
terminate early.

#### Code along: using `map`

The
[map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
method returns a **new** array the same size as the existing array.  The
elements of the new array are set to the return value of the callback passed to
`map` invoked with the corresponding element from the original array as its
argument (e.g. `newArray[i] = callback(array[i])`).  The array `map` is called
upon is **not** mutated.

#### Code along: using `reduce`

The
[reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
method returns a single value from operating on all the values in the array.  It
"reduces" many to one. The original array does not change.

The key to **using** `reduce` properly is to methodically walk-through the
"How reduce works" section at the above link.

#### Lab: using `filter`

The
[filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
method returns a **new** array containing elements from the original array for
which the callback returns `true`.  `filter` uses a predicate callback method to decide on which elements to add to the new array that it returns. The length of the new array may be 0 if the callback returned `false` for every element, or equal to the length of the original array, if the callback returned `true` for every element in the original array.

Callbacks passed to `filter` should be predicate functions.

#### Optional Lab: using `reduceRight`

The [reduceRight](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight)
method is functionally equivalent to using `reduce` on the array returned by
the `reverse` JavaScript Array method.

How would the results of calling `reduceRight` differ from calling `reduce`?

### Processing a subset of the array elements

#### Demo: using `findIndex`

The
[findIndex](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)
method returns the index of the first element in the array for which the
callback returns true.

Why do we need `findIndex`?  Why not just use
[indexOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)?

#### Code along: using `find`

The
[find](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
method returns the first element in the array for which the callback returns
true.

#### Code along: using `some`

The
[some](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)
method return true if the callback returns `true` for any element of the array.

Callbacks passed to `some` should be predicate functions.

#### Lab: using `every`

The [every](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)
method checks to see if all elements of the array meet some test.  The function
used for this should only return `true` or `false`.  This type of function is
often called a predicate.

Callbacks passed to `every` should be predicate functions.

### Additional Labs: Dive deeper and build your own array iteration methods

#### Lab: Adding functionality - count

`Array.prototype.length` tells us the number of elements in the array.  But what
if we want to know the number of elements that pass a certain test?

We'll build a function that counts the elements in an array for which a
predicate callback returns `true`.

#### Lab: modeling `forEach`

Write your own `myForEach` method that accomplishes
what `forEach` does.  HINT:  use `for` loop

#### Lab: modeling `map`

Write your own `myMap` method that accomplishes
what `map` does.  HINT:  use `forEach` method

#### Lab: modeling `reduce`

Write your own `myReduce` method that accomplishes
what `reduce` does.  HINT:  use `forEach` method

#### Lab: modeling `filter`

Write your own `myFilter` method that accomplishes
what `filter` does.  HINT:  use `forEach` method

#### Lab: modeling `reduceRight`

Write your own `myReduceRight` method that accomplishes what `reduceRight` does.
HINT:  start by writing `forEachRight` (similar to `forEach` but iterating from
the last element (at index length-1) through the first (at index 0).

#### Lab: modeling `find`

Write your own `myFind` method that accomplishes
what `find` does.  HINT:  use `findIndex` method

#### Lab: modeling `some`

Write your own `mySome` method that accomplishes
what `some` does.  HINT:  use `findIndex` method

#### Lab: modeling `every`

Write your own `myEvery` method that accomplishes
what `every` does.  HINT:  can we use `findIndex` or `some` method?

## Additional Resources

-   [List](https://en.wikipedia.org/wiki/List_(abstract_data_type))
-   [Array](https://en.wikipedia.org/wiki/Array_data_type)

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
