/*
 * author: Anup W.
 */
var optimalApiClient = require("../lib/OptimalApiClient");
var config = require("../sample_application/config");

var merchantRefNumber = Math.random().toString(36).slice(2);
var merchantCustNumber = Math.random().toString(36).slice(2);

var optimalApiClient = new optimalApiClient(config.optimalApiKeyId, config.optimalApiKeySecret,
		config.optimalEnvironment, config.optimalAccountNumber);

// Create profile
function createProfile(i) {
	var profile = new optimalApiClient.Profiles();
	profile.setMerchantCustomerId(merchantRefNumber);
	profile.setLocale("en_US");
	profile.setFirstName("John");
	profile.setLastName("Smith");
	profile.setEmail("John@testdomain.com");
	profile.setPhone("713-444-5555");
	optimalApiClient.CustomerServiceHandler(optimalApiClient)
			.createCustmerProfile(profile, function(error, resCreateProfile) {
				console.log(resCreateProfile);
				console.log(resCreateProfile.getId());
				console.log(resCreateProfile.getPaymentToken());
				// console.log(resCreateProfile.getError().getMessage());
				// console.log(resCreateProfile.getError().getLinks()[0].getHref());
				console.log(JSON.stringify(resCreateProfile));
			});
}

//Create profile using Single use token
function createProfileUsingSingleUseToken(i) {
	var profile = new optimalApiClient.Profiles();
	var card = new optimalApiClient.Card();
	profile.setMerchantCustomerId(merchantRefNumber);
	profile.setLocale("en_US");
	profile.setFirstName("John");
	profile.setLastName("Smith");
	profile.setEmail("John@testdomain.com");
	profile.setPhone("713-444-5555");
	card.setSingleUseToken("abcdefg322d3223");
	optimalApiClient.CustomerServiceHandler(optimalApiClient)
			.createCustmerProfile(profile, function(error, resCreateProfile) {
				console.log(resCreateProfile);
				console.log(resCreateProfile.getId());
				console.log(resCreateProfile.getPaymentToken());
				// console.log(resCreateProfile.getError().getMessage());
				// console.log(resCreateProfile.getError().getLinks()[0].getHref());
				console.log(JSON.stringify(resCreateProfile));
			});
}

function updateCardWithProfileAndBillingAddress() {
	var profile1 = new optimalApiClient.Profiles();
	var address = new optimalApiClient.Address();
	profile1.setId("aa237581-2635-4b93-8b7e-01d60a59a5f4");
	var card = new optimalApiClient.Card();
	var cardExp = new optimalApiClient.CardExpiry();
	card.setId("3af29625-b633-41ad-b165-70c40efd7948");
	card.setHolderName("John Smith");
	card.setCardNum("6011234567890123");
	card.setDefaultCardIndicator("false");
	cardExp.setMonth("11");
	cardExp.setYear("2020");
	card.setCardExpiry(cardExp);
	card.setProfile(profile1);
	card.setBillingAddressId("7994e959-166f-4e6b-a3c9-21692148fc58");
	optimalApiClient.CustomerServiceHandler(optimalApiClient).updateCustmerCard(
			card, function(error, resCreateCard2) {
				console.log(resCreateCard2);
				console.log(resCreateCard2.getId());
				// console.log(resCreateProfile.getPaymentToken());
				// console.log(resCreateProfile.getError().getMessage());
				// console.log(resCreateProfile.getError().getLinks()[0].getHref());
				console.log(JSON.stringify(resCreateCard2));
			});
}
// create Card for a profile with billing address
function createCardWithProfileAndBillingAddress() {
	var profile1 = new optimalApiClient.Profiles();
	var address = new optimalApiClient.Address();
	profile1.setId("1ef8881f-71fe-4c94-b48d-869f913c8c8d");
	var card = new optimalApiClient.Card();
	var cardExp = new optimalApiClient.CardExpiry();
	card.setHolderName("JS");
	card.setCardNum("6011234567890123");
	card.setDefaultCardIndicator("true");
	cardExp.setMonth("09");
	cardExp.setYear("2019");
	card.setCardExpiry(cardExp);
	card.setProfile(profile1);
	card.setBillingAddressId("7994e959-166f-4e6b-a3c9-21692148fc58");
	optimalApiClient.CustomerServiceHandler(optimalApiClient).createCustmerCard(
			card, function(error, resCreateCard2) {
				console.log(resCreateCard2);
				console.log(resCreateCard2.getId());
				// console.log(resCreateProfile.getPaymentToken());
				// console.log(resCreateProfile.getError().getMessage());
				// console.log(resCreateProfile.getError().getLinks()[0].getHref());
				console.log(JSON.stringify(resCreateCard2));
			});
}

// create an address in a profile
function createAddressInAProfile() {
	var profile = new optimalApiClient.Profiles();
	var address = new optimalApiClient.Address();
	address.setStreet("Carlos Pellegrini 551");
	address.setStreet2("1009 Buenos Aires");
	address.setCity("Buenos Aires");
	address.setCountry("AR");
	address.setZip("C1009ABK");
	address.setRecipientName("Jane Doe");
	profile.setId("aa237581-2635-4b93-8b7e-01d60a59a5f4");
	profile.setMerchantCustomerId(merchantCustNumber);
	profile.setLocale("en_US");
	profile.setFirstName("JOHN");
	profile.setLastName("SMITH");
	profile.setEmail("John@testdomain.com");
	profile.setPhone("713-444-5555");
	address.setProfile(profile);
	optimalApiClient.CustomerServiceHandler(optimalApiClient)
			.createCustmerAddress(address, function(error, resCreateAdd) {
				console.log(resCreateAdd);
				if(resCreateAdd.getError()){
                    console.log(resCreateAdd.getError().getCode());
                }
				// console.log(resCreateProfile.getPaymentToken());
				// console.log(resCreateProfile.getError().getMessage());
				// console.log(resCreateProfile.getError().getLinks()[0].getHref());
				console.log(JSON.stringify(resCreateAdd));
			});
}

// code for creating the card object using profile and adding billingAddressId
function creatCardUsingProfileAndAddress() {
	var profile = new optimalApiClient.Profiles();
	var card = new optimalApiClient.Card();
	var cardExp = new optimalApiClient.CardExpiry();
	card.setHolderName("JS");
	card.setCardNum("5191330000004415");
	cardExp.setMonth("09");
	cardExp.setYear("2019");
	card.setCardExpiry(cardExp);
	card.setBillingAddressId("a8f42e13-daf1-4379-857d-f8ef44e9c255");
	profile.setId("aa237581-2635-4b93-8b7e-01d60a59a5f4");
	profile.setMerchantCustomerId(merchantCustNumber);
	profile.setLocale("en_US");
	profile.setFirstName("John");
	profile.setLastName("SMITH");
	profile.setEmail("John@testdomain.com");
	profile.setPhone("713-444-5555");
	card.setProfile(profile);
	optimalApiClient.CustomerServiceHandler(optimalApiClient).createCustmerCard(
			card, function(error, resCreateCard) {
				console.log(resCreateCard);
				console.log(resCreateCard.getId());
				// console.log(resCreateProfile.getPaymentToken());
				// console.log(resCreateProfile.getError().getMessage());
				// console.log(resCreateProfile.getError().getLinks()[0].getHref());
				console.log(JSON.stringify(resCreateCard));
			});
}
// look up profile by sub componant addresses and cards
function lookUpProfile(id) {
	var profile = new optimalApiClient.Profiles();
	profile.setId(id);
	optimalApiClient.CustomerServiceHandler(optimalApiClient)
			.lookUpProfileBySubComponent(
					function(error, responseDel) {
						console.log(JSON.stringify(responseDel));
						if (responseDel.error !== undefined) {
							console.log("Error: " + responseDel.error.message);
						} else {
							console.log("Status: " + responseDel.status);
						}
					}, profile, true, true);
}

// Get Card details
function getCardDetails() {
	var profile = new optimalApiClient.Profiles();
	profile.setId("aa237581-2635-4b93-8b7e-01d60a59a5f4");
	var card = new optimalApiClient.Card();
	card.setId("3af29625-b633-41ad-b165-70c40efd7948");
	card.setProfile(profile);
	optimalApiClient.CustomerServiceHandler(optimalApiClient).getCustmerCard(
			card,
			function(error, responseDel) {
				console.log("Response at the client: "
						+ responseDel.getCardExpiry().getMonth());
				if (responseDel.error !== undefined) {
					console.log("Error: " + responseDel.error.message);
				} else {
					console.log("Status: " + responseDel.status);
				}
			});
}
// delete a card
function deleteACard() {
	var profile = new optimalApiClient.Profiles();
	profile.setId("aa237581-2635-4b93-8b7e-01d60a59a5f4");
	var card = new optimalApiClient.Card();
	card.setId("fba8f3d6-6899-4bca-9502-8490cee8dde0");
	card.setProfile(profile);
	optimalApiClient.CustomerServiceHandler(optimalApiClient).deleteCustmerCard(
			card, function(error, responseDel) {
				console.log("Response at the client: " + responseDel);
				if (responseDel.error !== undefined) {
					console.log("Error: " + responseDel.error.message);
				} else {
					console.log("Status: " + responseDel.getStatus());
				}
			});
}
// delete address
function deleteAnAddress() {
	var profile = new optimalApiClient.Profiles();
	var address = new optimalApiClient.Address();
	profile.setId("aa237581-2635-4b93-8b7e-01d60a59a5f4");
	address.setId("3ddfa51c-fcce-48b9-96bc-c86fd3222239");
	address.setProfile(profile);
	optimalApiClient.CustomerServiceHandler(optimalApiClient)
			.deleteCustmerAddress(address, function(error, responseDel) {
				console.log("Response at the client: " + responseDel);
				if (responseDel.error !== undefined) {
					console.log("Error: " + responseDel.error.message);
				} else {
					console.log("Status: " + responseDel.getStatus());
				}
			});
}
// get address details
function getAddressDetails() {
	var profile = new optimalApiClient.Profiles();
	var address = new optimalApiClient.Address();
	profile.setId("aa237581-2635-4b93-8b7e-01d60a59a5f4");
	address.setId("40bda731-1151-4a62-acad-d66f42eaaf1e");
	address.setProfile(profile);
	optimalApiClient.CustomerServiceHandler(optimalApiClient).getCustmerAddress(
			address,
			function(error, responseDel) {
				console.log("Response at the client: " + responseDel);
				if (responseDel.error !== undefined) {
					console.log("Error: " + responseDel.error.message);
				} else {
					console.log("Status: " + responseDel.getStatus());
					console.log("Status: "
							+ responseDel.getDefaultShippingAddressIndicator());
					console.log("Status: " + responseDel.getZip());
				}
			});
}
// delete profile
function deleteProfile() {
	var profile = new optimalApiClient.Profiles();
	profile.setId("8400a3a6-cb09-4063-bc87-4a62c54ffbe4");
	optimalApiClient.CustomerServiceHandler(optimalApiClient)
			.deleteCustmerProfile(profile, function(error, responseDel) {
				console.log("Response at the client: " + responseDel);
				if (responseDel.error !== undefined) {
					console.log("Error: " + responseDel.getError().getMessage());
				} else {
					console.log("Status: " + responseDel.getStatus());
				}
			});
}
// update profile
function updateProfile() {
	var profile = new optimalApiClient.Profiles();
	profile.setId("70b5d362-376e-422c-a028-edde87f030ac");
	profile.setMerchantCustomerId(merchantCustNumber);
	profile.setLocale("en_US");
	profile.setFirstName("JOHN");
	profile.setLastName("SMITH");
	profile.setEmail("John@testdomein.com");
	optimalApiClient.CustomerServiceHandler(optimalApiClient)
			.updateCustmerProfile(
					profile,
					function(error, responseDel) {
						console.log("Response at the client: " + responseDel);
						if (responseDel.error !== undefined) {
							console.log("Error: "
									+ responseDel.getError().getFieldErrors()[0].getField());
						} else {
							console.log("Status: " + responseDel.status);
						}
					});
}
//get profile details
function getProfile() {
	var profile = new optimalApiClient.Profiles();
	profile.setId("4a2c0aa9-313f-41d9-9ae3-31ec0177e850");
	optimalApiClient.CustomerServiceHandler(optimalApiClient).getCustmerProfile(
			profile, function(error, responseDel){
				console.log("Response at the client: " + JSON.stringify(responseDel));
				if (responseDel.error !== undefined) {
					console.log("Error: " + responseDel.getError().getMessage());
				} else {
					console.log("Status: " + responseDel.getStatus());
				}
			});
}

function monitor(){
	optimalApiClient.CustomerServiceHandler(optimalApiClient).monitor(
			function(error, responseDel) {
				console.log("Response at the client: " + JSON.stringify(responseDel));
				console.log("Response at the error: " + responseDel.status);
			});
}

//getProfile();
//createProfile();
//createAddressInAProfile();
//creatCardUsingProfileAndAddress();
//for(var i =0;i<11;i++){
//getProfile();
//getCardDetails();
//getAddressDetails();
//updateCardWithProfileAndBillingAddress();
//}
lookUpProfile("4a2c0aa9-313f-41d9-9ae3-31ec0177e850");
//getAddressDetails();