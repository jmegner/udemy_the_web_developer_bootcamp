function rand(upper) {
  return Math.random() * upper;
}

function randSpan(lower, upper) {
  return Math.random() * (upper - lower) + lower;
}

function randRgbComponent() {
  return rand(255);
}

function randColor() {
  return new Color(rand(1), rand(1), rand(1))
}

function randPoint() {
  var minX = 0;
  var minY = 0;

  var maxX = view.size.width;
  var maxY = view.size.height;

  if (arguments.length == 0) {
  }
  else if (arguments.length == 2) {
    maxX = arguments[0];
    maxY = arguments[1];
  }
  else if (arguments.length == 4) {
    minX = arguments[0];
    minY = arguments[1];
    maxX = arguments[2];
    maxY = arguments[3];
  }
  else {
    throw new Error("need 2 args (maxX, maxY) or 4 args (minX, minY, maxX, maxY)");
  }

  var x = randSpan(minX, maxX);
  var y = randSpan(minY, maxY);

  return new Point(x, y);
}

function onKeyDown(event) {
  var circle = new Path.Circle(randPoint(), 300);
  var keyDatum = g_keyData[event.key];

  if (keyDatum) {
    circle.fillColor = keyDatum.color;
    keyDatum.sound.play();
  }
  else {
    circle.fillColor = randColor();
  }

  g_circles.push(circle);
}

function onFrame(event) {
  for (var i = g_circles.length - 1; i >= 0; i--) {
    var circle = g_circles[i];

    if (circle.bounds.width < 1) {
      g_circles[i].remove();
      g_circles.splice(i, 1);
    }
    else {
      circle.fillColor.hue += 2;
      circle.scale(0.9);
    }
  }
}

var g_circles = [];

var g_keyData = {
  q: {
    sound: new Howl({
      src: ['sounds/bubbles.mp3']
    }),
    color: '#1abc9c'
  },
  w: {
    sound: new Howl({
      src: ['sounds/clay.mp3']
    }),
    color: '#2ecc71'
  },
  e: {
    sound: new Howl({
      src: ['sounds/confetti.mp3']
    }),
    color: '#3498db'
  },
  r: {
    sound: new Howl({
      src: ['sounds/corona.mp3']
    }),
    color: '#9b59b6'
  },
  t: {
    sound: new Howl({
      src: ['sounds/dotted-spiral.mp3']
    }),
    color: '#34495e'
  },
  y: {
    sound: new Howl({
      src: ['sounds/flash-1.mp3']
    }),
    color: '#16a085'
  },
  u: {
    sound: new Howl({
      src: ['sounds/flash-2.mp3']
    }),
    color: '#27ae60'
  },
  i: {
    sound: new Howl({
      src: ['sounds/flash-3.mp3']
    }),
    color: '#2980b9'
  },
  o: {
    sound: new Howl({
      src: ['sounds/glimmer.mp3']
    }),
    color: '#8e44ad'
  },
  p: {
    sound: new Howl({
      src: ['sounds/moon.mp3']
    }),
    color: '#2c3e50'
  },
  a: {
    sound: new Howl({
      src: ['sounds/pinwheel.mp3']
    }),
    color: '#f1c40f'
  },
  s: {
    sound: new Howl({
      src: ['sounds/piston-1.mp3']
    }),
    color: '#e67e22'
  },
  d: {
    sound: new Howl({
      src: ['sounds/piston-2.mp3']
    }),
    color: '#e74c3c'
  },
  f: {
    sound: new Howl({
      src: ['sounds/prism-1.mp3']
    }),
    color: '#95a5a6'
  },
  g: {
    sound: new Howl({
      src: ['sounds/prism-2.mp3']
    }),
    color: '#f39c12'
  },
  h: {
    sound: new Howl({
      src: ['sounds/prism-3.mp3']
    }),
    color: '#d35400'
  },
  j: {
    sound: new Howl({
      src: ['sounds/splits.mp3']
    }),
    color: '#1abc9c'
  },
  k: {
    sound: new Howl({
      src: ['sounds/squiggle.mp3']
    }),
    color: '#2ecc71'
  },
  l: {
    sound: new Howl({
      src: ['sounds/strike.mp3']
    }),
    color: '#3498db'
  },
  z: {
    sound: new Howl({
      src: ['sounds/suspension.mp3']
    }),
    color: '#9b59b6'
  },
  x: {
    sound: new Howl({
      src: ['sounds/timer.mp3']
    }),
    color: '#34495e'
  },
  c: {
    sound: new Howl({
      src: ['sounds/ufo.mp3']
    }),
    color: '#16a085'
  },
  v: {
    sound: new Howl({
      src: ['sounds/veil.mp3']
    }),
    color: '#27ae60'
  },
  b: {
    sound: new Howl({
      src: ['sounds/wipe.mp3']
    }),
    color: '#2980b9'
  },
  n: {
    sound: new Howl({
      src: ['sounds/zig-zag.mp3']
    }),
    color: '#8e44ad'
  },
  m: {
    sound: new Howl({
      src: ['sounds/moon.mp3']
    }),
    color: '#2c3e50'
  }
};
