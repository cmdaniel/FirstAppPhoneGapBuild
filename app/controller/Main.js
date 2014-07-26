Ext.define('NetBeansHTML5Application.controller.Main', {
    extend: 'Ext.app.Controller',
    alias: 'controller.main',

    config: {
        control: {
            "main #btnPhoto": {
                tap: 'fnBtnPhotoOnTap'
            }
        }
    },

    fnBtnPhotoOnTap: function(button, e, eOpts) {
        console.log(button);
        navigator.camera.getPicture(success, fail,
        {
            quality: 50,
            destinationType: navigator.camera.DestinationType.FILE_URI,
            sourceType: navigator.camera.PictureSourceType.CAMERA //PHOTOLIBRARY
        });
    },

    success: function(image_uri) {
        var img = Ext.ComponentQuery.query("main image")[0];
        img.setSrc(image_uri);
    },

    fail: function() {
        alert("Failed: " + message);
    }

});