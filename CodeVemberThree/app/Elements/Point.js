import THREE from 'three';

export default class Sphere extends THREE.Object3D {
	constructor(x, y, z) {
		super ();
		this.radius = Math.random() * 1;
		this.geomPoint = new THREE.SphereGeometry(this.radius, 8);
		this.matPoint = new THREE.MeshBasicMaterial({color: 0xffffff});
		this.meshPoint = new THREE.Mesh(this.geomPoint, this.matPoint);

		this.position.x = x;
		this.position.y = y;
		this.position.z = z;

		this.add(this.meshPoint); 
	}

	update() {
		let random = Math.random() * 10;

		if (random > 9) {
			this.matPoint.color.setHex(0xffffff);
		} else {
			this.matPoint.color.setHex(0x000000);
		}
	}
}