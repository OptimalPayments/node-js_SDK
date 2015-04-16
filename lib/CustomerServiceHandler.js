var optPayRequest = require("./OptPayRequest");
var constants = require("./Constants.js");
var HEALTH_BEAT_URL = 'customervault/monitor';
var URI = 'customer/v1';
var PROFILE_PATH = '/profiles/';
var ADDRESS_PATH = '/addresses/';
var CARD_PATH = '/cards/';
/**
 * @author Atul.Patil method for initialization of constructor
 *         CustomerServiceHandler.
 */
var CustomerServiceHandler = function(optimalApiClient) {
	this._optimalApiClient = optimalApiClient;
};

var prepareURI = function(path, optClient) {
	return URI + path;
};
/**
 * @author Atul.Patil method for monitor customer api
 */
CustomerServiceHandler.prototype.monitor = function(responseCallBack) {
	try {
		var clientObj = this._optimalApiClient;
		var requestObj = new optPayRequest(HEALTH_BEAT_URL, constants.GET);
		clientObj.processRequest(requestObj, null, responseCallBack);
	} catch (err) {
		if (typeof (responseCallBack) === "function") {
			responseCallBack(err, null);
		}
	}
};
/**
 * @author Atul.Patil method for Create Profile.
 */
CustomerServiceHandler.prototype.createCustmerProfile = function(profile,
		responseCallBack) {
	try {
		var clientObj = this._optimalApiClient;
		if (typeof (responseCallBack) === "function") {
			var optPayReqObj = new optPayRequest(prepareURI(PROFILE_PATH, clientObj),
					constants.POST);
			clientObj.processRequest(optPayReqObj, profile,
					function(error, response) {
						response = response ? new clientObj.Profiles(response) : response;
						responseCallBack(error, response);
					});
		} else {
			console.error("Please provide the responseCallBack function "
					+ "in CustomerServiceHandler : createCustmerProfile");
		}
	} catch (err) {
		responseCallBack(err, null);
	}
};
/**
 * @author Atul.Patil method for get profile details.
 */
CustomerServiceHandler.prototype.getCustmerProfile = function(profile,
		responseCallBack) {
	try {
		var clientObj = this._optimalApiClient;
		if (typeof (responseCallBack) === "function") {
			if (profile && profile.id) {
				var optPayReqObj = new optPayRequest(prepareURI(PROFILE_PATH
						+ profile.id, clientObj), constants.GET);
				clientObj.processRequest(optPayReqObj, null, function(error, response) {
					response = response ? new clientObj.Profiles(response) : response;
					responseCallBack(error, response);
				});
			} else {
				throw clientObj.error(400,
						"InvalidRequestException : profile id is missing "
								+ "in CustomerServiceHandler : getCustmerProfile");
			}
		} else {
			console.error("Please provide the responseCallBack function"
					+ " in CustomerServiceHandler : getCustmerProfile");
		}
	} catch (err) {
		responseCallBack(err, null);
	}
};
/**
 * @author Atul.Patil method for delete profile.
 */
CustomerServiceHandler.prototype.deleteCustmerProfile = function(profile,
		responseCallBack) {
	try {
		var clientObj = this._optimalApiClient;
		if (typeof (responseCallBack) === "function") {
			if (profile && profile.id) {
				var requestObj = new optPayRequest(prepareURI(
						PROFILE_PATH + profile.id, clientObj), constants.DELETE);
				clientObj.processRequest(requestObj, null, function(error, response) {
					response = response ? new clientObj.Profiles(response) : response;
					responseCallBack(error, response);
				});
			} else {
				throw clientObj.error(400,
						"InvalidRequestException : profile id is missing"
								+ " in CustomerServiceHandler : deleteCustmerProfile");
			}
		} else {
			console.error("Please provide the responseCallBack function"
					+ " in CustomerServiceHandler : deleteCustmerProfile");
		}
	} catch (err) {
		responseCallBack(err, null);
	}
};
/**
 * @author Atul.Patil method for update a profile.
 */
CustomerServiceHandler.prototype.updateCustmerProfile = function(profile,
		responseCallBack) {
	try {
		var clientObj = this._optimalApiClient;
		if (typeof (responseCallBack) === "function") {
			if (profile && profile.id) {
				var requestObj = new optPayRequest(prepareURI(
						PROFILE_PATH + profile.id, clientObj), constants.PUT);
				clientObj
						.processRequest(requestObj, profile,
								function(error, response) {
									response = response ? new clientObj.Profiles(response)
											: response;
									responseCallBack(error, response);
								});
			} else {
				throw clientObj.error(400,
						"InvalidRequestException : profile id is missing "
								+ "in CustomerServiceHandler : updateCustmerProfile");
			}
		} else {
			console.error("Please provide the responseCallBack function"
					+ " in CustomerServiceHandler : updateCustmerProfile");
		}
	} catch (err) {
		responseCallBack(err, null);
	}
};
/**
 * @author Atul.Patil method for create an address.
 */
CustomerServiceHandler.prototype.createCustmerAddress = function(address,
		responseCallBack) {
	try {
		var clientObj = this._optimalApiClient;
		if (typeof (responseCallBack) === "function") {
			if (address && address.profile && address.profile.id) {
				var profile = address.profile;
				delete address.profile;
				var requestObj = new optPayRequest(prepareURI(PROFILE_PATH + profile.id
						+ ADDRESS_PATH, clientObj), constants.POST);
				clientObj.processRequest(requestObj, address,
						function(error, response) {
							response = response ? new clientObj.Address(response) : response;
							responseCallBack(error, response);
						});
			} else {
				throw clientObj.error(400,
						"InvalidRequestException : profile id is missing "
								+ "in CustomerServiceHandler : createCustmerAddress");
			}
		} else {
			console.error("Please provide the responseCallBack"
					+ " in function CustomerServiceHandler : createCustmerAddress");
		}
	} catch (err) {
		responseCallBack(err, null);
	}
};
/**
 * @author Atul.Patil method for get an address.
 */
CustomerServiceHandler.prototype.getCustmerAddress = function(address,
		responseCallBack) {
	try {
		var clientObj = this._optimalApiClient;
		if (typeof (responseCallBack) === "function") {
			if (address && address.profile && address.profile.id) {
				var profile = address.profile;
				delete address.profile;
				var requestObj = new optPayRequest(prepareURI(PROFILE_PATH + profile.id
						+ ADDRESS_PATH + address.id, clientObj), constants.GET);
				clientObj.processRequest(requestObj, null, function(error, response) {
					response = response ? new clientObj.Address(response) : response;
					responseCallBack(error, response);
				});
			} else {
				throw clientObj.error(400,
						"InvalidRequestException : profile id is missing "
								+ "in CustomerServiceHandler : getCustmerAddress");
			}
		} else {
			console.error("Please provide the responseCallBack function"
					+ " in CustomerServiceHandler : getCustmerAddress");
		}
	} catch (err) {
		responseCallBack(err, null);
	}
};
/**
 * @author Atul.Patil method for delete an address.
 */
CustomerServiceHandler.prototype.deleteCustmerAddress = function(address,
		responseCallBack) {
	try {
		var clientObj = this._optimalApiClient;
		if (typeof (responseCallBack) === "function") {
			if (address && address.profile && address.profile.id) {
				var profile = address.profile;
				if (address && address.id) {
					delete address.profile;
					var requestObj = new optPayRequest(prepareURI(PROFILE_PATH
							+ profile.id + ADDRESS_PATH + address.id, clientObj),
							constants.DELETE);
					clientObj.processRequest(requestObj, null, function(error, response) {
						response = response ? new clientObj.Address(response) : response;
						responseCallBack(error, response);
					});
				} else {
					throw clientObj.error(400,
							"InvalidRequestException : address id is missing "
									+ " in CustomerServiceHandler : deleteCustmerAddress");
				}
			} else {
				throw clientObj.error(400,
						"InvalidRequestException : profile id is missing"
								+ " in CustomerServiceHandler : deleteCustmerAddress");
			}
		} else {
			console.error("Please provide the responseCallBack function "
					+ "in CustomerServiceHandler : deleteCustmerAddress");
		}
	} catch (err) {
		responseCallBack(err, null);
	}
};
/**
 * @author Atul.Patil method for update an address.
 */
CustomerServiceHandler.prototype.updateCustmerAddress = function(address,
		responseCallBack) {
	try {
		var clientObj = this._optimalApiClient;
		if (typeof (responseCallBack) === "function") {
			if (address && address.profile && address.profile.id) {
				var profile = address.profile;
				if (address && address.id) {
					delete address.profile;
					var requestObj = new optPayRequest(prepareURI(PROFILE_PATH
							+ profile.id + ADDRESS_PATH + address.id, clientObj),
							constants.PUT);
					clientObj.processRequest(requestObj, address, function(error,
							response) {
						response = response ? new clientObj.Address(response) : response;
						responseCallBack(error, response);
					});
				} else {
					throw clientObj.error(400,
							"InvalidRequestException : address id is missing "
									+ "in CustomerServiceHandler : updateCustmerAddress");
				}
			} else {
				throw clientObj.error(400,
						"InvalidRequestException : profile id is missing "
								+ "in CustomerServiceHandler : updateCustmerAddress");
			}
		} else {
			console.error("Please provide the responseCallBack function"
					+ " in CustomerServiceHandler : updateCustmerAddress");
		}
	} catch (err) {
		responseCallBack(err, null);
	}
};
/**
 * @author Atul.Patil method for looking profile details using subcomponents
 *         address and card.
 */
CustomerServiceHandler.prototype.lookUpProfileBySubComponent = function(
		responseCallBack, profile, inAddress, inCards) {
	try {
		var clientObj = this._optimalApiClient;
		if (typeof (responseCallBack) === "function") {
			if (profile && profile.id) {
				var toInclude = "";
				if (inAddress) {
					toInclude = "addresses";
				}
				if (inCards) {
					if (toInclude.length > 0) {
						toInclude += ",";
						toInclude += "cards";
					} else {
						toInclude = "cards";
					}
				}
				var requestObj = new optPayRequest(prepareURI(PROFILE_PATH + profile.id
						+ "?" + "fields=" + toInclude, clientObj), constants.GET);
				clientObj.processRequest(requestObj, null, function(error, response) {
					response = response ? new clientObj.Profiles(response) : response;
					responseCallBack(error, response);
				});
			} else {
				throw clientObj.error(400,
						"InvalidRequestException : profile id is missing"
								+ " in CustomerServiceHandler : lookUpProfileBySubComponent");
			}
		} else {
			console.error("Please provide the responseCallBack function"
					+ " in CustomerServiceHandler : lookUpProfileBySubComponent");
		}
	} catch (err) {
		responseCallBack(err, null);
	}
};
/**
 * @author Atul.Patil method for create a card.
 */
CustomerServiceHandler.prototype.createCustmerCard = function(card,
		responseCallBack) {
	try {
		var clientObj = this._optimalApiClient;
		if (typeof (responseCallBack) === "function") {
			if (card && card.profile && card.profile.id) {
				var profile = card.profile;
				delete card.profile;
				var requestObj = new optPayRequest(prepareURI(PROFILE_PATH + profile.id
						+ CARD_PATH, clientObj), constants.POST);
				clientObj.processRequest(requestObj, card, function(error, response) {
					response = response ? new clientObj.Card(response) : response;
					responseCallBack(error, response);
				});
			} else {
				throw clientObj.error(400,
						"InvalidRequestException : profile id is missing "
								+ "in CustomerServiceHandler : createCustmerCard");
			}
		} else {
			console.error("Please provide the responseCallBack function "
					+ "in CustomerServiceHandler : createCustmerCard");
		}
	} catch (err) {
		responseCallBack(err, null);
	}
};
/**
 * @author Atul.Patil method for get a card details.
 */
CustomerServiceHandler.prototype.getCustmerCard = function(card,
		responseCallBack) {
	try {
		var clientObj = this._optimalApiClient;
		if (typeof (responseCallBack) === "function") {
			if (card && card.profile && card.profile.id) {
				var profile = card.profile;
				if (card && card.id) {
					delete card.profile;
					var requestObj = new optPayRequest(prepareURI(PROFILE_PATH
							+ profile.id + CARD_PATH + card.id, clientObj), constants.GET);
					clientObj.processRequest(requestObj, null, function(error, response) {
						response = response ? new clientObj.Card(response) : response;
						responseCallBack(error, response);
					});
				} else {
					throw clientObj.error(400,
							"InvalidRequestException : card id is missing "
									+ "in CustomerServiceHandler : getCustmerCard");
				}
			} else {
				throw clientObj.error(400,
						"InvalidRequestException : profile id is missing "
								+ "in CustomerServiceHandler : getCustmerCard");
			}
		} else {
			console.error("Please provide the responseCallBack function "
					+ "in CustomerServiceHandler : getCustmerCard");
		}
	} catch (err) {
		responseCallBack(err, null);
	}
};
/**
 * @author Atul.Patil method for delete a card.
 */
CustomerServiceHandler.prototype.deleteCustmerCard = function(card,
		responseCallBack) {
	try {
		var clientObj = this._optimalApiClient;
		if (typeof (responseCallBack) === "function") {
			if (card && card.profile && card.profile.id) {
				var profile = card.profile;
				if (card && card.id) {
					delete card.profile;
					var requestObj = new optPayRequest(prepareURI(PROFILE_PATH
							+ profile.id + CARD_PATH + card.id, clientObj), constants.DELETE);
					clientObj.processRequest(requestObj, null, function(error, response) {
						response = response ? new clientObj.Card(response) : response;
						responseCallBack(error, response);
					});
				} else {
					throw clientObj.error(400,
							"InvalidRequestException : card id is missing "
									+ "in CustomerServiceHandler : deleteCustmerCard");
				}
			} else {
				throw clientObj.error(400,
						"InvalidRequestException : profile id is missing"
								+ " in CustomerServiceHandler : deleteCustmerCard");
			}
		} else {
			console.error("Please provide the responseCallBack function "
					+ "in CustomerServiceHandler : deleteCustmerCard");
		}
	} catch (err) {
		responseCallBack(err, null);
	}
};
/**
 * @author Atul.Patil method for update a card.
 */
CustomerServiceHandler.prototype.updateCustmerCard = function(card,
		responseCallBack) {
	try {
		var clientObj = this._optimalApiClient;
		if (typeof (responseCallBack) === "function") {
			if (card && card.profile && card.profile.id) {
				var profile = card.profile;
				if (card && card.id) {
					delete card.profile;
					var requestObj = new optPayRequest(prepareURI(PROFILE_PATH
							+ profile.id + CARD_PATH + card.id, clientObj), constants.PUT);
					clientObj.processRequest(requestObj, card, function(error, response) {
						response = response ? new clientObj.Card(response) : response;
						responseCallBack(error, response);
					});
				} else {
					throw clientObj.error(400,
							"InvalidRequestException : card id is missing "
									+ "in CustomerServiceHandler : updateCustmerCard");
				}
			} else {
				throw clientObj.error(400,
						"InvalidRequestException : profile id is missing "
								+ "in CustomerServiceHandler : updateCustmerCard");
			}
		} else {
			console.error("Please provide the responseCallBack function "
					+ "in CustomerServiceHandler : updateCustmerCard");
		}
	} catch (err) {
		responseCallBack(err, null);
	}
};

module.exports = CustomerServiceHandler;