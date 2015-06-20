Addresses = new Mongo.Collection("addresses");

var addressSchema = new SimpleSchema({
    id: {
        type: String,
        unique: true,
    },
    longAddress: {
        type: String,
    },
    longitude: {
        type: Number,
    },
    latitude: {
        type: Number,
    },
});

Addresses.attachSchema(addressSchema);
