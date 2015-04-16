var ancillaryFeesOrder = function(resp) {
	if (resp) {
		if (resp.amount) {
			this.amount = resp.amount;
		}
		if (resp.description) {
			this.description = resp.description;
		}
	}
};

ancillaryFeesOrder.prototype.setAmount = function(amount) {
	this.amount = amount;
};

ancillaryFeesOrder.prototype.getAmount = function() {
	return this.amount;
};

ancillaryFeesOrder.prototype.setDescription = function(description) {
	this.description = description;
};

ancillaryFeesOrder.prototype.getDescription = function() {
	return this.description;
};

module.exports = ancillaryFeesOrder;