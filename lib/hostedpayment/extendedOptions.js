var extendedOptions = function(resp) {
	if (resp) {
		if (resp.key) {
			this.key = resp.key;
		}
		if (resp.value) {
			this.value = resp.value;
		}
	}
};

extendedOptions.prototype.setKey = function(key) {
	this.key = key;
};

extendedOptions.prototype.getKey = function() {
	return this.key;
};

extendedOptions.prototype.setValue = function(value) {
	this.value = value;
};

extendedOptions.prototype.getValue = function() {
	return this.value;
};

module.exports = extendedOptions;
