/**
 * Created by stephenparker on 21/06/2015.
 */
Template.confirmation.helpers({
    currentOrder: function(){
        return Orders.findOne({id: this.params._id});
    }
})