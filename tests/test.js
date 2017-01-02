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

	// Not array
	t.ok(shuffle.cut(true) === 'Parameter passed into Cut is not an Array!', 'cut(Boolean)');
	t.ok(shuffle.cut(123) === 'Parameter passed into Cut is not an Array!',  'cut(Number)');
	t.ok(shuffle.cut('foo') === 'Parameter passed into Cut is not an Array!','cut(String)');
	t.ok(shuffle.cut({}) === 'Parameter passed into Cut is not an Array!',   'cut(Object)');
	t.ok(shuffle.cut(null) === 'Parameter passed into Cut is not an Array!', 'cut(Null)');
	t.ok(shuffle.cut(undefined) === 'Parameter passed into Cut is not an Array!', 'cut(Undefined)');

	// Too small
	t.ok(shuffle.cut([]) === 'Deck passed into Cut is too small to split!', 'cut([empty])');
	t.ok(shuffle.cut(['foo']) === 'Deck passed into Cut is too small to split!', 'cut[1]');

	// Not even
	var cutDeck3Items = shuffle.cut(['foo', 'bar', 'baz']);
	t.ok(cutDeck3Items.left.length === 2, 'Uneven left side (2)');
	t.ok(cutDeck3Items.right.length === 1, 'Uneven right side (1)');
	t.same(cutDeck3Items, { left: [ 'foo', 'bar' ], right: [ 'baz' ] }, 'Uneven objects are the same');

	var d = new Deck();
	var cutDeck52Items = shuffle.cut(d);
	t.ok(cutDeck52Items.left.length === 26, 'Left cut length is 26');
	t.ok(cutDeck52Items.right.length === 26, 'Right cut length is 26');

	t.end();
});