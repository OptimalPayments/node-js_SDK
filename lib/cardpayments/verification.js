var verifications = function(resp) {
	if (resp) {
		if (resp.id) {
			this.id = resp.id;
		}
		if (resp.merchantRefNum) {
			this.merchantRefNum = resp.merchantRefNum;
		}
		if (resp.childAccountNum) {
			this.childAccountNum = resp.childAccountNum;
		}
		if (resp.card) {
			this.card = resp.card;
		}
		if (resp.authCode) {
			this.authCode = resp.authCode;
		}
		if (resp.profile) {
			this.profile = resp.profile;
		}
		if (resp.billingDetails) {
			this.billingDetails = resp.billingDetails;
		}
		if (resp.customerIp) {
			this.customerIp = resp.customerIp;
		}
		if (resp.dupCheck) {
			this.dupCheck = resp.dupCheck;
		}
		if (resp.description) {
			this.description = resp.description;
		}
		if (resp.txnTime) {
			this.txnTime = resp.txnTime;
		}
		if (resp.currencyCode) {
			this.currencyCode = resp.currencyCode;
		}
		if (resp.avsResponse) {
			this.avsResponse = resp.avsResponse;
		}
		if (resp.cvvVerification) {
			this.cvvVerification = resp.cvvVerification;
		}
		if (resp.error) {
			this.error = resp.error;
		}
		if (resp.status) {
			this.status = resp.status;
		}
		if (resp.riskReasonCode) {
			this.riskReasonCode = resp.riskReasonCode;
		}
		if (resp.acquirerResponse) {
			this.acquirerResponse = resp.acquirerResponse;
		}
	}
};

verifications.prototype.setCvvVerification = function(cvvVerification) {
	this.cvvVerification = cvvVerification;
};

verifications.prototype.getCvvVerification = function() {
	return this.cvvVerification;
};

verifications.prototype.setAvsResponse = function(avsResponse) {
	this.avsResponse = avsResponse;
};
verifications.prototype.getAvsResponse = function() {
	return this.avsResponse;
};

verifications.prototype.setCurrencyCode = function(currencyCode) {
	this.currencyCode = currencyCode;
};

verifications.prototype.getCurrencyCode = function() {
	return this.currencyCode;
};

verifications.prototype.setDescription = function(description) {
	this.description = description;
};

verifications.prototype.getDescription = function() {
	return this.description;
};

verifications.prototype.setCustomerIp = function(customerIp) {
	this.customerIp = customerIp;
};
verifications.prototype.getCustomerIp = function() {
	return this.customerIp;
};

verifications.prototype.setBillingDetails = function(billingDetails) {
	this.billingDetails = billingDetails;
};

verifications.prototype.getBillingDetails = function() {
	return this.billingDetails;
};


verifications.prototype.setProfile = function(profile) {
	this.profile = profile;
};

verifications.prototype.getProfile = function() {
	return this.profile;
};

verifications.prototype.setAuthCode = function(authCode) {
	this.authCode = authCode;
};

verifications.prototype.getAuthCode = function() {
	return this.authCode;
};

verifications.prototype.setCard = function(card) {
	this.card = card;
};

verifications.prototype.getCard = function() {
	return this.card;
};

verifications.prototype.setTxnTime = function(txnTime) {
	this.txnTime = txnTime;
};

verifications.prototype.getTxnTime = function() {
	return this.txnTime;
};

verifications.prototype.setDupCheck = function(dupCheck) {
	this.dupCheck = dupCheck;
};

verifications.prototype.getDupCheck = function() {
	return this.dupCheck;
};

verifications.prototype.setChildAccountNum = function(childAccountNum) {
	this.childAccountNum = childAccountNum;
};

verifications.prototype.getChildAccountNum = function() {
	return this.childAccountNum;
};

verifications.prototype.setAcquirerResponse = function(acquirerResponse) {
	this.acquirerResponse = acquirerResponse;
};
verifications.prototype.getAcquirerResponse = function() {
	return this.acquirerResponse;
};

verifications.prototype.setRiskReasonCode = function(riskReasonCode) {
	this.riskReasonCode = riskReasonCode;
};

verifications.prototype.getRiskReasonCode = function() {
	return this.riskReasonCode;
};

verifications.prototype.setError = function(error) {
	this.error = error;
};
verifications.prototype.getError = function() {
	return this.error;
};

verifications.prototype.setAmount = function(amount) {
	this.amount = amount;
};

verifications.prototype.getAmount = function() {
	return this.amount;
};

verifications.prototype.setMerchantRefNum = function(merchantRefNum) {
	this.merchantRefNum = merchantRefNum;
};
verifications.prototype.getMerchantRefNum = function() {
	return this.merchantRefNum;
};

verifications.prototype.setId = function(id) {
	this.id = id;
};

verifications.prototype.getId = function() {
	return this.id;
};

module.exports = verifications;