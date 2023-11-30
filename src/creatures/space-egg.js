import * as THREE from "three";

export class SpaceEgg {
    geometry;
    material;

    constructor(geometry) {
        this.geometry = geometry;
        this.material = new THREE.MeshBasicMaterial({ color: 0xfff6c7 });
        this.mesh = new THREE.Mesh(this.geometry, this.material);
    }

    static createSpaceEgg(mesh) {
        const eye = this.createSpaceEggEye();
        const pupil = this.createSpaceEggEyePupil();
        mesh.add(eye);
        mesh.add(pupil);

        return mesh;
    }

    static createSpaceEggEye() {
        const spaceEggEyeGeometry = new THREE.SphereGeometry(0.8, 32, 16);
        const spaceEggEyeMaterial = new THREE.MeshBasicMaterial({ color: 0xfefff7 });
        const spaceEggEye = new THREE.Mesh(spaceEggEyeGeometry, spaceEggEyeMaterial);

        spaceEggEye.position.x = -0.8;
        
        return spaceEggEye;
    }

    static createSpaceEggEyePupil() {
        const spaceEggPupilGeometry = new THREE.SphereGeometry(0.5, 32, 16);
        const spaceEggPupilMaterial = new THREE.MeshBasicMaterial({ color: 0x58bbd1 });
        const spaceEggEyePupil = new THREE.Mesh(spaceEggPupilGeometry, spaceEggPupilMaterial);

        spaceEggEyePupil.position.x = -1.2;

        return spaceEggEyePupil;

    }

}
