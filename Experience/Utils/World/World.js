import * as THREE from "three";
import Experience from "../../Experience.js";

import Room_home from "./Room__home.js";
import Room_work from "./Room__work.js";
import Room_side from "./Room__side.js";
import Rota from "./Room__rotator.js";
import Side from "./Side.js";
import Controls from "./Controls.js";
import Environment from "../Environment.js";

export default class World {
  constructor() {
    this.experience = new Experience();
    this.sizes = this.experience.sizes;
    this.scene = this.experience.scene;
    this.canvas = this.experience.canvas;
    this.camera = this.experience.camera;
    this.resources = this.experience.resources;
    this.theme = this.experience.theme;

    this.resources.on("ready", () => {
      this.environment = new Environment();
      this.room_h = new Room_home();
      this.room_w = new Room_work();
      this.room_s = new Room_side();
      this.rota = new Rota();
      this.side = new Side();
      this.controls = new Controls();
    });

    this.theme.on("switch", (theme) => {
      this.switchTheme(theme);
    });
  }

  switchTheme(theme) {
    if (this.environment) {
      this.environment.switchTheme(theme);
    }
  }

  resize() {}

  update() {
    // if (this.room_h) {
    //   this.room_h.update();
    // }
    // if (this.room_w) {
    //   this.room_w.update();
    // }
    // if (this.rota) {
    //   this.rota.update();
    // }
    // if (this.controls) {
    //   this.controls.update();
    // }
  }
}
