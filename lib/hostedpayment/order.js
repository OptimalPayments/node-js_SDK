var createArray = require("../common/createArray");
var error = require("../common/error");
var profile = require("../customervault/profiles");
var shoppingCart = require("./shoppingCart");
var ancillaryFees = require("./ancillaryFees");
var billingDetails = require("../cardpayments/billingDetails");
var shippingDetails = require("../cardpayments/shippingDetails");
var accordD = require("../cardpayments/accordD");
var callBack = require("./callback");
var redirect = require("./redirect");
var link = require("./link");
var addendumData = require("./addendumData");
var extendedOptions = require("./extendedOptions");
var associatedTransactions = require("./associatedTransactions");
var transaction = require("./transaction");
var navigation = require("./navigation");
var order = function(resp) {
	if (resp) {
		if (resp.id) {
			this.id = resp.id;
		}
		if (resp.merchantRefNum) {
			this.merchantRefNum = resp.merchantRefNum;
		}
		if (resp.currencyCode) {
			this.currencyCode = resp.currencyCode;
		}
		if (resp.totalAmount) {
			this.totalAmount = resp.totalAmount;
		}
		if (resp.customerIp) {
			this.customerIp = resp.customerIp;
		}
		if (resp.customerNotificationEmail) {
			this.customerNotificationEmail = resp.customerNotificationEmail;
		}
		if (resp.merchantNotificationEmail) {
			this.merchantNotificationEmail = resp.merchantNotificationEmail;
		}
		if (resp.dueDate) {
			this.dueDate = resp.dueDate;
		}
		if (resp.profile) {
			this.profile = new profile(resp.profile);
		}
		if (resp.shoppingCart) {
			this.shoppingCart = new createArray(resp.shoppingCart, shoppingCart);
		}
		if (resp.ancillaryFees) {
			this.ancillaryFees = new createArray(resp.ancillaryFees, ancillaryFees);
		}
		if (resp.billingDetails) {
			this.billingDetails = new billingDetails(resp.billingDetails);
		}
		if (resp.shippingDetails) {
			this.shippingDetails = new shippingDetails(resp.shippingDetails);
		}
		if (resp.callback) {
			this.callback = new createArray(resp.callback, callBack);
		}
		if (resp.redirect) {
			this.redirect = new createArray(resp.redirect, redirect);
		}
		if (resp.link) {
			this.link = new createArray(resp.link, link);
		}
		if (resp.paymentMethod) {
			this.paymentMethod = resp.paymentMethod;
		}
		if (resp.addendumData) {
			this.addendumData = new createArray(resp.addendumData, addendumData);
		}
		if (resp.locale) {
			this.locale = resp.locale;
		}
		if (resp.extendedOptions) {
			this.extendedOptions = new createArray(resp.extendedOptions, extendedOptions);
		}
		if (resp.associatedTransactions) {
			this.associatedTransactions = new createArray(
					resp.associatedTransactions, associatedTransactions);
		}
		if (resp.accordD) {
			this.accordD = new accordD(resp.accordD);
		}
		if (resp.status) {
			this.status = resp.status;
		}
		if (resp.transaction) {
			this.transaction = new transaction(resp.transaction);
		}
		if (resp.error) {
			this.error = new error(resp.error);
		}
		if (resp.navigation) {
			this.navigation = new navigation(resp.navigation);
		}
		if (resp.records) {
			this.records = new createArray(resp.records, order);
		}
		if(resp.count){
			this.count = resp.count;
		}
	}
};

order.prototype.setRecords = function(records) {
	this.records = records;
};

order.prototype.getRecords = function() {
	return this.records;
};

order.prototype.setCount = function(count) {
	this.count = count;
};

order.prototype.getCount = function() {
	return this.count;
};

order.prototype.setNavigation = function(navigation) {
	this.navigation = navigation;
};

order.prototype.getNavigation = function() {
	return this.navigation;
};

order.prototype.setError = function(error) {
	this.error = error;
};

order.prototype.getError = function() {
	return this.error;
};

order.prototype.setTransaction = function(transaction) {
	this.transaction = transaction;
};

order.prototype.getTransaction = function() {
	return this.transaction;
};

order.prototype.setStatus = function(status) {
	this.status = status;
};

order.prototype.getStatus = function() {
	return this.status;
};

order.prototype.setAccordD = function(accordD) {
	this.accordD = accordD;
};

order.prototype.getAccordD = function() {
	return this.accordD;
};

order.prototype.setAssociatedTransactions = function(associatedTransactions) {
	this.associatedTransactions = associatedTransactions;
};

order.prototype.getAssociatedTransactions = function() {
	return this.associatedTransactions;
};

order.prototype.setExtendedOptions = function(extendedOptions) {
	this.extendedOptions = extendedOptions;
};

order.prototype.getExtendedOptions = function() {
	return this.extendedOptions;
};

order.prototype.setLocale = function(locale) {
	this.locale = locale;
};

order.prototype.getLocale = function() {
	return this.locale;
};

order.prototype.setAddendumData = function(addendumData) {
	this.addendumData = addendumData;
};

order.prototype.getAddendumData = function() {
	return this.addendumData;
};

order.prototype.setPaymentMethod = function(paymentMethod) {
	this.paymentMethod = paymentMethod;
};

order.prototype.getPaymentMethod = function() {
	return this.paymentMethod;
};

order.prototype.setLink = function(link) {
	this.link = link;
};

order.prototype.getLink = function() {
	return this.link;
};

order.prototype.setRedirect = function(redirect) {
	this.redirect = redirect;
};

order.prototype.getRedirect = function() {
	return this.redirect;
};

order.prototype.setCallback = function(callback) {
	this.callback = callback;
};

order.prototype.getCallback = function() {
	return this.callback;
};

order.prototype.setShippingDetails = function(shippingDetails) {
	this.shippingDetails = shippingDetails;
};

order.prototype.getShippingDetails = function() {
	return this.shippingDetails;
};

order.prototype.setBillingDetails = function(billingDetails) {
	this.billingDetails = billingDetails;
};

order.prototype.getBillingDetails = function() {
	return this.billingDetails;
};

order.prototype.setAncillaryFees = function(ancillaryFees) {
	this.ancillaryFees = ancillaryFees;
};

order.prototype.getAncillaryFees = function() {
	return this.ancillaryFees;
};

order.prototype.setShoppingCart = function(shoppingCart) {
	this.shoppingCart = shoppingCart;
};

order.prototype.getShoppingCart = function() {
	return this.shoppingCart;
};

order.prototype.setProfile = function(profile) {
	this.profile = profile;
};

order.prototype.getProfile = function() {
	return this.profile;
};

order.prototype.setDueDate = function(dueDate) {
	this.dueDate = dueDate;
};

order.prototype.getDueDate = function() {
	return this.dueDate;
};

order.prototype.setMerchantNotificationEmail = function(
		merchantNotificationEmail) {
	this.merchantNotificationEmail = merchantNotificationEmail;
};

order.prototype.getMerchantNotificationEmail = function() {
	return this.merchantNotificationEmail;
};

order.prototype.setCustomerNotificationEmail = function(
		customerNotificationEmail) {
	this.customerNotificationEmail = customerNotificationEmail;
};

order.prototype.getCustomerNotificationEmail = function() {
	return this.customerNotificationEmail;
};

order.prototype.setCustomerIp = function(customerIp) {
	this.customerIp = customerIp;
};

order.prototype.getCustomerIp = function() {
	return this.customerIp;
};

order.prototype.setTotalAmount = function(totalAmount) {
	this.totalAmount = totalAmount;
};

order.prototype.getTotalAmount = function() {
	return this.totalAmount;
};

order.prototype.setCurrencyCode = function(currencyCode) {
	this.currencyCode = currencyCode;
};

order.prototype.getCurrencyCode = function() {
	return this.currencyCode;
};

order.prototype.setMerchantRefNum = function(merchantRefNum) {
	this.merchantRefNum = merchantRefNum;
};

order.prototype.setId = function(id) {
	this.id = id;
};
order.prototype.getId = function() {
	return this.id;
};

module.exports = order;