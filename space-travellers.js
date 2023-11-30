import * as THREE from "three";
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { bird } from "./creatures/bird.js";
import { spirit } from "./creatures/spirit.js";
import { geometryNoise } from "./utils.js";

// Some initial basic setup
const scene = new THREE.Scene();
// d4f2fa
scene.background = new THREE.Color(0xd1f0ff);

const camera = new THREE.PerspectiveCamera(80, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(-1, 8, 13);

// Renderer
const renderer = new THREE.WebGLRenderer({
    // TODO: change to true for final screenshots, visuals, etc.
    antialias: true,
});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Orbit controls
const controls = new OrbitControls(camera, renderer.domElement);

// Lights
const lightH = new THREE.HemisphereLight(0xffffbb, 0x080820, 6);
lightH.castShadow = true;
scene.add(lightH);

const pointLight = new THREE.PointLight(0xfff4c9, 50);
const pointLight1 = new THREE.PointLight(0xfff4c9, 20);

pointLight.position.set(0, 8, -2);
pointLight.castShadow = true;
pointLight.shadow.radius = 20;
scene.add(pointLight);
const pointLightHelper = new THREE.PointLightHelper(pointLight, 1);
scene.add(pointLightHelper);


pointLight1.position.set(-4, 3, 8);
pointLight1.castShadow = true;
pointLight1.shadow.radius = 10;
scene.add(pointLight1);
const pointLightHelper2 = new THREE.PointLightHelper(pointLight1, 1);
scene.add(pointLightHelper2);

// Creatures
scene.add(spirit);
scene.add(bird);
let THRESHOLD = 0;

function animate() {
	requestAnimationFrame(animate);

    geometryNoise(2, 0.4, spirit.children[1].geometry);
 
    // bird.position.y *= -1;
	renderer.render(scene, camera);
}

animate();
