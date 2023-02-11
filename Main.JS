lefttWristX = "";
rightWristX = "";

function preload() {

}

function setup() {
    canvas = createCanvas(300, 400);
    canvas.center();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);

}

function draw() {
    canvas.background("#f2f2f2");

    fill("#B9C9A6");
    text("Grace", 100, 200);
}

textSize = "";

function gotPoses() {
    lefttWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;

    e = (lefttWristX - rightWristX).floor(0);
    textSize = e;
}