import Scene from './Scene';

const canvas = document.getElementById('canvas');
const scene = new Scene(canvas, window.innerWidth, window.innerHeight);

window.addEventListener('resize', resize);

function resize () {
  scene.resize(window.innerWidth, window.innerHeight);
}
