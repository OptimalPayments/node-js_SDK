/**
 * author: Anup W.
 */
var optimalApiClient = require("../lib/OptimalApiClient");
var config = require("../sample_application/config");

var merchantRefNumber = Math.random().toString(36).slice(2);
var merchantCustNumber = Math.random().toString(36).slice(2);

var optimalApiClient = new optimalApiClient(config.optimalApiKeyId, config.optimalApiKeySecret,
		config.optimalEnvironment, config.optimalAccountNumber);

// cancel a settlement
function cancelSettlement(id) {
	var order = new optimalApiClient.Order();
	var settle = new optimalApiClient.Settlements();
	order.setId(id);
	settle.setAmount("100");
	settle.setMerchantRefNum(merchantRefNumber);
	settle.setOrder(order);
	optimalApiClient.HostedApiServiceHandler(optimalApiClient).cancelSettlement(
			settle, function(error, response) {
				console.log("error at the client: " + error);
				console.log("Response at the client: " + response);
				if (response.error !== undefined) {
					console.log("Error: " + response.getError().getMessage());
				} else {
					console.log("Status: " + response.getStatus());
					console.log("Status: " + response.getLink()[1].getRel());
					console.log("Status: " + response.getLink()[0].getUri());
				}
			});
}
// settle an order
function settleAnOrder(id) {
	var order = new optimalApiClient.Order();
	var settle = new optimalApiClient.Settlements();
	order.setId(id);
	settle.setAmount("100");
	settle.setMerchantRefNum(merchantRefNumber);
	settle.setOrder(order);
	optimalApiClient.HostedApiServiceHandler(optimalApiClient).settlement(
			settle, function(error, response) { //
				console.log("error at the client: " + error);
				console.log("Response at the client: " + response);
				if (response.error !== undefined) {
					console.log("Error: " + response.getError().getMessage());
				} else {
					console.log("Status: " + response.getStatus());
					console.log("Status: " + response.getLink()[1].getRel());
					console.log("Status: " + response.getLink()[0].getUri());
				}
			});
}
// update an held order
function updateHeldOrder(id) {
	var order = new optimalApiClient.Order();
	order.setId(id);
	optimalApiClient.HostedApiServiceHandler(optimalApiClient).approveHeldOrder(order,
			function(error, response) { //
				console.log("error at the client: " + error);
				console.log("Response at the client: " + response);
				if (response.error !== undefined) {
					console.log("Error: " + response.getError().getMessage());
				} else {
					console.log("Status: " + response.getStatus());
					console.log("Status: " + response.getLink()[1].getRel());
					console.log("Status: " + response.getLink()[0].getUri());
				}
			});
}
// get order details
function getOrderById(id) {
	var order = new optimalApiClient.Order();
	order.setId(id);
	optimalApiClient.HostedApiServiceHandler(optimalApiClient).getOrder(
			order,
			function(error, response) { //
				console.log("Response at the client: " + response);
				if (response.error !== undefined) {
					console.log("Error: " + response.getError().getMessage());
				} else {
					console.log("Status: " + response.getStatus());
					console.log("Status: " + response.getLink()[1].getRel());
					console.log("Status: " + response.getLink()[0].getUri());
					//console.log("response : "	+ response.getTransaction().getCard().getBrand());
				}
			});
}
//update a rebill with dueDate
function updateAReBillWithDueDate(id) {
	var order = new optimalApiClient.Order();
	order.setId(id);
	order.setCustomerIp("14.140.42.80");
	order.setMerchantRefNum(merchantRefNumber);
	order.setTotalAmount("100");
	order.setCurrencyCode("USD");
	order.setDueDate("2020-10-22");
	optimalApiClient.HostedApiServiceHandler(optimalApiClient).updateRebill(
			order, function(error, response) { //
				console.log("Response at the client: " + response);
				if (response.error !== undefined) {
					console.log("Error: " + response.getError().getMessage());
				} else {
					console.log("Status: " + response.getError().getMessage());
					// console.log("Status: " + response.getLink()[1].getRel());
					// console.log("Status: " + response.getLink()[0].getUri());
				}
			});
}

//process a rebill with dueDate
function processAReBillWithDueDate(id) {
	var order = new optimalApiClient.Order();
	order.setId(id);
	order.setCustomerIp("14.140.42.80");
	order.setMerchantRefNum(merchantRefNumber);
	order.setTotalAmount("100");
	order.setCurrencyCode("USD");
	order.setDueDate("2020-10-15");
	optimalApiClient.HostedApiServiceHandler(optimalApiClient).processRebill(
			order, function(error, response) { //
				console.log("Response at the client: " + response);
				if (response.error !== undefined) {
					console.log("Error: " + response.getError().getMessage());
				} else {
					console.log("Status: " + response.getError().getMessage());
					// console.log("Status: " + response.getLink()[1].getRel());
					// console.log("Status: " + response.getLink()[0].getUri());
				}
			});
}
// process a rebill
function processAReBill(id) {
/*	var order = new optimalApiClient.Order();
	order.setId(id);
	order.setCustomerIp("14.140.42.80");
	order.setMerchantRefNum(merchantRefNumber);
	order.setTotalAmount("100");
	order.setCurrencyCode("USD");*/
	var order =  new optimalApiClient.Order();
	var profile = new optimalApiClient.Profiles();
	var extendedOptions = new optimalApiClient.ExtendedOptions();
	var merchantRefNumber = Math.random().toString(36).slice(2);
	order.setMerchantRefNum(merchantRefNumber);
	profile.setId("4f439497-cc95-4ddb-9c66-9a7b6758bfac");      //For Rebill using Profile id
	profile.setPaymentToken("PBwHbfZU2VIseI2");
	order.setDueDate("2020-10-15");
	order.setProfile(profile);
	//order.setId(id)
	order.setTotalAmount("1500");
	order.setCurrencyCode("USD");
	extendedOptions.setKey("recurringIndicator");
	extendedOptions.setValue(true);
	//order.setExtendedOptions([extendedOptions]);
	optimalApiClient.HostedApiServiceHandler(optimalApiClient).processRebill(
			order, function(error, response) { //
				console.log("Response at the client: " + response);
				console.log("Response at the error: " + JSON.stringify(error));
				if (response.error !== undefined) {
					console.log("Error: " + response.getError().getMessage());
				} else {
					console.log("Status: " + response.getError().getMessage());
					// console.log("Status: " + response.getLink()[1].getRel());
					// console.log("Status: " + response.getLink()[0].getUri());
				}
			});
}
// Create a Profile with an Order
function createProfileWithAnOrder(id) {
	var order = new optimalApiClient.Order();
	var profile = new optimalApiClient.Profiles();
	// profile.setId("4f439497-cc95-4ddb-9c66-9a7b6758bfac");
	profile.setFirstName("John");
	profile.setLastName("Smith");
	profile.setMerchantCustomerId("John@testdomain.com");
	// order.setCustomerIp("0.0.0.0");
	order.setMerchantRefNum(merchantRefNumber);
	order.setTotalAmount("1000");
	order.setCurrencyCode("USD");
	order.setCustomerNotificationEmail("JohnDenis@testdomain.com");
	order.setProfile(profile);
	optimalApiClient.HostedApiServiceHandler(optimalApiClient).process(order,
			function(error, response) { //
				console.log("Response at the client: " + response);
				if (response.error !== undefined) {
					console.log("Error: " + response.getError().getMessage());
				} else {
					console.log("Status: " + response.getStatus());
					// console.log("Status: " + response.getLink()[1].getRel());
					// console.log("Status: " + response.getLink()[0].getUri());
				}
			});
}
// Process an Order with a Payment Token
function processAnOrderWithPaymentToken(id) {
	var order = new optimalApiClient.Order();
	var profile = new optimalApiClient.Profiles();
	profile.setId("1ef8881f-71fe-4c94-b48d-869f913c8c8d");
	profile.setPaymentToken("Pz9gV6gAhI5rI8e");
	order.setCustomerIp("14.140.42.67");
	order.setTotalAmount("100");
	order.setCurrencyCode("USD");
	order.setMerchantRefNum(merchantRefNumber);
	order.setCustomerNotificationEmail("John@testdomain.com");
	order.setProfile(profile);
	optimalApiClient.HostedApiServiceHandler(optimalApiClient).process(order,
			function(error, response) { //
				console.log("Response at the client in process: " + JSON.stringify(response));
				if (error) {
					console.log("Error: " + error.getCode());
				} else if(response.getError()){
					console.log("Status: " + response.getError().getMessage());
				}else{
					console.log("Status: " + response.getLink()[0].getRel());
				}
			});
}
// Process an Order with a Profile ID
function ProcessAnOrderWithProfileId(id) {
	var order = new optimalApiClient.Order();
	var profile = new optimalApiClient.Profiles();
	profile.setId(id);
	order.setCustomerIp("14.140.42.67");
	order.setMerchantRefNum(merchantRefNumber);
	order.setTotalAmount("1000");
	order.setCurrencyCode("USD");
	order.setCustomerNotificationEmail("John@testdomain.com");
	order.setProfile(profile);
	optimalApiClient.HostedApiServiceHandler(optimalApiClient).process(order,
			function(error, response) { //
				console.log("Response at the client: " + response);
				if (response.error !== undefined) {
					console.log("Error: " + response.getError().getMessage());
				} else {
					console.log("Status: " + response.getStatus());
					console.log("Status: " + response.getLink()[1].getRel());
					console.log("Status: " + response.getLink()[0].getUri());
				}
			});
}
// cancel an Order
function cancelAnOrder(id) {
	var order = new optimalApiClient.Order();
	order.setId(id);
	optimalApiClient.HostedApiServiceHandler(optimalApiClient).cancelOrder(order,
			function(error, response) { //
				console.log("Response at the client: " + response);
				if (response.error !== undefined) {
					console.log("Error: " + response.getError().getMessage());
				} else {
					console.log("Status: " + response.getStatus());
					console.log("Status: " + response.getLink()[1].getRel());
					console.log("Status: " + response.getLink()[0].getUri());
				}
			});
}
// Process an Order with a Hosted Page
function processAnOrderWithHostedPage() {
	var order = new optimalApiClient.Order();
	order.setMerchantRefNum(merchantRefNumber);
	order.setTotalAmount("1000");
	order.setCurrencyCode("USD");
	optimalApiClient.HostedApiServiceHandler(optimalApiClient).process(order,
			function(error, response) { //
				console.log("Response at the client: " + response);
				if (response.error !== undefined) {
					console.log("Error: " + response.getError().getMessage());
				} else {
					console.log("Status: " + response.getStatus());
					console.log("Status: " + response.getLink()[1].getRel());
					console.log("Status: " + response.getLink()[0].getUri());
				}
			});
}
function getOrderReport(){
	optimalApiClient.HostedApiServiceHandler(optimalApiClient).getOrderReport(5,1,
			function(error, response) {
				console.log("Response at the client: " + JSON.stringify(response));
				console.log("Response at the error: " + response);
			});
}
function monitor(){
	optimalApiClient.HostedApiServiceHandler(optimalApiClient).monitor(
			function(error, responseDel) {
				console.log("Response at the client: " + JSON.stringify(responseDel));
				console.log("Response at the error: " + responseDel.status);
			});
}
getOrderReport();
// started create an Order
//processAReBill("27CIQ2LPJ9DCHWI1LB");
//updateAReBillWithDueDate("27CIQ2IGWW6OZVC1LJ");
//processAReBillWithDueDate("27CIQ2IGW3KQ9GN1L0");
//getOrderById("27CIQ2KCLLCZTX61LI");
//cancelAnOrder("27CIQ2KCLLCZTX61LI");
//updateHeldOrder("27CIQ2KCU2D050B1LK");
//processAnOrderWithHostedPage();
//processAnOrderWithPaymentToken();