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
});

Users.attachSchema(userSchema);

var getUser = function(userId) {
    var user = Users.findOne({id: userId});
    return user;
};
