(function() {

	'use strict';

	angular.module('adf').factory('LocalizationService', ['$http', '$log', LocalizationService]);

	function LocalizationService($http, $log) {

		var localization;
		var LOCALIZATION_URL = 'cireson/dev-data/localization.json';

		$http.get(LOCALIZATION_URL).then(function(response) {
			localization = response.data;
		});

		return {
			getValue: function (key) {

				if(localization[key]) {
					return localization[key];
				} else {
					$log.info('No value exists for ' + key);
					return '{' + key + '}';
				}
			}	
		};
	}

})();