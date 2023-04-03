nose_x = 0;
nose_y = 0;

function preLoad()
{
  clown_nose = loadImage('https://postimg.cc/bsV5tR30')
}

function setup()
{
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture[VIDEO];
    video.hide();
    video.size(300,300);
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded()
{
   console.log('Posenet Is Initialized');
}

function gotPoses(results)
{
    if(results.lenght > 0){
        console.log(results);
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);   
    }
}

function draw()
{
    Image(video,0,0,300,300);
}

function take_snapshot()
{
    save('Student.png');
}