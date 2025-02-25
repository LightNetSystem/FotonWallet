 'use strict';
  var en = require('./en');
  var ru = require('./ru');

 var translate = function($translateProvider) {
  $translateProvider.translations(en.code, translate.marked(en.data));
  $translateProvider.translations(ru.code, translate.marked(ru.data));
  $translateProvider.preferredLanguage('en');
  $translateProvider.fallbackLanguage('en');
  $translateProvider.useSanitizeValueStrategy(null);
 }

translate.marked = function(data) {
    var tData = data;
	for (var key in tData) if (tData.hasOwnProperty(key)) tData[key] = marked(tData[key]);
    return tData;
}
module.exports = translate;
