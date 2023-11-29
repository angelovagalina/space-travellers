import * as THREE from "three";
import { ImprovedNoise } from 'https://cdn.skypack.dev/three@0.133.1/examples/jsm/math/ImprovedNoise.js';

let noise = new ImprovedNoise()
let clock = new THREE.Clock();

export function geometryNoise(radius = 1, speed, geometry) {
    let t = clock.getElapsedTime() * speed;

    let nPos = [];
    let v3 = new THREE.Vector3();
    let pos = geometry.attributes.position;

    for (let i = 0; i < pos.count; i++){
        v3.fromBufferAttribute(pos, i).normalize();
        nPos.push(v3.clone());
    }
    geometry.userData.nPos = nPos;

    geometry.userData.nPos.forEach((p, idx) => {
        let ns = 1 + 0.4 * noise.noise(p.x + t, p.y + t, p.z + t);
        v3.copy(p).multiplyScalar(radius).addScaledVector(p, ns);
        pos.setXYZ(idx, v3.x, v3.y, v3.z);
    })
    geometry.computeVertexNormals();
    pos.needsUpdate = true;
}

export class CustomSinCurve extends THREE.Curve {

	constructor(scale = 1) {
		super();
		this.scale = scale;
	}

	getPoint(t, optionalTarget = new THREE.Vector3()) {
		const tx = t;
		const ty = -t * t;
		const tz = 0;

		return optionalTarget.set(tx, ty, tz).multiplyScalar(this.scale);
	}
}

export function curvePath(x, y, z, target = new THREE.Vector3(), scale) {
    return target.set(x, y, z).multiplyScalar(scale);
}
