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
	}
};

module.exports = {
	shuffle: container
};