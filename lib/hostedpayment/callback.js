var callbackOrder = function(resp) {
	if (resp) {
		if (resp.format) {
			this.format = resp.format;
		}
		if (resp.rel) {
			this.rel = resp.rel;
		}
		if (resp.retries) {
			this.retries = resp.retries;
		}
		if (resp.returnKeys) {
			this.returnKeys = resp.returnKeys;
		}
		if (resp.synchronous !== undefined) {
			this.synchronous = resp.synchronous;
		}
		if (resp.uri) {
			this.uri = resp.uri;
		}
		if (resp.delimiter) {
			this.delimiter = resp.delimiter;
		}
	}
};

callbackOrder.prototype.setUri = function(uri) {
	this.uri = uri;
};

callbackOrder.prototype.getUri = function() {
	return this.uri;
};

callbackOrder.prototype.setFormat = function(format) {
	this.format = format;
};

callbackOrder.prototype.getFormat = function() {
	return this.format;
};

callbackOrder.prototype.setRel = function(rel) {
	this.rel = rel;
};

callbackOrder.prototype.getRel = function() {
	return this.rel;
};

callbackOrder.prototype.setRetries = function(retries) {
	this.retries = retries;
};

callbackOrder.prototype.getRetries = function() {
	return this.retries;
};

callbackOrder.prototype.setReturnKeys = function(returnKeys) {
	this.returnKeys = returnKeys;
};

callbackOrder.prototype.getReturnKeys = function() {
	return this.returnKeys;
};

callbackOrder.prototype.setSynchronous = function(synchronous) {
	this.synchronous = synchronous;
};

callbackOrder.prototype.getSynchronous = function() {
	return this.synchronous;
};

callbackOrder.prototype.setDelimiter = function(delimiter) {
	this.delimiter = delimiter;
};

callbackOrder.prototype.getDelimiter = function() {
	return this.delimiter;
};

module.exports = callbackOrder;