noseX=0;
noseY=0;

function preload(){
   clown_nose = loadImage('https://i.postimg.cc/133f5CjF/29245.png');
}

function setup(){
    canvas= createCanvas(300, 300);
    canvas.center();
    video= createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded (){
    console.log('iniciando poseNet');
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX = results[0].pose.nose.x-30;
        noseY = results[0].pose.nose.y-45;
    }
}

function draw(){
    image(video, 0, 0, 300, 300);
    //fill(255, 0, 0);
    //stroke(255, 0, 0);
    //circle(noseX, noseY, 25);
    image(clown_nose, noseX, noseY, 100,100);
}

function take_snapshot(){
    save('mifiltro.png');
}