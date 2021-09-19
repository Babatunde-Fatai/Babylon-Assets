import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r132/build/three.module.js';


AFRAME.registerComponent('cursor-listener', {
  init: function () {
    var lastIndex = -1;
    var COLORS = ['red', 'green', 'blue'];
    this.el.addEventListener('click', function (evt) {
      lastIndex = (lastIndex + 1) % COLORS.length;
      this.setAttribute('material', 'color', COLORS[lastIndex]);
      console.log('I was clicked at: ', evt.detail.intersection.point);
    });
  }
});

document.querySelector('#Sun').addEventListener('click', function () {
  this.setAttribute('material', 'color', 'red');
  console.log('I was clicked!');
});


const el = document.querySelector('#Sun').object3D;
// With three.js
el.object3D.rotation.set(
  THREE.Math.degToRad(15),
  THREE.Math.degToRad(30),
  THREE.Math.degToRad(90)
);
el.object3D.rotation.x += Math.PI;

// With .setAttribute (less recommended).
//el.setAttribute('rotation', {x: 15, y: 30, z: 90});
