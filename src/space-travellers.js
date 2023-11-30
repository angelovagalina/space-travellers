import * as THREE from "three";
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { bird } from "./creatures/bird.js";
import { spirit } from "./creatures/spirit.js";
import { SpaceEgg } from "./creatures/space-egg.js";
import {
    geometryNoise,
    hemisphereLight, 
    directionalLight, 
    pointLight, 
    randomInteger,
} from "./utils.js";

const UPPER_BOUNDARY = 6.4;
const LOWER_BOUNDARY = 5.4;
const speed = 0.005;
let UP_DIRECTION;
const SPACE_EGG_GEOMETRY = new THREE.CapsuleGeometry(1, 1, 4, 8);

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xd1f0ff);

const camera = new THREE.PerspectiveCamera(80, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(-1, 8, 13);

// Renderer
const renderer = new THREE.WebGLRenderer({
    antialias: true,
});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Orbit controls
const controls = new OrbitControls(camera, renderer.domElement);

// Add some lights
scene.add(hemisphereLight);
scene.add(directionalLight);
scene.add(pointLight);

// Add the two space travelling creatures
scene.add(spirit);
scene.add(bird);

// Add some space eggs 
for (let i = 0; i < 200; i++) {
    const se = new SpaceEgg(SPACE_EGG_GEOMETRY);
    SpaceEgg.createSpaceEgg(se.mesh);
    se.mesh.position.set(
        randomInteger(-80, 80),
        randomInteger(-80, 80),
        randomInteger(-80, 80)
    );
    scene.add(se.mesh);
}

function animate() {
	requestAnimationFrame(animate);

    if (bird.position.y > UPPER_BOUNDARY) {
        UP_DIRECTION = false;
    }
    else if (bird.position.y < LOWER_BOUNDARY) {
        UP_DIRECTION = true;
    }

    if (UP_DIRECTION) {
        bird.position.y += speed;
        spirit.position.y += speed;
    }
    else {
        bird.position.y -= speed;
        spirit.position.y -= speed;
    }

    geometryNoise(2, 0.4, spirit.children[1].geometry);
    geometryNoise(0.5, 0.9, SPACE_EGG_GEOMETRY);
	renderer.render(scene, camera);
}

animate();
