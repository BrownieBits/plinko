var canvas,
    Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;

var engine;
var world;
var balls = [];
var pegs = []
var bounds = [];
var buckets = [];
var cols = 10;
var rows = 10;
var bucketsCount = 5;
var bucketHeight = 100;

function setup() {
    canvas = createCanvas(350,550);
    engine = Engine.create();
    world = engine.world;
    var spacing = width / cols;
    for(var i = 0; i < rows; i++){
        for(var j = 0; j < cols; j++){
            var x =   j * spacing;
            if(i % 2 == 1){
                x += spacing/2
                var y = spacing + i * spacing
                var peg = new Peg(x, y, 5)
                pegs.push(peg);
            }
            else {
                if(j != 0){
                    var y = spacing + i * spacing
                    var peg = new Peg(x, y, 5)
                    pegs.push(peg);
                }
            }


        }
    }

    var bound1 = new Boundry(0, height / 2, 2, height)
    var bound2 = new Boundry(width - 1, height / 2, 2, height)
    var bound3 = new Boundry(width/2, height -1, width, 2)
    bounds.push(bound1);
    bounds.push(bound2);
    bounds.push(bound3);

    var bucketWidth = width / bucketsCount;
    for(var f = 0; f <= bucketsCount; f++){
        var x = (f * bucketWidth) + (bucketWidth / 2);
        var bucket = new Bucket(x, height - bucketHeight / 2,bucketWidth, bucketHeight)
        buckets.push(bucket);
    }
}

function draw() {
    background(50)
    Engine.update(engine);
    for(var bc = balls.length - 1; bc >= 0; bc--){
        balls[bc].show();
    }
    for(var pc = pegs.length - 1; pc >= 0; pc--){
        pegs[pc].show();
    }
    for(var bc2 = bounds.length - 1; bc2 >= 0; bc2--){
        bounds[bc2].show();
    }
    for(var bc3 = buckets.length - 1; bc3 >= 0; bc3--){
        buckets[bc3].show();
    }
}

function mouseClicked(){
    var b = new Ball(mouseX,0,10);
    balls.push(b);
}
