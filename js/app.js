(function () {

'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) { 
	var buyList = this;

  	buyList.items = ShoppingListCheckOffService.getItems();

  	buyList.removeItem = function (itemIndex, itemRecibido) {
  		ShoppingListCheckOffService.removeItem(itemIndex, itemRecibido);
  	};

}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) { 
	var boughtList = this;
		
	boughtList.items = ShoppingListCheckOffService.boughtItems();
	
}


function ShoppingListCheckOffService() {
	var service = this;

	var buyList = [
  		{name: "Breads", quantity: "2"},
  		{name: "Milk", quantity: "4"},
  		{name: "Butter", quantity: "1"},
 		{name: "Jam", quantity: "3"},
  		{name: "Cheese", quantity: "10"}
  		];

  	service.getItems = function () {
  		return buyList;
 	};
	
	service.removeItem = function (itemIndex, item) {
		boughtList.push(item);
		buyList.splice(itemIndex, 1);
 	};

  	var boughtList = [];

  	service.boughtItems = function () {
  		return boughtList;
 	};

}
})();
