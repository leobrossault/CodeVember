import domready from 'domready';
import Scene from './Scene';
import raf from 'raf';

let scene;

domready(() => {
  scene = new Scene(window.innerWidth, window.innerHeight);
  animate ();
});

function animate () {
  raf(animate);
  scene.render();
}