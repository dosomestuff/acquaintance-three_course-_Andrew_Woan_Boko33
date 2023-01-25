import * as THREE from "three";
import Experience from "../Experience.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export default class Camera {
  constructor() {
    this.experience = new Experience();
    this.sizes = this.experience.sizes;
    this.scene = this.experience.scene;
    this.canvas = this.experience.canvas;
    this.createOrthographicCamera();
    // this.createPerspectiveCamera();
    // this.setOrbitControls();
  }

  createOrthographicCamera() {
    this.frustrum = 5;
    this.orthographicCamera = new THREE.OrthographicCamera(
      (-this.sizes.aspect * this.sizes.frustrum) / 2,
      (this.sizes.aspect * this.sizes.frustrum) / 2,
      this.sizes.frustrum / 2,
      -this.sizes.frustrum / 2,
      -50,
      50
    );

    this.orthographicCamera.position.x = 7;
    this.orthographicCamera.position.y = 2.8;
    this.orthographicCamera.position.z = 1.5;
    this.orthographicCamera.rotation.x = -Math.PI / 4.6;
    this.orthographicCamera.rotation.y = Math.PI / 3;
    this.orthographicCamera.rotation.z = Math.PI / 5;
    this.scene.add(this.orthographicCamera);
  }

  // createPerspectiveCamera() {
  //   this.perspectiveCamera = new THREE.PerspectiveCamera(
  //     35,
  //     this.sizes.aspect,
  //     0.1,
  //     1000
  //   );
  //   this.scene.add(this.perspectiveCamera);
  //   this.perspectiveCamera.position.x = 25;
  //   this.perspectiveCamera.position.y = 16;
  //   this.perspectiveCamera.position.z = -15;
  // }
  // setOrbitControls() {
  //   this.controls = new OrbitControls(this.perspectiveCamera, this.canvas);
  //   this.controls.enableDamping = true;
  //   this.controls.enableZoom = false;
  // }

  resize() {
    this.orthographicCamera.left =
      (-this.sizes.aspect * this.sizes.frustrum) / 2;
    this.orthographicCamera.right =
      (this.sizes.aspect * this.sizes.frustrum) / 2;
    this.orthographicCamera.top = this.sizes.frustrum / 2;
    this.orthographicCamera.bottom = -this.sizes.frustrum / 2;
    this.orthographicCamera.updateProjectionMatrix();
    // this.perspectiveCamera.aspect = this.sizes.aspect;
    // this.perspectiveCamera.updateProjectionMatrix();
  }

  update() {
    // this.controls.update();
  }
}
