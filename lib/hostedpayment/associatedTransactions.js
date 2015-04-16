var associatedTransactions = function(resp) {
	if(resp){
	if (resp.amount) {
		this.amount = resp.amount;
	}
	if (resp.authType) {
		this.authType = resp.authType;
	}
	if (resp.dateTime) {
		this.dateTime = resp.dateTime;
	}
	if (resp.reference) {
		this.reference = resp.reference;
	}
	}
};

associatedTransactions.prototype.setAmount = function(amount) {
	this.amount = amount;
};

associatedTransactions.prototype.getAmount = function() {
	return this.amount;
};

associatedTransactions.prototype.setAuthType = function(authType) {
	this.authType = authType;
};

associatedTransactions.prototype.getAuthType = function() {
	return this.authType;
};

associatedTransactions.prototype.setDateTime = function(dateTime) {
	this.dateTime = dateTime;
};

associatedTransactions.prototype.getDateTime = function() {
	return this.dateTime;
};

associatedTransactions.prototype.setReference = function(reference) {
	this.reference = reference;
};

associatedTransactions.prototype.getReference = function() {
	return this.reference;
};

module.exports = associatedTransactions;