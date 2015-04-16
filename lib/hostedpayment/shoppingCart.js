var shoppingCartOrder = function(resp) {
	if(resp){
	if (resp.amount) {
		this.amount = resp.amount;
	}
	if (resp.description) {
		this.description = resp.description;
	}
	if (resp.sku) {
		this.sku = resp.sku;
	}
	if (resp.quantity) {
		this.quantity = resp.quantity;
	}
	}
};

shoppingCartOrder.prototype.setQuantity = function(quantity) {
	this.quantity = quantity;
};

shoppingCartOrder.prototype.getQuantity = function() {
	return this.quantity;
};

shoppingCartOrder.prototype.setAmount = function(amount) {
	this.amount = amount;
};

shoppingCartOrder.prototype.getAmount = function() {
	return this.amount;
};

shoppingCartOrder.prototype.setDescription = function(description) {
	this.description = description;
};

shoppingCartOrder.prototype.getDescription = function() {
	return this.description;
};

shoppingCartOrder.prototype.setSku = function(sku) {
	this.sku = sku;
};

shoppingCartOrder.prototype.getSku = function() {
	return this.sku;
};

module.exports = shoppingCartOrder;