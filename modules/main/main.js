var _ = require('lodash');

module.exports = function(slot, $appState) {
    function showModule(module) {
        slot.broadcast('*:dispose');
        $appState.set('section', {name: module});
        $appState.push();
        slot.init(module);
        slot.rerender();
    }

    function getActiveModule() {
        return _.get($appState.get('section'), 'name');
    }

    return {
        init: function(data, callback) {
            var activeModule = getActiveModule();
            if (activeModule) {
                slot.init(activeModule, callback);
            } else {
                callback();
            }
        },

        clientInit: function() {
        },

        viewContext: function() {
            return {module: getActiveModule()};
        },

        elements: {
            newsLink: {
                click: function(e) {
                    e.preventDefault();
                    showModule('news');
                }
            },

            aboutLink: {
                click: function(e) {
                    e.preventDefault();
                    showModule('about');
                }
            }
        },

        changeState: function() {
        },

        interface: {},

        dispatcher: {}
    };
};
