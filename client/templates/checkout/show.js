Template.checkoutShow.helpers({
    cart : function(){
        currentCart = Carts.findOne({userKey : userKey});
        return currentCart;
    }
});

Template.checkoutShow.onRendered(function(){

    //wire up KO and some test data
    checkoutModel = new CheckoutViewModel({
        name : "Maddy Test",
        email : "maddy@test.com",
        address : {
            street : "6 Test Street",
            city : "San Francisco",
            state : "CA",
            zip : "94404",
            country : "US"
        }
    });

    var panel = document.getElementById("checkout-panel");
    ko.cleanNode(panel);
    ko.applyBindings(checkoutModel,panel);

});