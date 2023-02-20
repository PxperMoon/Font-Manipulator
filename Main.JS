lefttWristX = "";
rightWristX = "";
difference = 0;

function preload() {

}

function setup() {
    canvas = createCanvas(300, 400);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(300, 400);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);

}



function modelLoaded() {
    console.log("Model is loaded.");
}

function gotPoses(results) {

    if(results.length > 0) {
        lefttWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;

        difference = floor(lefttWristX - rightWristX);

        console.log(results);
    }
}

function draw() {
    background("#f2f2f2");

    fill("#B9C9A6");
    text("Grace", 100, 200);
    textSize(difference);
}