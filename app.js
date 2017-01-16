// Entry point for Shuffle application.
var Shuffle = require('./business_logic/perfect_shuffle.js').shuffle;
var Deck = require('./business_logic/deck.js').Deck;
var _ = require('lodash');

var deck = new Deck();
deck = Shuffle.cutAndShuffle(deck); // Once, to get them unequal.

var copyDeck = new Deck();
var counter = 1;

while (!_.isEqual(deck, copyDeck) ) {
	deck = Shuffle.cutAndShuffle(deck);
	counter++;
	console.log('counter', counter);
}

/**
 * After running this program, it seems that eight (8) perfect shuffles 
 * will get the cards back to their original position. 
 * 
 */