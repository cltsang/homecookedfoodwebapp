Users = new Mongo.Collection("_users");

var userSchema = new SimpleSchema({
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

Users.attachSchema(userSchema);

var getUser = function(userId) {
    var user = Users.findOne({id: userId});
    return user;
};
