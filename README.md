# Shuffle

A clean coding kata.

The purpose of this exercise is to investigate card shuffling, and thereby 
demonstrate pure functional programming, gain practice with data structures,
algorithms, and dynamic systems. We do not initially consider randomness, 
and will evolve towards it.

## Dependencies

- NodeJS
- NPM

## Installation

`npm install`

## Tests

`npm test`

## Pure Functional Programming

The desire is to have all the "business logic" written in pure functions. This
way, the program is portable to any language. Additionally, we will unit test
these functions, and see about fuzz testing, too.

The resulting User Interface (UI) becomes a "side effect". We will introduce
integration testing for the UI. And finally, we will investigate ways to better
author deterministic UIs.

## Data Structures

A characteristic of functional programming is the use of immutable data 
structures. We will show how using trees instead of standard arrays is more
efficient. 

## Algorithms

We will track our progress with timing.  We will start with the naive
implementation and work from there. 

## Dynamical Systems

Question: if one perfectly shuffles a deck of cards (providing the cut is
equal, left side always goes first, and each card alternates into the pile, i.e.: _not random_)
repeatedly, would the cards ever get back to the original ordered deck?
