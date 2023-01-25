import * as THREE from "three";
import Experience from "../../Experience.js";

export default class Side {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.setSide();
  }

  setSide() {
    this.geometry = new THREE.PlaneGeometry(100, 100);
    this.material = new THREE.MeshStandardMaterial({
      color: 0x87CEFA,
      side: THREE.BackSide,
    });

    this.plane = new THREE.Mesh(this.geometry, this.material);
    this.plane.receiveShadow = false;
    this.plane.position.x = 5;
    this.plane.rotation.x = Math.PI;
    this.plane.position.y = -0.25;
    this.plane.position.z = -10;
    this.scene.add(this.plane);
  }

  resize() {}

  update() {}
}
