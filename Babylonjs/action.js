import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r132/build/three.module.js';

AFRAME.registerComponent('change-code-hover', {
  schema: {
    color: {default: 'red'}
  },

  init: function () {
    var data = this.data;
    var el = this.el;  // this object
    var defaultColor = el.getAttribute('material').color;

    el.addEventListener('mousedown', function () {
      el.setAttribute('color', data.color);
      el.setAttribute('visible', data.true);
      console.log("I am visible");
    });

    el.addEventListener('mouseup', function () {
      el.setAttribute('color', defaultColor);
      el.setAttribute('visible', data.false);
      console.log("Invisible as hell");
    });
  }
});

setInterval(rotateCube, 3000);
var SPEED = 0.01;

function rotateCube() {
  console.log("moving on...........");
    cube.rotation.x -= SPEED * 2;
    cube.rotation.y -= SPEED;
    cube.rotation.z -= SPEED * 3;
}

// With three.js

setInterval(rotate-hover, 5);

AFRAME.registerComponent('rotate-hover', {
  schema: {
    color: {default: 'red'}
  },

  update: function () {
    var data = this.data;
    //var el = this.el;  // this object
    const el = document.querySelector('#Venus');
    console.log("I am working");
    el.object3D.rotation.set(
      THREE.Math.degToRad(400),
      THREE.Math.degToRad(30),
      THREE.Math.degToRad(30)
    );
    el.object3D.rotation.x += Math.PI;

   

  }
});

//el.components.animation.animation.duration