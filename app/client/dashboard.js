/**
 * Created by stephenparker on 20/06/2015.
 */
if (Meteor.isClient) {
    Template.dashboard.onCreated(function() {
        // We can use the `ready` callback to interact with the map API once the map is ready.
        GoogleMaps.ready('ordersMap', function(map) {
            // Add a marker to the map once it's ready

            var latLong = [
                {lat:22.2832, long:114.1350},
                {lat:22.2842, long:114.1378},
            ];

            for(var i = 0 ; i <latLong.length ; i++) {
                lat = latLong[i].lat;
                long = latLong[i].long;
                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(lat, long),
                    map: map.instance,
                    //icon: 'http://Yourimagesourcehere'
                });
            }
            /*
            var marker = new google.maps.Marker({
                position: map.options.center,
                map: map.instance,
                title: "Mr. Parker",
            });
            var marker2 = new google.maps.Marker({
                position: new google.maps.LatLng(22.2842, 114.1378),
                map: map.instance,
                title: "Ms. Robinson",
            });
            */
        });
    });

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
        },

        mapOptions: function() {
            // Make sure the maps API has loaded
            if (GoogleMaps.loaded()) {
                // Map initialization options
                return {
                    center: new google.maps.LatLng(22.2832, 114.1350),
                    zoom: 17
                };
            }
        },
    });
}