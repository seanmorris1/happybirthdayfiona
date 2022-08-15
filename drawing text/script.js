// Drawing with text. Ported from Generative Design book - http://www.generative-gestaltung.de - Original licence: http://www.apache.org/licenses/LICENSE-2.0

// Application variables
var position = {x: 0, y: window.innerHeight/2};
var counter = 0;
var minFontSize = 15;
var angleDistortion = 0;
var letters = "Hi Fiona, that message is 423 days old. Can you believe that? That one simple message started all this. That's 423 amazing days I have gotten to spend with you. I hope you realize how powerful that one message actually was considering you finding it cringe. It ended up being the the best message that I have ever gotten and I am so happy to be with you. I love you! Oh, by the way, this isn't the end. Try clicking on the notifications.";

// Drawing variables
var canvas;
var context;
var mouse = {x: 0, y: 0, down: false}

function init() {
  canvas = document.getElementById( 'canvas' );
  context = canvas.getContext( '2d' );
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  canvas.addEventListener('mousemove', mouseMove, false);
  canvas.addEventListener('mousedown', mouseDown, false);
  canvas.addEventListener('mouseup',   mouseUp,   false);
  canvas.addEventListener('mouseout',  mouseUp,  false);  
  canvas.addEventListener('dblclick', doubleClick, false);
  
  window.onresize = function(event) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
}

function mouseMove ( event ){
  mouse.x = event.pageX;
  mouse.y = event.pageY;
  draw();
}

function draw() {
 if ( mouse.down ) {
    var d = distance( position, mouse );
    var fontSize = minFontSize + d/2;
    var letter = letters[counter];
    var stepSize = textWidth( letter, fontSize );
    
    if (d > stepSize) {
      var angle = Math.atan2(mouse.y-position.y, mouse.x-position.x);
      
      context.font = fontSize + "px Georgia";
    
      context.save();
      context.translate( position.x, position.y);
      context.rotate( angle );
      context.fillText(letter,0,0);
      context.restore();

      counter++;
      if (counter > letters.length) {
        counter === 0;
      }
    
    //console.log (position.x + Math.cos( angle ) * stepSize)
      position.x = position.x + Math.cos(angle) * stepSize;
      position.y = position.y + Math.sin(angle) * stepSize;

      }
  }     
}

function distance( pt, pt2 ){
  
  var xs = 0;
  var ys = 0;
 
  xs = pt2.x - pt.x;
  xs = xs * xs;
 
  ys = pt2.y - pt.y;
  ys = ys * ys;
 
  return Math.sqrt( xs + ys );
}

function mouseDown( event ){
  mouse.down = true;
  position.x = event.pageX;
  position.y = event.pageY;
  
  document.getElementById('info').style.display = 'none';
}

function mouseUp( event ){
    mouse.down = false;
}

function doubleClick( event ) {
  canvas.width = canvas.width;
  }






function textWidth( string, size ) {
  context.font = size + "px Georgia";
  
  if ( context.fillText ) {
    return context.measureText( string ).width;
  } else if ( context.mozDrawText) {
    return context.mozMeasureText( string );
  }
  
 };

init();