module.exports = function(slot) {
    return {
        init: function(data, callback) {
            callback();
        },

        clientInit: function() {},

        viewContext: function() {},

        elements: {
            article: {
                click: function(e) {
                    e.preventDefault();
                    console.log('Some event for showing an article');
                }
            }
        },

        interface: {
            dispose: function() {
                slot.dispose();
            }
        },

        dispatcher: {}
    };
};
