(function(angular) {
	// Define a angular controller.
	angular.module("precisionApp", [])
		   .controller("PrecisionController", function($scope) {

				
		$scope.init = function(){
		$scope.video = document.getElementById("v0");
		
		$scope.video.addEventListener("loadedmetadata", initScreenshot);
		$scope.video.addEventListener("playing", startScreenshot);
		$scope.video.addEventListener("pause", stopScreenshot);
		$scope.video.addEventListener("ended", stopScreenshot);

		$scope.canvas = document.getElementById("canvas");
		$scope.ctx = canvas.getContext("2d");
		$scope.ssContainer = document.getElementById("screenShots");
		//var videoHeight, videoWidth;
		$scope.drawTimer = null;

};
	
		initScreenshot = function() { alert('hi');
  			$scope.videoHeight = $scope.video.videoHeight;
  			$scope.videoWidth = $scope.video.videoWidth;

  			$scope.canvas.width = $scope.videoWidth;
  			$scope.canvas.height = $scope.videoHeight;
		}
		startScreenshot = function(){
			  if ($scope.drawTimer == null) {
    				$scope.drawTimer = setInterval(grabScreenshot, 1000);
  			   }
		};
		stopScreenshot = function(){
			 if ($scope.drawTimer) {
   				clearInterval($scope.drawTimer);
				$scope.drawTimer = null;
  			}
		};
		grabScreenshot = function(){
			 $scope.videoHeight = $scope.video.videoHeight;
			 $scope.videoWidth = $scope.video.videoWidth;
			 $scope.canvas.width = $scope.videoWidth;
			 $scope.canvas.height = $scope.videoHeight;
		};

		grabScreenshot = function() {
			$scope.ctx.drawImage($scope.video, 0, 0, $scope.videoWidth, $scope.videoHeight);
			var img = new Image();
			img.src = $scope.canvas.toDataURL("image/png");
			img.width = 120;
			$scope.ssContainer.appendChild(img);
			}
$scope.init();						
	});

})(angular);

