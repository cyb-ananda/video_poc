(function(angular) {
	// Define a angular controller.
	angular.module("video-segmentation", [])
		   .controller("videoPlayerController", ["$scope", "$interval", function($scope, $interval) {
			    $scope.percentageComplete = 0; 
				// Initialize and load the video Player
				$scope.player = videojs('video_source');
				$scope.wavesurfer = $scope.player.wavesurfer({
					src: 'https://s3-us-west-2.amazonaws.com/media-recall-centaur-dev-assets/Sintel.webm',
					msDisplayMax: 10,
					waveColor: "grey",
					progressColor: "black",
					cursorColor: "black",
					hideScrollbar: true,
					container: document.querySelector("#vjs-waveform"),
					responseType: "application/octet-stream"
				});
				$scope.player.ready(function() {
					this.hotkeys({
						volumeStep: 0.1,
						seekStep: 5,
						enableMute: true,
						enableFullscreen: true,
						enableNumbers: true
					});
				});
				$scope.startSegment = function() {
					// Define a scope variable and save player's current time there.
					$scope.segmentStartTime = $scope.player.currentTime();
				};
				
				$scope.endSegment = function() {
					// Define a scope variable and save player's current time there.
					$scope.segmentEndTime = $scope.player.currentTime();
					alert("TODO: Create a Segment using JS APIs. Append the created Segments to video_segment div. Read more about angular.element API.");
				};
				
				$scope.keyPressEvent = function() {
					alert("TODO: Need to implement keyboard event handler");
				};
				
				$scope.onWavesurferLoading = function(percentage) {
					$scope.$apply(function(){
						$scope.percentageComplete = percentage;
					});	
					console.log(percentage);
				},
				
				$scope.player.waveform.surfer.on('loading', $scope.onWavesurferLoading.bind($scope));
		   }]);
})(angular);