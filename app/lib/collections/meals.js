Meals = new Mongo.Collection("meals");

var mealSchema = new SimpleSchema({
    mealTitle: {
        type: String,
        unique: false,
    },
    mealDescription: {
        type: String,
        max: 100,
    },
    mealPrice: {
        type: Number,
        decimal: false,
        min: 10,
        max: 999,
    },
    availableToOrder: {
        type: Boolean,
    },
    numberOfPortions: {
        type: Number,
        optional: true,
    },
    photo: {
        type: String,
    },
    orderBy: {
        type: Date,
    },
    deliverBy: {
        type: Date,
    }
});

Meals.attachSchema(mealSchema);

/*
 mealTitle: "Herb Chicken",
 mealDescription: "Roasted Chicken cooked with oregano and served with roasted potatoes",
 mealPrice: 60,
 availableToOrder: true,
 numberOfPortions: 4,
 photo: "http://3.bp.blogspot.com/-94gzUBBb568/T_msmJLf8OI/AAAAAAAACYo/Jkz-7H2LKcs/s1600/IMG_4636.JPG",
 orderBy: ISODate("2015-06-21T17:00:00+17:00"),
 deliverBy: ISODate("2015-06-21T19:00:00+19:00")
 */
