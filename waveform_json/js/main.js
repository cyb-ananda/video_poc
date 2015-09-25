'use strict';
var mydata = JSON.parse(data);
alert(mydata);

// Create an instance
var wavesurfer = Object.create(WaveSurfer);


var audio = document.createElement('audio');
// Init & load audio file
document.addEventListener('DOMContentLoaded', function () {

	
    // Init
    wavesurfer.init({
        container: document.querySelector('#waveform'),
	audio: audio,
        waveColor: 'grey',
	image: '/waveform.png',
        progressColor: 'black',
	waveformHeight: 10,
	cursorColor: "black",
	hideScrollbar: true,
	interact: false,
	cursorWidth: 2


    });


    // Load audio from URL
    wavesurfer.load('https://s3-us-west-2.amazonaws.com/media-recall-centaur-dev-assets/Sintel.webm', mydata);

    document.querySelector(
        '[test="play"]'
    ).addEventListener('click', wavesurfer.playPause.bind(wavesurfer));

    document.querySelector(
        '[data-action="peaks"]'
    ).addEventListener('click', function () {
        wavesurfer.load('https://s3-us-west-2.amazonaws.com/media-recall-centaur-dev-assets/Sintel.webm', mydata);
        document.body.scrollTop = 0;
    });
});
