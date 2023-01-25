import * as THREE from "three";
import { EventEmitter } from "events";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import Experience from "../Experience";

export default class Resources extends EventEmitter {
  constructor(assets) {
    super();
    this.experience = new Experience();
    this.renderer = this.experience.renderer;
    this.assets = assets;
    this.items_h = {};
    this.items_w = {};
    this.items_s = {};
    this.items_rota = {};
    this.queue = this.assets.length;
    this.loaded = 0;
    this.setLoaders();
    this.startLoading();
  }

  setLoaders() {
    this.loaders = {};
    this.loaders.gltfLoader = new GLTFLoader();
    this.loaders.dracoLoader = new DRACOLoader();
    this.loaders.dracoLoader.setDecoderPath("/draco/");
    this.loaders.gltfLoader.setDRACOLoader(this.loaders.dracoLoader);
  }
  startLoading() {
    for (const asset of this.assets) {
      if (asset.name === "room_h") {
        this.loaders.gltfLoader.load(asset.path, (file) => {
          this.singleAssetLoaded_h(asset, file);
        });
      }
      if (asset.name === "room_w") {
        this.loaders.gltfLoader.load(asset.path, (file) => {
          this.singleAssetLoaded_w(asset, file);
        });
      }
      if (asset.name === "room_s") {
        this.loaders.gltfLoader.load(asset.path, (file) => {
          this.singleAssetLoaded_s(asset, file);
        });
      }
      if (asset.name === "rota") {
        this.loaders.gltfLoader.load(asset.path, (file) => {
          this.singleAssetLoaded_r(asset, file);
        });
      }
    }
  }
  singleAssetLoaded_h(asset, file) {
    this.items_h[asset.name] = file;
    this.loaded++;
    if (this.loaded === this.queue) {
      this.emit("ready");
    }
  }
  singleAssetLoaded_w(asset, file) {
    this.items_w[asset.name] = file;
    this.loaded++;
    if (this.loaded === this.queue) {
      this.emit("ready");
    }
  }
  singleAssetLoaded_s(asset, file) {
    this.items_s[asset.name] = file;
    this.loaded++;
    if (this.loaded === this.queue) {
      this.emit("ready");
    }
  }
  singleAssetLoaded_r(asset, file) {
    this.items_rota[asset.name] = file;
    this.loaded++;
    if (this.loaded === this.queue) {
      this.emit("ready");
    }
  }
}
