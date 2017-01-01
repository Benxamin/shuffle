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
	}
};

module.exports = {
	shuffle: container
};