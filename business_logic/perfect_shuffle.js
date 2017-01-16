// perfect_shuffle.js
var container  = {
	warning: function(message) {
		console.warn(message);
		return message;
	},
	cut: function(deck) {
		if (!Array.isArray(deck)) {
			return this.warning('Parameter passed into Cut is not an Array!');
		}
		if (deck.length < 2) {
			return this.warning('Deck passed into Cut is too small to split!');
		}

		var midpoint = Math.floor(deck.length / 2);
		if (deck.length % 2 != 0) {
			this.warning('Deck passed into Cut is uneven, left array will have one more card.');
			midpoint++;
		}

		return {
			'left': deck.slice(0, midpoint),
			'right': deck.slice(midpoint, deck.length)
		};
	},
	riffle: function(leftDeck, rightDeck) {
		if (!Array.isArray(leftDeck)) {
			return this.warning('leftDeck passed into Shuffle is not an Array!');
		}
		if (!Array.isArray(rightDeck)) {
			return this.warning('rightDeck passed into Shuffle is not an Array!');
		}
		if (leftDeck.length != rightDeck.length) {
			return this.stack_riffle(leftDeck, rightDeck);
		}
		return this.equal_riffle(leftDeck, rightDeck);
	},
	equal_riffle: function(leftDeck, rightDeck) {
		var shuffledDeck = [];
		var l = leftDeck.length;
		for (var i = 0; i < l; i++) {
			shuffledDeck.push(leftDeck[i]);
			shuffledDeck.push(rightDeck[i]);
		};
		return shuffledDeck;
	},
	stack_riffle: function(leftDeck, rightDeck) {
		var deck = [];
		var stack = []
		var shortestLength = (leftDeck.length < rightDeck.length) ? leftDeck.length : rightDeck.length;
		for (var j = 0; j < shortestLength; j++) {
			deck.push(leftDeck[j]);
			deck.push(rightDeck[j]);
		}
		stack = leftDeck[shortestLength] ? leftDeck.splice(shortestLength, leftDeck.length) : rightDeck.splice(shortestLength, rightDeck.length);
		return deck.concat(stack);
	},
	cutAndShuffle: function(someDeck) {
		var cutDeck = this.cut(someDeck);
		return this.riffle(cutDeck.left, cutDeck.right);
	}
};

module.exports = {
	shuffle: container
};