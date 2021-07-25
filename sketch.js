var p5 = require('p5');

let panel1 = new p5(( sketch ) => {

    let r = 10;

    let x = 100;
    let y = 100;

    let xVel = 3;
    let yVel = 5;

    let color = 240;
  
    sketch.setup = () => {
      sketch.createCanvas(200, 200);
    };
  
    sketch.draw = () => {
      sketch.background(0);
      
      y += yVel;
      if(x > 200 - r || x < r){
        xVel = -xVel;
      }
      if(y > 200 - r || y < r){
        yVel = -yVel;
      }
      sketch.fill(color);
      sketch.ellipse(temperature,y,r*2,r*2);
    };
}, 'panel1');

let panel2 = new p5(( sketch ) => {

  let r = 10;

  let x = 150;
  let y = 50;

  let xVel = 3;
  let yVel = 5;

  let color = 190;

  sketch.setup = () => {
    sketch.createCanvas(200, 200);
  };

  sketch.draw = () => {
    sketch.background(0);
    x += xVel;
    y += yVel;
    if(x > 200 - r || x < r){
      xVel = -xVel;
    }
    if(y > 200 - r || y < r){
      yVel = -yVel;
    }
    sketch.fill(color);
    sketch.ellipse(x,y,r*2,r*2);
  };
}, 'panel2');

let panel3 = new p5(( sketch ) => {

  let r = 10;

  let x = 100;
  let y = 100;

  let xVel = 3;
  let yVel = 5;

  let color = 200;

  sketch.setup = () => {
    sketch.createCanvas(200, 200);
  };

  sketch.draw = () => {
    sketch.background(0);
    x += xVel;
    y += yVel;
    if(x > 200 - r || x < r){
      xVel = -xVel;
    }
    if(y > 200 - r || y < r){
      yVel = -yVel;
    }
    sketch.fill(color);
    sketch.ellipse(x,y,r*2,r*2);
  };
}, 'panel3');

let panel4 = new p5(( sketch ) => {

  let r = 10;

  let x = 100;
  let y = 100;

  let xVel = 2;
  let yVel = 7;

  let color = 180;

  sketch.setup = () => {
    sketch.createCanvas(200, 200);
  };

  sketch.draw = () => {
    sketch.background(0);
    x += xVel;
    y += yVel;
    if(x > 200 - r || x < r){
      xVel = -xVel;
    }
    if(y > 200 - r || y < r){
      yVel = -yVel;
    }
    sketch.fill(color);
    sketch.ellipse(x,y,r*2,r*2);
  };
}, 'panel4');



