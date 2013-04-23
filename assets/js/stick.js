var socket = io.connect('/')
, angle
, angle_offset = 0;

function sendHit(action)
{
  console.log(action);
  socket.emit('device-motion', action);
};

window.addEventListener('shake', shaken, false);


function shaken(){
  if(angle <= 45){
    sendHit('crash');
  }
  if(angle > 45 && angle <= 90){
    sendHit('tom1');
  }
  if(angle > 90 && angle <= 135){
    sendHit('tom2');
  }
  if(angle > 135 && angle <= 225){
    sendHit('cowbell');
  }
  if(angle > 225 && angle <= 270){
    sendHit('china');
  }
  if(angle > 270 && angle <= 315){
    sendHit('hihat');
  }
  if(angle > 315){
    sendHit('snare');
  }
}

$(document).on('vclick', document, function(){
  if(angle > 200){
    sendHit('snare');
  }
  if(angle < 150){
    sendHit('hihat');
  }
});

if(window.DeviceOrientationEvent) {
  window.addEventListener("deviceorientation", function(event) {
    var rotateDegrees = event.alpha;
    var leftToRight = event.gamma;
    var frontToBack = event.beta;
    angle = Math.round(rotateDegrees);
    // handleOrientationEvent(frontToBack, leftToRight,
    //rotateDegrees);
  }, false);
}

// function handleOrientationEvent(z,x,o) {
//   var data = {
//     z: (Math.round(z)),
//     x: (Math.round(x)),
//     o: (Math.round(o))
//   };
//socket.emit('testing', data);
// }

