# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @alotina/lotide`

**Require it:**

`const _ = require('@alotina/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

*  `head`: returns the first element in an array.
*  `tail`: returns all elements in an array except for the first element.
*  `middle`: returns the middle element(s) in an array.
*  `assertArraysEqual`: asserts two arrays are equal.
*  `assertEqual`: asserts two elements are equal.
*  `eqArrays`: returns true or false when comparing two arrays.
*  `assertObjectsEqual`: asserts two objects are equal.
*  `countOnly`:  this function takes in a collection of items and returns counts for a specific subset of those items. 
*  `countLetters`: returns a count of each letter in a sentence.
*  `findKey`: scans an object and returns the first key for which the callback function returns a truthy value. 
*  `findKeyByValue`: returns the first key in an object that contains a given value.
*  `letterPositions`: returns all the indices in a string where each character is found.
*  `map`: returns a new array based on the results of a callback function.
*  `takeUntil`: removes elements from the beginning of an array until a condition is met.
*  `without`: returns a new array with only elements from a source array that are not present in an itemsToRemove array.