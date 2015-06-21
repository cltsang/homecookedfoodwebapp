Addresses = new Mongo.Collection("addresses");

var addressSchema = new SimpleSchema({
    id: {
        type: String,
        unique: true,
    },
    longAddress: {
        type: String,
    },
    long: {
        type: Number,
    },
    lat: {
        type: Number,
    },
});

Addresses.attachSchema(addressSchema);
