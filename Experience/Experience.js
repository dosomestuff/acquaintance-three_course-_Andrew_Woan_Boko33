import * as THREE from "three";
import Sizes from "./Utils/Size.js";
import Camera from "./Utils/Camera.js";
import Renderer from "./Utils/Renderer.js";
import Time from "./Utils/Time.js";
import Assets from "./Utils/Assets.js";
import Resources from "./Utils/Resources.js";
import World from "./Utils/World/World.js";
import Theme from "./Utils/World/Theme.js";

export default class Experience {
  static instance;
  constructor(canvas) {
    if (Experience.instance) {
      return Experience.instance;
    }
    Experience.instance = this;
    this.canvas = canvas;
    this.scene = new THREE.Scene();
    this.time = new Time();
    this.sizes = new Sizes();
    this.camera = new Camera();
    this.renderer = new Renderer();
    this.resources = new Resources(Assets);
    this.theme = new Theme();
    this.world = new World();
    this.time.on("update", () => {
      this.update();
    });
    this.sizes.on("resize", () => {
      this.resize();
    });
  }

  update() {
    this.camera.update();
    this.renderer.update();
    this.world.update();
  }
  resize() {
    this.camera.resize();
    this.renderer.resize();
    this.world.resize();
  }
}
