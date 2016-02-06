module.exports = function(slot) {
    return {
        init: function(data, callback) {
            callback();
        },

        clientInit: function() {},

        viewContext: function() {},

        elements: {
            project: {
                click: function(e) {
                    e.preventDefault();
                    console.log('Some event for showing "About project"');
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

