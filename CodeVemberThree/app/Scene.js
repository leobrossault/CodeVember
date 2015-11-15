import THREE from 'three';
window.THREE = THREE;


import Sphere from './Elements/Sphere.js';

export default class Scene {
	constructor(width, height) {
	    this.scene = new THREE.Scene();

	    this.camera = new THREE.PerspectiveCamera(50, width / height, 1, 1000);
	    this.camera.position.x = 0;
	    this.camera.position.z = 100;
	    this.camera.position.y = 0;
	    this.camera.lookAt(new THREE.Vector3(0, 0, 0));

	    this.light = new THREE.AmbientLight(0xffffff);

	    this.renderer = new THREE.WebGLRenderer();
	    this.renderer.setSize(width, height);
	    document.body.appendChild(this.renderer.domElement);

	    this.axes = new THREE.AxisHelper(30);

	    /* VAR */


	    /* INIT ELEMENTS */
	    this.sphere = new Sphere(20, 30, 30);


	    /* ADD ELEMENTS */
	    this.scene.add(this.light);
	    this.scene.add(this.axes);
	    this.scene.add(this.sphere);
	}

	render () {
		this.renderer.autoClear = false;
	  	this.renderer.clear();
	  	this.renderer.render(this.scene, this.camera);

	  	this.sphere.update();
	}	
}