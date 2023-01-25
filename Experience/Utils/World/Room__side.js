import * as THREE from "three";
import Experience from "../../Experience.js";

export default class Room_side {
  constructor() {
    this.experience = new Experience();
    this.resources = this.experience.resources;
    this.scene = this.experience.scene;
    this.room_s = this.resources.items_s.room_s;
    this.actualRoom_s = this.room_s.scene;
    this.setModel();
  }

  setModel() {
    this.actualRoom_s.children.forEach((child) => {
      child.castShadow = true;
      child.receiveShadow = true;
      if (child instanceof THREE.Group) {
        child.children.forEach((groupchild) => {
          groupchild.castShadow = true;
          groupchild.receiveShadow = true;
        });
      }
    });
    this.actualRoom_s.position.set(0, 0.7, 0);
    this.scene.add(this.actualRoom_s);
  }

  resize() {}
  update() {}
}
