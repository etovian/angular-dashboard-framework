'use strict';

angular.module('adf').directive('adfLayoutSample', ['adfTemplatePath', AdfLayoutSampleDirective]);

function AdfLayoutSampleDirective(adfTemplatePath) {
	return {
		restrict: 'E',
		scope: {
			adfStructure: '='
		},
		bindToController: true,
		controller: AdfLayoutSampleDirectiveController,
		controllerAs: 'vm',
		templateUrl: adfTemplatePath + 'layout-sample.html'
	};
}

function AdfLayoutSampleDirectiveController() {
	var vm = this;

	angular.extend(vm, {
		getColumnWidth: function(styleClass) {

			var map = {
				'col-md-3': '25.00',
				'col-md-4': '33.33',
				'col-md-6': '50.00',
				'col-md-8': '66.66',
				'col-md-9': '75.00',
				'col-md-12': '100.00'
			};

			var width = (map[styleClass] ? map[styleClass] : '100.00') + '%';
			return width;
		},
		getRowHeight: function(numberOfRows) {

			var height = (100 / numberOfRows).toFixed(2);
			return height;
		}
	});
}