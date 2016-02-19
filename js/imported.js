define(function(require) {

    var Wrapper = ComponentView.extend({

        postRender: function() {
            console.log("Imported JS");
        }

    });

    return Wrapper;

});
