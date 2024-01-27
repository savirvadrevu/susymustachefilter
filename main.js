nose_x=0
nose_y=0
function preload()
{
    
    
}
function setup()
{
    canvas= createCanvas(500,400)
    canvas.center()
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose',gotPoses)


}

function gotPoses(results)
{
    if(results.length > 0 )
    {
    console.log(results)
    nose_x=results[0].pose.nose.x
    nose_y=results[0].pose.nose.y
    console.log(nose_x)
    console.log(nose_y)
    }
}

function draw()
{
    image(video,0,0,500,400);
}

function modelLoaded()
{
    console.log('PoseNet is  Werkin :D')
}

