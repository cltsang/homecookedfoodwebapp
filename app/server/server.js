/**
 * Created by stephenparker on 20/06/2015.
 */
(function(){
    ServiceConfiguration.configurations.remove({
        service: "facebook"
    });

// PRODUCTION
// ServiceConfiguration.configurations.insert({
//     service: "facebook",
//     appId: "",
//     secret: ""
// });

// // // DEV/TEST
    ServiceConfiguration.configurations.insert({
        service: "facebook",
        appId: "1599158407021543",
        secret: "83b1713789523102386f9c87eea28b78"
    });

    Accounts.onCreateUser(function(options, user) {
        if (options.profile) {
            options.profile.picture = "http://graph.facebook.com/" + user.services.facebook.id + "/picture/?width=9999";
            user.profile = options.profile;
        }
        return user;
    });

})();