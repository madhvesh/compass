Products = new Mongo.Collection("products");

Products.bySku = function(sku){
    return Products.findOne({sku : sku});
};

Products.featured = function(){
    var featuredSkus = ["coffee-beans","parsley","beer"];
    return Products.find({sku : {$in : featuredSkus}},
        {fields : {inventory : false, cost : false}});
};
