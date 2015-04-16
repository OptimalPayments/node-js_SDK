var addendumData = function(resp) {
	if (resp) {
		if (resp.key) {
			this.key = resp.key;
		}
		if (resp.value) {
			this.value = resp.value;
		}
	}
};

addendumData.prototype.setKey = function(key) {
	this.key = key;
};

addendumData.prototype.getKey = function() {
	return this.key;
};

addendumData.prototype.setValue = function(value) {
	this.value = value;
};

addendumData.prototype.getValue = function() {
	return this.value;
};

module.exports = addendumData;
