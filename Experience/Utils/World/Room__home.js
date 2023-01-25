import * as THREE from "three";
import Experience from "../../Experience.js";

export default class Room_home {
  constructor() {
    this.experience = new Experience();
    this.resources = this.experience.resources;
    this.scene = this.experience.scene;
    this.room_h = this.resources.items_h.room_h;
    this.actualRoom_h = this.room_h.scene;
    this.setModel();
  }

  setModel() {
    this.actualRoom_h.children.forEach((child) => {
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
    const intensity = 10;
    const rectLight = new THREE.RectAreaLight(
      0xffffff,
      intensity,
      width,
      height
    );
    rectLight.position.set(0, 0.2, -0.5);
    rectLight.rotation.x = -Math.PI/2;
    rectLight.rotation.y = -Math.PI/4;
    this.actualRoom_h.add(rectLight);
    this.actualRoom_h.position.set(0, 0.7, 0);
    this.scene.add(this.actualRoom_h);
  }

  // test() {
  //   console.log(this.actualRoom_h.children[77].visible);
  // }

  resize() {}
  update() {}
}
