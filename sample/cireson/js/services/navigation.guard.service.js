/* global _: true */

(function() {

    'use strict';

    angular.module('adf').factory('NavigationGuardService', ['$window', NavigationGuardService]);

    function NavigationGuardService($window) {

        var guardians = [];
        var message;

        function guardianIterator(guardian) {
        	return !!(message = guardian());
        }

        function onBeforeUnloadHandler(event) {

        	if(_.any(guardians, guardianIterator)) {
        		(event || $window.event).returnValue = message;
        		return message;
        	} else {
        		return undefined;
        	}
        }

        if($window.addEventListener) {
        	$window.addEventListener('beforeunload', onBeforeUnloadHandler);
        } else {
        	$window.onbeforeunload = onBeforeUnloadHandler;
        }

        return {
        	registerGuardian: function(guardian) {
        		guardians.unshift(guardian);
        		return function() {
        			if(_.contains(guardians, guardian)) {
        				guardians = _.without(guardians, guardian);
        			}
        		};
        	}
        };
    }

})();
