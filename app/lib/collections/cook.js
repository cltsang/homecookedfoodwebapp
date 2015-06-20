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
});

Cooks.attachSchema(cookSchema);

Meteor.methods({
    getCook : function(cookId) {
        var cook = Cooks.findOne({id: cookId});
        return cook;
    }
});
