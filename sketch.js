const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;


var  ball,engine, world, object;

function setup() {
  createCanvas(400,400);

  engine=Engine.create();
  world=engine.world;

  var ground_options={

    isStatic:true

  }
  object=Bodies.rectangle(200,370, 400, 20, ground_options);
  World.add(world, object);
  var ball_options={
    restitution:0.8
  }
  ball=Bodies.circle(200,200,20,ball_options);
  World.add(world,ball);
}

function draw() {
  background(0); 
  Engine.update(engine);
  rectMode(CENTER);
  rect(object.position.x, object.position.y, 400, 20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
  drawSprites();
}