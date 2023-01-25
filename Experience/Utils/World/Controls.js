import Experience from "../../Experience.js";
import GSAP from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";

export default class Controls {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.sizes = this.experience.sizes;
    this.resources = this.experience.resources;
    this.time = this.experience.time;
    this.camera = this.experience.camera;

    this.room_h = this.experience.world.room_h.actualRoom_h;
    this.room_h.children.forEach((child) => {
      if (child.type === "RectAreaLight") {
        this.rectLight_h = child;
      }
    });

    this.room_w = this.experience.world.room_w.actualRoom_w;
    this.room_w.children.forEach((child) => {
      if (child.type === "RectAreaLight") {
        this.rectLight_w = child;
      }
    });
    this.rota = this.experience.world.rota.actualRota;
     this.room_s = this.experience.world.room_s.actualRoom_s;
    GSAP.registerPlugin(ScrollTrigger);
    this.setScrollTrigger();
  }

  setScrollTrigger() {
    ScrollTrigger.matchMedia({
      //desctop______________________________________________
      "(min-width: 969px)": () => {
        // console.log("fired desctop");
        this.rectLight_w.visible = false;
        this.room_h.position.set(0, 0.7, 0);
        this.room_w.position.set(0, 0.7, 0);
        this.room_s.position.set(0, 0.7, 0);
        this.rota.position.set(0, 0.7, 5);
        this.room_h.scale.set(1, 1, 1);
        this.room_w.scale.set(0.001, 0.001, 0.001);
        this.room_s.scale.set(1, 1, 1);
        this.rota.scale.set(1, 1, 1);
        // first move
        this.firstMoveTimeline = new GSAP.timeline({
          scrollTrigger: {
            trigger: ".first-section",
            start: "380 top",
            end: "580 top",
            scrub: 0.7,
            markers: false,
            invalidateOnRefresh: true,
          },
        });
        this.firstMoveTimeline.to(this.rota.position, {
          z: 3.2,
        });
        // second move
        this.secondMoveTimeline = new GSAP.timeline({
          scrollTrigger: {
            trigger: ".second-move",
            start: "top top",
            end: "1800 bottom",
            scrub: 0.7,
            markers: false,
            invalidateOnRefresh: true,
          },
        });
        this.secondMoveTimeline.to(
          this.room_h.rotation,
          {
            z: Math.PI * 2,
          },
          "same"
        );
        this.secondMoveTimeline.to(
          this.room_w.rotation,
          {
            z: Math.PI * 2,
          },
          "same"
        );
        this.secondMoveTimeline.to(
          this.rota.rotation,
          {
            z: Math.PI * 2,
          },
          "same"
        );
        this.secondMoveTimeline.to(
          this.room_s.rotation,
          {
            z: Math.PI * 2,
          },
          "same"
        );
        this.secondMoveTimeline_midle = new GSAP.timeline({
          scrollTrigger: {
            trigger: ".second-move",
            start: "600 center",
            end: "700 center",
            scrub: 0.7,
            markers: false,
            invalidateOnRefresh: true,
          },
        });
        this.secondMoveTimeline_midle.to(
          this.rectLight_h,
          {
            visible: false,
          },
          "same"
        );
        this.secondMoveTimeline_midle.to(
          this.rectLight_w,
          {
            visible: true,
          },
          "same"
        );
        this.secondMoveTimeline_midle.to(
          this.room_w.scale,
          {
            x: 1,
            y: 1,
            z: 1,
          },
          "same"
        );
        this.secondMoveTimeline_midle.to(
          this.room_h.scale,
          {
            x: 0.001,
            y: 0.001,
            z: 0.001,
          },
          "same"
        );
        // third move
        this.thirdMoveTimeline = new GSAP.timeline({
          scrollTrigger: {
            trigger: ".second-move",
            start: "1600 top",
            end: "bottom top",
            markers: false,
            scrub: 0.7,
            invalidateOnRefresh: true,
          },
        });
        this.thirdMoveTimeline.to(this.rota.position, {
          z: 5,
        });
      },
      //mobile______________________________________________
      "(max-width: 968px)": () => {
        // console.log("fired mobile");
        this.room_h.position.set(1.6, 0.7, -1.6);
        this.room_w.position.set(1.6, 0.7, -1.6);
        this.room_s.position.set(1.6, 0.7, -1.6);
        this.rota.position.set(1.6, 0.7, 5);
        this.room_h.scale.set(0.9, 0.9, 0.89);
        this.room_w.scale.set(0.0001, 0.0001, 0.0001);
        this.room_s.scale.set(0.9, 0.9, 0.9);
        this.rota.scale.set(0.9, 0.9, 0.9);
        // first move
        this.firstMoveTimeline = new GSAP.timeline({
          scrollTrigger: {
            trigger: ".first-move",
            start: "top top",
            end: "bottom bottom",
            scrub: 0.6,
            invalidateOnRefresh: true,
          },
        });
        this.firstMoveTimeline.to(this.rota.position, {
          z: 1.27,
        });
        // second section
        this.secondMoveTimeline = new GSAP.timeline({
          scrollTrigger: {
            trigger: ".second-move",
            start: "top top",
            end: "bottom bottom",
            scrub: 0.7,
            invalidateOnRefresh: true,
          },
        });
        this.secondMoveTimeline.to(
          this.room_h.rotation,
          {
            z: Math.PI * 2,
          },
          "same"
        );
        this.secondMoveTimeline.to(
          this.room_w.rotation,
          {
            z: Math.PI * 2,
          },
          "same"
        );
        this.secondMoveTimeline.to(
          this.rota.rotation,
          {
            z: Math.PI * 2,
          },
          "same"
        );
        this.secondMoveTimeline.to(
          this.room_s.rotation,
          {
            z: Math.PI * 2,
          },
          "same"
        );
        // second midle move
        this.secondMoveTimeline_midle = new GSAP.timeline({
          scrollTrigger: {
            trigger: ".second-move",
            start: "650 center",
            end: "900 center",
            scrub: 0.7,
            markers: false,
            invalidateOnRefresh: true,
          },
        });
        this.secondMoveTimeline_midle.to(
          this.room_h.scale,
          {
            x: 0.001,
            y: 0.001,
            z: 0.001,
          },
          "same"
        );
        this.secondMoveTimeline_midle.to(
          this.room_w.scale,
          {
            x: 0.9,
            y: 0.9,
            z: 0.9,
          },
          "same"
        );
        // third move
        this.thirdMoveTimeline = new GSAP.timeline({
          scrollTrigger: {
            trigger: ".third-move",
            start: "top top",
            end: "bottom bottom",
            markers: false,
            scrub: 0.7,
            invalidateOnRefresh: true,
          },
        });
        this.thirdMoveTimeline.to(this.rota.position, {
          z: 5,
        });
      },

      all: function () {},
    });
  }

  resize() {}
  update() {}
}
