/**
 * Created by stephenparker on 20/06/2015.
 */
if (Meteor.isClient) {
    Template.dashboard.helpers({
        'retrieveMyOrders':function(){
            //var ArrayOfCurrentOrders = Orders.find({cookId: Meteor.userId()}).fetch()
        },
        'profilePicture': function() {
            return Meteor.user().profile.picture;
        }
    });
}