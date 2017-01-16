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
	t.same(cutDeck3Items, { left: [ 'foo', 'bar' ], right: [ 'baz' ] }, 'Uneven decks are split left');

	// Even
	var d = new Deck();
	var cutDeck52Items = shuffle.cut(d);
	t.ok(cutDeck52Items.left.length === 26, 'Left cut length is 26');
	t.ok(cutDeck52Items.right.length === 26, 'Right cut length is 26');

	t.end();
});

// Test the riffle
tap.test('Riffle (parameters 1)', function(t) {
	t.ok(shuffle.riffle(false,[]) === 'leftDeck passed into Shuffle is not an Array!');
	t.end();
});

tap.test('Riffle (parameters 2)', function(t) {
	t.ok(shuffle.riffle([], false) === 'rightDeck passed into Shuffle is not an Array!');
	t.end();
});


tap.test('Riffle (even)', function(t) {
	var numbers = [1,2,3];
	var letters = ['a','b','c'];
	var shuffled = shuffle.riffle(numbers, letters);
	t.same(shuffled, [1,'a',2,'b',3,'c'], 'Letters & numbers should be shuffled');
	t.end()
});

tap.test('Riffle (uneven)', function(t) {
	var numbers = [1,2,3,4,5];
	var letters = ['a','b','c','d'];
	var shuffled = shuffle.riffle(numbers, letters);
	t.same(shuffled, [1,'a',2,'b',3,'c',4,'d',5], 'Letters & numbers should be shuffled');
	t.end()
});

// Test the cutAndShuffle
tap.test('cutAndShuffle ()', function(t) {
	var marvel = ['Spiderman', 'X-men', 'Hulk', 'Captain America', 'Dr. Doom', 'Thor'];
	t.same(shuffle.cutAndShuffle(marvel), ['Spiderman', 'Captain America', 'X-men', 'Dr. Doom', 'Hulk', 'Thor']);
	t.end()
});