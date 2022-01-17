nosex = 0;
nosey = 0;

function preload() {
	mustache = loadImage('https://i.postimg.cc/GmrFXT6w/handlebar-moustache-clip-art-mustache-removebg-preview.png');
}

function draw() {
	image(video, 0, 0, 300, 300);
	image(mustache, nosex, nosey, 100, 50);
}

function setup() {
	canvas = createCanvas(300, 300);
	canvas.center();

	video = createCapture(VIDEO);
	video.size(300, 300);
	video.hide();

	posenet = ml5.poseNet(video, modelLoaded);
	posenet.on('pose', gotPoses);
}

function take_snapshot() {
	save('Mustache.png')
}

function modelLoaded() {
	console.log('model loaded');
}

function gotPoses(results) {
	if(results.length > 0){
		console.log(results);
		console.log('x pos = ' + results[0].pose.nose.x);
		console.log('y pos = ' + results[0].pose.nose.y);

		nosex = (results[0].pose.nose.x) - 50;
		nosey = (results[0].pose.nose.y) - 2;
	}
}