var authentication = function(resp) {
	if (resp) {
		if (resp.id) {
			this.id = resp.id;
		}
		if (resp.eci) {
			this.eci = resp.eci;
		}
		if (resp.cavv) {
			this.cavv = resp.cavv;
		}
		if (resp.xid) {
			this.xid = resp.xid;
		}
		if (resp.threeDEnrollment) {
			this.threeDEnrollment = resp.threeDEnrollment;
		}
		if (resp.threeDResult) {
			this.threeDResult = resp.threeDResult;
		}
		if (resp.signatureeci) {
			this.signatureeci = resp.signatureeci;
		}
	}
};

authentication.prototype.setSignatureeci = function(signatureeci) {
	this.signatureeci = signatureeci;
};

authentication.prototype.getSignatureeci = function() {
	return this.signatureeci;
};

authentication.prototype.setThreeDResult = function(threeDResult) {
	this.threeDResult = threeDResult;
};

authentication.prototype.getThreeDResult = function() {
	return this.threeDResult;
};

authentication.prototype.setThreeDEnrollment = function(threeDEnrollment) {
	this.threeDEnrollment = threeDEnrollment;
};

authentication.prototype.getThreeDEnrollment = function() {
	return this.threeDEnrollment;
};

authentication.prototype.setXid = function(xid) {
	this.xid = xid;
};

authentication.prototype.getXid = function() {
	return this.xid;
};

authentication.prototype.setCavv = function(cavv) {
	this.cavv = cavv;
};

authentication.prototype.getCavv = function() {
	return this.cavv;
};

authentication.prototype.setEci = function(eci) {
	this.eci = eci;
};

authentication.prototype.getEci = function() {
	return this.eci;
};

authentication.prototype.setId = function(id) {
	this.id = id;
};

authentication.prototype.getId = function() {
	return this.id;
};

module.exports = authentication;
