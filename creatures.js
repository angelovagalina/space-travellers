import * as THREE from "three";
import { CustomSinCurve, curvePath } from "./utils.js";

// Spirit
const spiritMaterial = new THREE.MeshMatcapMaterial({
    color: new THREE.Color(0xADD8E6),
});
// Head 
const geometry1 = new THREE.SphereGeometry(1, 32, 16);
const material1 = new THREE.MeshBasicMaterial({ color: 0xffffff });
const sphere1 = new THREE.Mesh(geometry1, spiritMaterial);
sphere1.position.y = 2.5;

// Body
const geometry = new THREE.SphereGeometry(1, 32, 16); 
const material = new THREE.MeshNormalMaterial();
const sphere = new THREE.Mesh(geometry, spiritMaterial);
sphere.position.y = -1;

// Hat 
const geometry2 = new THREE.ConeGeometry(2.4, 1, 32);
const cone = new THREE.Mesh(geometry2, spiritMaterial);
cone.position.y = 3.2;

export const spirit = new THREE.Group();
spirit.position.y = 2.5;
spirit.position.x = 1;
spirit.add(sphere);
spirit.add(sphere1);
spirit.add(cone);

// Animal
const animalMaterial = new THREE.MeshMatcapMaterial({
    color: new THREE.Color(0xADD8E6),
});
// Beak
const beakGeometry = new THREE.ConeGeometry(0.6, 5, 16);
const beak = new THREE.Mesh(beakGeometry, animalMaterial);
beak.position.x = -6;
beak.rotateZ(Math.PI/2);

// Neck
const neckGeometry = new THREE.CylinderGeometry(0.8, 0.8, 8, 32);
const neck = new THREE.Mesh(neckGeometry, animalMaterial);
neck.position.x = -3;
neck.position.y = -3;

// Body
const bodyGeometry = new THREE.BoxGeometry(9, 3, 2); 
const animalBody = new THREE.Mesh(bodyGeometry, animalMaterial);
animalBody.position.y = -7.3;
animalBody.position.x = 0.5;

// Legs
const curve1 = new THREE.CubicBezierCurve3(
	new THREE.Vector3(0, 0, 0 ),
	new THREE.Vector3(-8, -2, 0),
	new THREE.Vector3(-1, -8, 0),
    new THREE.Vector3(-0.5, -10, 0)
);
const legGeometry = new THREE.TubeGeometry(curve1, 20, 0.5, 8, false);
const leg1 = new THREE.Mesh(legGeometry, animalMaterial);
leg1.position.x = -2;
leg1.position.y = -8;
leg1.position.z = 0.5;

const curve2 = new THREE.CubicBezierCurve3(
	new THREE.Vector3(0, 0, 0 ),
	new THREE.Vector3(-1, -3, 0),
	new THREE.Vector3(-1, -8, 0),
    new THREE.Vector3(2, -10, 0)
);
const legGeometry2 = new THREE.TubeGeometry(curve2, 20, 0.5, 8, false);
const leg2 = new THREE.Mesh(legGeometry2, animalMaterial);
leg2.position.x = -3;
leg2.position.y = -8;
leg2.position.z = -0.5;

const curve3 = new THREE.CubicBezierCurve3(
	new THREE.Vector3(-5, 0, 0 ),
	new THREE.Vector3(-8, -6, 0),
	new THREE.Vector3(-1, -8, 0),
    new THREE.Vector3(1, -10, 0)
);
const legGeometry3 = new THREE.TubeGeometry(curve3, 20, 0.5, 8, false);
const leg3 = new THREE.Mesh(legGeometry3, animalMaterial);
leg3.position.x = 9;
leg3.position.y = -8;
leg3.position.z = 0.5;

const curve4 = new THREE.CubicBezierCurve3(
	new THREE.Vector3(-5, 0, 0 ),
	new THREE.Vector3(-6, -5, 0),
	new THREE.Vector3(1, -8, 0),
    new THREE.Vector3(3, -9, 0)
);
const legGeometry4 = new THREE.TubeGeometry(curve4, 20, 0.5, 8, false);
const leg4 = new THREE.Mesh(legGeometry4, animalMaterial);
leg4.position.x = 9;
leg4.position.y = -8;
leg4.position.z = -0.5;

export const animal = new THREE.Group();
animal.position.y = 4;
animal.add(beak);
animal.add(neck);
animal.add(animalBody);
animal.add(leg1);
animal.add(leg2);
animal.add(leg3);
animal.add(leg4);
