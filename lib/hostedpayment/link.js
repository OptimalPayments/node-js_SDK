var linkOrder = function(res) {
	if (res.rel) {
		this.rel = res.rel;
	}
	if (res.returnKeys) {
		this.returnKeys = res.returnKeys;
	}
	if (res.uri) {
		this.uri = res.uri;
	}
};

linkOrder.prototype.setReturnKeys = function(returnKeys) {
	this.returnKeys = returnKeys;
};

linkOrder.prototype.getReturnKeys = function() {
	return this.returnKeys;
};

linkOrder.prototype.setUri = function(uri) {
	this.uri = uri;
};

linkOrder.prototype.getUri = function() {
	return this.uri;
};

linkOrder.prototype.setRel = function(rel) {
	this.rel = rel;
};

linkOrder.prototype.getRel = function() {
	return this.rel;
};

module.exports = linkOrder;
