var createArray = require("../common/createArray");
var associatedTransactions = require("./associatedTransactions");
var card = require("../cardpayments/card");
var transation = function(resp) {
	if (resp) {
		if (resp.status) {
			this.status = resp.status;
		}
		if (resp.lastUpdate) {
			this.lastUpdate = resp.lastUpdate;
		}
		// authtype
		if (resp.authType) {
			this.authType = resp.authType;
		}
		if (resp.authCode) {
			this.authCode = resp.authCode;
		}
		if (resp.merchantRefNum) {
			this.merchantRefNum = resp.merchantRefNum;
		}
		// array
		if (resp.associatedTransactions) {
			this.associatedTransactions = new createArray(resp.associatedTransactions, associatedTransactions);
		}
		// card
		if (resp.card) {
			this.card = new card(resp.card);
		}
		if (resp.confirmationNumber) {
			this.confirmationNumber = resp.confirmationNumber;
		}
		if (resp.currencyCode) {
			this.currencyCode = resp.currencyCode;
		}
		if (resp.amount) {
			this.amount = resp.amount;
		}
		if (resp.paymentType) {
			this.paymentType = resp.paymentType;
		}
		// Boolean
		if (resp.settled !== undefined) {
			this.settled = resp.settled;
		}
		if (resp.refunded !== undefined) {
			this.refunded = resp.refunded;
		}
		if (resp.reversed !== undefined) {
			this.reversed = resp.reversed;
		}
		if (resp.dateTime) {
			this.dateTime = resp.dateTime;
		}
		if (resp.cvdVerification) {
			this.cvdVerification = resp.cvdVerification;
		}
		if (resp.houseNumberVerification) {
			this.houseNumberVerification = resp.houseNumberVerification;
		}
		if (resp.zipVerification) {
			this.zipVerification = resp.zipVerification;
		}
		if (resp.riskReasonCode) {
			this.riskReasonCode = resp.riskReasonCode;
		}
		if (resp.errorCode) {
			this.errorCode = resp.errorCode;
		}
		if (resp.errorMessage) {
			this.errorMessage = resp.errorMessage;
		}
	}
};

transation.prototype.setErrorCode = function(errorCode) {
	this.errorCode = errorCode;
};

transation.prototype.getErrorCode = function() {
	return this.errorCode;
};

transation.prototype.setErrorMessage = function(errorMessage) {
	this.errorMessage = errorMessage;
};

transation.prototype.getErrorMessage = function() {
	return this.errorMessage;
};

transation.prototype.setHouseNumberVerification = function(houseNumberVerification) {
	this.houseNumberVerification = houseNumberVerification;
};

transation.prototype.getHouseNumberVerification = function() {
	return this.houseNumberVerification;
};

transation.prototype.setZipVerification = function(zipVerification) {
	this.zipVerification = zipVerification;
};

transation.prototype.getZipVerification = function() {
	return this.zipVerification;
};

transation.prototype.setRiskReasonCode = function(riskReasonCode) {
	this.riskReasonCode = riskReasonCode;
};

transation.prototype.getRiskReasonCode = function() {
	return this.riskReasonCode;
};

transation.prototype.setReversed = function(reversed) {
	this.reversed = reversed;
};

transation.prototype.getReversed = function() {
	return this.reversed;
};

transation.prototype.setDateTime = function(dateTime) {
	this.dateTime = dateTime;
};

transation.prototype.getDateTime = function() {
	return this.dateTime;
};

transation.prototype.setCvdVerification = function(cvdVerification) {
	this.cvdVerification = cvdVerification;
};

transation.prototype.getCvdVerification = function() {
	return this.cvdVerification;
};

transation.prototype.setPaymentType = function(paymentType) {
	this.paymentType = paymentType;
};

transation.prototype.getPaymentType = function() {
	return this.paymentType;
};

transation.prototype.setSettled = function(settled) {
	this.settled = settled;
};

transation.prototype.getSettled = function() {
	return this.settled;
};

transation.prototype.setRefunded = function(refunded) {
	this.refunded = refunded;
};

transation.prototype.getRefunded = function() {
	return this.refunded;
};

transation.prototype.setStatus = function(status) {
	this.status = status;
};

transation.prototype.getStatus = function() {
	return this.status;
};

transation.prototype.setLastUpdate = function(lastUpdate) {
	this.lastUpdate = lastUpdate;
};

transation.prototype.getLastUpdate = function() {
	return this.lastUpdate;
};

transation.prototype.setAssociatedTransactions = function(associatedTransactions) {
	this.associatedTransactions = associatedTransactions;
};

transation.prototype.getAssociatedTransactions = function() {
	return this.associatedTransactions;
};

transation.prototype.setAuthType = function(authType) {
	this.authType = authType;
};

transation.prototype.getAuthType = function() {
	return this.authType;
};

transation.prototype.setAuthCode = function(authCode) {
	this.authCode = authCode;
};

transation.prototype.getAuthCode = function() {
	return this.authCode;
};

transation.prototype.setMerchantRefNum = function(merchantRefNum) {
	this.merchantRefNum = merchantRefNum;
};

transation.prototype.getMerchantRefNum = function() {
	return this.merchantRefNum;
};

transation.prototype.setCard = function(card) {
	this.card = card;
};

transation.prototype.getCard = function() {
	return this.card;
};

transation.prototype.setConfirmationNumber = function(confirmationNumber) {
	this.confirmationNumber = confirmationNumber;
};

transation.prototype.getConfirmationNumber = function() {
	return this.confirmationNumber;
};

transation.prototype.setCurrencyCode = function(currencyCode) {
	this.currencyCode = currencyCode;
};

transation.prototype.getCurrencyCode = function() {
	return this.currencyCode;
};

transation.prototype.setAmount = function(amount) {
	this.amount = amount;
};

transation.prototype.getAmount = function() {
	return this.amount;
};

module.exports = transation;