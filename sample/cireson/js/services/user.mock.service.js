(function() {

	'use strict';

	angular.module('adf').factory('UserService', ['$http', '$q', UserService]);

	function UserService($http, $q) {

		var sessionUser = null;
		var SESSION_USER_URL = 'cireson/dev-data/session.user.json';
		return {
			getSessionUser: function() {
				var deferred = $q.defer();
				var self = this;
				if(sessionUser) {
					deferred.resolve(sessionUser);
				} else {
					$http.get(SESSION_USER_URL).then(function(response) {
						self.setSessionUser(response.data);
						deferred.resolve(sessionUser);
					});
				}
				return deferred.promise;
			},
			setSessionUser: function(user) {
				sessionUser = user;
			}
		};
	}

})();