/**
 * author: Anup W.
 */
var OptPayRequest = function(apiUrl, method) {
	this._apiUrl = apiUrl;
	this._method = method;
};

OptPayRequest.prototype.method = function() {
	return this._method;
};

OptPayRequest.prototype.buildUrl = function(_apiEndPoint) {
	return _apiEndPoint + "/" + this._apiUrl;
};

module.exports = OptPayRequest;