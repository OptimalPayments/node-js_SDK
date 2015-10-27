/**
 * author: Anup W.
 */
var optimalApiClient = require("../lib/OptimalApiClient");
var config = require("../sample_application/config");

var merchantRefNumber = Math.random().toString(36).slice(2);
var merchantCustNumber = Math.random().toString(36).slice(2);

var optimalApiClient = new optimalApiClient(config.optimalApiKeyId, config.optimalApiKeySecret,
		config.optimalEnvironment, config.optimalAccountNumber);

// get refund using merchant ref number
function getRefundUsingMerchantRef(id) {
	var pagination = new optimalApiClient.Pagination();
	var refund = new optimalApiClient.Refund();
	refund.setMerchantRefNum(merchantRefNumber);
	optimalApiClient.cardServiceHandler(optimalApiClient).searchByMerchantRef(
			refund,
			pagination,
			function(error, responseDel) {
				console.log("Response at the client: " + responseDel);
				if (responseDel.error !== undefined) {
					console.log("Error: " + responseDel.getError().getMessage());
					console.log("Status11111111111111: "
							+ responseDel.getLinks()[0].getHref());
				} else {
					console.log("Status: " + responseDel.getLinks()[0].getHref());
					console.log("Status: " + responseDel.getRefunds().length);
					console.log("Status: "
							+ responseDel.getRefunds()[0].getLinks()[0].getRel());
				}
			});
}
// get a refund details using Id
function getRefundUsingId(id) {
	var refund = new optimalApiClient.Refund();
	refund.setId(id);
	optimalApiClient.cardServiceHandler(optimalApiClient).getRefund(
			refund,
			function(error, responseDel) {
				console.log("Response at the client: " + responseDel);
				if (responseDel.error !== undefined) {
					console.log("Error: " + responseDel.getError().getMessage());
					console.log("Status11111111111111: "
							+ responseDel.getLinks()[0].getHref());
				} else {
					console.log("Status: " + responseDel.getLinks()[0].getHref());
					// console.log("Status: " + responseDel.getVoidAuths().length);
					// console.log("Status: " +
					// responseDel.getVoidAuths()[0].getLinks()[0].getRel());
				}
			});
}
// cancel a refund
function cancelARefund(id) {
	var refund = new optimalApiClient.Refund();
	refund.setId(id);
	refund.setStatus("CANCELLED");
	optimalApiClient.cardServiceHandler(optimalApiClient).cancelRefund(
			refund,
			function(error, responseDel) {
				console.log("Response at the client: " + responseDel);
				if (responseDel.error !== undefined) {
					console.log("Error: " + responseDel.getError().getMessage());
					console.log("Status11111111111111: "
							+ responseDel.getLinks()[0].getHref());
				} else {
					console.log("Status: " + responseDel.getLinks()[0].getHref());
					// console.log("Status: " + responseDel.getVoidAuths().length);
					// console.log("Status: " +
					// responseDel.getVoidAuths()[0].getLinks()[0].getRel());
				}
			});
}

// refund a settlement
function refundASettlement(id) {
	var refund = new optimalApiClient.Refund();
	var settle = new optimalApiClient.Settlements();
	settle.setId(id);
	refund.setMerchantRefNum(merchantRefNumber);
	refund.setAmount("30");
	refund.setSettlements(settle);
	refund.setDupCheck("false");
	optimalApiClient.cardServiceHandler(optimalApiClient).refund(
			refund,
			function(error, responseDel) {
				console.log("Response at the client: " + responseDel);
				if (responseDel.error !== undefined) {
					console.log("Error: " + responseDel.getError().getMessage());
					console.log("Status11111111111111: "
							+ responseDel.getLinks()[0].getHref());
				} else {
					console.log("Status: " + responseDel.getLinks()[0].getHref());
					// console.log("Status: " + responseDel.getVoidAuths().length);
					// console.log("Status: " +
					// responseDel.getVoidAuths()[0].getLinks()[0].getRel());
				}
			});
}
// settle an authorization is complete

// get a settlement using merchant ref number
function getsettlementUsingMerchantRefNumber(merchantref) {
	var settle = new optimalApiClient.Settlements();
	settle.setMerchantRefNum(merchantref);
	optimalApiClient.cardServiceHandler(optimalApiClient).searchByMerchantRef(
			settle, undefined,
			function(error, responseDel) {
				console.log("Response at the client: " + JSON.stringify(responseDel));
			/*	if (responseDel.error !== undefined) {
					console.log("Error: " + responseDel.getError().getMessage());
					console.log("Error: "
							+ responseDel.getError().getLinks()[0].getHref());
				} else {
					console.log("Status: " + responseDel.getLinks()[0].getHref());
					console.log("Status: " + responseDel.getSettlements().length);
					console.log("Status: "
							+ responseDel.getSettlements()[0].getLinks()[0].getRel());
				}*/
			});
}
// cancel a settlement
function cancelASettlement(id) {
	var settle = new optimalApiClient.Settlements();
	settle.setId(id);
	optimalApiClient.cardServiceHandler(optimalApiClient).cancelSettlement(
			settle,
			function(error, responseDel) {
				console.log("Response at the client: " + responseDel);
				if (responseDel.error !== undefined) {
					console.log("Error: " + responseDel.getError().getMessage());
					console.log("Error: "
							+ responseDel.getError().getLinks()[0].getHref());
				} else {
					console.log("Status: " + responseDel.getLinks()[0].getHref());
					// console.log("Status: " + responseDel.getVoidAuths().length);
					// console.log("Status: " +
					// responseDel.getVoidAuths()[0].getLinks()[0].getRel());
				}
			});
}
// get an settlement
function getASettlement(id) {
	var settle = new optimalApiClient.Settlements();
	settle.setId(id);
	optimalApiClient.cardServiceHandler(optimalApiClient).getSettlement(settle,
			function(error, responseDel) {
				console.log("Response at the client: " + responseDel);
				if (responseDel.error !== undefined) {
					console.log("Error: " + responseDel.getError().getMessage());
				} else {
					console.log("Status: " + responseDel.getLinks()[0].getHref());
					// console.log("Status: " + responseDel.getVoidAuths().length);
					// console.log("Status: " +
					// responseDel.getVoidAuths()[0].getLinks()[0].getRel());
				}
			});
}
// settle an authorization
function settleAnAuthorization(id) {
	var authorization = new optimalApiClient.Authorization();
	authorization.setId(id);
	var settle = new optimalApiClient.Settlements();
	settle.setMerchantRefNum(merchantRefNumber);
	settle.setAmount("40");
	settle.setAuthorization(authorization);
	settle.setDupCheck("false");
	optimalApiClient.cardServiceHandler(optimalApiClient).settlement(settle,
			function(error, responseDel) {
				console.log("Response at the client: " + responseDel);
				if (responseDel.error !== undefined) {
					console.log("Error: " + responseDel.getError().getMessage());
				} else {
					console.log("Status: " + responseDel.getLinks()[0].getHref());
					// console.log("Status: " + responseDel.getVoidAuths().length);
					// console.log("Status: " +
					// responseDel.getVoidAuths()[0].getLinks()[0].getRel());
				}
			});
}
// reverse authorization complete

// get reverse Authorization using merchantRef number
function getRevAuthUsingMerchantRefNumber(merchantref) {
	var pagination = new optimalApiClient.Pagination();
	var revAuth = new optimalApiClient.AuthorizationReversal();
	revAuth.setMerchantRefNum(merchantref);
	optimalApiClient.cardServiceHandler(optimalApiClient).searchByMerchantRef(
			revAuth,
			pagination,
			function(error, responseDel) {
				console.log("Response at the client: " + responseDel);
				if (responseDel.error !== undefined) {
					console.log("Error: " + responseDel.error.message);
				} else {
					console.log("Status: " + responseDel.getLinks()[0].getHref());
					console.log("Status: " + responseDel.getVoidAuths().length);
					console.log("Status: "
							+ responseDel.getVoidAuths()[0].getLinks()[0].getRel());
				}
			});
}
// get reverse authorization using revAuth id;
function getReverseAuthUsingId(id) {
	var revAuth = new optimalApiClient.AuthorizationReversal();
	revAuth.setId(id);
	revAuth.setMerchantRefNum(merchantRefNumber);
	optimalApiClient.cardServiceHandler(optimalApiClient).getAuthReversal(revAuth,
			function(error, responseDel) {
				console.log("Response at the cl ient: " + responseDel);
				if (responseDel.error !== undefined) {
					console.log("Error: " + responseDel.error.message);
				} else {
					console.log("Status: " + responseDel.getLinks()[0].getHref());
                    console.log("Response at the client: " + JSON.stringify(responseDel));
					// console.log("Status: " + responseDel.getAuths().length);
					// console.log("Status: " +
					// responseDel.getAuths()[0].getLinks()[0].getRel());
				}
			});
}
// create or perform reverse authorization
function reverseAuth() {
	var revAuth = new optimalApiClient.AuthorizationReversal();
	var authorization = new optimalApiClient.Authorization();
	authorization.setId("0372af4a-6c09-42c3-9122-037734ad4046");
	revAuth.setMerchantRefNum(merchantRefNumber);
	revAuth.setAmount("1000");
	// revAuth.setDupCheck("false");
	revAuth.setAuthorization(authorization);
	optimalApiClient.cardServiceHandler(optimalApiClient).reverseAuth(revAuth,
			function(error, responseDel) {
				console.log("Response at the cl ient: " + responseDel);
				if (responseDel.error !== undefined) {
					console.log("Error: " + responseDel.error.message);
				} else {
					console.log("Status: " + responseDel.getLinks()[0].getHref());
					console.log("Response at the client: " + JSON.stringify(responseDel));
                    // console.log("Status: " + responseDel.getAuths().length);
					// console.log("Status: " +
					// responseDel.getAuths()[0].getLinks()[0].getRel());
				}
			});
}

// Authorization is done

// get authorization using merchantRef number
function getAuthUsingMerchantRefNumber(id) {
	var pagination = new optimalApiClient.Pagination();
	var authorization = new optimalApiClient.Authorization();
	authorization.setMerchantRefNum(id);
	optimalApiClient.cardServiceHandler(optimalApiClient).searchByMerchantRef(
			authorization,
			pagination,
			function(error, responseDel) {
				console.log("Response at the client: " + responseDel);
				if (responseDel.error !== undefined) {
					console.log("Error: " + responseDel.error.message);
				} else {
					console.log("Executed URL: " + responseDel.getLinks()[0].getHref());
					console.log("Autorizaion list results: " + responseDel.getAuths().length);
					if(responseDel.getAuths().length > 0) {
                        console.log("Status: " + responseDel.getAuths()[0].getId());
                    }
				}
			});
}
//Cancel an authorization using auth id
function aproveAuthUsingAuthId(id) {
	var authorization = new optimalApiClient.Authorization();
	authorization.setId(id);
	optimalApiClient.cardServiceHandler(optimalApiClient).approveHeldAuth(
			authorization, function(error, responseDel) {
				console.log("Response at the client: " + responseDel);
				if (responseDel.error !== undefined) {
					console.log("Error: " + responseDel.error.message);
				} else {
					console.log("Status: " + responseDel.getLinks()[0].getHref());
				}
			});
}
// Cancel an authorization using auth id
function cancelAuthUsingAuthId(id) {
	var authorization = new optimalApiClient.Authorization();
	authorization.setId(id);
	optimalApiClient.cardServiceHandler(optimalApiClient).cancelHeldAuth(
			authorization, function(error, responseDel) {
				console.log("Response at the client: " + responseDel);
				if (responseDel.error !== undefined) {
					console.log("Error: " + responseDel.error.message);
				} else {
					console.log("Status: " + responseDel.getLinks()[0].getHref());
                    console.log("Response at the client: " + JSON.stringify(responseDel));
				}
			});
}
// Get authorization using auth id
function getAuthUsingAuthId(id) {
	var authorization = new optimalApiClient.Authorization();
	authorization.setId(id);
	optimalApiClient.cardServiceHandler(optimalApiClient).getAuth(authorization,
			function(error, responseDel) {
				console.log("Response at the client: " + responseDel);
				if (responseDel.error !== undefined) {
					console.log("Error: " + responseDel.error.message);
				} else {
					console.log("Status: " + responseDel.getLinks()[0].getHref());
                    console.log("Response at the client: " + JSON.stringify(responseDel));
				}
			});
}
// Auth with Card
function authWithCard() {
	var billingDet = new optimalApiClient.BillingDetails();
	var authorization = new optimalApiClient.Authorization();
	var card = new optimalApiClient.Card();
	var cardExp = new optimalApiClient.CardExpiry();
	billingDet.setStreet("Carlos Pellegrini 551");
	billingDet.setCity("Buenos Aires");
	billingDet.setState("Zulia");
	billingDet.setCountry("AR");
	billingDet.setZip("C1009ABK");
	card.setCardNum("5191330000004415");
	cardExp.setMonth("09");
	cardExp.setYear("2019");
	card.setCardExpiry(cardExp);
	// authorization.setId("b63371b1-e925-4eb8-b889-7152046592ba");
	authorization.setMerchantRefNum(merchantRefNumber);
	authorization.setAmount("100");
	authorization.setSettleWithAuth("false");
	authorization.setCard(card);
	authorization.setBillingDetails(billingDet);
	optimalApiClient.cardServiceHandler(optimalApiClient).authorize(
			authorization, function(error, responseDel) {
				console.log("Response at the client: " + responseDel);
				if (error) {
					console.log("Error: " + error.message);
				} else {
					console.log("Status: " + responseDel.getLinks()[0].getHref());
					console.log("Status: " + responseDel.getBillingDetails().getCity());
					console.log("Status: " + responseDel.getCard().getCardExpiry().getMonth());
				}
			});
}
// auth with card payment token
function authWithPaymentToken() {
	var authorization = new optimalApiClient.Authorization();
	var card = new optimalApiClient.Card();
	card.setPaymentToken("CdELTQJoyuHg6In");
	authorization.setMerchantRefNum(merchantRefNumber);
	authorization.setAmount("1250000");
	//authorization.setSettleWithAuth("false");
	authorization.setCard(card);
	optimalApiClient.cardServiceHandler(optimalApiClient).authorize(
			authorization, function(error, responseDel) {
				console.log("Response at the client: " + responseDel);
				if (responseDel.error !== undefined) {
					console.log("Error: " + responseDel.error.message);
				} else {
					console.log("Status: " + responseDel.getLinks()[0].getHref());
				}
			});
}


function authWithPaymentTokenAndSettlement() {
/*	var authorization = new optimalApiClient.Authorization();
	var card = new optimalApiClient.Card();
	card.setPaymentToken("CQSCjzkm09IPiW1");
	authorization.setMerchantRefNum(merchantRefNumber);
	authorization.setAmount("1250000");
	var billingDet = new optimalApiClient.BillingDetails();
	billingDet.setStreet("Carlos Pellegrini 551");
	billingDet.setCity("Buenos Aires");
	billingDet.setState("Zulia");
	billingDet.setCountry("IN");  // Use AR to perform Held auth
	billingDet.setZip("411015");  // use C1009ABK
	authorization.setBillingDetails(billingDet);*/
	//authorization.setSettleWithAuth("false");
	//authorization.setCard(card);
	
	var billingDet = new optimalApiClient.BillingDetails();
	var shippingDet = new optimalApiClient.ShippingDetails();
	var authorization = new optimalApiClient.Authorization();
	var card = new optimalApiClient.Card();
	var cardExp = new optimalApiClient.CardExpiry();
	var merchantRefNumber = Math.random().toString(36).slice(2);
	billingDet.setStreet("Carlos Pellegrini 551");
	billingDet.setCity("Buenos Aires");
	billingDet.setState("Zulia");
	billingDet.setCountry("IN");  // Use AR to perform Held auth
	billingDet.setZip("411001");  // use C1009ABK
	shippingDet.setCarrier("CAD");
	shippingDet.setCity("Buenos Aires");
	shippingDet.setState("CA");
	shippingDet.setCountry("US");  // Use AR to perform Held auth
	shippingDet.setZip("422011");
	card.setCardNum("5191330000004415");
	cardExp.setMonth("09");
	cardExp.setYear("2019");
	card.setCardExpiry(cardExp);
	//authorization.setId("b63371b1-e925-4eb8-b889-7152046592ba");
	authorization.setMerchantRefNum(merchantRefNumber);
	authorization.setAmount("1200");
	authorization.setSettleWithAuth("true");
	authorization.setDupCheck("true");
	authorization.setCard(card);
	authorization.setBillingDetails(billingDet);
	authorization.setShippingDetails(shippingDet);
	
	optimalApiClient.cardServiceHandler(optimalApiClient).authorize(
			authorization, function(error, responseDel) {
				var id = responseDel.getId();
				console.log("Response at authorize the client: " + responseDel);
				console.log("Response at responseDel.getSettlements()[0].getAvailableToRefund() the client: " + responseDel.getSettlements()[0].getAvailableToRefund());
				var settle = new optimalApiClient.Settlements();
				settle.setMerchantRefNum(merchantRefNumber);
				settle.setAmount("40");
				settle.setAuthorization(responseDel);
				settle.setDupCheck("false");
				optimalApiClient.cardServiceHandler(optimalApiClient).settlement(settle,
						function(error, responseDel) {
							console.log("Response at settlement the client: " + responseDel);
							if (responseDel.error !== undefined) {
								console.log("Error: " + responseDel.getError().getMessage());
							} else {
								console.log("Status: " + responseDel.getLinks()[0].getHref());
								var authorization = new optimalApiClient.Authorization();
								authorization.setId(id);
								optimalApiClient.cardServiceHandler(optimalApiClient).getAuth(authorization,
										function(error, responseDel) {
											console.log("Response at getAuth the client: " + responseDel);
											if (responseDel.error !== undefined) {
												console.log("Error: " + responseDel.error.message);
											} else {
												console.log("Status: " + responseDel.getLinks()[0].getHref());
											}
										});
							}
						});
			});
}

function complexAuth() {
		var billingDet = new optimalApiClient.BillingDetails();
		var authentication = new optimalApiClient.Authentication();
		var shippingDet = new optimalApiClient.ShippingDetails();
		var authorization = new optimalApiClient.Authorization();
		var card = new optimalApiClient.Card();
		var cardExp = new optimalApiClient.CardExpiry();
		var merchantRefNumber = Math.random().toString(36).slice(2);
		billingDet.setStreet("Carlos Pellegrini 551");
		billingDet.setCity("Buenos Aires");
		billingDet.setState("Zulia");
		billingDet.setCountry("IN");  // Use AR to perform Held auth
		billingDet.setZip("411001");  // use C1009ABK
		shippingDet.setCarrier("CAD");
		shippingDet.setCity("Buenos Aires");
		shippingDet.setState("CA");
		shippingDet.setCountry("US");  // Use AR to perform Held auth
		shippingDet.setZip("422011");
		card.setCardNum("5191330000004415");
		cardExp.setMonth("09");
		cardExp.setYear("2019");
		card.setCardExpiry(cardExp);
		authentication.setEci("5");
		authentication.setCavv("AAABCIEjYgAAAAAAlCNiENiWiV+=");
		authentication.setXid("OU9rcTRCY1VJTFlDWTFESXFtTHU=");
		authentication.setThreeDEnrollment("Y");
		authentication.setThreeDResult("Y");
		authentication.setSignatureStatus("Y");
		authorization.setMerchantRefNum(merchantRefNumber);
		authorization.setAmount("1200");
		authorization.setSettleWithAuth("false");
		authorization.setDupCheck("true");
		authorization.setCard(card);
		authorization.setBillingDetails(billingDet);
		authorization.setShippingDetails(shippingDet);
		authorization.setAuthentication(authentication);
		
		optimalApiClient.cardServiceHandler(optimalApiClient).authorize(
				authorization, function(error, responseDel) {
					console.log("Response at authorize the client: " + JSON.stringify(responseDel));
				});
	}

function monitor(){
	optimalApiClient.cardServiceHandler(optimalApiClient).monitor(
			function(error, responseDel) {
				console.log("Response at the client: " + JSON.stringify(responseDel));
				console.log("Response at the error: " + responseDel.status);
			});
}

function verifyCardAndBillingDetails(){
	var verification = new optimalApiClient.Verification();
	var billingDet = new optimalApiClient.BillingDetails();
	var shippingDet = new optimalApiClient.ShippingDetails();
	var authorization = new optimalApiClient.Authorization();
	var card = new optimalApiClient.Card();
	var cardExp = new optimalApiClient.CardExpiry();
	var merchantRefNumber = Math.random().toString(36).slice(2);
	billingDet.setStreet("Carlos Pellegrini 551");
	billingDet.setCity("Buenos Aires");
	billingDet.setState("Zulia");
	billingDet.setCountry("IN");  // Use AR to perform Held auth
	billingDet.setZip("411001");  // use C1009ABK
	card.setCardNum("5191330000004415");
	cardExp.setMonth("09");
	cardExp.setYear("2019");
	card.setCardExpiry(cardExp);
	//authorization.setId("b63371b1-e925-4eb8-b889-7152046592ba");
	verification.setMerchantRefNum(merchantRefNumber);
	verification.setDupCheck("true");
	verification.setCard(card);
	verification.setBillingDetails(billingDet);
	optimalApiClient.cardServiceHandler(optimalApiClient).verify(verification,
			function(error, responseDel) {
		console.log("Response at the client: " + responseDel.getId());
		console.log("Response at the client: " + typeof(responseDel));
		console.log("Response at the client: " +  typeof(responseDel));
		console.log("Response at the client: " + responseDel.getCard().getType());
		console.log("Response at the client: " + responseDel.getCard().getType());
		console.log("Response at the client: " + responseDel.getMerchantRefNum());
				console.log("Response at the client: " + JSON.stringify(responseDel));
				console.log("Response at the error: " + responseDel.status);
			});
}
function verifyCardUsingPaymentToken(){
	var verification = new optimalApiClient.Verification();
	var card = new optimalApiClient.Card();
	var merchantRefNumber = Math.random().toString(36).slice(2);
	card.setPaymentToken("CdZTeC8xEE0uIK0");
	verification.setMerchantRefNum(merchantRefNumber);
	verification.setCard(card);
	optimalApiClient.cardServiceHandler(optimalApiClient).verify(verification,
			function(error, responseDel) {
		console.log("Response at the client: " + responseDel.getId());
		console.log("Response at the client: " + typeof(responseDel));
		console.log("Response at the client: " +  typeof(responseDel));
		console.log("Response at the client: " + responseDel.getCard().getType());
		console.log("Response at the client: " + responseDel.getCard().getType());
		console.log("Response at the client: " + responseDel.getMerchantRefNum());
				console.log("Response at the client: " + JSON.stringify(responseDel));
				console.log("Response at the error: " + responseDel.status);
			});
}
function getVerificationById(){
	var verification = new optimalApiClient.Verification();
	verification.setId("47a6944b-c67d-4cf4-804d-d12847649192");
	optimalApiClient.cardServiceHandler(optimalApiClient).getVerification(verification,
			function(error, responseDel) {
		console.log("Response at the client: " + responseDel.getId());
		console.log("Response at the client: " + typeof(responseDel));
		console.log("Response at the client: " +  typeof(responseDel));
		console.log("Response at the client: " + responseDel.getCard().getType());
		console.log("Response at the client: " + responseDel.getCard().getType());
		console.log("Response at the client: " + responseDel.getMerchantRefNum());
				console.log("Response at the client: " + JSON.stringify(responseDel));
				console.log("Response at the error: " + responseDel.status);
			});
}
function getVerificationByMerchantRef(){
	var verification = new optimalApiClient.Verification();
	var pagination = new optimalApiClient.Pagination();
	verification.setMerchantRefNum("nzwvvnvf6n31h5mi");
	optimalApiClient.cardServiceHandler(optimalApiClient).searchByMerchantRef(verification, pagination,
			function(error, responseDel) {
		console.log("Response at the client: " + responseDel.getVerifications()[0].getId());
		/*console.log("Response at the client: " + typeof(responseDel));
		console.log("Response at the client: " +  typeof(responseDel));
		console.log("Response at the client: " + responseDel.getCard().getType());
		console.log("Response at the client: " + responseDel.getCard().getType());
		console.log("Response at the client: " + responseDel.getMerchantRefNum());*/
				console.log("Response at the client: " + JSON.stringify(responseDel));
				//console.log("Response at the error: " + responseDel.status);
			});
}
//getVerificationByMerchantRef();
//getVerificationById();
//monitor();
//complexAuth();
getsettlementUsingMerchantRefNumber('abcrwew');
//verifyCardAndBillingDetails();
//verifyCardUsingPaymentToken();
//authWithCard();
//refundASettlement("3e148eb3-a0ed-403e-ba42-24982a953858");
//cancelASettlement("3e148eb3-a0ed-403e-ba42-24982a953858");
//aproveAuthUsingAuthId("22132aa2-ab55-408a-b971-86f130e91f0a");
//cancelAuthUsingAuthId("99b2d2b9-56f3-4fa7-a28a-21c6de7336fc");
//settleAnAuthorization("22132aa2-ab55-408a-b971-86f130e91f0a");
//authWithPaymentToken();
//authWithPaymentTokenAndSettlement();
//getAuthUsingAuthId("22132aa2-ab55-408a-b971-86f130e91f0a");
//reverseAuth();
//getAuthUsingMerchantRefNumber("rzau9v8zofj38fr");
//getReverseAuthUsingId("a0f429e9-2712-419e-929c-366798587d4b");
//cancelAuthUsingAuthId("6e016e51-1cb1-4e41-a63b-16a519d67510");
//settleAnAuthorization("6e016e51-1cb1-4e41-a63b-16a519d67510");