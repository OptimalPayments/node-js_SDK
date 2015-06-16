/**
 * author: Anup W.
 */
var cardServiceHandler = require("./CardServiceHandler");
var CustomerServiceHandler = require("./CustomerServiceHandler");
var HostedApiServiceHandler = require("./HostedApiServiceHandler");
var Environment = require("../bin/Environment");
var errorClass = require("./common/error");
var request = require('request');

var OptimalApiClient = function(apiKey, apiPassword, environment, accountNumber) {
	try {
		var env = Environment[environment];
		if (apiKey && apiPassword && environment && accountNumber && env) {
			this._apiKey = apiKey;
			this._apiPassword = apiPassword;
			this._environment = Environment[environment];
			this._accountNumber = accountNumber;
			this.Card = require("./cardpayments/card");
			this.AccordD = require("./cardpayments/accordD");
			this.Authentication = require("./cardpayments/authentication");
			this.Authorization = require("./cardpayments/authorization");
			this.AuthorizationReversal = require("./cardpayments/authorizationreversal");
			this.BillingDetails = require("./cardpayments/billingDetails");
			this.CardExpiry = require("./cardpayments/cardExpiry");
			this.MasterPass = require("./cardpayments/masterPass");
			this.MerchantDescriptor = require("./cardpayments/merchantDescriptor");
			this.Pagination = require("./cardpayments/pagination");
			this.RecipientDateOfBirth = require("./cardpayments/recipientDateOfBirth");
			this.Refund = require("./cardpayments/refund");
			this.Settlements = require("./cardpayments/settlements");
			this.ShippingDetails = require("./cardpayments/shippingDetails");
			this.Verification = require("./cardpayments/verification");
			this.VisaAdditionalAuthData = require("./cardpayments/visaAdditionalAuthData");
			this.Address = require("./customervault/addresses");
			this.Dateofbirth = require("./customervault/dateofbirth");
			this.Profiles = require("./customervault/profiles");
			this.AddendumData = require("./hostedpayment/addendumData");
			this.AssociatedTransactions = require("./hostedpayment/associatedTransactions");
			this.ExtendedOptions = require("./hostedpayment/extendedOptions");
			this.Order = require("./hostedpayment/order");
			this.Transaction = require("./hostedpayment/transaction");
			this.Redirect = require("./hostedpayment/redirect");
			this.ShoppingCart = require("./hostedpayment/shoppingCart");
			this.Navigation = require("./hostedpayment/navigation");
			this.error = function(code, message) {
				return (new errorClass({
					"code" : code,
					"message" : message,
				}));
			};
		} else if (!apiKey) {
			throw "Please provide API key!";
		} else if (!apiPassword) {
			throw "Please provide API password!";
		} else if (!environment) {
			throw "Please provide Environment string i.e 'TEST' or 'LIVE'!";
		} else if (!Environment[environment]) {
			throw "Environment string must be 'TEST' or 'LIVE'!";
		} else if (!accountNumber) {
			throw "Please provide Merchant Account Number!";
		}
	} catch (error) {
		console.error(error);
	}
};

var serializeObject = function(obj) {
	if (obj === null) {
		return "";
	} else {
		return JSON.stringify(obj);
	}
};

var deSerializeObject = function(obj) {
	if (obj === null) {
		return "";
	} else {
		return JSON.parse(obj);
	}
};

var prepareApiCredential = function(apiKey, apiPassword) {
	var apiCredential = apiKey + ":" + apiPassword;
	var apiCredBuffer = new Buffer(apiCredential);
	return apiCredBuffer.toString("Base64");
};

var prepareRequestParameter = function(requestObject) {
	if (requestObject !== null) {
		return serializeObject(requestObject);
	} else {
		return '';
	}
};

var cardService;
OptimalApiClient.prototype.cardServiceHandler = function(optimalApiClient) {
	if (!cardService) {
		cardService = new cardServiceHandler(optimalApiClient);
	}
	return cardService;
};
var customerService;
OptimalApiClient.prototype.CustomerServiceHandler = function(optimalApiClient) {
	if (!customerService) {
		customerService = new CustomerServiceHandler(optimalApiClient);
	}
	return customerService;
};
var hostedPaymentService;
OptimalApiClient.prototype.HostedApiServiceHandler = function(optimalApiClient) {
	if (!hostedPaymentService) {
		hostedPaymentService = new HostedApiServiceHandler(optimalApiClient);
	}
	return hostedPaymentService;
};

OptimalApiClient.prototype.processRequest = function(optPayRequest,
		requestObject, responseCallBack) {
	var self = this;
	var requestJson = prepareRequestParameter(requestObject);
	var reqHeaders = {
		'Content-Type' : 'application/json; charset=utf-8',
		// 'Content-Length': requestJson.length,
		'Authorization' : 'Basic '
				+ prepareApiCredential(self._apiKey, self._apiPassword)
	};
	var strRegObject = serializeObject(requestObject);
	var options = {
		headers : reqHeaders,
		uri : optPayRequest.buildUrl(self._environment._host),
		method : optPayRequest._method,
		body : strRegObject,
		pool : {
			maxSockets : self._environment.maxSockets
		},
		timeout : self._environment.timeout
	};
	
	request(options, function(error, response, body) {
		if (!error && response.statusCode !== 503) {
			// in case of delete method the response is empty string
			if (body) {
				body = typeof (body) === "string" ? deSerializeObject(body) : body;
				responseCallBack(null, body);
			} else {
				var delResp = {
					"status" : response.statusCode
				};
				responseCallBack(null, delResp);
			}
		} else {
			if (error) {
				responseCallBack(self.error(error.code,
						"Connection error : No internet Connection available : "
								+ error.syscall), null);
			} else {
				responseCallBack(self.error(response.statusCode, body), null);
			}
		}
	});
};

OptimalApiClient.prototype.updateConfig = function(host, maxSockets, timeout) {
	var self = this;
	self._environment = Environment.createEnv(host, maxSockets, timeout);
};

module.exports = OptimalApiClient;
