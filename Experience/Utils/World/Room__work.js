import * as THREE from "three";
import Experience from "../../Experience.js";
// import { RectAreaLightHelper } from "three/examples/jsm/helpers/RectAreaLightHelper.js";

export default class Room_work {
  constructor() {
    this.experience = new Experience();
    this.resources = this.experience.resources;
    this.scene = this.experience.scene;
    this.room_w = this.resources.items_w.room_w;
    this.actualRoom_w = this.room_w.scene;
    this.setModel();
  }

  setModel() {
    this.actualRoom_w.children.forEach((child) => {
      child.castShadow = true;
      child.receiveShadow = true;
      if (child instanceof THREE.Group) {
        child.children.forEach((groupchild) => {
          groupchild.castShadow = true;
          groupchild.receiveShadow = true;
        });
      }
    });

    const width = 0.2;
    const height = 0.2;
    const intensity = 3;
    const rectLight = new THREE.RectAreaLight(
      0xffffff,
      intensity,
      width,
      height
    );

    rectLight.position.set(-0.8, -0.02, 2.4);
    rectLight.rotation.x = Math.PI + Math.PI / 4;
    rectLight.rotation.y = -Math.PI / 4;
    this.actualRoom_w.add(rectLight);
    this.actualRoom_w.position.set(0, 0.7, 0);
    this.actualRoom_w.visible = true;
    this.scene.add(this.actualRoom_w);
  }

  resize() {}
  update() {}
}
