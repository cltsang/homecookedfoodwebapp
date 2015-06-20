Orders = new Mongo.Collection("orders");

var orderSchema = new SimpleSchema({
    id: {
        type: String,
        unique: true,
    },
    mealId: {
        type: String,
    },
    userId: {
        type: String,
    },
    time: {
        type: Date,
    },
});

Orders.attachSchema(orderSchema);

var createOrder = function(event, template) {
    var mealId = template.find('#mealId').value;
    var chiefId = template.find('#chiefId').value;
    var userId = template.find('#userId').value;
    var timeCreated = Date();

    var maxId = Orders.findOne({}, {sort: {id: -1}}).id;
    var orderId = (parseInt(maxId) + 1).toString();
    Orders.insert({
        id: orderId,
        mealId: mealId,
        chiefId: chiefId,
        userId: userId,
        time: timeCreated,
    }, function(error, result) {});
};

// {userId: Session.get('userId')}
var getOrdersByUser = function(userId) {
    var orders = Orders.find({userId:userId});
    return orders;
};
