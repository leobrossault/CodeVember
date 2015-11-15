import THREE from 'three';
import Point from './Point.js';

export default class Sphere extends THREE.Object3D {
	constructor(radius, width, height) {
		super ();
		this.geom = new THREE.SphereGeometry(radius , width, height);
	    this.mat = new THREE.MeshPhongMaterial({color: 0x000000, wireframe: true});
	    this.mesh = new THREE.Mesh(this.geom, this.mat);
	    this.points = [];

	    for (let i = 0; i < this.geom.vertices.length; i ++) {
	    	let rand = Math.floor(Math.random() * 10);
	    	if (rand > 5) {
	    		let point = new Point(this.geom.vertices[i].x, this.geom.vertices[i].y, this.geom.vertices[i].z);
	    		this.points.push(point);
	    		this.add(point);
	    	}
	    }

	    this.add(this.mesh);
	}

	update () {
		this.rotation.y += 0.01;

		for (let i = 0; i < this.points.length; i ++) {
			this.points[i].update();
		}
	}
}