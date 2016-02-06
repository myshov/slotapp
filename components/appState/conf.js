/*exports.urls = {
    'about': 'injectTrue',
    'news': 'injectTrue'
};*/

var _ = require('lodash');

exports.urls = {
    'section/[:name]': 'inject'
};

exports.validatorsMap = {
    'name': function(name) {
        return true;
    }
};
