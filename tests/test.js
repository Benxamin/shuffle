var tap = require('tap')
var shuffle = require('../business_logic/perfect_shuffle.js').shuffle;
var Deck = shuffle.Deck;

var deck = new Deck();

tap.pass(deck.length === 52);