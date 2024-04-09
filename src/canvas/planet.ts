/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import earthImage from '../images/icons8-earth-48.png';
import saturnImage from '../images/saturn-94.png';

const drawHeroPlanet = (canvasRef: { current: any; }) => {
  const canvas = canvasRef.current;
  const c = canvas.getContext('2d');

  const { width, height } = canvas.getBoundingClientRect();
  canvas.width = width;
  canvas.height = height;

  class Circle {
    private x: number;
    private y: number;
    private radius: number;
    private fillColor: string;
      
    constructor (x: number, y: number, radius: number, fillColor: string) {
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.fillColor = fillColor;

      c.beginPath();
      c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      c.fillStyle = this.fillColor;
      c.fill();
    }
  }

  class SatellitePath {
    private x: number;
    private y: number;
    private radius: number;
    private strokeStyle: string;
      
    constructor (x: number, y: number, radius: number, strokeStyle: string) {
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.strokeStyle = strokeStyle;

      c.beginPath();
      c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      c.strokeStyle = this.strokeStyle;
      c.stroke();
    }
  }

  class Satellite {
    private x: number;
    private y: number;
    private radius: number;
    private diameter: number;
    private fillColor: string;
    private speed: number;

    constructor (x: number, y: number, radius: number, diameter: number, speed: number, fillColor: string) {
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.diameter = diameter;
      this.speed = speed;
      this.fillColor = fillColor;
    }

    draw = (newX: number, newY: number) => {
      c.save();
      c.beginPath();
      c.arc(newX, newY, this.diameter, Math.PI * 2, false);
      c.clip();
      c.moveTo(newX, newX);
      c.lineCap = 'round';
      c.lineWidth = 1;
      c.lineTo(newX, newX);
      // c.strokeStyle = this.strokeStyle;
      c.fillStyle = this.fillColor;
      c.fill();
      c.stroke();
      c.restore();
    };

    update = (angle) => {
      // increase the angle of rotation
      const newAngle = angle + Math.acos(1-Math.pow(this.speed/this.radius,2)/2);

      // calculate the new ball.x / ball.y
      const newX = this.x + this.radius * Math.cos(newAngle);
      const newY = this.y + this.radius * Math.sin(newAngle);

      this.draw(newX, newY);

      return newAngle;
    };
  }

  class PlanetImage {
    private x: number;
    private y: number;
    private radius: number;
    private speed: number;
    private image: string;
    private offset: number;

    constructor (x: number, y: number, radius: number, speed: number, offset: number, image: string) {
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.speed = speed;
      this.offset = offset;
      this.image = image;
    }

    draw = (newX: number, newY: number) => {
      const image = new Image();
      image.src = this.image;
      c.save();
      c.beginPath();
      c.drawImage(image, newX-this.offset, newY-this.offset);
      c.restore();
    };

    update = (angle) => {
      // increase the angle of rotation
      const newAngle = angle + Math.acos(1-Math.pow(this.speed/this.radius,2)/2);

      // calculate the new ball.x / ball.y
      const newX = this.x + this.radius * Math.cos(newAngle);
      const newY = this.y + this.radius * Math.sin(newAngle);

      this.draw(newX, newY);

      return newAngle;
    };
  }

  class Cloud {
    private x: number;
    private y: number;
    private dx: number;
    private cloudWidth: number;
    private cloudLength: number;

    constructor (x: number, y: number, dx: number, cloudWidth: number, cloudLength: number) {
      this.x = x;
      this.y = y;
      this.dx = dx;
      this.cloudWidth = cloudWidth;
      this.cloudLength = cloudLength;
    }
    
    draw = () => {
      c.save();
      c.beginPath();
      c.arc(center.x, center.y, sunWidth, 0, Math.PI * 2, false);
      c.clip();
      c.beginPath();
      c.moveTo(this.x, this.y);
      c.lineCap = 'round';
      c.lineWidth = this.cloudWidth;
      c.lineTo(this.x + this.cloudLength,this.y);
      c.strokeStyle = '#db700b';
      c.stroke();
      c.restore();
    };
    
    update = () => {
      if(this.x < (center.x - (sunWidth*2))){
        this.x = center.x + (sunWidth*2);
      }
      this.x -= this.dx;
      this.draw();
    };
  
  }

  //Initial object arrays
  const sunWidth = 60;
  let clouds = [{x: 20, y: 10, update: () => void(0)}];

  let center = { x: canvas.width / 1.5, y: canvas.height / 2 };
  let cx = center.x;
  let cy = center.y;
  const radius = 100; // orbit radius

  let sun;

  let mercury: Satellite;
  let mercuryRing: SatellitePath;
  let mercAngle = 30; // starting position on orbit path
  
  let venus: Satellite;
  let venusRing: SatellitePath;
  let venusAngle = 15;

  let earth: PlanetImage;
  let earthRing: SatellitePath;
  let earthAngle = 10;

  let mars: Satellite;
  let marsRing: SatellitePath;
  let marsAngle = 25;

  let jupiter: Satellite;
  let jupiterRing: SatellitePath;
  let jupiterAngle = 20;

  let saturn: PlanetImage;
  let saturnRing: SatellitePath;
  let saturnAngle = 5;

  let uranus: Satellite;
  let uranusRing: SatellitePath;
  let uranusAngle = 35;

  let neptune: Satellite;
  let neptuneRing: SatellitePath;
  let neptuneAngle = 40;

  const drawPlanet = () => {
    sun = new Circle(center.x,center.y, sunWidth, '#f7c202');
  };

  const drawSatellites = () => {
    mercury = new Satellite(cx, cy, radius*0.8, 5, 1, 'rgb(166, 130, 2)');
    mercuryRing = new SatellitePath(center.x, center.y, radius*0.8, 'rgba(128, 128, 128, 0.1)');

    venus = new Satellite(cx, cy, radius*1.2, 14, 0.8, 'rgb(194, 106, 6)');
    venusRing = new SatellitePath(center.x, center.y, radius*1.2, 'rgba(128, 128, 128, 0.1)');

    earth = new PlanetImage(cx, cy, radius*1.8, 0.6, 24, earthImage);
    // earth = new Satellite(cx, cy, radius*2, 15, 0.6, 'rgb(6, 100, 194)');
    earthRing = new SatellitePath(center.x, center.y, radius*1.8, 'rgba(128, 128, 128, 0.1)');

    mars = new Satellite(cx, cy, radius*2.3, 11, 0.5, 'rgb(173, 32, 3)');
    marsRing = new SatellitePath(center.x, center.y, radius*2.3, 'rgba(128, 128, 128, 0.1)');

    jupiter = new Satellite(cx, cy, radius*3, 30, 0.3, 'rgb(232, 154, 65)');
    jupiterRing = new SatellitePath(center.x, center.y, radius*3, 'rgba(128, 128, 128, 0.1)');

    saturn = new PlanetImage(cx, cy, radius*3.7, 0.6, 30, saturnImage);
    // saturn = new Satellite(cx, cy, radius*3.5, 25, 0.2, 'rgb(230, 193, 108)');
    saturnRing = new SatellitePath(center.x, center.y, radius*3.7, 'rgba(128, 128, 128, 0.1)');

    uranus = new Satellite(cx, cy, radius*4.2, 20, 0.1, 'rgb(59, 161, 157)');
    uranusRing = new SatellitePath(center.x, center.y, radius*4.2, 'rgba(128, 128, 128, 0.1)');

    neptune = new Satellite(cx, cy, radius*4.7, 20, 0.1, 'rgb(14, 40, 110)');
    neptuneRing = new SatellitePath(center.x, center.y, radius*4.7, 'rgba(128, 128, 128, 0.1)');
  };

  const drawClouds = (a: number) => {
    for (let i = 0; i <= a; ++i) {
      const bestLocation = earthMask(clouds);
      const cloudWidth = Math.floor(Math.random() * 20) + 5;
      const cloudLength = Math.floor(Math.random() * 30) + 18;
      const dx = (Math.random() + 0.2 )* 1;
      clouds.push(new Cloud(bestLocation[0], bestLocation[1], dx, cloudWidth, cloudLength));
    }
  };

  //Use best candidate algorithm to evenly distribute across the earth mask
  const earthMask = (samples: { x: number; y: number; }[]) => {
    let bestCandidate, bestDistance = 0;
    //The higher the iteration the better the distribution
    //Performance takes a hit with higher iteration
    for (let i = 0; i < 20; ++i) {
      const c = [Math.floor(Math.random() * ((center.x+240) - (center.x-240) + 1)) + (center.x-240), Math.floor(Math.random() * ((center.y+120) - (center.y-120) + 1)) + (center.y-120)],
        d = distance(findClosest(samples, c), c);
      if (d > bestDistance) {
        bestDistance = d;
        bestCandidate = c;
      }
    }
    return bestCandidate;
  };

  const distance = (a: { x: number; y: number; }, b: number[]) => {
    const dx = a.x - b[0],
      dy = a.y - b[1];
    return Math.sqrt(dx * dx + dy * dy);
  };

  interface coordinates {
    // any props that come into the component, you don't have to explicitly define children.
    x: number, 
    y: number
  }

  const findClosest = (points: coordinates[], b: number[]) => {
    let distance;
    let closestPoint;
    for (let i = 0; i < points.length; ++i) {
      const dx = points[i].x - b[0];
      const dy = points[i].y - b[1];
      if(distance == null){
        distance = Math.sqrt(dx * dx + dy * dy);
        closestPoint = points[i];
      } else if(distance > Math.sqrt(dx * dx + dy * dy)){
        distance = Math.sqrt(dx * dx + dy * dy);
        closestPoint = points[i];
      }
    }
    return closestPoint;
  };

  const reDraw = () => {
    center = { x: canvas.width / 1.5, y: canvas.height / 2 };
    clouds = [{x: 20, y: 10, update: () => void(0)}];

    cx = center.x;
    cy = center.y;

    drawClouds(40);
    drawPlanet();
    drawSatellites();
  };

  const resizeCanvasToDisplaySize = () => {
    
    const { width, height } = canvas.getBoundingClientRect();

    if (canvas.width !== width || canvas.height !== height) {
      canvas.width = width;
      canvas.height = height;
      c.scale(1, 1);
      reDraw();
      return true; // here you can return some usefull information like delta width and delta height instead of just true
      // this information can be used in the next redraw...
    }

    return false;
  };

  //Generate how many elements you want
  drawClouds(40);

  // Animate canvas
  const animate = () => {
    requestAnimationFrame(animate);

    c.clearRect(0, 0, canvas.width, canvas.height);

    drawPlanet();
    drawSatellites();

    for (let i = 1; i < clouds.length; i++) {
      clouds[i].update();
    }

    mercAngle = mercury.update(mercAngle);
    venusAngle = venus.update(venusAngle);
    earthAngle = earth.update(earthAngle);
    marsAngle = mars.update(marsAngle);
    jupiterAngle = jupiter.update(jupiterAngle);
    saturnAngle = saturn.update(saturnAngle);
    uranusAngle = uranus.update(uranusAngle);
    neptuneAngle = neptune.update(neptuneAngle);
  };

  
  const delay = 200;
  let tid: NodeJS.Timeout;

  window.addEventListener('resize', () => {
    deBouncer();
  });
  
  const deBouncer = () => {
    clearTimeout(tid);
    tid = setTimeout(() => {
      resizeCanvasToDisplaySize();
    }, delay);
  };

  animate();
};

export default drawHeroPlanet;