var navigation = function(resp) {
	if (resp) {
		if (resp.prev) {
			this.prev = resp.prev;
		}
		if (resp.next) {
			this.next = resp.next;
		}
	}
};

navigation.prototype.setPrev = function(prev) {
	this.prev = prev;
};

navigation.prototype.getPrev = function() {
	return this.prev;
};

navigation.prototype.setNext = function(next) {
	this.next = next;
};

navigation.prototype.getNext = function() {
	return this.next;
};

module.exports = navigation;