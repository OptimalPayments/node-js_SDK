var redirect = function(resp) {
	if (resp) {
		if (resp.rel) {
			this.rel = resp.rel;
		}
		if (resp.returnKeys) {
			this.returnKeys = resp.returnKeys;
		}
		if (resp.uri) {
			this.uri = resp.uri;
		}
		if (resp.delimiter) {
			this.delimiter = resp.delimiter;
		}
	}
};

redirect.prototype.setRel = function(rel) {
	this.rel = rel;
};

redirect.prototype.getRel = function() {
	return this.rel;
};

redirect.prototype.setReturnKeys = function(returnKeys) {
	this.returnKeys = returnKeys;
};

redirect.prototype.getReturnKeys = function() {
	return this.returnKeys;
};

redirect.prototype.setUri = function(uri) {
	this.uri = uri;
};

redirect.prototype.getUri = function() {
	return this.uri;
};

redirect.prototype.setDelimiter = function(delimiter) {
	this.delimiter = delimiter;
};

redirect.prototype.getDelimiter = function() {
	return this.delimiter;
};

module.exports = redirect;