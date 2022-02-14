"use strict";

// DOM References
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
const hud = document.querySelector("#hud");
const msg = document.querySelector("#msg");
const algosDisplay = document.querySelector("#algos");
const help = document.querySelector("#help");

// VARIABLES
// canvas to window size
let w = (canvas.width = window.innerWidth);
let h = (canvas.height = window.innerHeight);

// time-frame
let t = 0;
// for the animations
let stagger = 0;
let speed = 5;
// for repeats
let interval;
let regen;
let autoChange = 100;
let manual = false;
// hud messages
let silent = false;
let helpView = false;
let algoTimer;
let msgTimer;

// algorithms list
const ALGOS = [
  "squares",
  "triangles",
  "pentagons",
  "circles",
  "hexagons",
  "spiderwebs",
  "starbursts",
  "square-nebulas",
  "beziers-straight",
  "beziers-chaos",
  "kaleidoscopes",
  "orbits",
  "rims",
  "nebulas",
  "dysons",
  "discos",
  "neon-tartans",
  "paintings",
  "dotted",
  "spiral-lines",
  "camouflage-postits",
  "the-badge",
  "black-white",
  "stained-glass",
  "spiral-text",
  "alphabet-soup",
  "punctuation",
  "stargate",
  "acceleration-mandala",
  "evolving-mandala",
  "the-iris",
  "quadrants",
  "galaxy-attractor",
  "alien-flowers",
  "hyper-tunnel",
  "chalk-galaxy",
  "patterns",
  "rotation-patterns",
  "microscope",
  "spinner",
  "flawed-mirror",
  "the-platter",
  "space-gears",
  "light-bringer",
  "counter-clock",
  "clock",
  "cake-decorator",
  "tribal-tatoo",
  "pseye",
  "nuclear-vortex"
];
// stores the last played algorithms
let LAST_ALGOS = ["spiral-text"];

// choose a new algorithm that is not on the last x played
function chooseAlgos() {
  let picks = ALGOS.filter((algo) => !LAST_ALGOS.includes(algo));
  let choose = picks[random(0, picks.length)];
  LAST_ALGOS.push(choose);
  if (LAST_ALGOS.length > 22) LAST_ALGOS.shift();
  // setup the chosen algorithm
  switch (choose) {
    case "squares":
      displayAlgos("SQUARES");
      ctx.save();
      runningAlgo = new Squares();
      runningAlgo.draw();
      break;
    case "triangles":
      displayAlgos("TRIANGLES");
      ctx.save();
      runningAlgo = new Triangles();
      runningAlgo.draw();
      break;
    case "pentagons":
      displayAlgos("PENTAGONS");
      ctx.save();
      runningAlgo = new Pentagons();
      runningAlgo.draw();
      break;
    case "circles":
      displayAlgos("CIRCLES");
      ctx.save();
      runningAlgo = new Circles();
      runningAlgo.draw();
      break;
    case "hexagons":
      displayAlgos("HEXAGONS");
      ctx.save();
      runningAlgo = new Hexagons();
      runningAlgo.draw();
      break;
    case "spiderwebs":
      displayAlgos("SPIDERWEBS");
      ctx.save();
      runningAlgo = new Spiderwebs();
      runningAlgo.draw();
      break;
    case "starbursts":
      displayAlgos("STARBURSTS");
      ctx.save();
      runningAlgo = new Starbursts();
      runningAlgo.draw();
      break;
    case "square-nebulas":
      displayAlgos("SQUARE NEBULAS");
      ctx.save();
      runningAlgo = new SquareNebulas();
      runningAlgo.draw();
      break;
    case "beziers-straight":
      displayAlgos("STRAIGHT BEZIERS");
      ctx.save();
      runningAlgo = new BeziersStraight();
      runningAlgo.draw();
      break;
    case "beziers-chaos":
      displayAlgos("CHAOS BEZIERS");
      ctx.save();
      runningAlgo = new BeziersChaos();
      runningAlgo.draw();
      break;
    case "kaleidoscopes":
      displayAlgos("KALEIDOSCOPES");
      ctx.save();
      runningAlgo = new Kaleidoscopes();
      runningAlgo.draw();
      break;
    case "orbits":
      displayAlgos("ORBITS");
      ctx.save();
      runningAlgo = new Orbits();
      runningAlgo.draw();
      break;
    case "rims":
      displayAlgos("RIMS");
      ctx.save();
      runningAlgo = new Rims();
      runningAlgo.draw();
      break;
    case "nebulas":
      displayAlgos("NEBULA");
      ctx.save();
      runningAlgo = new Nebulas();
      runningAlgo.draw();
      break;
    case "dysons":
      displayAlgos("DYSON SPHERES");
      ctx.save();
      runningAlgo = new DysonSpheres();
      runningAlgo.draw();
      break;
    case "discos":
      displayAlgos("DISCO");
      ctx.save();
      runningAlgo = new Discos();
      runningAlgo.draw();
      break;
    case "neon-tartans":
      displayAlgos("NEON TARTAN");
      ctx.save();
      runningAlgo = new NeonTartans();
      runningAlgo.draw();
      break;
    case "paintings":
      displayAlgos("PAINTING");
      ctx.save();
      runningAlgo = new Paintings();
      runningAlgo.draw();
      break;
    case "dotted":
      displayAlgos("DOTTED");
      ctx.save();
      runningAlgo = new Dotted();
      runningAlgo.draw();
      break;
    case "spiral-lines":
      displayAlgos("SPIRAL LINES");
      ctx.save();
      runningAlgo = new SpiralLines();
      runningAlgo.draw();
      break;
    case "camouflage-postits":
      displayAlgos("CAMOUFLAGE POST-ITS");
      ctx.save();
      runningAlgo = new CamouflagePostits();
      runningAlgo.draw();
      break;
    case "the-badge":
      displayAlgos("THE BADGE");
      ctx.save();
      runningAlgo = new TheBadge();
      runningAlgo.draw();
      break;
    case "black-white":
      displayAlgos("BLACK & WHITE");
      ctx.save();
      runningAlgo = new BlacknWhite();
      runningAlgo.draw();
      break;
    case "stained-glass":
      displayAlgos("STAINED GLASS");
      ctx.save();
      runningAlgo = new StainedGlass();
      runningAlgo.draw();
      break;
    case "spiral-text":
      displayAlgos("SPIRAL TEXT");
      ctx.save();
      runningAlgo = new SpiralText();
      runningAlgo.draw();
      break;
    case "alphabet-soup":
      displayAlgos("ALPHABET SOUP");
      ctx.save();
      runningAlgo = new AlphabetSoup();
      runningAlgo.draw();
      break;
    case "punctuation":
      displayAlgos("PUNCTUATION");
      ctx.save();
      runningAlgo = new Punctuation();
      runningAlgo.draw();
      break;
    case "stargate":
      displayAlgos("STARGATE");
      ctx.save();
      runningAlgo = new Stargate();
      runningAlgo.draw();
      break;
    case "acceleration-mandala":
      displayAlgos("ACCELERATION MANDALA");
      ctx.save();
      runningAlgo = new AccelerationMandala();
      runningAlgo.draw();
      break;
    case "evolving-mandala":
      displayAlgos("EVOLVING MANDALA");
      ctx.save();
      runningAlgo = new EvolvingMandala();
      runningAlgo.draw();
      break;
    case "the-iris":
      displayAlgos("THE IRIS");
      ctx.save();
      runningAlgo = new TheIris();
      runningAlgo.draw();
      break;
    case "quadrants":
      displayAlgos("QUADRANTS");
      ctx.save();
      runningAlgo = new Quadrants();
      runningAlgo.draw();
      break;
    case "galaxy-attractor":
      displayAlgos("GALAXY ATTRACTOR");
      ctx.save();
      runningAlgo = new GalaxyAttractor();
      runningAlgo.draw();
      break;
    case "alien-flowers":
      displayAlgos("ALIEN FLOWERS");
      ctx.save();
      runningAlgo = new AlienFlowers();
      runningAlgo.draw();
      break;
    case "hyper-tunnel":
      displayAlgos("HYPER TUNNEL");
      ctx.save();
      runningAlgo = new HyperTunnel();
      runningAlgo.draw();
      break;
    case "chalk-galaxy":
      displayAlgos("CHALK GALAXY");
      ctx.save();
      runningAlgo = new ChalkGalaxy();
      runningAlgo.draw();
      break;
    case "patterns":
      displayAlgos("PATTERNS");
      ctx.save();
      runningAlgo = new Patterns();
      runningAlgo.draw();
      break;
    case "rotation-patterns":
      displayAlgos("ROTATION PATTERNS");
      ctx.save();
      runningAlgo = new RotationPatterns();
      runningAlgo.draw();
      break;
    case "microscope":
      displayAlgos("MICROSCOPE");
      ctx.save();
      runningAlgo = new Microscope();
      runningAlgo.draw();
      break;
    case "spinner":
      displayAlgos("SPINNER");
      ctx.save();
      runningAlgo = new Spinner();
      runningAlgo.draw();
      break;
    case "flawed-mirror":
      displayAlgos("FLAWED MIRROR");
      ctx.save();
      runningAlgo = new FlawedMirror();
      runningAlgo.draw();
      break;
    case "the-platter":
      displayAlgos("THE PLATTER");
      ctx.save();
      runningAlgo = new ThePlatter();
      runningAlgo.draw();
      break;
    case "space-gears":
      displayAlgos("SPACE GEARS");
      ctx.save();
      runningAlgo = new SpaceGears();
      runningAlgo.draw();
      break;
    case "light-bringer":
      displayAlgos("LIGHT BRINGER");
      ctx.save();
      runningAlgo = new LightBringer();
      runningAlgo.draw();
      break;
    case "counter-clock":
      displayAlgos("COUNTER CLOCK");
      ctx.save();
      runningAlgo = new CounterClock();
      runningAlgo.draw();
      break;
    case "clock":
      displayAlgos("CLOCK");
      ctx.save();
      runningAlgo = new Clock();
      runningAlgo.draw();
      break;
    case "cake-decorator":
      displayAlgos("CAKE DECORATOR");
      ctx.save();
      runningAlgo = new CakeDecorator();
      runningAlgo.draw();
      break;
    case "tribal-tatoo":
      displayAlgos("TRIBAL TATOO");
      ctx.save();
      runningAlgo = new TribalTatoo();
      runningAlgo.draw();
      break;
    case "pseye":
      displayAlgos("PSEYE");
      ctx.save();
      runningAlgo = new Pseye();
      runningAlgo.draw();
      break;
    case "nuclear-vortex":
      displayAlgos("NUCLEAR VORTEX");
      ctx.save();
      runningAlgo = new NuclearVortex();
      runningAlgo.draw();
      break;
  }
}

// ALGORITHMS / SPIRALS CLASSES

class Squares {
  constructor() {
    // vars
    this.length = random(50, Math.min(w, h)) - 30;
    this.maxLength = this.length;
    this.gap = random(4, 100);
    this.maxGap = this.gap;
    this.rot1 = random(1, 6);
    this.rot2 = random(1, 6);
    this.rot3 = random(1, 6);
    this.rand1 = random(1, 4);
    this.rand2 = random(2, 5);
    // set the color of the stroke
    ctx.strokeStyle = randomColor(5, 255, 0.2);

    this.draw = () => {
      // reverse and rotate motion when length gets to 0
      if (this.length <= 0) {
        ctx.translate(w / 2, h / 2);
        ctx.rotate(this.rot1);
        ctx.translate(-w / 2, -h / 2);
      }
      // only runs on speed amount of frames
      if (t % speed === 0) {
        stagger = stagger % 4;
        ctx.beginPath;
        // first step of the stagger sequence
        if (stagger === 0) {
          ctx.lineTo(w / 2 + this.length, h / 2 - this.length);
        }
        // second step of the stagger sequence
        if (stagger === 1) {
          ctx.lineTo(w / 2 - this.length, h / 2 - this.length);
        }
        // third step of the stagger sequence
        if (stagger === 2) {
          ctx.lineTo(w / 2 - this.length, h / 2 + this.length);
        }
        // last step of the stagger sequence
        if (stagger === 3) {
          ctx.lineTo(w / 2 + this.length - this.gap, h / 2 + this.length);
          this.length -= this.gap;
          // reverse and rotate and modify the sequence when length gets to max
          if (this.length < -this.maxLength) {
            ctx.translate(w / 2, h / 2);
            ctx.rotate(this.rot2);
            ctx.translate(-w / 2, -h / 2);
            ctx.beginPath();
            this.length = -this.length;
            this.gap -= Math.ceil(this.gap / 2) + this.rand1;
            // reset and increase the gap when it gets to 0
            if (this.gap <= 0) this.gap += this.maxGap + this.rand2;
          }
        }
        // rotation after each stagger step
        ctx.translate(w / 2, h / 2);
        ctx.rotate(this.rot3);
        ctx.translate(-w / 2, -h / 2);
        // stroke after each step
        ctx.stroke();
        stagger++;
      }
      //increase the time and call next frame
      t++;
      // change these settings every 200 cycles
      if (t % (speed * 200) === 0) {
        ctx.closePath();
        ctx.beginPath();
        ctx.strokeStyle = randomColor(5, 255, 0.2);
        ctx.translate(w / 2, h / 2);
        ctx.rotate(random(0, 6) * Math.PI);
        ctx.translate(-w / 2, -h / 2);
        this.length += random(-5, 15);
        this.maxLength += random(0, 20);
        this.gap += random(0, 10);
        this.maxGap += random(0, 20);
      }
      // draw next frame
      interval = requestAnimationFrame(this.draw);
    };
  }
}

// check comments on first class (squares) as these all basically work similarly
class Triangles {
  constructor() {
    this.length = random(100, Math.min(w, h));
    this.maxLength = 2 * this.length;
    this.gap = random(4, 100);
    this.maxGap = this.gap;
    this.height = (Math.sqrt(3) / 2) * this.length;
    this.rotate = random(3, 160);

    ctx.strokeStyle = randomColor(5, 255, 0.25);

    this.draw = () => {
      if (t % speed === 0) {
        stagger = stagger % 3;
        ctx.beginPath;
        if (stagger === 0) {
          ctx.lineTo(
            w / 2 + this.length / 2 - this.gap,
            h / 2 + (this.height / 3 - this.gap)
          );
        }
        if (stagger === 1) {
          ctx.lineTo(w / 2, h / 2 - this.length / 2);
        }
        if (stagger === 2) {
          this.length -= this.gap;
          if (Math.abs(this.length) >= this.maxLength)
            this.length = -this.length;
          this.height = (Math.sqrt(3) / 2) * this.length;
          ctx.lineTo(
            w / 2 - this.length / 2 + this.gap,
            h / 2 + (this.height / 3 - this.gap)
          );
        }
        ctx.stroke();
        ctx.translate(w / 2, h / 2);
        ctx.rotate(this.rotate);
        ctx.translate(-w / 2, -h / 2);
        this.gap -= 2;
        if (this.gap <= 0) this.gap += this.maxGap;
        stagger++;
      }
      t++;
      if (t % (speed * 150) === 0) {
        ctx.closePath();
        ctx.beginPath();
        ctx.strokeStyle = randomColor(5, 255, 0.25);
        ctx.translate(w / 2, h / 2);
        ctx.rotate(random(0, 7) * Math.PI);
        ctx.translate(-w / 2, -h / 2);
      }
      interval = requestAnimationFrame(this.draw);
    };
  }
}

class Pentagons {
  constructor() {
    this.length = random(50, Math.floor(Math.min(w, h) / 2));
    this.maxLength = this.length;
    this.gap = random(2, 65);
    this.maxGap = this.gap;
    this.rot = random(2, 26);

    ctx.strokeStyle = randomColor(5, 255, 0.3);

    this.draw = () => {
      if (t % speed === 0) {
        stagger = stagger % 5;
        ctx.beginPath;
        if (stagger === 0) {
          ctx.lineTo(this.length * 1.55, this.length * 2.19);
        }
        if (stagger === 1) {
          ctx.lineTo(this.length * 1.91, this.length * 3.31);
        }
        if (stagger === 2) {
          ctx.lineTo(this.length * 3.09, this.length * 3.31);
        }
        if (stagger === 3) {
          ctx.lineTo(this.length * 3.45, this.length * 2.19);
        }
        if (stagger === 4) {
          ctx.lineTo(
            this.length * 2.5 + this.gap,
            this.length * 1.5 + this.gap
          );
          this.length -= this.gap;
          if (this.length <= 0) this.length = this.maxLength;
        }
        this.gap -= Math.round(this.gap / 2);
        if (this.gap <= 0) this.gap = this.maxGap;
        ctx.stroke();
        ctx.translate(w / 2, h / 2);
        ctx.rotate(this.rot);
        ctx.translate(-w / 2, -h / 2);
        stagger++;
      }
      t++;
      if (t % (speed * 125) === 0) {
        ctx.closePath();
        ctx.beginPath();
        ctx.strokeStyle = randomColor(5, 255, 0.3);
      }
      if (t % (speed * 500) === 0) {
        this.rot = random(2, 25);
      }
      interval = requestAnimationFrame(this.draw);
    };
  }
}

class Circles {
  constructor() {
    this.rot1 = random(1, 6);
    this.rot2 = random(1, 6);
    this.rot3 = random(1, 6);
    this.radius = random(10, h);
    this.radiusInc = random(12, 120);
    this.startAngle = random(0, 100);
    this.endAngle = random(101, 360);
    this.startRand = random(1, 90);
    this.length = random(50, Math.min(w, h) / 1.5);

    ctx.strokeStyle = randomColor(5, 255, 0.2);
    ctx.fillStyle = randomColor(5, 255, 0.5);
    ctx.fillRect(0, 0, w, h);
    speed *= 4;

    this.draw = () => {
      if (t % speed === 0) {
        stagger = stagger % 4;
        if (stagger === 0) {
          ctx.translate(w / 2, h / 2);
          ctx.rotate(random(this.rot2));
          ctx.translate(-w / 2, -h / 2);
          this.radiusInc = random(4, 99);
          ctx.arc(
            w / 2,
            h / 2,
            this.radius,
            this.startAngle,
            this.endAngle / 4
          );
        }
        if (stagger === 1) {
          ctx.beginPath();
          ctx.arc(
            w / 2,
            h / 2,
            this.radius,
            this.endAngle / 4,
            this.endAngle / 2
          );
        }
        if (stagger === 2) {
          ctx.arc(
            w / 2,
            h / 2,
            this.radius,
            this.endAngle / 2,
            this.endAngle * 0.75
          );
          ctx.fill();
          ctx.closePath();
          ctx.beginPath();
          if (stagger === 3) {
            ctx.arc(
              w / 2,
              h / 2,
              this.radius,
              this.endAngle * 0.75,
              this.endAngle
            );
          }
        }
        this.radius += this.radiusInc;
        if (this.radius > Math.min(w, h)) {
          this.radius = random(1, this.radius / 2);
          this.radiusInc = random(4, 100);
          ctx.translate(w / 2, h / 2);
          ctx.rotate(this.rot2);
          ctx.translate(-w / 2, -h / 2);
        }
        this.startAngle += this.startRand;
        if (this.startAngle > 720) {
          this.startAngle = -this.startAngle;
          ctx.translate(w / 2, h / 2);
          ctx.rotate(this.rot1);
          ctx.translate(-w / 2, -h / 2);
        }
      }
      ctx.stroke();
      ctx.translate(w / 2, h / 2);
      ctx.rotate(this.rot3);
      ctx.translate(-w / 2, -h / 2);
      t++;
      if (t % (speed * 30) === 0) {
        ctx.closePath();
        ctx.fillStyle = randomColor(5, 255, 0.5);
        ctx.arc(w / 2, h / 2, this.length, random(0, 100), random(100, 360));
        ctx.fill();
        ctx.beginPath();
        ctx.strokeStyle = randomColor(5, 255, 0.2);
        ctx.translate(w / 2, h / 2);
        ctx.rotate(random(0, 3) * Math.PI);
        ctx.translate(-w / 2, -h / 2);
        this.rot3 = random(1, 11);
        this.rot1 = random(2, 5);
        this.rot2 = random(45, 359);
      }
      interval = requestAnimationFrame(this.draw);
    };
  }
}

class Hexagons {
  constructor() {
    this.length = random(20, Math.min(w, h));
    this.maxLength = this.length;
    this.gap = random(4, 45);
    this.maxGap = this.gap;
    this.rot1 = random(1, 6);
    this.rot2 = (random(6, 180) * Math.PI) / 180;
    this.rand1 = random(1, this.gap);
    this.bw = true;

    ctx.shadowBlur = 10;
    ctx.shadowColor = ctx.strokeStyle = randomColor(5, 255, 0.3);

    this.draw = () => {
      if (t % speed === 0) {
        stagger = stagger % 6;
        if (stagger === 0) {
          ctx.lineTo(this.length * 1.4, this.length * 1.03);
        }
        if (stagger === 1) {
          ctx.lineTo(this.length * 0.9, this.length * 1.9);
        }
        if (stagger === 2) {
          ctx.lineTo(this.length * 1.4, this.length * 2.77);
          ctx.translate(w / 2, h / 2);
          ctx.rotate(this.rot1);
          ctx.translate(-w / 2, -h / 2);
        }
        if (stagger === 3) {
          ctx.lineTo(this.length * 2.4, this.length * 2.77);
        }
        if (stagger === 4) {
          ctx.lineTo(this.length * 2.9, this.length * 1.9);
        }
        if (stagger === 5) {
          ctx.lineTo(
            this.length * 2.4 - this.gap,
            this.length * 1.03 + this.gap
          );
          this.length -= this.gap;
          if (this.length <= 0 - this.maxLength) {
            this.length = this.maxLength - 1;
            ctx.translate(w / 2, h / 2);
            ctx.rotate(this.rot2);
            ctx.translate(-w / 2, -h / 2);
          }
          if (this.length > Math.max(w, h)) this.length = 0;
          this.gap -= this.rand1;
          if (this.gap <= 0 - this.maxGap) {
            this.rand1 = random(1, this.maxGap);
            this.gap = this.maxGap;
          }
          ctx.translate(w / 2, h / 2);
          ctx.rotate(this.rot2);
          ctx.translate(-w / 2, -h / 2);
        }
        ctx.stroke();
        stagger++;
      }
      t++;
      if (t % (speed * 200) === 0) {
        ctx.closePath();
        ctx.beginPath();
        ctx.shadowColor = ctx.strokeStyle = randomColor(5, 255, 0.3);
        ctx.translate(w / 2, h / 2);
        ctx.rotate((random(0, 26) * Math.PI) / 180);
        ctx.translate(-w / 2, -h / 2);
        this.gap = random(4, 45);
        this.maxGap = this.gap;
        this.length = random(20, Math.min(w, h));
        this.maxLength = this.length;
        this.rot2 = (random(6, 180) * Math.PI) / 180;
      }
      interval = requestAnimationFrame(this.draw);
    };
  }
}

class Spiderwebs {
  constructor() {
    this.length = random(3, Math.min(w, h) / 2);
    this.maxLength = this.length;
    this.gap = random(3, 30);

    ctx.shadowColor = ctx.strokeStyle = randomColor(5, 255, 0.9);
    ctx.shadowBlur = 5;

    this.draw = () => {
      ctx.beginPath();
      if (t % speed === 0) {
        ctx.lineTo(w / 2 + this.length, h / 2 - this.length);
        ctx.lineTo(random(0, w), h / 2 - 2 * this.length);
        ctx.stroke();
        this.length -= this.gap;
        if (this.length < -this.maxLength) {
          this.length = random(2, w / 2);
          this.maxLength = random(60, h);
          this.gap = random(2, 50);
        }
        ctx.translate(w / 2, h / 2);
        ctx.rotate((random(-90, 90) * Math.PI) / 180);
        ctx.translate(-w / 2, -h / 2);
      }
      t++;
      if (t % (speed * 150) === 0) {
        ctx.lineTo(w / 2, h / 2);
        ctx.beginPath();
        ctx.shadowColor = ctx.strokeStyle = randomColor(5, 255, 0.9);
        ctx.translate(w / 2, h / 2);
        ctx.rotate((random(-14, 14) * Math.PI) / 180);
        ctx.translate(-w / 2, -h / 2);
      }
      interval = requestAnimationFrame(this.draw);
    };
  }
}

class Starbursts {
  constructor() {
    this.length = random(50, Math.min(w, h) / 1.5);
    this.maxLength = this.length;
    this.gap = random(4, 120);
    this.maxGap = this.gap;
    this.startAngle = random(0, 100);
    this.endAngle = random(101, 360);
    this.rot1 = random(1, 6);

    ctx.fillStyle = randomColor(5, 255, 0.1);
    ctx.strokeStyle = randomColor(5, 255, 0.8);

    this.draw = () => {
      if (t % speed === 0) {
        stagger = stagger % 3;
        if (stagger === 0) {
          ctx.arc(
            w / 2,
            h / 2 - this.length,
            this.maxGap / 2,
            this.startAngle,
            this.endAngle
          );
        }
        if (stagger === 1) {
          ctx.lineTo(w / 2 + this.length, h / 2 - this.length);
        }
        if (stagger === 2) {
          ctx.beginPath();
          ctx.arc(
            w / 2 + this.length,
            h / 2 - 2 * this.length,
            this.maxGap,
            this.startAngle,
            this.endAngle
          );
          ctx.fill();
        }
        ctx.stroke();
        this.length -= this.gap;
        if (this.length < -this.maxLength) {
          this.length = random(7, 100);
          this.maxLength = 2 * this.length;
          this.gap = random(2, 30);
          this.maxGap = 2 * this.gap;
        }
        ctx.translate(w / 2, h / 2);
        ctx.rotate(this.rot1);
        ctx.translate(-w / 2, -h / 2);
        stagger++;
      }
      t++;
      if (t % (speed * 420) === 0) {
        ctx.closePath();
        ctx.beginPath();
        ctx.strokeStyle = randomColor(5, 255, 0.8);
        ctx.fillStyle = randomColor(5, 255, 0.1);
        if (Math.random() < 0.15) ctx.fillStyle = "rgb(0,0,0)";
        ctx.translate(w / 2, h / 2);
        ctx.rotate(Math.random() * Math.PI);
        ctx.translate(-w / 2, -h / 2);
      }
      interval = requestAnimationFrame(this.draw);
    };
  }
}

class SquareNebulas {
  constructor() {
    this.length = random(50, Math.min(w, h) / 1.5);
    this.maxLength = this.length;
    this.gap = random(4, 100);

    ctx.fillStyle = randomColor(5, 255, 0.025);
    ctx.strokeStyle = randomColor(5, 255, 0.8);

    this.draw = () => {
      if (t % speed === 0) {
        stagger = stagger % 3;

        if (stagger === 0) {
          ctx.beginPath();
          ctx.moveTo(w / 2, h / 2);
          ctx.fillRect(random(0, w), random(0, h), this.length, this.length);
          ctx.stroke();
          ctx.closePath();
        }
        if (stagger === 1) {
          ctx.strokeRect(w / 2, h / 2, this.length / 2, this.length / 2);
          ctx.stroke();
          ctx.closePath();
        }
        if (stagger === 2) {
          ctx.fillRect(
            random(w / 2, w / 2 + this.length),
            random(h / 2, h / 2 + this.length),
            this.length / 8,
            this.length / 8
          );
          ctx.fill();
          ctx.closePath();
          ctx.translate(w / 2, h / 2);
          ctx.rotate(Math.random() * Math.PI);
          ctx.translate(-w / 2, -h / 2);
        }
        ctx.moveTo(w / 2, h / 2);
        this.length -= this.gap;
        if (this.length < -this.maxLength) {
          this.length = random(this.maxLength / 2, w / 3);
          this.maxLength = 2 * this.length;
          this.gap = random(2, 100);
        }
        ctx.translate(w / 2, h / 2);
        ctx.rotate(Math.random() * Math.PI);
        ctx.translate(-w / 2, -h / 2);
        stagger++;
      }
      t++;
      if (t % (speed * 300) === 0) {
        ctx.closePath();
        ctx.beginPath();
        ctx.strokeStyle = randomColor(5, 255, 0.8);
        ctx.fillStyle = randomColor(5, 255, 0.025);
        ctx.translate(w / 2, h / 2);
        ctx.rotate(Math.random() * Math.PI);
        ctx.translate(-w / 2, -h / 2);
      }
      interval = requestAnimationFrame(this.draw);
    };
  }
}

class BeziersStraight {
  constructor() {
    this.x = random(0, w);
    this.y = random(0, w);
    this.cp1X = random(0, w);
    this.cp1Y = random(0, w);
    this.cp2X = random(0, w);
    this.cp2Y = random(0, w);
    this.rot = random(1, 21);

    ctx.strokeStyle = randomColor(5, 255, 0.2);

    this.draw = () => {
      if (t % speed === 0) {
        stagger = stagger % 3;
        if (stagger === 0) {
          ctx.bezierCurveTo(
            this.cp1X,
            this.cp1Y,
            this.cp2X,
            this.cp2Y,
            this.x,
            this.y
          );
          ctx.stroke();
        }
        if (stagger === 1) {
          ctx.moveTo(w / 2, h / 2);
          ctx.bezierCurveTo(
            this.cp2X,
            this.cp2Y,
            this.cp1X,
            this.cp1Y,
            this.x,
            this.y
          );
          ctx.stroke();
        }
        if (stagger === 2) {
          ctx.moveTo(w / 2, h / 2);
          ctx.bezierCurveTo(
            this.cp2Y,
            this.cp1X,
            this.cp1Y,
            this.cp2X,
            this.y,
            this.x
          );
          ctx.stroke();

          ctx.translate(w / 2, h / 2);
          ctx.rotate(this.rot);
          ctx.translate(-w / 2, -h / 2);
        }
        stagger++;
      }
      t++;
      if (t % (speed * 280) === 0) {
        ctx.closePath();
        ctx.beginPath();
        ctx.strokeStyle = randomColor(5, 255, 0.2);
        ctx.translate(w / 2, h / 2);
        ctx.rotate(random(0, 3) * Math.PI);
        ctx.translate(-w / 2, -h / 2);
        this.cp2Y = random(0, h);
      }
      interval = requestAnimationFrame(this.draw);
    };
  }
}

class BeziersChaos {
  constructor() {
    this.x = random(0, w);
    this.y = random(0, w);
    this.cp1X = random(0, w);
    this.cp1Y = random(0, w);
    this.cp2X = random(0, w);
    this.cp2Y = random(0, w);
    this.rot1 = random(1, 21);
    this.rot2 = random(2, 8);
    this.gap = random(4, 80);

    ctx.strokeStyle = randomColor(5, 255, 0.2);

    this.draw = () => {
      if (t % speed === 0) {
        stagger = stagger % 3;
        if (stagger === 0) {
          ctx.bezierCurveTo(
            this.x,
            this.cp1Y,
            this.cp2X,
            this.cp2Y,
            this.cp1X,
            this.y
          );
          ctx.stroke();
        }
        if (stagger === 1) {
          ctx.moveTo(w / 2, h / 2);
          ctx.bezierCurveTo(
            this.cp2X,
            this.cp2Y,
            this.cp1X,
            this.cp1Y,
            this.x,
            this.y
          );
          ctx.stroke();
        }
        if (stagger === 2) {
          ctx.moveTo(w / 2, h / 2);
          ctx.bezierCurveTo(
            this.cp2Y,
            this.cp1X,
            this.cp1Y,
            this.cp2X,
            this.y,
            this.x
          );
          ctx.stroke();

          ctx.translate(w / 2, h / 2);
          ctx.rotate(this.rot1);
          ctx.translate(-w / 2, -h / 2);
        }
      }
      stagger++;
      t++;
      if (t % (speed * 20) === 0) {
        ctx.translate(w / 2, h / 2);
        ctx.rotate(-this.rot2);
        ctx.translate(-w / 2, -h / 2);
        ctx.bezierCurveTo(
          this.y,
          this.cp2X,
          this.x,
          this.cp1X,
          this.cp2Y,
          this.cp1Y
        );
        ctx.stroke();
        this.cp1X += this.gap;
        this.cp2Y += this.gap;
        this.rot2 = random(-15, 15);
      }
      if (t % (speed * 220) === 0) {
        ctx.closePath();
        ctx.beginPath();
        ctx.strokeStyle = randomColor(5, 255, 0.2);
        ctx.translate(w / 2, h / 2);
        ctx.rotate((random(15, 120) * Math.PI) / 180);
        ctx.translate(-w / 2, -h / 2);
        this.x += random(-10, 30);
        this.y += random(-10, 30);
        this.cp1X = random(0, 360);
        this.cp2Y = random(5, h);
      }
      interval = requestAnimationFrame(this.draw);
    };
  }
}

class Kaleidoscopes {
  constructor() {
    this.x = random(0, w);
    this.y = random(0, w);
    this.cp1X = random(0, w);
    this.cp1Y = random(0, w);
    this.cp2X = random(0, w);
    this.cp2Y = random(0, w);
    this.rot1 = random(1, 6);
    this.rot2 = random(2, 6);
    this.gap = random(4, 100);

    ctx.strokeStyle = randomColor(5, 255, 0.75);

    this.draw = () => {
      if (t % speed === 0) {
        stagger = stagger % 3;
        ctx.beginPath();
        if (stagger === 0) {
          ctx.bezierCurveTo(
            this.cp1X,
            this.cp1Y,
            this.cp2X,
            this.cp2Y,
            this.x,
            this.y
          );
        }
        if (stagger === 1) {
          if (Math.random() < 0.5) {
            ctx.moveTo(w / 2, h / 2);
          }
          ctx.bezierCurveTo(
            this.cp1X,
            this.cp1Y,
            this.cp2X,
            this.cp2Y,
            this.x,
            this.y
          );
        }
        if (stagger === 2) {
          ctx.bezierCurveTo(
            this.cp1X,
            this.cp1Y,
            this.cp2X,
            this.cp2Y,
            this.x,
            this.y
          );
        }
        ctx.translate(w / 2, h / 2);
        ctx.rotate(this.rot2);
        ctx.translate(-w / 2, -h / 2);
      }
      ctx.stroke();
      stagger++;
      t++;
      if (t % (speed * 160) === 0) {
        ctx.moveTo(w / 2, h / 2);
        ctx.translate(w / 2, h / 2);
        ctx.rotate(this.rot1);
        ctx.translate(-w / 2, -h / 2);
        ctx.stroke();
        ctx.beginPath();
        ctx.strokeStyle = randomColor(5, 255, 0.75);
        this.cp1X = random(0, w);
        this.cp1Y = random(0, h);
        this.gap += random(-100, 100);
        this.cp2X = this.cp1X + this.gap;
        this.cp2Y = this.cp1Y + this.gap;
        this.y = this.cp2Y + this.gap;
        this.x = this.cp2X + this.gap;
        this.rot2 = random(2, 6);
        this.rot1 = random(-15, 15);
      }
      interval = requestAnimationFrame(this.draw);
    };
  }
}

class Orbits {
  constructor() {
    this.radius = random(30, h);
    this.radius2 = random(10, this.radius);
    this.rot1 = random(1, 6);
    this.startAngle = random(0, 100);
    this.endAngle = random(101, 360);

    ctx.strokeStyle = randomColor(5, 255, 0.2);

    this.draw = () => {
      if (t % speed === 0) {
        ctx.ellipse(
          w / 2,
          h / 2,
          this.radius,
          this.radius2,
          this.rot1,
          this.startAngle,
          this.endAngle
        );
      }
      ctx.stroke();
      ctx.translate(w / 2, h / 2);
      ctx.rotate(this.rot1);
      ctx.translate(-w / 2, -h / 2);
      t++;
      if (t % (speed * 150) === 0) {
        ctx.beginPath();
        ctx.strokeStyle = randomColor(5, 255, 0.2);
        this.radius = random(30, h);
        this.radius2 = random(10, this.radius);
        this.startAngle = random(0, 50);
        this.rot1 = random(-3, 3);
      }
      interval = requestAnimationFrame(this.draw);
    };
  }
}

class Rims {
  constructor() {
    this.radius = random(30, h);
    this.radius2 = random(10, this.radius);
    this.rot1 = random(1, 6);
    this.startAngle = random(0, 100);
    this.endAngle = random(101, 360);
    this.gap = random(4, 100);

    ctx.fillStyle = randomColor(5, 255, 0.01);
    ctx.strokeStyle = " black";

    this.draw = () => {
      if (t % speed === 0) {
        stagger = stagger % 3;
        if (stagger === 0) {
          ctx.ellipse(
            w / 2,
            h / 2,
            this.radius,
            this.radius2,
            this.rot1,
            this.startAngle,
            this.endAngle
          );
        }
        if (stagger === 1) {
          ctx.ellipse(
            w / 2,
            h / 2,
            this.radius2,
            this.radius,
            this.rot1,
            this.startAngle + this.gap,
            this.endAngle + this.gap
          );
        }
        if (stagger === 2) {
          ctx.ellipse(
            this.startAngle + this.gap,
            this.endAngle + this.gap,
            this.radius,
            this.radius2,
            -this.rot1,
            w / 2,
            h / 2
          );
        }
      }
      ctx.fill();
      ctx.stroke();
      ctx.translate(w / 2, h / 2);
      ctx.rotate(this.rot1);
      ctx.translate(-w / 2, -h / 2);
      t++;
      if (t % (speed * 150) === 0) {
        ctx.beginPath();
        ctx.fillStyle = randomColor(5, 255, 0.01);
        this.radius = random(10, w);
        this.radius2 = random(10, h);
        this.startAngle = random(0, 50);
        this.endAngle = random(51, 360);
        this.gap = random(2, w / 4);
        speed = random(1, 10);
      }
      interval = requestAnimationFrame(this.draw);
    };
  }
}

class Nebulas {
  constructor() {
    this.length = random(50, Math.min(w, h) / 1.5);
    this.gap = random(4, 100);
    this.rotate = random(3, 160);

    ctx.shadowBlur = 15;
    ctx.shadowColor = "rgba(255,255,255,0.7)";
    ctx.shadowOffsetX = 5;
    ctx.shadowOffsetY = 5;
    ctx.fillStyle = ctx.strokeStyle = randomColor(5, 255, 0.02);

    this.draw = () => {
      ctx.lineWidth = random(1, 200);
      if (t % speed === 0) {
        ctx.strokeRect(w / 2, h / 2, this.length, this.gap);
        ctx.translate(w / 2, h / 2);
        ctx.rotate(this.rotate);
        ctx.translate(-w / 2, -h / 2);
        this.length = random(10, Math.max(w, h));
        this.gap += random(2, 10);
        if (this.gap > 1000) this.gap = 1;
        this.rotate = random(3, 160);
      }
      t++;
      if (t % (speed * 10) === 0) {
        ctx.fillRect(random(0, w), random(0, h), this.gap, this.gap);
      }
      if (t % (speed * 70) === 0) {
        this.rotate = -this.rotate;
        ctx.fillStyle = ctx.strokeStyle = randomColor(5, 255, 0.02);
      }
      interval = requestAnimationFrame(this.draw);
    };
  }
}

class DysonSpheres {
  constructor() {
    this.length = random(60, Math.max(h / 2, h - 60));
    this.height = random(20, h / 2 - 40);
    this.rot1 = random(1, 6);

    ctx.shadowBlur = 11;
    ctx.shadowOffsetX = 1;
    ctx.shadowOffsetY = 1;
    ctx.shadowColor = ctx.strokeStyle = randomColor(5, 255, 0.33);

    this.draw = () => {
      if (t % speed === 0) {
        ctx.ellipse(w / 2, h / 2, this.length, this.height, this.rot1, 0, 0);
        ctx.stroke();
      }
      t++;
      if (t % (speed * 170) === 0) {
        ctx.beginPath();
        let color = Math.random();
        if (color < 0.2) {
          ctx.shadowBlur = 1;
          ctx.shadowOffsetX = 0;
          ctx.shadowOffsetY = 0;
          ctx.shadowColor = ctx.strokeStyle = "black";
        } else if (color < 0.4) {
          ctx.shadowBlur = 1;
          ctx.shadowOffsetX = 0;
          ctx.shadowOffsetY = 0;
          ctx.shadowColor = ctx.strokeStyle = "white";
        } else {
          ctx.shadowBlur = 11;
          ctx.shadowColor = ctx.strokeStyle = randomColor(5, 255, 0.33);
        }
        this.length = random(60, Math.max(h / 2, h - 60));
        this.height = random(20, h / 2 - 40);
      }
      this.rot1 = random(0, 360);
      interval = requestAnimationFrame(this.draw);
    };
  }
}

class Discos {
  constructor() {
    this.color1 = randomColor(5, 255, 0.5);
    this.color2 = randomColor(5, 255, 0.5);
    this.startAngle = random(0, 100);
    this.endAngle = (180 * Math.PI) / 180;
    this.radius = random(10, h);
    this.anti = false;

    ctx.fillStyle = this.color1;

    this.draw = () => {
      if (t % speed === 0) {
        stagger = stagger % 3;
        if (stagger === 0) {
          ctx.moveTo(w / 2, h / 2);
          ctx.beginPath();
          ctx.strokeStyle = this.color1;
          ctx.lineWidth = random(0, 100);
          ctx.arc(
            w / 2,
            h / 2,
            this.radius,
            this.startAngle,
            this.endAngle,
            this.anti
          );
          ctx.stroke();
        }
        if (stagger === 1) {
          ctx.beginPath();
          ctx.strokeStyle = this.color2;
          this.anti = !this.anti;
          this.radius = random(0, h);
          ctx.arc(
            w / 2,
            h / 2,
            this.radius,
            this.startAngle,
            this.endAngle,
            this.anti
          );
          ctx.stroke();
        }
        if (stagger === 2) {
          ctx.beginPath();
          this.radius = random(0, h);
          ctx.fillRect(w / 2, h / 2, w, 2);
          ctx.stroke();
        }
        ctx.closePath();
        stagger++;
      }
      t++;
      if (t % (speed * 40) === 0) {
        ctx.translate(w / 2, h / 2);
        ctx.rotate((30 * Math.PI) / 180);
        ctx.translate(-w / 2, -h / 2);
      }
      if (t % (speed * 200) === 0) {
        this.color1 = ctx.fillStyle = randomColor(5, 255, 0.5);
        this.color2 = randomColor(5, 255, 0.5);
      }
      interval = requestAnimationFrame(this.draw);
    };
  }
}

class NeonTartans {
  constructor() {
    this.lineX = random(0, h);
    this.lineY = random(0, w);
    this.length = random(50, Math.min(w, h) / 1.5);
    this.color1 = randomColor();
    this.color2 = randomColor();

    this.draw = () => {
      if (t % speed === 0) {
        stagger = stagger % 3;

        if (stagger === 0) {
          ctx.beginPath();
          ctx.moveTo(0, this.lineX);
          ctx.lineTo(w, this.lineX);
          ctx.shadowBlur = 5;
          ctx.shadowColor = ctx.strokeStyle = this.color1;
          ctx.stroke();
        }
        if (stagger === 1) {
          ctx.beginPath();
          ctx.moveTo(this.lineY, 0);
          ctx.lineTo(this.lineY, h);
          ctx.shadowBlur = 0;
          ctx.shadowColor = ctx.strokeStyle = this.color2;
          ctx.stroke();
        }
        if (stagger === 2) {
          ctx.shadowBlur = 30;
          ctx.beginPath();
          ctx.lineWidth = 2;
          ctx.arc(w / 2, h / 2, this.length, this.length, w, h);
          ctx.stroke();
          ctx.lineWidth = 1;
        }
        stagger++;
      }
      t++;
      if (t % (speed * 15) === 0) {
        ctx.translate(w / 2, h / 2);
        ctx.rotate((30 * Math.PI) / 180);
        ctx.translate(-w / 2, -h / 2);
        this.length = random(30, h / 2);
      }
      if (t % (speed * 180) === 0) {
        this.color1 = randomColor();
        this.color2 = randomColor();
      }
      this.lineX = random(0, h);
      this.lineY = random(0, w);
      interval = requestAnimationFrame(this.draw);
    };
  }
}

class Paintings {
  constructor() {
    this.length = random(50, Math.min(w, h) / 1.5);
    ctx.strokeStyle = randomColor(5, 255, 0.8);
    ctx.fillStyle = randomColor(5, 255, 0.05);
    ctx.lineWidth = random(1, 40);

    ctx.globalCompositeOperation = "overlay";

    this.draw = () => {
      if (t % speed === 0) {
        stagger = stagger % 5;
        if (stagger === 0) {
          ctx.beginPath();
          ctx.moveTo(w / 2 - this.length / 2, h / 2);
          ctx.lineTo(w / 2, h / 2 - this.length / 2);
          ctx.stroke();
        }
        if (stagger === 1) {
          ctx.lineTo(w / 2 + this.length / 2, h / 2);
          ctx.stroke();
        }
        if (stagger === 2) {
          ctx.lineTo(w / 2, h / 2 + this.length / 2);
          ctx.stroke();
        }
        if (stagger === 3) {
          ctx.lineTo(w / 2 - this.length / 2, h / 2);
          ctx.stroke();
        }
        if (stagger === 4) {
          ctx.fill();
          this.length = random(0, w * 1.5);
          ctx.strokeStyle = randomColor(5, 255, 0.8);

          ctx.lineWidth = random(1, 40);
          ctx.fillStyle = randomColor(5, 255, 0.05);
          ctx.translate(w / 2, h / 2);
          ctx.rotate((random(-359, 359) * Math.PI) / 180);
          ctx.translate(-w / 2, -h / 2);
        }
        stagger++;
      }
      t++;
      if (t % (speed * 20) === 0) {
        ctx.arc(w / 2, h / 2, this.length, 0, 360, true);
        ctx.fillStyle = ctx.fillStyle = randomColor(5, 255, 0.8);
        ctx.stroke();
        ctx.fill();
        ctx.fillStyle = ctx.fillStyle = randomColor(5, 255, 0.05);
      }
      if (t % (speed * 77) === 0) {
        ctx.clearRect(w / 2, h / 2, this.length, this.length);
      }
      interval = requestAnimationFrame(this.draw);
    };
  }
}

class Dotted {
  constructor() {
    this.vx1 = random(0, w);
    this.vx2 = random(0, w);
    this.vx3 = random(0, w);
    this.vy1 = random(0, h);
    this.vy2 = random(0, h);
    this.vy3 = random(0, h);

    ctx.globalCompositeOperation = "overlay";
    ctx.strokeStyle = randomColor(5, 255, 0.75);
    ctx.fillStyle = randomColor(5, 255, 0.015);
    ctx.setLineDash([14, 6]);
    ctx.lineWidth = 2;

    this.draw = () => {
      if (t % speed === 0) {
        stagger = stagger % 3;

        if (stagger === 0) {
          ctx.moveTo(w / 2, h / 2);
          ctx.lineTo(this.vx2, this.vy2);
          ctx.stroke();
        }
        if (stagger === 1) {
          ctx.lineTo(this.vx3, this.vy3);
          ctx.stroke();
        }
        if (stagger === 2) {
          ctx.lineTo(this.vx1, this.vy1);
          ctx.stroke();

          ctx.beginPath();
          this.vx1 = random(0, w);
          this.vx2 = random(0, w);
          this.vx3 = random(0, w);
          this.vy1 = random(0, h);
          this.vy2 = random(0, h);
          this.vy3 = random(0, h);
        }
        stagger++;
      }
      t++;
      if (t % (speed * 5) === 0) {
        ctx.fillRect(0, 0, w, h);
      }
      if (t % (speed * 70) === 0) {
        ctx.setLineDash([random(1, 20), random(7, 50)]);
        ctx.lineWidth = random(1, 29);
      }
      if (t % (speed * 200) === 0) {
        ctx.fillStyle = randomColor(5, 255, 0.015);
      }
      if (t % (speed * 280) === 0) {
        ctx.strokeStyle = randomColor(5, 255, 0.75);
      }
      interval = requestAnimationFrame(this.draw);
    };
  }
}

class SpiralLines {
  constructor() {
    this.radius = random(10, h);
    this.length = random(50, Math.min(w, h) / 1.5);
    this.gap = random(4, 100);
    this.rot1 = (random(1, 359) * Math.PI) / 180;
    this.cycles = 1;
    this.bw = Math.random();

    ctx.strokeStyle = randomColor(5, 255, 0.5);
    ctx.lineWidth = random(1, 8);
    ctx.moveTo(w / 2, h / 2);
    ctx.beginPath();

    this.draw = () => {
      if (t % speed === 0) {
        stagger = stagger % 3;
        if (stagger === 0) {
          ctx.moveTo(
            w / 2 - this.radius - this.length / 2,
            h / 2 + this.length / 2
          );
          ctx.lineTo(
            w / 2 - this.radius - this.length / 2,
            h / 2 - this.length / 2
          );
          ctx.stroke();
        }
        if (stagger === 1) {
          ctx.lineTo(w / 2 - this.radius - this.length, h / 2);
          ctx.stroke();
        }
        if (stagger === 2) {
          ctx.lineTo(w / 2 - this.radius - this.length / 2, h / 2 + length / 2);
          ctx.stroke();
        }
        ctx.translate(w / 2, h / 2);
        ctx.rotate(this.rot1);
        ctx.translate(-w / 2, -h / 2);
        this.length += this.gap;
        if (this.length > Math.max(w, h)) {
          this.cycles++;
          this.length = this.gap;
          ctx.beginPath();
          ctx.strokeStyle = randomColor(5, 255, 0.5);
          ctx.arc(w / 2, h / 2, this.radius, 0, 360);
          this.bw = Math.random();
          this.radius = random(5, 65);
          this.gap = random(2, 30);
        }
      }
      t++;
      if (this.cycles % 9 === 0) {
        this.bw < 0.5
          ? (ctx.strokeStyle = "rgba(255,255,255, .75)")
          : (ctx.strokeStyle = "rgba(0,0,0, .75)");
      }
      interval = requestAnimationFrame(this.draw);
    };
  }
}

class CamouflagePostits {
  constructor() {
    this.length = random(50, Math.min(w, h) / 1.5);
    this.x = random(0, w);
    this.y = random(0, w);
    this.rot1 = (random(0, 360) * Math.PI) / 180;
    this.randCol = random(0, 255);
    ctx.fillStyle = `rgb(${this.randCol + random(-8, 8)},${
      this.randCol + random(-8, 8)
    },${this.randCol + random(-8, 8)})`;

    this.modes = [
      "xor",
      "difference",
      "hard-light",
      "color-burn",
      "color-dodge",
      "lighten",
      "darken",
      "overlay",
      "source-atop"
    ];

    ctx.strokeStyle = "white";
    ctx.lineWidth = 2;
    ctx.moveTo(w / 2, h / 2);

    this.draw = () => {
      if (t % speed === 0) {
        ctx.fillRect(this.x, this.y, this.length, this.length);
        this.x = random(0, w);
        this.y = random(0, h);
        ctx.translate(w / 2, h / 2);
        ctx.rotate(this.rot1);
        ctx.translate(-w / 2, -h / 2);
      }
      if (t % (speed * 25) === 0) {
        this.length = random(5, 125);
        this.randCol = random(0, 255);
        ctx.fillRect(
          w / 2 - this.length * 1.5,
          h / 2 - this.length * 1.5,
          3 * this.length,
          3 * this.length
        );
        ctx.strokeRect(
          w / 2 - this.length * 1.5,
          h / 2 - this.length * 1.5,
          3 * this.length,
          3 * this.length
        );
        ctx.fillStyle = `rgb(${this.randCol + random(-8, 8)},${
          this.randCol + random(-8, 8)
        },${this.randCol + random(-8, 8)})`;
      }
      t++;
      if (t % (speed * 100) === 0) {
        this.rot1 = (random(0, 360) * Math.PI) / 180;
        ctx.globalCompositeOperation = this.modes[
          random(0, this.modes.length - 1)
        ];
      }
      interval = requestAnimationFrame(this.draw);
    };
  }
}

class TheBadge {
  constructor() {
    this.length = random(50, Math.min(w, h) / 1.5);
    this.rot1 = (random(0, 360) * Math.PI) / 180;
    this.randCol = random(0, 255);
    ctx.fillStyle = `rgb(${this.randCol + random(-28, 28)},${
      this.randCol + random(-28, 28)
    },${this.randCol + random(-28, 28)})`;
    this.modes = [
      "difference",
      "soft-light",
      "color",
      "lighten",
      "darken",
      "overlay",
      "source-atop"
    ];

    ctx.strokeStyle = "white";
    ctx.lineWidth = 3;

    this.draw = () => {
      if (t % speed === 0) {
        ctx.fillRect(
          w / 2 - this.length * 1.5,
          h / 2 - this.length * 1.5,
          3 * this.length,
          3 * this.length
        );
        ctx.strokeRect(
          w / 2 - this.length * 1.5,
          h / 2 - this.length * 1.5,
          3 * this.length,
          3 * this.length
        );
        ctx.translate(w / 2, h / 2);
        ctx.rotate(this.rot1);
        ctx.translate(-w / 2, -h / 2);
      }
      t++;
      if (t % (speed * 25) === 0) {
        this.length = random(5, Math.min(w, h) / 3);
        this.randCol = random(0, 255);

        ctx.fillStyle = `rgb(${this.randCol + random(-28, 28)},${
          this.randCol + random(-28, 28)
        },${this.randCol + random(-28, 28)})`;
      }
      if (t % (speed * 50) === 0) {
        this.rot1 = (random(0, 360) * Math.PI) / 180;
        ctx.globalCompositeOperation = this.modes[
          random(0, this.modes.length - 1)
        ];
      }
      interval = requestAnimationFrame(this.draw);
    };
  }
}

class BlacknWhite {
  constructor() {
    this.length = random(50, Math.min(w, h) / 1.5);
    this.height = this.length / random(1, 5);
    this.modes = ["source-over", "difference", "destination-out"];

    ctx.strokeStyle = "white";
    ctx.lineWidth = 4;

    this.draw = () => {
      if (t % speed === 0) {
        stagger = stagger % 4;
        if (stagger === 0) {
          ctx.beginPath();
          ctx.moveTo(w / 2, h / 2);
          ctx.strokeRect(
            w / 2 - this.length / 2,
            h / 2 - this.height / 2,
            this.length,
            this.height
          );
          //
          this.length = random(20, Math.max(w, h));
          this.height = this.length / random(1, 5);
        }
        if (stagger === 1) {
          ctx.translate(w / 2, h / 2);
          ctx.rotate((random(-180, 180) * Math.PI) / 180);
          ctx.translate(-w / 2, -h / 2);
        }
        if (stagger === 2) {
          ctx.arcTo(this.height, this.length, 0, h / 2, w / 2);
          ctx.stroke();
        }
        if (stagger === 3) {
          ctx.arcTo(w / 2, h / 2, random(1, 10), this.height, this.length);
          ctx.stroke();
        }
        stagger++;
      }
      t++;
      if (t % (speed * 100) === 0) {
        ctx.globalCompositeOperation = this.modes[random(0, this.modes.length)];
      }
      interval = requestAnimationFrame(this.draw);
    };
  }
}

class StainedGlass {
  constructor() {
    this.length = w / 6;
    this.height = h / 5;
    this.rand1 = random(0, 3);
    this.rand2 = (random(1, 359) * Math.PI) / 180;
    this.modes = ["color", "hue", "saturation", "overlay"];

    ctx.globalCompositeOperation = "color";
    ctx.strokeStyle = "black";
    ctx.lineWidth = 5;
    ctx.fillStyle = randomColor(0, 255, 0, 1);
    ctx.beginPath();

    this.draw = () => {
      if (t % speed === 0) {
        stagger = random(0, 30);
        if (stagger === 0) {
          ctx.strokeRect(0, 0, this.length, this.height);
          ctx.fillRect(0, 0, this.length, this.height);
          ctx.fillStyle = randomColor(0, 255, 0, 1);
        }
        if (stagger === 1) {
          ctx.strokeRect(this.length, 0, this.length, this.height);
          ctx.fillRect(this.length, 0, this.length, this.height);
          ctx.fillStyle = randomColor(0, 255, 0, 1);
        }
        if (stagger === 2) {
          ctx.strokeRect(2 * this.length, 0, this.length, this.height);
          ctx.fillRect(2 * this.length, 0, this.length, this.height);
          ctx.fillStyle = randomColor(0, 255, 0, 1);
        }
        if (stagger === 3) {
          ctx.strokeRect(3 * this.length, 0, this.length, this.height);
          ctx.fillRect(3 * this.length, 0, this.length, this.height);
          ctx.fillStyle = randomColor(0, 255, 0, 1);
        }
        if (stagger === 4) {
          ctx.strokeRect(4 * this.length, 0, this.length, this.height);
          ctx.fillRect(4 * this.length, 0, this.length, this.height);
          ctx.fillStyle = randomColor(0, 255, 0, 1);
        }
        if (stagger === 5) {
          ctx.strokeRect(5 * this.length, 0, this.length, this.height);
          ctx.fillRect(5 * this.length, 0, this.length, this.height);
          ctx.fillStyle = randomColor(0, 255, 0, 1);
        }
        if (stagger === 6) {
          ctx.strokeRect(
            5 * this.length,
            this.height,
            this.length,
            this.height
          );
          ctx.fillRect(5 * this.length, this.height, this.length, this.height);
          ctx.fillStyle = randomColor(0, 255, 0, 1);
        }
        if (stagger === 7) {
          ctx.strokeRect(
            4 * this.length,
            this.height,
            this.length,
            this.height
          );
          ctx.fillRect(4 * this.length, this.height, this.length, this.height);
          ctx.fillStyle = randomColor(0, 255, 0, 1);
        }
        if (stagger === 8) {
          ctx.strokeRect(
            3 * this.length,
            this.height,
            this.length,
            this.height
          );
          ctx.fillRect(3 * this.length, this.height, this.length, this.height);
          ctx.fillStyle = randomColor(0, 255, 0, 1);
        }
        if (stagger === 9) {
          ctx.strokeRect(
            2 * this.length,
            this.height,
            this.length,
            this.height
          );
          ctx.fillRect(2 * this.length, this.height, this.length, this.height);
          ctx.fillStyle = randomColor(0, 255, 0, 1);
        }
        if (stagger === 10) {
          ctx.strokeRect(this.length, this.height, this.length, this.height);
          ctx.fillRect(this.length, this.height, this.length, this.height);
          ctx.fillStyle = randomColor(0, 255, 0, 1);
        }
        if (stagger === 11) {
          ctx.strokeRect(0, this.height, this.length, this.height);
          ctx.fillRect(0, this.height, this.length, this.height);
          ctx.fillStyle = randomColor(0, 255, 0, 1);
        }
        if (stagger === 12) {
          ctx.strokeRect(0, 2 * this.height, this.length, this.height);
          ctx.fillRect(0, 2 * this.height, this.length, this.height);
          ctx.fillStyle = randomColor(0, 255, 0, 1);
        }
        if (stagger === 13) {
          ctx.strokeRect(
            this.length,
            2 * this.height,
            this.length,
            this.height
          );
          ctx.fillRect(this.length, 2 * this.height, this.length, this.height);
          ctx.fillStyle = randomColor(0, 255, 0, 1);
        }
        if (stagger === 14) {
          ctx.strokeRect(
            2 * this.length,
            2 * this.height,
            this.length,
            this.height
          );
          ctx.fillRect(
            2 * this.length,
            2 * this.height,
            this.length,
            this.height
          );
          ctx.fillStyle = randomColor(0, 255, 0, 1);
        }
        if (stagger === 15) {
          ctx.strokeRect(
            3 * this.length,
            2 * this.height,
            this.length,
            this.height
          );
          ctx.fillRect(
            3 * this.length,
            2 * this.height,
            this.length,
            this.height
          );
          ctx.fillStyle = randomColor(0, 255, 0, 1);
        }
        if (stagger === 16) {
          ctx.strokeRect(
            4 * this.length,
            2 * this.height,
            this.length,
            this.height
          );
          ctx.fillRect(
            4 * this.length,
            2 * this.height,
            this.length,
            this.height
          );
          ctx.fillStyle = randomColor(0, 255, 0, 1);
        }
        if (stagger === 17) {
          ctx.strokeRect(
            5 * this.length,
            2 * this.height,
            this.length,
            this.height
          );
          ctx.fillRect(
            5 * this.length,
            2 * this.height,
            this.length,
            this.height
          );
          ctx.fillStyle = randomColor(0, 255, 0, 1);
        }
        if (stagger === 18) {
          ctx.strokeRect(
            5 * this.length,
            3 * this.height,
            this.length,
            this.height
          );
          ctx.fillRect(
            5 * this.length,
            3 * this.height,
            this.length,
            this.height
          );
          ctx.fillStyle = randomColor(0, 255, 0, 1);
        }
        if (stagger === 19) {
          ctx.strokeRect(
            4 * this.length,
            3 * this.height,
            this.length,
            this.height
          );
          ctx.fillRect(
            4 * this.length,
            3 * this.height,
            this.length,
            this.height
          );
          ctx.fillStyle = randomColor(0, 255, 0, 1);
        }
        if (stagger === 20) {
          ctx.strokeRect(
            3 * this.length,
            3 * this.height,
            this.length,
            this.height
          );
          ctx.fillRect(
            3 * this.length,
            3 * this.height,
            this.length,
            this.height
          );
          ctx.fillStyle = randomColor(0, 255, 0, 1);
        }
        if (stagger === 21) {
          ctx.strokeRect(
            2 * this.length,
            3 * this.height,
            this.length,
            this.height
          );
          ctx.fillRect(
            2 * this.length,
            3 * this.height,
            this.length,
            this.height
          );
          ctx.fillStyle = randomColor(0, 255, 0, 1);
        }
        if (stagger === 22) {
          ctx.strokeRect(
            this.length,
            3 * this.height,
            this.length,
            this.height
          );
          ctx.fillRect(this.length, 3 * this.height, this.length, this.height);
          ctx.fillStyle = randomColor(0, 255, 0, 1);
        }
        if (stagger === 23) {
          ctx.strokeRect(0, 3 * this.height, this.length, this.height);
          ctx.fillRect(0, 3 * this.height, this.length, this.height);
          ctx.fillStyle = randomColor(0, 255, 0, 1);
        }
        if (stagger === 24) {
          ctx.strokeRect(0, 4 * this.height, this.length, this.height);
          ctx.fillRect(0, 4 * this.height, this.length, this.height);
          ctx.fillStyle = randomColor(0, 255, 0, 1);
        }
        if (stagger === 25) {
          ctx.strokeRect(
            this.length,
            4 * this.height,
            this.length,
            this.height
          );
          ctx.fillRect(length, 4 * this.height, this.length, this.height);
          ctx.fillStyle = randomColor(0, 255, 0, 1);
        }
        if (stagger === 26) {
          ctx.strokeRect(
            2 * this.length,
            4 * this.height,
            this.length,
            this.height
          );
          ctx.fillRect(
            2 * this.length,
            4 * this.height,
            this.length,
            this.height
          );
          ctx.fillStyle = randomColor(0, 255, 0, 1);
        }
        if (stagger === 27) {
          ctx.strokeRect(
            3 * this.length,
            4 * this.height,
            this.length,
            this.height
          );
          ctx.fillRect(
            3 * this.length,
            4 * this.height,
            this.length,
            this.height
          );
          ctx.fillStyle = randomColor(0, 255, 0, 1);
        }
        if (stagger === 28) {
          ctx.strokeRect(
            4 * this.length,
            4 * this.height,
            this.length,
            this.height
          );
          ctx.fillRect(
            4 * this.length,
            4 * this.height,
            this.length,
            this.height
          );
          ctx.fillStyle = randomColor(0, 255, 0, 1);
        }
        if (stagger === 29) {
          ctx.strokeRect(
            5 * this.length,
            4 * this.height,
            this.length,
            this.height
          );
          ctx.fillRect(
            5 * this.length,
            4 * this.height,
            this.length,
            this.height
          );
          ctx.fillStyle = randomColor(0, 255, 0, 1);
        }
        stagger++;
      }
      t++;
      if (t % (speed * 50) === 0) {
        ctx.globalCompositeOperation = this.modes[random(0, this.modes.length)];
        ctx.translate(w / 2, h / 2);
        ctx.rotate(this.rand2);
        ctx.translate(-w / 2, -h / 2);
        this.rand1 = random(0, 3);
        ctx.fillRect(
          w / 2 - this.rand1 * this.length,
          h / 2 - this.height * 1.5,
          this.rand1 * 2 * this.length,
          3 * this.height
        );
        ctx.strokeRect(
          w / 2 - this.rand1 * this.length,
          h / 2 - this.height * 2.5,
          this.rand1 * 2 * this.length,
          5 * this.height
        );
      }
      interval = requestAnimationFrame(this.draw);
    };
  }
}

class SpiralText {
  constructor() {
    this.x = random(0, w);
    this.y = random(0, w);
    this.rot1 = (random(1, 20) * Math.PI) / 180;
    this.picker = random(0, 11);

    ctx.globalCompositeOperation = "color";
    ctx.strokeStyle = randomColor();
    ctx.textAlign = "center";
    ctx.font = `bold ${random(10, 400)}px sans-serif`;

    this.draw = () => {
      if (t % speed === 0) {
        ctx.strokeText("SPIRAL", this.x, this.y);
        ctx.translate(w / 2, h / 2);
        ctx.rotate(this.rot1);
        ctx.translate(-w / 2, -h / 2);
        this.x = random(0, w);
      }
      t++;
      if (t % (speed * 90) === 0) {
        this.y = random(0, h);
        this.picker = random(0, 11);
        if (this.picker === 0) {
          ctx.strokeStyle = "white";
        } else if (this.picker === 1) {
          ctx.strokeStyle = "black";
        } else if (this.picker === 2 || this.picker === 3) {
          ctx.globalCompositeOperation = "color-dodge";
        } else if (this.picker === 4 || this.picker === 5) {
          ctx.globalCompositeOperation = "source-over";
        } else if (this.picker === 6) {
          ctx.globalCompositeOperation = "darken";
        } else if (this.picker === 7) {
          ctx.globalCompositeOperation = "color-burn";
        } else {
          ctx.globalCompositeOperation = "color";
        }
        ctx.strokeStyle = randomColor();
        ctx.font = `bold ${random(10, 400)}px sans-serif`;
      }
      if (t % (speed * 180) === 0) {
        this.rot1 = (random(1, 30) * Math.PI) / 180;
      }
      interval = requestAnimationFrame(this.draw);
    };
  }
}

class AlphabetSoup {
  constructor() {
    this.rot1 = (random(8, 35) * Math.PI) / 180;
    this.letters = [
      1301,
      1302,
      1303,
      1305,
      1306,
      1307,
      1308,
      1309,
      1311,
      1313,
      1314,
      1315,
      1316,
      1317,
      1319,
      1324,
      1325,
      1326,
      1328,
      1329,
      1330,
      1331,
      1332,
      1334,
      1337,
      1338,
      1340,
      1342,
      1344,
      1345,
      1347,
      1351,
      1354,
      1359,
      1361,
      1362,
      1363,
      1364,
      1365,
      1367,
      1369,
      1370,
      1371,
      1372,
      1373,
      1374,
      1375,
      1376,
      1377,
      1378,
      1383,
      1384,
      1385,
      1386,
      1388,
      1390,
      1392,
      1393,
      1397,
      1399,
      1400
    ];
    this.letter1 = String.fromCharCode(
      this.letters[random(0, this.letters.length)]
    );
    this.letter2 = String.fromCharCode(
      this.letters[random(0, this.letters.length)]
    );
    this.letter3 = String.fromCharCode(
      this.letters[random(0, this.letters.length)]
    );
    this.letter4 = String.fromCharCode(
      this.letters[random(0, this.letters.length)]
    );
    this.fontChange = random(35, 180);

    ctx.fillStyle = randomColor(0, 255, 0.45, 0.7);
    ctx.font = `${random(10, 180)}px sans-serif`;

    this.draw = () => {
      if (t % speed === 0) {
        ctx.fillText(
          `${this.letter1} ${this.letter2} ${this.letter3} ${this.letter4}`,
          w / 2,
          h / 2
        );
        ctx.translate(w / 2, h / 2);
        ctx.rotate(this.rot1);
        ctx.translate(-w / 2, -h / 2);
      }
      t++;
      if (t % (speed * 100) === 0) {
        this.fontChange = random(35, 180);
        ctx.font = `${this.fontChange}px sans-serif`;
        ctx.fillStyle = randomColor(0, 255, 0.45, 0.7);
      }
      if (t % (speed * 200) === 0) {
        this.rot1 = (random(8, 35) * Math.PI) / 180;
      }
      if (t % (speed * 400) === 0) {
        this.letter1 = String.fromCharCode(
          this.letters[random(0, this.letters.length)]
        );
        this.letter2 = String.fromCharCode(
          this.letters[random(0, this.letters.length)]
        );
        this.letter3 = String.fromCharCode(
          this.letters[random(0, this.letters.length)]
        );
        this.letter4 = String.fromCharCode(
          this.letters[random(0, this.letters.length)]
        );
      }
      interval = requestAnimationFrame(this.draw);
    };
  }
}

class Punctuation {
  constructor() {
    this.rot1 = (random(-359, -1) * Math.PI) / 180;
    this.fontChange = random(35, 250);
    this.letters = [
      "|",
      "(",
      ")",
      "-",
      "_",
      "{",
      "}",
      "[",
      "]",
      "\\",
      ":",
      "/",
      "<>",
      "~",
      "`",
      "."
    ];
    this.letter = this.letters[random(0, this.letters.length)];

    ctx.fillStyle = randomColor(0, 255, 0.66);
    ctx.font = `${random(15, 120)}px sans-serif`;

    this.draw = () => {
      if (t % speed === 0) {
        stagger = stagger % 4;
        if (stagger === 0) {
          ctx.translate(w / 2, h / 2);
          ctx.rotate(this.rot1);
          ctx.translate(-w / 2, -h / 2);
          ctx.fillText(`${this.letter}`, w / 2, h / 2);
        }
        if (stagger === 1) {
          ctx.fillText(`  ${this.letter}`, w / 2, h / 2);
          ctx.translate(w / 2, h / 2);
          ctx.rotate(this.rot1);
          ctx.translate(-w / 2, -h / 2);
        }
        if (stagger === 2) {
          ctx.fillText(`    ${this.letter}`, w / 2, h / 2);
        }
        if (stagger === 3) {
          ctx.fillText(`      ${this.letter}`, w / 2, h / 2);
        }
        stagger++;
      }
      t++;
      if (t % (speed * 100) === 0) {
        this.rot1 = (random(-35, -10) * Math.PI) / 180;
        this.fontChange = random(35, 250);
        ctx.font = `${this.fontChange}px sans-serif`;
      }
      if (t % (speed * 200) === 0) {
        ctx.fillStyle = randomColor(0, 255, 0.66);
      }
      if (t % (speed * 400) === 0) {
        this.letter = this.letters[random(0, this.letters.length)];
      }
      interval = requestAnimationFrame(this.draw);
    };
  }
}

class Stargate {
  constructor() {
    this.fontChange = random(15, 100);
    this.rot1 = (random(2, 178) * Math.PI) / 180;
    this.filter = true;

    ctx.fillStyle = randomColor(0, 255, 0.8);
    ctx.font = `${random(25, 125)}px sans-serif`;

    this.draw = () => {
      if (t % speed === 0) {
        ctx.fillText(`*** ****  **** ** *`, w / 2, h / 2);
        ctx.translate(w / 2, h / 2);
        ctx.rotate(this.rot1);

        ctx.translate(-w / 2, -h / 2);
      }
      t++;
      if (t % (speed * 90) === 0) {
        this.fontChange = random(15, 100);
        ctx.font = `${this.fontChange}px sans-serif`;
        ctx.fillStyle = randomColor(0, 255, 0.8);
        this.rot1++;
        ctx.filter = this.filter ? "blur(3px)" : "blur(0px)";
        this.filter = !this.filter;
      }
      interval = requestAnimationFrame(this.draw);
    };
  }
}

class AccelerationMandala {
  constructor() {
    this.letters = [
      1002,
      1006,
      1031,
      1033,
      1039,
      1046,
      1054,
      1064,
      1078,
      1092,
      1912,
      1916,
      1920,
      1921,
      1935,
      1944,
      1959,
      1963,
      1964,
      1968,
      1988,
      1991,
      1993,
      1997,
      12398
    ];
    this.letter = String.fromCharCode(
      this.letters[random(0, this.letters.length)]
    );
    this.rot = 1;

    ctx.strokeStyle = randomColor(12, 255, 0.33);
    ctx.font = `bold ${random(125, 550)}px sans-serif`;
    ctx.textAlign = "center";

    this.draw = () => {
      if (t % speed === 0) {
        ctx.strokeText(this.letter, w / 2, h / 2);
        ctx.translate(w / 2, h / 2);
        ctx.rotate(((this.rot + 1) * Math.PI) / 180);
        ctx.translate(-w / 2, -h / 2);
      }
      t++;
      if (t % (speed * 45) === 0) {
        this.rot++;
      }
      if (t % (speed * 90) === 0) {
        ctx.strokeStyle = randomColor(12, 255, 0.33);
      }
      if (t % (speed * 135) === 0) {
        ctx.font = `bold ${random(125, 550)}px sans-serif`;
      }
      if (t % (speed * 360) === 0) {
        this.letter = String.fromCharCode(
          this.letters[random(0, this.letters.length)]
        );
      }
      interval = requestAnimationFrame(this.draw);
    };
  }
}

class EvolvingMandala {
  constructor() {
    this.letters = [
      1101,
      1102,
      1103,
      1104,
      1107,
      1111,
      1114,
      1115,
      1116,
      1118,
      1120,
      1121,
      1123,
      1126,
      1127,
      1130,
      1133,
      1135,
      1136,
      1137,
      1139,
      1140,
      1141,
      1144,
      1146,
      1148,
      1152,
      1154,
      1155,
      1156,
      1160,
      1161,
      1168,
      1169,
      1174,
      1176,
      1180,
      1185,
      1187,
      1188,
      1194,
      1197,
      1198,
      1199,
      1200,
      1202,
      1204,
      1205,
      1208,
      1209,
      1210,
      1216,
      1218,
      1219,
      1229,
      1231,
      1233,
      1234,
      1237,
      1238,
      1240,
      1242,
      1244,
      1246,
      1249,
      1251,
      1254,
      1255,
      1261,
      1262,
      1265,
      1266,
      1267,
      1269,
      1270,
      1271,
      1273,
      1274,
      1275,
      1276,
      1278,
      1280,
      1284,
      1286,
      1294,
      10400
    ];
    this.letter = String.fromCharCode(
      this.letters[random(0, this.letters.length)]
    );
    this.rot = random(4, 356);

    speed *= 2;
    ctx.strokeStyle = randomColor(20, 255, 0.85);
    ctx.font = `bold ${random(70, 260)}px sans-serif`;
    ctx.textAlign = "center";

    this.draw = () => {
      if (t % speed === 0) {
        ctx.strokeText(
          this.letter + " " + this.letter + "  " + this.letter,
          w / 2,
          h / 2
        );
        ctx.translate(w / 2, h / 2);
        ctx.rotate((this.rot * Math.PI) / 180);
        ctx.translate(-w / 2, -h / 2);
      }
      t++;
      if (t % (speed * 45) === 0) {
        let pick = Math.random();
        if (pick < 0.075) {
          ctx.strokeStyle = "black";
        } else if (pick < 0.15) {
          ctx.strokeStyle = "white";
        } else {
          ctx.strokeStyle = randomColor(20, 255, 0.85);
        }
        this.rot += 2;
      }
      if (t % (speed * 90) === 0) {
        ctx.font = `bold ${random(70, 260)}px sans-serif`;
      }
      if (t % (speed * 360) === 0) {
        this.rot = random(4, 356);
        this.letter = String.fromCharCode(
          this.letters[random(0, this.letters.length)]
        );
      }
      interval = requestAnimationFrame(this.draw);
    };
  }
}

class TheIris {
  constructor() {
    this.letter1 = String.fromCharCode(random(300, 100000));
    this.letter2 = String.fromCharCode(random(300, 100000));
    this.rot = random(-45, 45);
    ctx.fillStyle = randomColor(0, 255, 0.2);
    ctx.strokeStyle = "black";
    ctx.font = `bold ${random(50, 300)}px sans-serif`;
    ctx.textAlign = "center";

    this.draw = () => {
      if (t % speed === 0) {
        ctx.fillText(this.letter1 + `   ` + this.letter2, w / 2, h / 2);
        ctx.strokeText(this.letter1 + `   ` + this.letter2, w / 2, h / 2);
        ctx.translate(w / 2, h / 2);
        ctx.rotate(((this.rot + 1) * Math.PI) / 180);
        ctx.translate(-w / 2, -h / 2);
      }
      t++;
      if (t % (speed * 45) === 0) {
        ctx.font = `bold ${random(50, 300)}px sans-serif`;
        ctx.fillStyle = randomColor(0, 255, 0.2);
      }
      if (t % (speed * 360) === 0) {
        this.rot = random(-45, 45);
      }
      interval = requestAnimationFrame(this.draw);
    };
  }
}

class Quadrants {
  constructor() {
    this.radius = random(5, 250);

    ctx.strokeStyle = ctx.fillStyle = randomColor(0, 255, 0.3);

    this.draw = () => {
      if (t % speed === 0) {
        stagger = stagger % 5;
        if (stagger === 0) {
          ctx.arc(w / 4, h / 4, this.radius, 0, 360);
          ctx.stroke();
          ctx.beginPath();
        }
        if (stagger === 1) {
          ctx.arc(w * 0.75, h / 4, this.radius, 0, 360);
          ctx.stroke();
          ctx.beginPath();
        }
        if (stagger === 2) {
          ctx.arc(w / 4, h * 0.75, this.radius, 0, 360);
          ctx.stroke();
          ctx.beginPath();
        }
        if (stagger === 3) {
          ctx.arc(w * 0.75, h * 0.75, this.radius, 0, 360);
          ctx.stroke();
          ctx.beginPath();
        }
        if (stagger === 4) {
          ctx.arc(w / 2, h / 2, this.radius, 0, 360);
          ctx.stroke();
          ctx.beginPath();
        }
        stagger++;
      }
      t++;
      if (t % (speed * 15) === 0) {
        this.radius = random(10, 350);
      }
      if (t % (speed * 45) === 0) {
        ctx.strokeStyle = ctx.fillStyle = randomColor(0, 255, 0.3);
      }
      if (t % (speed * 225) === 0) {
        ctx.lineWidth = random(1, 40);
        ctx.strokeStyle = ctx.fillStyle = "black";
      }
      interval = requestAnimationFrame(this.draw);
    };
  }
}

class GalaxyAttractor {
  constructor() {
    this.side = random(20, Math.max(w, h));
    this.rotate = random(1, 359);
    this.dash1 = random(1, 25);
    this.dash2 = random(6, 60);

    ctx.setLineDash([this.dash1, this.dash2]);
    ctx.shadowColor = ctx.strokeStyle = randomColor(0, 255, 0.3, 0.8);
    ctx.shadowBlur = 8;

    this.draw = () => {
      if (t % speed === 0) {
        ctx.moveTo(random(0, w), random(0, h));
        ctx.quadraticCurveTo(this.side, this.side, w / 2, h / 2);
        ctx.stroke();
        this.side = random(20, Math.max(w, h));
      }
      ctx.translate(w / 2, h / 2);
      ctx.rotate(this.rotate);
      ctx.translate(-w / 2, -h / 2);
      t++;
      if (t % (speed * 40) === 0) {
        ctx.beginPath();
        ctx.shadowColor = ctx.strokeStyle = randomColor(0, 255, 0.3, 0.8);
      }
      if (t % (speed * 400) === 0) {
        this.dash1 = random(1, 25);
        this.dash2 = random(6, 60);
        ctx.setLineDash([this.dash1, this.dash2]);
      }
      interval = requestAnimationFrame(this.draw);
    };
  }
}

class AlienFlowers {
  constructor() {
    this.modes = [
      "hard-light",
      "color-dodge",
      "multiply",
      "overlay",
      "color-burn"
    ];

    ctx.shadowColor = ctx.strokeStyle = randomColor(5, 255, 0.1);
    ctx.shadowOffsetX = ctx.shadowOffsetY = ctx.lineWidth = random(3, 36);
    ctx.lineJoin = "bevel";
    ctx.setLineDash([random(1, 100), random(5, 200)]);
    ctx.globalCompositeOperation = "source-over";
    ctx.lineCap = "round";
    ctx.shadowBlur = 5;
    ctx.beginPath();

    this.draw = () => {
      if (t % speed === 0) {
        stagger = stagger % 4;
        if (stagger === 0) {
          ctx.moveTo(w / 2, h / 2);
          ctx.bezierCurveTo(
            random(0, w / 2),
            random(0, h / 2),
            random(0, w / 4),
            random(0, h / 4),
            0,
            0
          );
          ctx.stroke();
        }
        if (stagger === 1) {
          ctx.moveTo(w / 2, h / 2);
          ctx.bezierCurveTo(
            random(w / 2, w),
            random(0, h / 2),
            random(w * 0.75, w),
            random(0, h * 0.25),
            w,
            0
          );
          ctx.stroke();
        }
        if (stagger === 2) {
          ctx.moveTo(w / 2, h / 2);
          ctx.bezierCurveTo(
            random(w / 2, w),
            random(h / 2, h),
            random(w * 0.75, w),
            random(h * 0.75, h),
            w,
            h
          );
          ctx.stroke();
        }
        if (stagger === 3) {
          ctx.moveTo(w / 2, h / 2);
          ctx.bezierCurveTo(
            random(0, w / 2),
            random(h / 2, h),
            random(0, w * 0.25),
            random(h * 0.75, h),
            0,
            h
          );
          ctx.stroke();
        }
        stagger++;
      }
      t++;
      if (t % (speed * 16) === 0) {
        ctx.translate(w / 2, h / 2);
        ctx.rotate((random(1, 359) * 180) / Math.PI);
        ctx.translate(-w / 2, -h / 2);
      }
      if (t % (speed * 32) === 0) {
        ctx.beginPath();
        ctx.globalCompositeOperation = this.modes[random(0, this.modes.length)];
      }
      if (t % (speed * 64) === 0) {
        ctx.beginPath();
        ctx.shadowColor = ctx.strokeStyle = randomColor(5, 255, 0.1);
        ctx.shadowOffsetX = ctx.shadowOffsetY = ctx.lineWidth = random(3, 36);
      }
      if (t % (speed * 256) === 0) {
        ctx.setLineDash([random(1, 100), random(5, 200)]);
      }
      interval = requestAnimationFrame(this.draw);
    };
  }
}

class HyperTunnel {
  constructor() {
    this.side = random(25, Math.min(w, h));
    this.rotate = random(95, 175);
    ctx.strokeStyle = randomColor(5, 255, 0.25);

    if (this.side > Math.min(w, h) / 2) {
      ctx.fillStyle = randomColor(5, 255, 0.02);
    } else {
      ctx.fillStyle = randomColor(5, 255, 0.2);
    }

    this.draw = () => {
      if (t % speed === 0) {
        ctx.beginPath();
        ctx.moveTo(w / 2, h / 2);
        ctx.lineTo(w / 2 - this.side / 2, h / 2 - this.side / 2);
        ctx.stroke();
        ctx.moveTo(w / 2, h / 2);
        ctx.lineTo(w / 2 + this.side / 2, h / 2 - this.side / 2);
        ctx.stroke();
        ctx.lineTo(w / 2 - this.side / 2, h / 2 - this.side / 2);
        ctx.stroke();
        ctx.fill();
        ctx.translate(w / 2, h / 2);
        ctx.rotate((this.rotate * Math.PI) / 180);
        ctx.translate(-w / 2, -h / 2);
      }
      t++;
      if (t % (speed * (360 / this.rotate)) === 0) {
        this.side = random(25, Math.min(w, h));
        ctx.strokeStyle = randomColor(5, 255, 0.25);
        if (this.side > Math.min(w, h) / 2) {
          ctx.fillStyle = randomColor(5, 255, 0.02);
        } else {
          ctx.fillStyle = randomColor(5, 255, 0.2);
        }
      }
      if (t % (speed * 75) === 0) {
        this.rotate = random(95, 175);
        this.side = random(25, Math.max(w, h));
        ctx.strokeStyle = randomColor(5, 255, 0.25);
        if (this.side > Math.min(w, h) / 2) {
          ctx.fillStyle = randomColor(5, 255, 0.02);
        } else {
          ctx.fillStyle = randomColor(5, 255, 0.1);
        }
      }
      interval = requestAnimationFrame(this.draw);
    };
  }
}

class ChalkGalaxy {
  constructor() {
    this.letters = [
      1401,
      1402,
      1403,
      1404,
      1406,
      1407,
      1408,
      1410,
      1411,
      1412,
      1413,
      1414,
      1415,
      1417,
      1418,
      1425,
      1426,
      1427,
      1428,
      1429,
      1430,
      1431,
      1440,
      1441,
      1470,
      1472,
      1475,
      1478,
      1490,
      1491,
      1492,
      1493,
      1495,
      1499,
      1500,
      10157
    ];
    this.letter = String.fromCharCode(
      this.letters[random(0, this.letters.length)]
    );
    this.rotate = random(1, 179);
    ctx.strokeStyle = randomColor(150, 255, 0.25);
    ctx.font = `${random(100, 500)}px bold`;
    ctx.fillStyle = "rgba(0, 0, 0, 0.45)";
    ctx.fillRect(0, 0, w, h);
    this.draw = this.draw.bind(this);
  }
  draw() {
    if (t % speed === 0) {
      ctx.strokeText(this.letter, w / 2, h / 2);
      ctx.translate(w / 2, h / 2);
      ctx.rotate(this.rotate);
      ctx.translate(-w / 2, -h / 2);
    }
    t++;
    if (t % (speed * 100) === 0) {
      ctx.strokeStyle = randomColor(170, 255, 0.2);
      ctx.font = `${random(100, 600)}px bold`;
    }
    if (t % (speed * 500) === 0) {
      ctx.strokeStyle = randomColor(0, 115, 0.2);
      this.rotate = random(1, 179);
    }
    if (t % (speed * 1000) === 0) {
      this.letter = String.fromCharCode(
        this.letters[random(0, this.letters.length)]
      );
    }
    interval = requestAnimationFrame(this.draw);
  }
}

class Patterns {
  constructor() {
    this.radius = random(10, 250);
    this.rows = Math.ceil(h / 100) + 2;
    this.cols = Math.ceil(w / 100) + 2;

    ctx.globalCompositeOperation = "overlay";
    ctx.globalAlpha = 0.1;
    ctx.strokeStyle = "white";
    ctx.lineWidth = 3;
    ctx.fillStyle = randomColor(0, 255, 0.05, 0.6);

    this.draw = () => {
      if (t % speed === 0) {
        for (let i = 0; i <= this.rows; i++) {
          for (let j = 0; j <= this.cols; j++) {
            ctx.beginPath();
            ctx.arc(100 * j - 50, 100 * i - 50, this.radius, 0, 2 * Math.PI);
            ctx.stroke();
            ctx.fill();
          }
        }
      }
      t++;
      if (t % (speed * 40) === 0) {
        this.radius = random(10, 250);
        ctx.globalCompositeOperation = "xor";
        ctx.strokeStyle = "black";
        ctx.fillStyle = randomColor(0, 255, 0.05, 0.6);
        ctx.beginPath();
        ctx.arc(w / 2, h / 2, this.radius * 3, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fill();
        ctx.globalCompositeOperation = "overlay";
        ctx.strokeStyle = "white";
      }
      interval = requestAnimationFrame(this.draw);
    };
  }
}

class RotationPatterns {
  constructor() {
    this.radiusX = random(10, 250);
    this.radiusY = random(10, 250);
    this.rows = Math.ceil(h / this.radiusY) + 5;
    this.cols = Math.ceil(w / this.radiusX) + 5;
    this.rotate = (random(1, 50) * Math.PI) / 180;

    ctx.globalAlpha = 0.33;
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    ctx.fillStyle = randomColor(0, 255, 0.1, 0.5);

    this.draw = () => {
      if (t % speed === 0) {
        for (let i = 0; i <= this.rows; i++) {
          ctx.translate(w / 2, h / 2);
          ctx.rotate(this.rotate);
          ctx.translate(-w / 2, -h / 2);
          for (let j = 0; j <= this.cols; j++) {
            ctx.strokeRect(
              this.radiusX * j,
              this.radiusY * i,
              this.radiusX,
              this.radiusY
            );
          }
        }
      }
      t++;
      if (t % (speed * 15) === 0) {
        ctx.strokeStyle = randomColor(0, 255, 0.1, 0.5);
      }
      if (t % (speed * 45) === 0) {
        this.radiusX = random(10, 250);
        this.radiusY = random(10, 250);
        this.rows = Math.ceil(h / this.radiusY) + 5;
        this.cols = Math.ceil(w / this.radiusX) + 5;
      }
      if (t % (speed * 90) === 0) {
        ctx.lineWidth = random(2, 9);
      }
      interval = requestAnimationFrame(this.draw);
    };
  }
}

class Microscope {
  constructor() {
    this.radiusX = random(35, 415);
    this.radiusY = random(35, 415);
    this.rows = Math.ceil(h / this.radiusY) + 5;
    this.cols = Math.ceil(w / this.radiusX) + 5;
    this.rotate = random(1, 20);
    this.modes = [
      "xor",
      "difference",
      "hard-light",
      "color-burn",
      "color-dodge",
      "lighten",
      "darken",
      "overlay",
      "source-atop",
      "soft-light",
      "source-over",
      "luminosity",
      "exclusion"
    ];

    ctx.shadowColor = ctx.strokeStyle = randomColor(0, 255, 0.5);
    ctx.shadowBlur = 6;

    this.draw = () => {
      if (t % speed === 0) {
        for (let i = 0; i <= this.rows; i++) {
          ctx.globalCompositeOperation = this.modes[
            random(0, this.modes.length)
          ];
          ctx.translate(w / 2, h / 2);
          ctx.rotate(this.rotate);
          ctx.translate(-w / 2, -h / 2);
          for (let j = 0; j <= this.cols; j++) {
            ctx.beginPath();
            ctx.ellipse(
              this.radiusX * j,
              this.radiusY * i,
              this.radiusX,
              this.radiusY,
              0,
              2 * Math.PI,
              false
            );
            ctx.stroke();
          }
        }
      }
      t++;
      if (t % (speed * 50) === 0) {
        ctx.shadowColor = ctx.strokeStyle = randomColor(0, 255, 0.5);
      }
      if (t % (speed * 100) === 0) {
        this.radiusX = random(35, 415);
        this.radiusY = random(35, 415);
        this.rows = Math.ceil(h / this.radiusY) + 5;
        this.cols = Math.ceil(w / this.radiusX) + 5;
      }
      interval = requestAnimationFrame(this.draw);
    };
  }
}

class Spinner {
  constructor() {
    this.color1 = randomColor();
    this.color2 = randomColor();
    this.side = Math.min(w, h);
    this.gap1 = random(15, 150);
    this.gap2 = random(-150, -15);
    ctx.fillStyle = this.color1;
    this.draw = () => {
      if (t % speed === 0) {
        ctx.translate(w / 2, h / 2);
        ctx.rotate((this.gap1 * Math.PI) / 180);
        ctx.lineWidth = 2;
        ctx.globalCompositeOperation = "hard-light";
        ctx.globalAlpha = 0.08;
        ctx.shadowColor = ctx.fillStyle = this.color1;
        ctx.shadowBlur = 8;
        ctx.fillRect(
          w / 2 - this.side / 2,
          h / 2 - this.side / 2,
          this.side,
          this.side
        );
        ctx.translate(-w / 2, -h / 2);
        ctx.lineWidth = 3;
        ctx.globalAlpha = 0.2;
        ctx.shadowBlur = 0;
        ctx.globalCompositeOperation = "difference";
        ctx.fillStyle = this.color2;
        ctx.fillRect(w / 2, h / 2, this.gap1 * 2, this.gap2 * 2);
      }
      t++;
      if (t % (speed * 50) === 0) {
        this.side = random(200, Math.max(w, h) / 2);
        this.gap1 = random(15, 150);
        this.gap2 = random(-150, -15);
        this.color2 = randomColor();
      }
      if (t % (speed * 100) === 0) {
        ctx.beginPath();
        this.color1 = randomColor();
      }
      interval = requestAnimationFrame(this.draw);
    };
  }
}

class FlawedMirror {
  constructor() {
    this.letters = [
      33,
      34,
      42,
      43,
      65,
      90,
      94,
      166,
      175,
      177,
      191,
      192,
      195,
      198,
      199,
      204,
      208,
      210,
      212,
      247,
      256,
      294,
      298
    ];
    this.letter = String.fromCharCode(
      this.letters[random(0, this.letters.length)]
    );
    this.rotate = random(1, 23);
    ctx.globalAlpha = 0.5;
    ctx.font = random(60, 660) + "px serif";
    ctx.textAlign = "center";
    ctx.strokeStyle = randomColor();
    this.draw = () => {
      if (t % speed === 0) {
        ctx.strokeText(this.letter, w / 2, h / 2);
        ctx.translate(w / 2, h / 2);
        ctx.rotate(this.rotate);
        ctx.strokeText(this.letter, 0, 0);
        ctx.translate(-w / 2, -h / 2);
        this.rotate = random(1, 23);
      }
      t++;
      if (t % (speed * 100) === 0) {
        ctx.strokeStyle = randomColor();
        ctx.font = random(60, 660) + "px serif";
      }
      if (t % (speed * 1000) === 0) {
        this.letter = String.fromCharCode(
          this.letters[random(0, this.letters.length)]
        );
      }
      interval = requestAnimationFrame(this.draw);
    };
  }
}

class ThePlatter {
  constructor() {
    this.letters = [
      302,
      306,
      308,
      310,
      313,
      323,
      324,
      325,
      327,
      328,
      332,
      336,
      337,
      345,
      350,
      354,
      358,
      363,
      365,
      366,
      370,
      371,
      373,
      375,
      380,
      381,
      383,
      388,
      390,
      399
    ];
    this.letter = String.fromCharCode(
      this.letters[random(0, this.letters.length)]
    );
    this.rotate = (random(2, 358) * Math.PI) / 180;
    ctx.font = random(125, 750) + "px serif";
    ctx.textAlign = "center";
    ctx.strokeStyle = randomColor(0, 255, 0.06);
    this.draw = () => {
      if (t % speed === 0) {
        ctx.strokeText(this.letter, w / 2, h / 2);
        ctx.translate(w / 2, h / 2);
        ctx.rotate(this.rotate);
        ctx.strokeText(this.letter, 0, 0);
        ctx.translate(-w / 2, -h / 2);
      }
      t++;
      if (t % (speed * 180) === 0) {
        ctx.strokeStyle = randomColor(0, 255, 0.06);
        ctx.font = random(125, 750) + "px serif";
        this.rotate = (random(2, 358) * Math.PI) / 180;
        this.letter = String.fromCharCode(
          this.letters[random(0, this.letters.length)]
        );
        ctx.lineWidth = random(1, 15);
      }
      interval = requestAnimationFrame(this.draw);
    };
  }
}

class SpaceGears {
  constructor() {
    this.letters = [
      402,
      406,
      407,
      409,
      410,
      412,
      414,
      415,
      418,
      420,
      423,
      424,
      425,
      428,
      429,
      430,
      433,
      437,
      438,
      439,
      440,
      443,
      444,
      448,
      449,
      450,
      451,
      458,
      461,
      474,
      478,
      480,
      484,
      488,
      491,
      494
    ];
    this.letter = String.fromCharCode(428);
    this.rotate = (random(3, 357) * Math.PI) / 180;
    ctx.font = random(100, 700) + "px serif";

    ctx.strokeStyle = randomColor(0, 255, 0.6);
    this.draw = () => {
      if (t % speed === 0) {
        ctx.textAlign = "left";
        ctx.strokeText(" " + this.letter.repeat(3), 0, 0);
        ctx.translate(w / 2, h / 2);
        ctx.rotate(this.rotate);
        ctx.textAlign = "center";
        ctx.strokeText(this.letter, 0, 0);
        ctx.translate(-w / 2, -h / 2);
      }
      t++;
      if (t % (speed * 120) === 0) {
        ctx.strokeStyle = randomColor(0, 255, 0.6);
        ctx.font = random(100, 700) + "px serif";
      }
      if (t % (speed * 1260) === 0) {
        this.rotate = (random(3, 357) * Math.PI) / 180;
        this.letter = String.fromCharCode(
          this.letters[random(0, this.letters.length)]
        );
      }
      interval = requestAnimationFrame(this.draw);
    };
  }
}

class LightBringer {
  constructor() {
    this.letters = [
      501,
      502,
      503,
      508,
      509,
      522,
      525,
      526,
      528,
      530,
      533,
      534,
      538,
      547,
      558,
      562,
      567,
      589
    ];
    this.letter = String.fromCharCode(
      this.letters[random(0, this.letters.length)]
    );
    this.light = true;
    this.rotate = (random(5, 355) * Math.PI) / 180;

    ctx.font = random(30, 300) + "px sans-serif";
    ctx.textAlign = "center";
    ctx.globalAlpha = 0.7;
    ctx.globalCompositeOperation = "lighter";
    ctx.fillStyle = randomColor(0, 255, 0.8);

    this.draw = () => {
      if (t % speed === 0) {
        ctx.translate(w / 2, h / 2);
        ctx.rotate(this.rotate);
        ctx.fillText(
          "  " + this.letter.repeat(3) + "  " + this.letter.repeat(2),
          0,
          0
        );
        ctx.translate(-w / 2, -h / 2);
      }
      t++;
      if (t % (speed * 40) === 0) {
      }
      if (t % (speed * 72) === 0) {
        this.rotate = (random(5, 355) * Math.PI) / 180;
        ctx.fillStyle = randomColor(0, 255, 0.8);
        ctx.font = random(30, 300) + "px sans-serif";
      }
      if (t % (speed * 360) === 0) {
        this.light = !this.light;
        ctx.globalCompositeOperation = this.light ? "lighter" : "multiply";
        this.letter = String.fromCharCode(
          this.letters[random(0, this.letters.length)]
        );
      }
      interval = requestAnimationFrame(this.draw);
    };
  }
}

class CounterClock {
  constructor() {
    this.letters = [
      607,
      611,
      615,
      616,
      617,
      618,
      619,
      622,
      625,
      629,
      632,
      639,
      643,
      650,
      656,
      662,
      664,
      676,
      683,
      684,
      685,
      688,
      690,
      691,
      694,
      697,
      698,
      699
    ];
    this.letter = String.fromCharCode(
      this.letters[random(0, this.letters.length)]
    );
    this.color = randomColor();
    this.rotate = (8 * Math.PI) / 180;

    ctx.font = random(75, 750) + "px sans-serif";
    ctx.lineWidth = 2;
    ctx.textAlign = "center";
    ctx.shadowColor = ctx.strokeStyle = this.color;
    ctx.shadowBlur = 3;

    this.draw = () => {
      if (t % speed === 0) {
        ctx.translate(w / 2, h / 2);
        ctx.strokeText("   " + this.letter, 0, 0);
        ctx.rotate(-this.rotate);
        ctx.translate(-w / 2, -h / 2);
        ctx.beginPath();
      }
      t++;
      if (t % (speed * 45) === 0) {
        ctx.font = random(75, 750) + "px sans-serif";
        let col = Math.random();
        if (col < 0.125) {
          ctx.lineWidth = 1;
          ctx.shadowBlur = 5;
          this.color = "white";
        } else if (col < 0.25) {
          ctx.lineWidth = 3;
          this.color = "black";
        } else {
          ctx.shadowBlur = 3;
          ctx.lineWidth = 2;
          this.color = randomColor();
        }
        ctx.shadowColor = ctx.strokeStyle = this.color;
      }
      if (t % (speed * 450) === 0) {
        this.letter = String.fromCharCode(
          this.letters[random(0, this.letters.length)]
        );
      }
      interval = requestAnimationFrame(this.draw);
    };
  }
}

class Clock {
  constructor() {
    this.modes = [
      "xor",
      "difference",
      "hard-light",
      "exclusion",
      "multiply",
      "color-burn",
      "color-dodge",
      "lighten",
      "darken",
      "overlay",
      "source-over"
    ];
    this.letters = [
      701,
      702,
      703,
      706,
      707,
      708,
      710,
      711,
      712,
      713,
      714,
      715,
      716,
      717,
      718,
      719,
      720,
      721,
      722,
      724,
      726,
      727,
      729,
      730,
      731,
      732,
      733,
      734,
      735,
      737,
      740,
      741,
      744,
      745,
      746,
      747,
      749,
      753,
      754,
      756,
      757,
      758,
      759,
      760,
      761,
      762,
      764,
      766,
      769,
      771,
      772,
      776,
      778,
      781,
      782,
      784,
      790,
      794,
      795,
      796
    ];
    this.letter = String.fromCharCode(
      this.letters[random(0, this.letters.length)]
    );
    this.color = randomColor(0, 255, 0.66);
    this.rotate = (18 * Math.PI) / 180;

    ctx.globalCompositeOperation = "source-over";
    ctx.font = random(60, 600) + "px sans-serif";
    ctx.lineWidth = 3;
    ctx.textAlign = "center";
    ctx.shadowColor = ctx.strokeStyle = this.color;
    ctx.shadowBlur = 8;

    this.draw = () => {
      if (t % speed === 0) {
        ctx.translate(w / 2, h / 2);
        ctx.strokeText("  " + this.letter, 0, 0);
        ctx.rotate(this.rotate);
        ctx.translate(-w / 2, -h / 2);
        ctx.beginPath();
      }
      t++;
      if (t % (speed * 40) === 0) {
        ctx.font = random(60, 600) + "px sans-serif";
        let col = Math.random();
        if (col < 0.15) {
          ctx.lineWidth = 2;
          ctx.shadowBlur = 12;
          this.color = "rgba(255, 255, 255, 0.5)";
        } else if (col < 0.3) {
          ctx.lineWidth = 5;
          this.color = "rgba(0, 0, 0, 0.5)";
        } else {
          ctx.shadowBlur = 8;
          ctx.lineWidth = 3;
          this.color = randomColor(0, 255, 0.66);
        }
        ctx.shadowColor = ctx.strokeStyle = this.color;
      }
      if (t % (speed * 120) === 0) {
        ctx.globalCompositeOperation = this.modes[random(0, this.modes.length)];
      }
      if (t % (speed * 200) === 0) {
        this.letter = String.fromCharCode(
          this.letters[random(0, this.letters.length)]
        );
      }
      interval = requestAnimationFrame(this.draw);
    };
  }
}

class CakeDecorator {
  constructor() {
    this.letters = [
      801,
      803,
      805,
      808,
      809,
      810,
      811,
      812,
      816,
      817,
      820,
      822,
      823,
      826,
      827,
      829,
      831,
      832,
      836,
      837,
      839,
      840,
      841,
      843,
      845,
      846,
      848,
      850,
      857,
      858,
      859,
      860,
      866,
      894
    ];
    this.letter = String.fromCharCode(
      this.letters[random(0, this.letters.length)]
    );
    this.fontSize = random(50, 350);
    this.rotate = (random(5, 355) * Math.PI) / 180;

    ctx.strokeStyle = randomColor(10, 255, 0.6, 0.9);
    ctx.fillStyle = randomColor(10, 255, 0.1);
    ctx.globalCompositeOperation = "overlay";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = "bold " + this.fontSize + "px serif";

    this.draw = () => {
      if (t % speed === 0) {
        stagger = stagger % 4;
        if (stagger === 0) {
          ctx.strokeText(this.letter, w * 0.25, h * 0.25);
          ctx.fillText(this.letter, w * 0.25, h * 0.25);
        }
        if (stagger === 1) {
          ctx.strokeText(this.letter, w * 0.75, h * 0.25);
          ctx.fillText(this.letter, w * 0.75, h * 0.25);
        }
        if (stagger === 2) {
          ctx.strokeText(this.letter, w * 0.75, h * 0.75);
          ctx.fillText(this.letter, w * 0.75, h * 0.75);
        }
        if (stagger === 3) {
          ctx.strokeText(this.letter, w * 0.25, h * 0.75);
          ctx.fillText(this.letter, w * 0.25, h * 0.75);
        }
        ctx.translate(w / 2, h / 2);
        ctx.rotate(this.rotate);
        ctx.translate(-w / 2, -h / 2);

        stagger++;
      }
      t++;
      if (t % (speed * 60) === 0) {
        ctx.strokeStyle = randomColor(10, 255, 0.4, 0.8);
        ctx.fillStyle = randomColor(10, 255, 0.05);
        this.fontSize = random(50, 350);
        ctx.font = "bold " + this.fontSize + "px serif";
      }
      if (t % (speed * 360) === 0) {
        this.rotate = (random(5, 355) * Math.PI) / 180;
      }
      if (t % (speed * 720) === 0) {
        this.letter = String.fromCharCode(
          this.letters[random(0, this.letters.length)]
        );
      }
      interval = requestAnimationFrame(this.draw);
    };
  }
}

class TribalTatoo {
  constructor() {
    this.letters = [
      901,
      903,
      926,
      931,
      932,
      933,
      935,
      938,
      939,
      943,
      944,
      947,
      953,
      954,
      955,
      964,
      965,
      967,
      970,
      978,
      979,
      983,
      986,
      987,
      989,
      990,
      993,
      995,
      999
    ];
    this.letter = String.fromCharCode(
      this.letters[random(0, this.letters.length)]
    );
    this.fontSize = random(50, 150);
    this.rotations = [15, 30, 45, 72, 90];
    this.rotate =
      (this.rotations[random(0, this.rotations.length)] * Math.PI) / 180;

    ctx.strokeStyle = randomColor(10, 255, 0.5, 0.8);
    ctx.fillStyle = randomColor(10, 255, 0.5);
    ctx.lineWidth = 3;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = "bold " + this.fontSize + "px serif";

    this.draw = () => {
      if (t % speed === 0) {
        stagger = stagger % 3;
        if (stagger === 0) {
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.strokeText((this.letter + " ").repeat(5), w * 0.5, h * 0.333);
          ctx.fillText((this.letter + " ").repeat(5), w * 0.5, h * 0.333);
        }
        if (stagger === 1) {
          ctx.textAlign = "left";
          ctx.textBaseline = "top";
          ctx.strokeText((this.letter + " ").repeat(3), w * 0.333, h * 0.666);
          ctx.fillText((this.letter + " ").repeat(3), w * 0.333, h * 0.666);
        }
        if (stagger === 2) {
          ctx.textAlign = "right";
          ctx.textBaseline = "bottom";
          ctx.strokeText("   " + this.letter, w * 0.666, h * 0.666);
          ctx.fillText("   " + this.letter, w * 0.666, h * 0.666);
        }
        ctx.translate(w / 2, h / 2);
        ctx.rotate(this.rotate);
        ctx.translate(-w / 2, -h / 2);
        stagger++;
      }
      t++;
      if (t % (speed * 90) === 0) {
        this.fontSize = random(50, 150);
        ctx.font = "bold " + this.fontSize + "px serif";
        ctx.strokeStyle = randomColor(10, 255, 0.5, 0.8);
        ctx.fillStyle = randomColor(10, 255, 0.5);
      }
      if (t % (speed * 270) === 0) {
        this.letter = String.fromCharCode(
          this.letters[random(0, this.letters.length)]
        );
      }
      if (t % (speed * 540) === 0) {
        this.rotate =
          (this.rotations[random(0, this.rotations.length)] * Math.PI) / 180;
      }
      interval = requestAnimationFrame(this.draw);
    };
  }
}

class Pseye {
  constructor() {
    this.letters = [
      1502,
      1505,
      1509,
      1510,
      1511,
      1512,
      1513,
      1520,
      1522,
      1524,
      1540,
      1546,
      1549,
      1550,
      1553,
      1554,
      1555,
      1556,
      1558,
      1559,
      1566,
      1568,
      1569,
      1570,
      1571,
      1572,
      1573,
      1574,
      1575,
      1576,
      1577,
      1578,
      1583,
      1584,
      1586,
      1587,
      1590,
      1593,
      1597,
      1598,
      1599
    ];
    this.letter = String.fromCharCode(
      this.letters[random(0, this.letters.length)]
    );
    this.x1 = random(0, w / 2);
    this.y1 = random(0, h / 2);
    this.x2 = random(0, w);
    this.y2 = random(0, h);
    this.rotate = (random(3, 357) * Math.PI) / 180;

    ctx.globalCompositeOperation = "exclusion";
    ctx.fillStyle = randomColor(0, 255, 0.1, 0.3);
    ctx.strokeStyle = randomColor(0, 255, 0.5, 1);
    ctx.lineWidth = random(1, 8);
    ctx.font = `bold ${random(35, 350)}px serif`;
    ctx.textAlign = "center";

    this.draw = () => {
      if (t % speed === 0) {
        ctx.translate(w / 2, h / 2);
        ctx.rotate(this.rotate);
        ctx.fillText(this.letter, this.x1, this.y1);
        ctx.moveTo(this.x1, this.y1);
        ctx.lineTo(this.x2, this.y2);
        ctx.stroke();
        ctx.fillText(this.letter, this.x2, this.y2);
        ctx.translate(-w / 2, -h / 2);
      }
      t++;
      if (t % (speed * 50) === 0) {
        this.x1 = random(0, w / 2);
        this.y1 = random(0, h / 2);
        this.x2 = random(0, w);
        this.y2 = random(0, h);
        ctx.beginPath();
        ctx.globalCompositeOperation = "hard-light";
      }
      if (t % (speed * 100) === 0) {
        ctx.font = `bold ${random(35, 350)}px serif`;
        ctx.fillStyle = randomColor(0, 255, 0.1, 0.3);
        ctx.beginPath();
        ctx.globalCompositeOperation = "multiply";
        ctx.strokeStyle = randomColor(0, 255, 0.5, 1);
      }
      if (t % (speed * 300) === 0) {
        this.letter = String.fromCharCode(
          this.letters[random(0, this.letters.length)]
        );
        ctx.beginPath();
        ctx.globalCompositeOperation = "overlay";
      }
      if (t % (speed * 600) === 0) {
        ctx.lineWidth = random(1, 8);
      }
      if (t % (speed * 1200) === 0) {
        this.rotate = (random(3, 357) * Math.PI) / 180;
      }
      interval = requestAnimationFrame(this.draw);
    };
  }
}

class NuclearVortex {
  constructor() {
    this.x1 = random(0, w / 2);
    this.y1 = random(0, h / 2);
    this.x2 = random(0, w);
    this.y2 = random(0, h);
    this.rotate = (random(4, 176) * Math.PI) / 180;
    this.color1 = randomColor(50, 150, 0.1, 0.35);
    this.color2 = randomColor(50, 150, 0.1, 0.35);
    this.color3 = randomColor(50, 150, 0.1, 0.35);
    this.color4 = randomColor(50, 150, 0.1, 0.35);
    this.colors = [
      this.color1,
      this.color2,
      "rgba(255, 255, 255, 0.5)",
      this.color3,
      this.color4,
      "black"
    ];
    this.col = 0;

    ctx.setLineDash([random(10, 150), random(10, 150)]);
    ctx.globalAlpha = 0.2;
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    ctx.strokeStyle = this.color1;
    ctx.lineWidth = 2;

    this.draw = () => {
      if (t % speed === 0) {
        ctx.moveTo(this.x1, this.y1);
        ctx.lineTo(this.x2, this.y2);
        ctx.stroke();
        ctx.translate(w / 2, h / 2);
        ctx.rotate(this.rotate);
        ctx.translate(-w / 2, -h / 2);
      }
      t++;
      if (t % (speed * 90) === 0) {
        this.x1 = random(0, w / 2);
        this.y1 = random(0, h / 2);
        this.x2 = random(0, w);
        this.y2 = random(0, h);
        this.rotate = (random(4, 176) * Math.PI) / 180;
      }
      if (t % (speed * 180) === 0) {
        ctx.beginPath();
        ctx.setLineDash([random(10, 150), random(10, 150)]);
        this.col++;
        if (this.col > this.colors.length - 1) this.col = 0;
        ctx.strokeStyle = this.colors[this.col];
      }
      if (t % (speed * 1080) === 0) {
        ctx.setLineDash([random(10, 100), random(10, 100)]);
        this.color1 = randomColor(50, 150, 0.1, 0.35);
        this.color2 = randomColor(50, 150, 0.1, 0.35);
        this.color3 = randomColor(50, 150, 0.1, 0.35);
        this.color4 = randomColor(50, 150, 0.1, 0.35);
        this.colors = [
          this.color1,
          this.color2,
          "rgba(255, 255, 255, 0.5)",
          this.color3,
          this.color4,
          "black"
        ];
        this.col = 0;
        ctx.strokeStyle = this.color1;
      }
      interval = requestAnimationFrame(this.draw);
    };
  }
}

// initial setup of canvas settings and listeners
function init() {
  // display some user tips on screen
  displayMsg("WELCOME");
  setTimeout(() => {
    displayMsg("PRESS H FOR HELP");
  }, 10000);
  setTimeout(() => {
    displayMsg("TIP: F FOR FULLSCREEN");
  }, 20000);
  // set the basic canvas settings
  ctx.strokeStyle = randomColor(5, 255, 0.8, 0.8);
  ctx.fillStyle = randomColor(5, 255, 0.5, 0.5);
  ctx.imageSmoothingQuality = "high";
  ctx.lineWidth = 1;
  ctx.shadowBlur = 0;
  ctx.save();

  // LISTENERS
  //change canvas size on window resize
  window.addEventListener("resize", () => {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
    canvas.click();
  });
  // keystroke listeners
  window.addEventListener("keyup", (e) => {
    // spacebar listener creates new spiral
    if (e.keyCode === 32) {
      canvas.click();
    }
    // f key for fullscreen
    if (e.keyCode === 70) {
      document.body.requestFullscreen();
    }
    // i key increases auto-change time
    if (e.keyCode === 73) {
      autoChange += 10;
      if (autoChange > 300) autoChange = 300;
      displayMsg(`Auto-change: ${autoChange}secs`);
    }
    // d key decreases auto-change time
    if (e.keyCode === 68) {
      autoChange -= 10;
      if (autoChange < 10) autoChange = 10;
      displayMsg(`Auto-change: ${autoChange}secs`);
    }
    // m key toggles manual mode
    if (e.keyCode === 77) {
      manual = !manual;
      displayMsg(manual ? "Manual mode" : "Auto mode");
    }
    // s key silences algorithm change messages
    if (e.keyCode === 83) {
      silent = !silent;
      displayMsg(silent ? "Silent mode" : "Display mode");
      algosDisplay.textContent = "";
      algosDisplay.style.display = "none";
    }
    // h key toggles help screen view
    if (e.keyCode === 72) {
      helpView = !helpView;
      if (helpView) {
        help.style.display = "block";
      } else {
        help.style.display = "none";
      }
    }
  });
  // make algorithms auto-change if not in manual mode
  if (!manual) {
    regen = setInterval(() => {
      canvas.click();
    }, autoChange * 1000);
  }
}

// run init and start a random class spiral
init();
let runningAlgo = new SpiralText();
runningAlgo.draw();

// the click listener resets settings and draws a new spiral
canvas.addEventListener("click", () => {
  // clear any timers
  cancelAnimationFrame(interval);
  interval = null;
  clearInterval(regen);
  t = 0;
  stagger = 0;
  // setup new auto-change timer if not in manual mode
  if (!manual) {
    regen = setInterval(() => {
      canvas.click();
    }, autoChange * 1000);
  }
  // new random speed
  speed = random(2, 6);
  // canvas resets
  ctx.restore();
  // picks a transition mode
  canvas.style.backgroundColor = "transparent";
  clearMethod();
  ctx.strokeStyle = randomColor(5, 255, 0.8, 0.8);
  ctx.fillStyle = randomColor(5, 255, 0.5, 0.5);
  ctx.beginPath();
  // selects next algorithm
  chooseAlgos();
});

// helper function for random nums
function random(min, max) {
  const num = Math.floor(Math.random() * (max - min)) + min;
  return num;
}

// helper function for random colors
function randomColor(minC = 0, maxC = 255, minA = 1, maxA = minA) {
  const r = random(minC, maxC);
  const g = random(minC, maxC);
  const b = random(minC, maxC);
  const a = +(Math.random() * (maxA - minA) + minA).toFixed(3);
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}

// chooses a transition method when spirals change
function clearMethod() {
  let pick = Math.random();
  // clears to black a portion of the screen based on the canvas size and its rotation at the moment
  if (pick < 0.25) {
    ctx.clearRect(0, 0, w, h);
    // makes semi-transparent a portion of the screen based on the canvas size and its rotation at the moment
  } else if (pick < 0.5) {
    ctx.fillStyle = "rgba(0, 0, 0, 0.75)";
    ctx.fillRect(0, 0, w, h);
  } else if (pick < 0.75) {
    // colors a portion of the screen based on the canvas size and its rotation at the moment, with random transparency
    ctx.fillStyle = randomColor(5, 255, 0.15, 0.9);
    ctx.fillRect(0, 0, w, h);
    // completely fills the screen with black
  } else {
    canvas.width = canvas.height = 0;
    canvas.width = w;
    canvas.height = h;
  }
  ctx.strokeStyle = randomColor(5, 255, 0.8, 0.8);
}

// displays the current algorithm on the screen for a few seconds when changing
function displayAlgos(algo) {
  // only if silent mode is not on
  if (!silent) {
    clearTimeout(algoTimer);
    algosDisplay.textContent = algo;
    algosDisplay.style.display = "block";
    algoTimer = setTimeout(() => {
      algosDisplay.style.display = "none";
      algosDisplay.textContent = "";
    }, 5000);
  }
}

// displays messages on the screen for a few seconds in response to user actions
function displayMsg(message) {
  clearTimeout(msgTimer);
  msg.textContent = message;
  msg.style.display = "block";
  msgTimer = setTimeout(() => {
    msg.style.display = "none";
    msg.textContent = "";
  }, 7500);
}

let pointer;

canvas.addEventListener("mousemove", () => {
  if (pointer) {
    pointer = null;
  }
  canvas.style.cursor = "pointer";
  pointer = setTimeout(() => {
    canvas.style.cursor = "none";
  }, 5000);
});

// MUSIC PLAYER

// DOM references
const player = document.getElementById("player");
const input = document.getElementById("input");
const label = document.getElementById("click-label");
const playList = document.getElementById("playlist");
const playBtn = document.getElementById("play");
const playIcon = document.getElementById("play-pause-icon");
const stopBtn = document.getElementById("stop");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const audio = document.getElementById("audio");
const progress = document.getElementById("progress-percent");

// initial settings
let playerShow = true;
let trackList = [];
let currentSong = 0;
let isPlaying = false;
let playlistEls;

// listener for file input
input.addEventListener("change", handleFiles, false);

// handles the files and adds them to playlist
function handleFiles() {
  // pause if playing and re-init settings
  audio.pause();
  isPlaying = false;
  playIcon.name = "play-outline";
  playList.innerHTML = "";
  currentSong = 0;
  trackList = [];
  const files = this.files;
  // add li for each song, create playlist
  for (let i = 0; i < files.length; i++) {
    let listItem = document.createElement("li");
    listItem.classList.add("list-item");
    listItem.textContent = files[i].name.slice(0, files[i].name.indexOf("."));
    playList.appendChild(listItem);
    let objectURL = window.URL.createObjectURL(files[i]);
    trackList.push(objectURL);
  }
  let song = trackList[currentSong];
  audio.src = song;
  // style and prepare playlist for playback
  playlistEls = document.getElementsByClassName("list-item");
  playlistEls[currentSong].scrollIntoView();
  playlistEls[currentSong].style.color = "rgba(255, 165, 0, 0.5)";
}

// play or pause current song
function playTrack() {
  // if paused, play
  if (!isPlaying && playlistEls) {
    isPlaying = !isPlaying;
    playIcon.name = "pause-outline";
    updatePlaylistStyle();
    audio.play();
  } else {
    // if playing, pause
    if (playlistEls) {
      isPlaying = !isPlaying;
      playlistEls[currentSong].style.color = "rgba(255, 165, 0, 0.5)";
      playIcon.name = "play-outline";
      audio.pause();
    }
  }
}

// stop the track, rewind it and de-saturate color of li in playlist
function stopPlayback() {
  if (isPlaying) {
    audio.pause();
    audio.currentTime = 0;
    isPlaying = false;
    playIcon.name = "play-outline";
    [...playlistEls].forEach((el) => (el.style.color = "#555"));
    playlistEls[currentSong].style.color = "rgba(255, 165, 0, 0.5)";
  } else {
    if (playlistEls) {
      audio.currentTime = 0;
    }
  }
}

// cue the next track and play it if play is on
function playPrev() {
  if (playlistEls) {
    audio.pause();
    audio.currentTime = 0;
    progress.value = 0;
    currentSong--;
    if (currentSong < 0) currentSong = trackList.length - 1;
    updatePlaylistStyle();
    audio.src = trackList[currentSong];
    if (isPlaying) {
      audio.play();
    } else {
      playlistEls[currentSong].style.color = "rgba(255, 165, 0, 0.5)";
    }
  }
}

// cue the previous track and play it if play is on
function playNext() {
  if (playlistEls) {
    audio.pause();
    audio.currentTime = 0;
    progress.value = 0;
    currentSong++;
    if (currentSong > trackList.length - 1) currentSong = 0;
    updatePlaylistStyle();
    audio.src = trackList[currentSong];
    if (isPlaying) {
      audio.play();
    } else {
      playlistEls[currentSong].style.color = "rgba(255, 165, 0, 0.5)";
    }
  }
}

// calculates and displays the current track's progress
function displayProgress() {
  const currentTime = audio.currentTime;
  const progressPercent = (currentTime / audio.duration) * 100;
  progress.value = Number.isFinite(progressPercent)
    ? progressPercent.toFixed(2)
    : "0";
}

// skips to the clicked time on the progress bar
function scrub(e) {
  if (playlistEls) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * audio.duration;
    audio.currentTime = scrubTime;
    if (isPlaying) {
      audio.play();
    }
  }
}

// helper function for styling the playlist after changes
function updatePlaylistStyle() {
  [...playlistEls].forEach((el) => (el.style.color = "#555"));
  playlistEls[currentSong].style.color = "orange";
  playlistEls[currentSong].scrollIntoView();
}

// music player event listeners
playBtn.addEventListener("click", playTrack);
stopBtn.addEventListener("click", stopPlayback);
nextBtn.addEventListener("click", playNext);
prevBtn.addEventListener("click", playPrev);
audio.addEventListener("timeupdate", displayProgress);
audio.addEventListener("ended", playNext);
progress.addEventListener("mousedown", () => audio.pause());
progress.addEventListener("mouseup", scrub);
window.addEventListener("keyup", hidePlayer);

// hide/show the player with the p key
function hidePlayer(e) {
  if (e.keyCode === 80) {
    if (playerShow) {
      playerShow = !playerShow;
      player.style.display = "none";
    } else {
      playerShow = !playerShow;
      player.style.display = "block";
    }
  }
}