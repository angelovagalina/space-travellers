import * as THREE from "three";
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { geometryNoise } from "./utils.js";
import { spirit, animal} from './creatures.js';

// Some initial basic setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(80, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 20;

// Lights
const light = new THREE.AmbientLight(0x404040);
scene.add(light);
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
scene.add(directionalLight);

// Renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Orbit controls
const controls = new OrbitControls(camera, renderer.domElement);

// Creatures
scene.add(spirit);
scene.add(animal);

console.log(animal.children[3].geometry);

function animate() {
	requestAnimationFrame(animate);

    geometryNoise(2, 0.4, spirit.children[0].geometry);
    // geometryNoise(2, 0.4, animal.children[3].geometry);
	renderer.render(scene, camera);
}

animate();
