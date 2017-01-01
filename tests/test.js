// Test dependencies
var tap = require('tap');

// App dependencies
var shuffle = require('../business_logic/perfect_shuffle.js').shuffle;
var Deck = require('../business_logic/deck.js').Deck;

// Test the Deck
tap.test('Deck', function(t) {
	var deck = new Deck();
	t.ok(deck.length === 52);
	t.ok(deck[0] === 'sA');
	t.ok(deck[12] === 'sK');
	t.ok(deck[13] === 'hA');
	t.ok(deck[25] === 'hK');
	t.ok(deck[26] === 'dA');
	t.ok(deck[deck.length - 1] === 'cK');
	t.end();
});

// Test the cut
tap.test('Cut', function(t) {
	t.ok(shuffle.cut(true) === 'Parameter passed into Cut is not an Array!');
	t.ok(shuffle.cut(123) === 'Parameter passed into Cut is not an Array!');
	t.ok(shuffle.cut('foo') === 'Parameter passed into Cut is not an Array!');
	t.ok(shuffle.cut({}) === 'Parameter passed into Cut is not an Array!');
	t.ok(shuffle.cut(null) === 'Parameter passed into Cut is not an Array!');
	t.ok(shuffle.cut(undefined) === 'Parameter passed into Cut is not an Array!');

	// var d = new Deck();
	// var cutDeck = shuffle.cut(d);
	// console.log('cutDeck', cutDeck.length);


	// t.ok(cutDeck.length === 2);
	t.end();
});