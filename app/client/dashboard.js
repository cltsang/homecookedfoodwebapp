/**
 * Created by stephenparker on 20/06/2015.
 */
if (Meteor.isClient) {
    Template.dashboard.helpers({
        'retrieveMyOrders':function(){
            //var ArrayOfCurrentOrders = Orders.find({cookId: Meteor.userId()}).fetch()
        },
        'profilePicture': function() {
            // real facebook profile picture
            return Meteor.user().profile.picture;
            /*
            var cook = Cooks.findOne({id: '0'});
            console.log(cook);
            var picturePath = cook.profilePicPath;
            return picturePath;
            */
        },
        'userName': function(){
            return Meteor.user().services.facebook.first_name
        }
    });
}var displayName= function() {
  return Meteor.user().services.facebook.first_name;
};

var displayPicture = function() {
  return Meteor.user().services.facebook.profile;
};



Template.dashboard.helpers({
    userName : displayName,
    profile: displayPicture,
    images: function() {
        return Images.find();
    },
});

