import Experience from "../../Experience.js";

export default class Rota {
  constructor() {
    this.experience = new Experience();
    this.resources = this.experience.resources;
    this.scene = this.experience.scene;
    this.rota = this.resources.items_rota.rota;
    this.actualRota = this.rota.scene;
    this.setModel();
  }

  setModel() {
    this.actualRota.position.set(0, 0.7, 5);
    this.scene.add(this.actualRota);
  }

  resize() {}
  update() {}
}
