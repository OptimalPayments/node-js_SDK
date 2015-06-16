/**
 * author: Atul.Patil.
 */

var optPayRequest = require("./OptPayRequest");
var HEALTH_BEAT_URL = "hosted/monitor";
var constants = require("./Constants.js");
var URI = 'hosted/v1/';
var AUTH_PATH = 'orders';
var SETTLEMENT = '/settlement';
var REFUND = '/refund';
var RESEND_CALLBACK = '/resend_callback';
/**
 * @author Atul.Patil constructor for intialising hostedApiHandler
 */

var HostedApiServiceHandler = function(optimalApiClient) {
	this._optimalApiClient = optimalApiClient;
};

var prepareURI = function(path, optClient) {
	return URI + AUTH_PATH + path;
};
/**
 * @author Atul.Patil method for monitor Hosted api
 */
HostedApiServiceHandler.prototype.monitor = function(responseCallBack) {
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
 * @author Atul.Patil method for creating an Order
 */
HostedApiServiceHandler.prototype.process = function(order, responseCallBack) {
	try {
		var clientObj = this._optimalApiClient;
		if (typeof (responseCallBack) === "function") {
			var optPayRequestObj = new optPayRequest(prepareURI("", clientObj),
					constants.POST);
			clientObj.processRequest(optPayRequestObj, order, function(error,
					response) {
				response = response ? new clientObj.Order(response) : response;
				responseCallBack(error, response);
			});
		} else {
			console.error("Please provide the responseCallBack function in "
					+ "HostedApiServiceHandler : process");
		}
	} catch (err) {
		responseCallBack(err, null);
	}
};
/**
 * @author Atul.Patil method for get an Order
 */
HostedApiServiceHandler.prototype.getOrder = function(order, responseCallBack) {
	try {
		var clientObj = this._optimalApiClient;
		if (typeof (responseCallBack) === "function") {
			if (order && order.id) {
				var id = order.id;
				delete order.id;
				var requestObj = new optPayRequest(prepareURI("/" + id, clientObj),
						constants.GET);
				clientObj.processRequest(requestObj, null, function(error, response) {
					response = response ? new clientObj.Order(response) : response;
					responseCallBack(error, response);
				});
			} else {
				throw clientObj.error(400,
						"InvalidRequestException : order id is missing "
								+ "in HostedApiServiceHandler : getOrder");
			}
		} else {
			console.error("Please provide the responseCallBack function "
					+ "in HostedApiServiceHandler : getOrder");
		}
	} catch (err) {
		responseCallBack(err, null);
	}
};
/**
 * @author Atul.Patil method for Cancel an Order
 */
HostedApiServiceHandler.prototype.cancelOrder = function(order,
		responseCallBack) {
	try {
		var clientObj = this._optimalApiClient;
		if (typeof (responseCallBack) === "function") {
			if (order && order.id) {
				var requestObj = new optPayRequest(
						prepareURI("/" + order.id, clientObj), constants.DELETE);
				clientObj.processRequest(requestObj, null, function(error, response) {
					response = response ? new clientObj.Order(response) : response;
					responseCallBack(error, response);
				});
			} else {
				throw clientObj.error(400,
						"InvalidRequestException : order id is missing "
								+ "in HostedApiServiceHandler : cancelOrder");
			}
		} else {
			console.error("Please provide the responseCallBack function "
					+ "in HostedApiServiceHandler : cancelOrder");
		}
	} catch (err) {
		responseCallBack(err, null);
	}
};
/**
 * @author Atul.Patil method for cancel a held Order
 */
HostedApiServiceHandler.prototype.cancelHeldOrder = function(order,
		responseCallBack) {
	try {
		var clientObj = this._optimalApiClient;
		if (typeof (responseCallBack) === "function") {
			if (order && order.id) {
				var id = order.id;
				delete order.id;
				var tx = new clientObj.Transaction();
				tx.setStatus("cancelled");
				order.setTransaction(tx);
				var requestObj = new optPayRequest(prepareURI("/" + id, clientObj),
						constants.PUT);
				clientObj.processRequest(requestObj, order, function(error, response) {
					response = response ? new clientObj.Order(response) : response;
					responseCallBack(error, response);
				});
			} else {
				throw clientObj.error(400,
						"InvalidRequestException : order id is missing "
								+ "in HostedApiServiceHandler : cancelHeldOrder");
			}
		} else {
			console.error("Please provide the responseCallBack function "
					+ "in HostedApiServiceHandler : cancelHeldOrder");
		}
	} catch (err) {
		responseCallBack(err, null);
	}
};
/**
 * @author Atul.Patil method for approve a held Order
 */
HostedApiServiceHandler.prototype.approveHeldOrder = function(order,
		responseCallBack) {
	try {
		var clientObj = this._optimalApiClient;
		if (typeof (responseCallBack) === "function") {
			if (order && order.id) {
				var id = order.id;
				delete order.id;
				var tx = new clientObj.Transaction();
				tx.setStatus("success");
				order.setTransaction(tx);
				var requestObj = new optPayRequest(prepareURI("/" + id, clientObj),
						constants.PUT);
				clientObj.processRequest(requestObj, order, function(error, response) {
					response = response ? new clientObj.Order(response) : response;
					responseCallBack(error, response);
				});
			} else {
				throw clientObj.error(400,
						"InvalidRequestException : order id is missing "
								+ "in HostedApiServiceHandler : approveHeldOrder");
			}
		} else {
			console.error("Please provide the responseCallBack function "
					+ "in HostedApiServiceHandler : approveHeldOrder");
		}
	} catch (err) {
		responseCallBack(err, null);
	}
};
/**
 * @author Atul.Patil method for resend an Order
 */
HostedApiServiceHandler.prototype.resendCallback = function(order,
		responseCallBack) {
	try {
		var clientObj = this._optimalApiClient;
		if (typeof (responseCallBack) === "function") {
			if (order && order.id) {
				var id = order.id;
				delete order.id;
				var requestObj = new optPayRequest(prepareURI("/" + id + "/"
						+ RESEND_CALLBACK, clientObj), constants.GET);
				clientObj.processRequest(requestObj, null, function(error, response) {
					response = response ? new clientObj.Order(response) : response;
					responseCallBack(error, response);
				});
			} else {
				throw clientObj.error(400,
						"InvalidRequestException : order id is missing "
								+ "in HostedApiServiceHandler : resendCallback");
			}
		} else {
			console.error("Please provide the responseCallBack function "
					+ "in HostedApiServiceHandler : resendCallback");
		}
	} catch (err) {
		responseCallBack(err, null);
	}
};
/**
 * @author Atul.Patil method for refund an Order
 */
HostedApiServiceHandler.prototype.refund = function(refund, responseCallBack) {
	try {
		var clientObj = this._optimalApiClient;
		if (typeof (responseCallBack) === "function") {
			if (refund && refund.order && refund.order.id) {
				var id = refund.order.id;
				delete refund.order;
				var requestObj = new optPayRequest(prepareURI("/" + id + REFUND,
						clientObj), constants.POST);
				clientObj.processRequest(requestObj, refund, function(error, response) {
					response = response ? new clientObj.Refund(response) : response;
					responseCallBack(error, response);
				});
			} else {
				throw clientObj.error(400,
						"InvalidRequestException : order id is missing "
								+ "in HostedApiServiceHandler : refund");
			}
		} else {
			console.error("Please provide the responseCallBack function "
					+ "in HostedApiServiceHandler : refund");
		}
	} catch (err) {
		responseCallBack(err, null);
	}
};
/**
 * @author Atul.Patil method for settle an Order
 */
HostedApiServiceHandler.prototype.settlement = function(settle,
		responseCallBack) {
	try {
		var clientObj = this._optimalApiClient;
		if (typeof (responseCallBack) === "function") {
			if (settle && settle.order && settle.order.id) {
				var id = settle.order.id;
				delete settle.order;
				var requestObj = new optPayRequest(prepareURI("/" + id + SETTLEMENT,
						clientObj), constants.POST);
				clientObj.processRequest(requestObj, settle, function(error, response) {
					response = response ? new clientObj.Settlements(response) : response;
					responseCallBack(error, response);
				});
			} else {
				throw clientObj.error(400,
						"InvalidRequestException : order id is missing "
								+ "in HostedApiServiceHandler : settlement");
			}
		} else {
			console.error("Please provide the responseCallBack function "
					+ "in HostedApiServiceHandler : settlement");
		}
	} catch (err) {
		responseCallBack(err, null);
	}
};
/**
 * @author Atul.Patil method for process a rebill
 */
HostedApiServiceHandler.prototype.processRebill = function(order,
		responseCallBack) {
	try {
		var clientObj = this._optimalApiClient;
		if (typeof (responseCallBack) === "function") {
			// This condition for processing Rebill using OrderId OtherWise it will
			// process using profile
			var id;
			if (!order.id) {
				if (!order.profile) {
					throw clientObj.error(400,
							"InvalidRequestException : You must specify a profile or id "
									+ "in HostedApiServiceHandler : processRebill");
				} else if (!order.profile.id || !order.profile.paymentToken) {
					throw clientObj
							.error(
									400,
									"InvalidRequestException : You must specify both a profile id "
											+ "and profile paymentToken in HostedApiServiceHandler : processRebill");
				} else {
					id = order.id ? "/" + order.id : "";
				}
			} else {
				id = order.id ? "/" + order.id : "";
			}
			delete order.id;
			var requestObj = new optPayRequest(prepareURI(id, clientObj),
					constants.POST);
			clientObj.processRequest(requestObj, order, function(error, response) {
				response = response ? new clientObj.Order(response) : response;
				responseCallBack(error, response);
			});
		} else {
			console.error("Please provide the responseCallBack function "
					+ "in HostedApiServiceHandler : processRebill");
		}
	} catch (err) {
		responseCallBack(err, null);
	}
};
/**
 * @author Atul.Patil method for update a rebill
 */
HostedApiServiceHandler.prototype.updateRebill = function(order,
		responseCallBack) {
	try {
		var clientObj = this._optimalApiClient;
		if (typeof (responseCallBack) === "function") {
			if (order && order.id) {
				var id = order.id;
				delete order.id;
				var requestObj = new optPayRequest(prepareURI("/" + id, clientObj),
						constants.PUT);
				clientObj.processRequest(requestObj, order, function(error, response) {
					response = response ? new clientObj.Order(response) : response;
					responseCallBack(error, response);
				});
			} else {
				throw clientObj.error(400,
						"InvalidRequestException : order id is missing "
								+ "in HostedApiServiceHandler : updateRebill");
			}
		} else {
			console.error("Please provide the responseCallBack function "
					+ "in HostedApiServiceHandler : updateRebill");
		}
	} catch (err) {
		responseCallBack(err, null);
	}
};
/**
 * @author Atul.Patil method for get an Order report
 */
HostedApiServiceHandler.prototype.getOrderReport = function(num, start,
		responseCallBack) {
	try {
		var clientObj = this._optimalApiClient;
		if (typeof (responseCallBack) === "function") {
			var toInclude = "";
			if (num) {
				toInclude = "num=" + num+"&";
			} else {
				toInclude = "num=0&";
			}
			if (start) {
				toInclude += "start=" + start;
			} else {
				toInclude = "start=1";
			}
			var requestObj = new optPayRequest(
					prepareURI("?" + toInclude, clientObj), constants.GET);
			clientObj.processRequest(requestObj, null, function(error, response) {
				response = response ? new clientObj.Order(response) : response;
				responseCallBack(error, response);
			});
		} else {
			console.error("Please provide the responseCallBack function "
					+ "in HostedApiServiceHandler : getOrderReport");
		}
	} catch (err) {
		responseCallBack(err, null);
	}
};
/**
 * @author Atul.Patil method for Cancel a settlement.
 */
HostedApiServiceHandler.prototype.cancelSettlement = function(settle,
		responseCallBack) {
	try {
		var clientObj = this._optimalApiClient;
		if (typeof (responseCallBack) === "function") {
			if (settle && settle.id) {
				var requestObj = new optPayRequest(prepareURI("/" + settle.id,
						clientObj), constants.DELETE);
				clientObj.processRequest(requestObj, null, function(error, response) {
					response = response ? new clientObj.Settlements(response) : response;
					responseCallBack(error, response);
				});
			} else {
				throw clientObj.error(400,
						"InvalidRequestException : Order id is missing "
								+ "in HostedApiServiceHandler : cancelSettlement");
			}
		} else {
			console.error("Please provide the responseCallBack function "
					+ "in HostedApiServiceHandler : cancelSettlement");
		}
	} catch (err) {
		responseCallBack(err, null);
	}
};

module.exports = HostedApiServiceHandler;