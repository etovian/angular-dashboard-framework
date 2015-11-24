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
		getColumnWidth: function(numberOfColumns) {
			var width = (100 / (numberOfColumns || 1)).toFixed(2);
			console.log('width: ', width);
			return width;
		}
	});
}