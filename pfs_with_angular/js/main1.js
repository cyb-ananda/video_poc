                var app = angular.module("precesionApp", []);
                app.controller("precesionController", ["precesionFactory", function(precesionFactory) {
                                precesionFactory.init();
                }]);
                
                app.factory("precesionFactory", [function() {
                                var services = {};

                                services.init = function () {
						services.video = document.getElementById("v0");

                                                services.video.addEventListener("loadedmetadata", services.initScreenshot);
                                                services.video.addEventListener("playing", services.startScreenshot);
                                                services.video.addEventListener("pause", services.stopScreenshot);
                                                services.video.addEventListener("ended", services.stopScreenshot);
						
                                                var videoHeight, videoWidth;
                                                var drawTimer = null;
                                       };
                                
                                services.initScreenshot = function () {
						videoHeight = services.video.videoHeight;
                                                videoWidth = services.video.videoWidth;

                                };
				services.startScreenshot = function(){
					if (services.drawTimer == null) {  
						services.drawTimer = setInterval(services.grabScreenshot, 500); 
					}
				};
				services.stopScreenshot = function(){ 
					if (services.drawTimer) {
		   				clearInterval(services.drawTimer);
						services.drawTimer = null;
		  			}
				};
				services.grabScreenshot = function() {
					var canvas = document.getElementById("canvas").getContext("2d");
                                        var ssContainer = document.getElementById("screenShots");
					canvas.drawImage(services.video, 0, 0, videoWidth, videoHeight);
					var img = new Image();
					img.setAttribute('crossOrigin', 'anonymous');
					ssContainer.appendChild(img);
				};
                                return services;
                }]);

