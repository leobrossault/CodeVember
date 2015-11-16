import THREE from 'three';
import TWEEN from 'tween';

export default class Sphere extends THREE.Object3D {
	constructor(x, y, z) {
		super ();
		this.radius = Math.random() * 1;
		this.geomPoint = new THREE.SphereBufferGeometry(this.radius, 8, 8);
		// this.bufferPoint = new THREE.BufferGeometry().fromGeometry(this.geomPoint);
		this.matPoint = new THREE.MeshBasicMaterial({color: 0xffffff, transparent: true, opacity: 0});

		this.meshPoint = new THREE.Mesh(this.geomPoint, this.matPoint);

		this.position.x = x;
		this.position.y = y;
		this.position.z = z;

		this.add(this.meshPoint); 
		console.log(this.geomPoint);
	}

	update() {
		let random = Math.random() * 10;

		if (random > 5) {
			if (this.matPoint.opacity < 1) {
				this.matPoint.opacity += 0.2;
				this.geomPoint.radius += 0.2;
			}
		} else {
			if (this.matPoint.opacity > 0) {
				this.matPoint.opacity -= 0.2;
				this.geomPoint.radius -= 0.2;
			}
		}
	}
}