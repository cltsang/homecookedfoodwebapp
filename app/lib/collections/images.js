/**
 * Created by stephenparker on 20/06/2015.
 */
var imageStore = new FS.Store.GridFS("image");

Images = new FS.Collection("images", {
    stores: [imageStore]
});
