song1 ="";
song2 ="";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
function preload(){
    song1 = loadSound("music.mp3");
    song2 = loadSound("2.mp3");
}
function setup(){
    canvas = createCanvas(600,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw(){
song1_status = song1.isPlaying();
    image(video,0,0,600,500);
fill("#FF0000");
stroke("#FF0000");
if(scoreLeftWrist > 0.2){
        circle(leftWristX,leftWristY,20);
        song2.stop();
if(song1_status == false){
song1.play();
document.getDocumentById("song").innerHTML = "Khairiyat";
}
if(scoreRighttWrist > 0.2){
    circle(RightWristX,RightWristY,20);
    song1.stop();
if(song2_status == false){
song2.play();
document.getDocumentById("song").innerHTML = "Harry Potter";
}
}
function play(){
    song1.play();
    song2.play();
}
function modelLoaded(){
    console.log("poseNet is loaded");
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
scoreLeftWrist = results[0].pose.keypoints[9].score;
scoreRightWrist = results[0].pose.keypoints[10].score;
        console.log("scoreLeftWrist = "+scoreLeftWrist);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = "+leftWristX+"leftWristY = "+leftWristY);
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = "+rightWristX+"rightWristY = "+rightWristY);
    }
}
}
}