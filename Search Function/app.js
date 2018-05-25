var myApp = angular.module('myApp', []);
myApp.controller('MyCtrl', ['$scope','$http', function($scope) {

	    	
				var itemsx=[{id:1,Description:"Kathmandu"},{id:1,Description:"Bhaktapur"},{id:1,Description:"Lagenkhel"},{id:1,Description:"Janakpur"},{id:1,Description:"Koshi"},{id:1,Description:"Sagarmatha"},{id:1,Description:"Gandaki"}];
				// angular.forEach(response.data.d.results, function(item){
					// itemsx.push(item.Report_x0020_Name);
					
				// });
				$scope.items=itemsx;
				$scope.restoreItems=itemsx;
				console.log(itemsx);
		    	
		    
		    
	   
$scope.searchInput = function(value){
$scope.items=$scope.restoreItems;
 var filtered = [];
	angular.forEach($scope.items, function(item){
						
      if(item.Description.indexOf(value)>-1) {
        filtered.push(item);
                   }
		
	}); 
	
$scope.items=[];
    angular.forEach(filtered, function(val){
	$scope.items.push(val);
	});
	
if (value=="")	{ $scope.items=$scope.restoreItems;	 }
};		

}]);
