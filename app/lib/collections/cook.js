Cooks = new Mongo.Collection("cooks");

var cookSchema = new SimpleSchema({
    id: {
        type: String,
        unique: true,
    },
    name: {
        type: String,
    },
    profilePicPath: {
        type: String,
    },
    addressId: {
        type: String,
        optional: true,
    },
});

Cooks.attachSchema(cookSchema);

Meteor.methods({
    getCook : function(cookId) {
        var cook = Cooks.findOne({id: cookId});
        return cook;
    }
});
