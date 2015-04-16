/*
 * GET users listing.
 */
var optimalApiClient = require("../lib/OptimalApiClient");
var config = require("./config");

var optimalApiClient = new optimalApiClient(config.optimalApiKeyId,
		config.optimalApiKeySecret, config.optimalEnvironment,
		config.optimalAccountNumber);

var merchantRefNumber = Math.random().toString(36).slice(2);

exports.silentHosted = function(req, res) {
	merchantRefNumber = Math.random().toString(36).slice(2);
	var order = new optimalApiClient.Order();
	var extendedOptions = new optimalApiClient.ExtendedOptions();
	var redirect = new optimalApiClient.Redirect();
	var arr = [];
	order.setMerchantRefNum(merchantRefNumber);
	order.setTotalAmount("1000");
	order.setCurrencyCode("USD");
	extendedOptions.setKey("silentPost");
	extendedOptions.setValue(true);
	order.setExtendedOptions([ extendedOptions ]);
	redirect.setRel("on_success");
	redirect.setUri("https://api.netbanx.com/echo?payment=success");
	arr.push(redirect);
	redirect = new optimalApiClient.Redirect();
	redirect.setRel("on_error");
	redirect.setUri("https://api.netbanx.com/echo?payment=error");
	arr.push(redirect);
	redirect = new optimalApiClient.Redirect();
	redirect.setRel("on_decline");
	redirect.setUri("https://api.netbanx.com/echo?payment=failure");
	arr.push(redirect);
	order.setRedirect(arr);
	optimalApiClient.HostedApiServiceHandler(optimalApiClient).process(order,
			function(error, response) {
				if (error) {
					res.send(JSON.stringify(error));
				} else {
					res.send(JSON.stringify(response));
				}
			});
};

exports.simpleHosted = function(req, res) {
	merchantRefNumber = Math.random().toString(36).slice(2);
	var order = new optimalApiClient.Order();
	order.setMerchantRefNum(merchantRefNumber);
	order.setTotalAmount("1000");
	order.setCurrencyCode("USD");
	optimalApiClient.HostedApiServiceHandler(optimalApiClient).process(order,
			function(error, response) {
				if (error) {
					res.send(JSON.stringify(error));
				} else {
					res.send(JSON.stringify(response));
				}
			});
};

exports.cardpayment = function(req, res) {
	merchantRefNumber = Math.random().toString(36).slice(2);
	var json = req.query;
	var billingDet = new optimalApiClient.BillingDetails();
	var authrization = new optimalApiClient.Authorization();
	var card = new optimalApiClient.Card();
	var cardExp = new optimalApiClient.CardExpiry();
	billingDet.setStreet("Carlos Pellegrini 551");
	billingDet.setCity("Buenos Aires");
	billingDet.setState("Zulia");
	billingDet.setCountry("AR");
	billingDet.setZip("C1009ABK");
	card.setCardNum(json.cardNumber);
	cardExp.setMonth("09");
	cardExp.setYear("2019");
	card.setCardExpiry(cardExp);
	authrization.setMerchantRefNum(merchantRefNumber);
	authrization.setAmount("100");
	authrization.setSettleWithAuth("false");
	authrization.setCard(card);
	authrization.setBillingDetails(billingDet);
	optimalApiClient.cardServiceHandler(optimalApiClient).authorize(authrization,
			function(error, response) {
				if (error) {
					res.send(JSON.stringify(error));
				} else {
					res.send(JSON.stringify(response));
				}
			});
};

exports.cardCustomer = function(req, res) {
	merchantRefNumber = Math.random().toString(36).slice(2);
	var json = req.query;
	var authrization = new optimalApiClient.Authorization();
	var card = new optimalApiClient.Card();
	card.setPaymentToken(json.paymentToken);
	authrization.setMerchantRefNum(merchantRefNumber);
	authrization.setAmount("12500");
	authrization.setCard(card);
	optimalApiClient.cardServiceHandler(optimalApiClient).authorize(authrization,
			function(error, response) {
				if (error) {
					res.send(JSON.stringify(error));
				} else {
					res.send(JSON.stringify(response));
				}
			});
};

exports.createProfile = function(req, res) {
	merchantRefNumber = Math.random().toString(36).slice(2);
	var profile = new optimalApiClient.Profiles();
	profile.setMerchantCustomerId(merchantRefNumber);
	profile.setLocale("en_US");
	profile.setFirstName("anna" + merchantRefNumber);
	profile.setLastName("Perry" + merchantRefNumber);
	profile.setEmail("anna.perry" + merchantRefNumber + "@cya.com");
	profile.setPhone("713-444-5555");
	optimalApiClient.CustomerServiceHandler(optimalApiClient)
			.createCustmerProfile(profile, function(error, response) {
				if (error) {
					res.send(JSON.stringify(error));
				} else {
					res.send(JSON.stringify(response));
				}
			});
};

exports.createCard = function(req, res) {
	merchantRefNumber = Math.random().toString(36).slice(2);
	var json = req.query;
	var profile = new optimalApiClient.Profiles();
	var address = new optimalApiClient.Address();
	profile.setId(json.profileId);
	var card = new optimalApiClient.Card();
	var cardExp = new optimalApiClient.CardExpiry();
	card.setHolderName("JS");
	card.setCardNum(json.cardNumber);
	card.setDefaultCardIndicator("true");
	cardExp.setMonth("09");
	cardExp.setYear("2019");
	card.setCardExpiry(cardExp);
	card.setProfile(profile);
	address.setStreet("Carlos Pellegrini 551");
	address.setStreet2("1009 Buenos Aires");
	address.setCity("Buenos Aires");
	address.setCountry("AR");
	address.setZip("C1009ABK");
	address.setRecipientName("Jane Doe " + merchantRefNumber);
	address.setProfile(profile);
	optimalApiClient.CustomerServiceHandler(optimalApiClient)
			.createCustmerAddress(
					address,
					function(error, response) {
						if (error) {
							res.send(JSON.stringify(error));
						} else {
							// this is for avs zip error remove
							card.setBillingAddressId(response.id);
							optimalApiClient.CustomerServiceHandler(optimalApiClient)
									.createCustmerCard(card, function(error, response) {
										if (error) {
											res.send(JSON.stringify(error));
										} else {
											res.send(JSON.stringify(response));
										}
									});
						}
					});
};