import * as THREE from "three";
import Experience from "../Experience.js";
import GSAP from "gsap";

export default class Environment {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources_home = this.experience.resources_home;
    this.obj = {
      colorObj: { r: 0, g: 0, b: 0 },
      intensity: 3,
    };
    this.setSunlight();
  }

  setSunlight() {
    this.sunLight = new THREE.DirectionalLight("#afffff", 3);
    this.sunLight.castShadow = true;
    this.sunLight.shadow.camera.far = 20;
    this.sunLight.shadow.mapSize.set(2048, 2048);
    this.sunLight.shadow.normalBias = 0.05;
    this.sunLight.shadow.normalBias = 0.05;
    this.sunLight.position.set(1.5, 10, 10);
    this.scene.add(this.sunLight);
    this.ambienLight = new THREE.AmbientLight("#afffff", 1);
    this.scene.add(this.ambienLight);
  }

  switchTheme(theme) {
    if (theme === "dark") {
      GSAP.to(this.sunLight.color, {
        r: 24 / 255,
        g: 84 / 255,
        b: 163 / 255,
      });
      GSAP.to(this.ambienLight.color, {
        r: 24 / 255,
        g: 84 / 255,
        b: 163 / 255,
      });
      GSAP.to(this.sunLight, {
        intensity: 0.75,
      });
      GSAP.to(this.ambienLight, {
        intensity: 0.75,
      });
    } else {
      GSAP.to(this.sunLight.color, {
        r: 255 / 255,
        g: 255 / 255,
        b: 255 / 255,
      });
      GSAP.to(this.ambienLight.color, {
        r: 255 / 255,
        g: 255 / 255,
        b: 255 / 255,
      });
      GSAP.to(this.sunLight, {
        intensity: 3,
      });
      GSAP.to(this.ambienLight, {
        intensity: 1,
      });
    }
  }

  resize() {}
  update() {}
}
