/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
const drawHeroPlanet = (canvasRef: { current: any; }) => {
  const canvas = canvasRef.current;
  console.log(canvasRef, canvasRef.current);
  const c = canvas.getContext('2d');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let center = { x: canvas.width / 1.5, y: canvas.height / 2 };

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
      c.arc(center.x, center.y, 120, 0, Math.PI * 2, false);
      c.clip();
      c.beginPath();
      c.moveTo(this.x, this.y);
      c.lineCap = 'round';
      c.lineWidth = this.cloudWidth;
      c.lineTo(this.x + this.cloudLength,this.y);
      c.strokeStyle = 'white';
      c.stroke();
      c.restore();
    };
    
    update = () => {
      if(this.x < (center.x - 240)){
        this.x = center.x+240;
      }
      this.x -= this.dx;
      this.draw();
    };
  
  }

  // class ShootingStar {
  //   private x: number;
  //   private y: number;
  //   private dx: number;
  //   private dy: number;
  //   private radius: number;
  //   private color: string;

  //   constructor (x: number, y: number, dx: number, dy: number, radius: number, color: string) {
  //     this.x = x;
  //     this.y = y;
  //     this.dx = dx;
  //     this.dy = dy;
  //     this.radius = radius;
  //     this.color = color;
  //   }
    
  //   draw = () => {
  //     c.beginPath();
  //     c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
  //     c.closePath();
  //     c.fillStyle = this.color;
  //     c.fill();
  //   };

  //   update = () => {
  //     this.x += this.dx;
  //     this.y += this.dy;
  //     this.draw();
  //   };

  //   reset = () => {
  //     this.x = Math.random() * canvas.width;
  //     this.y = Math.random() * canvas.height;
  //     this.dx = (Math.random() - 0.5) * 10;
  //     this.dy = (Math.random() - 0.5) * 10;
  //     this.radius = (Math.random() * 2) + 1;
  //   };
  // }

  class Land {
    private x: number;
    private y: number;
    private dx: number;
    private landWidth: number;
    private landLength: number;

    constructor (x: number,y: number,dx: number,landWidth: number,landLength: number) {
      this.x = x;
      this.y = y;
      this.dx = dx;
      this.landWidth = landWidth;
      this.landLength = landLength;
    }
    
    draw = () => {
      c.save();
      c.beginPath();
      c.arc(center.x, center.y, 120, 0, Math.PI * 2, false);
      c.clip();
      c.beginPath();
      c.moveTo(this.x, this.y);
      c.lineCap = 'round';
      c.lineWidth = this.landWidth;
      c.lineTo(this.x + this.landLength,this.y);
      c.strokeStyle = '#85cc66';
      c.stroke();
      c.restore();
    };

    update = () => {
      if(this.x < (center.x-240)){
        this.x = center.x +240;
      }
      this.x -= this.dx;
      this.draw();
    };

  }

  class SemiCircle {
    private x: number;
    private y: number;
    private radius: number;
    private fillColor: string;

    constructor (x: number,y: number,radius: number,fillColor: string) {
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.fillColor = fillColor;
  
      c.beginPath();
      c.arc(this.x, this.y, this.radius, Math.PI * 1.5, 1.5, false);
      c.fillStyle = this.fillColor;
      c.fill();
    }
  }



  class Star {
    private rot: number;
    private x: number;
    private y: number;
    private spikes: number;
    private outerRadius: number;
    private innerRadius: number;
    private step: number;

    constructor (cx: number, cy: number, spikes: number, outerRadius: number, innerRadius: number) {
      this.rot = Math.PI / 2 * 3;
      this.x = cx;
      this.y = cy;
      this.spikes = spikes;
      this.outerRadius = outerRadius;
      this.innerRadius = innerRadius;
    
      this.step = Math.PI / this.spikes;

      c.strokeSyle = '#000';
      c.beginPath();
      c.moveTo(cx, cy - this.outerRadius);
      for (let i = 0; i < this.spikes; i++) {
        this.x = cx;
        this.y = cy;
        let x = cx + Math.cos(this.rot) * this.outerRadius;
        let y = cy + Math.sin(this.rot) * this.outerRadius;
        c.lineTo(x, y);
        this.rot += this.step;

        x = cx + Math.cos(this.rot) * this.innerRadius;
        y = cy + Math.sin(this.rot) * this.innerRadius;
        c.lineTo(x, y);
        this.rot += this.step;
      }
      c.lineTo(cx, cy - this.outerRadius);
      c.closePath();
      c.lineWidth=5;
      c.strokeStyle='rgb(32, 66, 136)';
      c.stroke();
      c.fillStyle='skyblue';
      c.fill();
    }
  }

  //Initial object arrays
  const earthWidth = 120;
  let planets = [{x: 20, y: 10, radius: 0, fillColor: ''}];
  let clouds = [{x: 20, y: 10, update: () => {}}];
  let land = [{x: 20, y: 10, update: () => {}}];
  let stars = [{x: 10, y:10, spikes: 0, innerRadius: 0, outerRadius: 0}];

  let ring3;
  let ring2;
  let ring1;
  let earthBorder;
  let earth;

  const drawStars = (a: number) => {
    for (let i = 0; i <= a; ++i) {
      const bestLocation = sample(stars);
      stars.push(new Star(bestLocation[0], bestLocation[1], 4, Math.floor(Math.random() * 4) + 2, 1));
    }
  };

  const drawPlanets = (a: number) => {
    for (let i = 0; i <= a; ++i) {
      const bestLocation = sample(planets);
      planets.push(new Circle(bestLocation[0], bestLocation[1], Math.random() * 5, 'rgb(32, 66, 136)'));
    }
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


  const drawLand = (a: number) => {
    for (let i = 0; i <= a; ++i) {
      const bestLocation = earthMask(land);
      const landWidth = Math.floor(Math.random() * 25) + 10;
      const landLength = Math.floor(Math.random() * 30) + 18;
      const dx = 0.5;
      land.push(new Land(bestLocation[0], bestLocation[1], dx, landWidth, landLength));
    }
  };

  //Use best candidate algorithm to evenly distribute across the canvas
  const sample = (samples: { x: number; y: number; }[]) => {
    let bestCandidate, bestDistance = 0;
    for (let i = 0; i < 20; ++i) {
      const c = [Math.random() * canvas.width, Math.random() * canvas.height],
        d = distance(findClosest(samples, c), c);
      if (d > bestDistance) {
        bestDistance = d;
        bestCandidate = c;
      }
    }
    return bestCandidate;
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


  const findClosest = (points: any[], b: number[]) => {
    let distance = null;
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
    planets = [{x: 20, y: 10, radius: 0, fillColor: ''}];
    clouds = [{x: 20, y: 10, update: () => {}}];
    land = [{x: 20, y: 10, update: () => {}}];
    stars = [{x: 10, y:10, spikes: 0, innerRadius: 0, outerRadius: 0}];

    drawPlanets(50);
    // drawStars(20);
    drawClouds(25);
    drawLand(15);

    drawPlanet();
  };

  const resizeCanvas = () => {
    // const { width, height } = canvas.getBoundingClientRect();

    const width = window.innerWidth;
    const height = window.innerHeight;
    console.log('redraw', width, height);
    
    if (canvas.width !== width || canvas.height !== height) {
      const { devicePixelRatio:ratio=1 } = window;
      const context = canvas.getContext('2d');
      canvas.width = width*ratio;
      canvas.height = height*ratio;
      context.scale(ratio, ratio);
    }

    reDraw();
  };

  //Generate how many elements you want
  drawPlanets(50);
  // drawStars(20);
  drawClouds(25);
  drawLand(15);

  //Sloppy code for two randomly generated shooting stars
  // const shootingStar = new ShootingStar(10,10,8,8,2,'#2c62c2');
  // const shootingStar2 = new ShootingStar(400,300,-8,8,2,'#2c62c2');

  // const resetShootingStar = () => {
  //   shootingStar.reset();
  // };

  // const resetShootingStar2 = () => {
  //   shootingStar2.reset();
  // };

  // window.setInterval(resetShootingStar, 3000);
  // window.setInterval(resetShootingStar2, 5000);

  const drawPlanet = () => {
    console.log(center);
    ring3 = new Circle(center.x,center.y, 245,'rgba(10, 23, 66, 0.5)');
    ring2 = new Circle(center.x,center.y, 215,'rgba(9, 30, 75, 0.5)');
    ring1 = new Circle(center.x,center.y, 175,'rgba(8, 34, 83, 0.5)');
    earthBorder = new Circle(center.x,center.y, 135,'rgb(12, 20, 56)');
    earth = new Circle(center.x,center.y, earthWidth,'rgb(25, 118, 181)');
  };

  // Animate canvas
  const animate = () => {
    requestAnimationFrame(animate);
  
    // c.fillStyle = 'rgba(11, 21, 56, 0.3)';
    // c.fillRect(0, 0, canvas.width, canvas.height);
    // shootingStar.update();
    // shootingStar2.update();
  
    // for (let i = 0; i < stars.length; i++) {
    //   new Star(stars[i].x, stars[i].y, stars[i].spikes, stars[i].innerRadius, stars[i].outerRadius);
    // }

    for (let i = 0; i < planets.length; i++) {
      new Circle(planets[i].x, planets[i].y, planets[i].radius, planets[i].fillColor);
    }

    ring3 = new Circle(center.x, center.y, 245, 'rgba(8, 35, 61, 0.5)');
    ring2 = new Circle(center.x, center.y, 215, 'rgba(8, 35, 72, 0.5)');
    ring1 = new Circle(center.x, center.y, 175, 'rgba(8, 34, 83, 0.5)');
    earthBorder = new Circle(center.x, center.y, 135, 'rgb(12, 20, 56)');
    earth = new Circle(center.x, center.y, earthWidth, 'rgb(25, 118, 181)');

    for (let i = 1; i < land.length; i++){
      land[i].update();
    }
    for (let i = 1; i < clouds.length; i++){
      clouds[i].update();
    }
    const semi = new SemiCircle(center.x, center.y, earthWidth, 'rgba(0, 0, 0, 0.4)');
  };

  
  const delay = 200;
  let tid: NodeJS.Timeout;

  window.addEventListener('resize', () => {
    deBouncer();
  });
  
  const deBouncer = () => {
    clearTimeout(tid);
    tid = setTimeout(() => {
      resizeCanvas();
    }, delay);
  };

  animate();
};

export default drawHeroPlanet;