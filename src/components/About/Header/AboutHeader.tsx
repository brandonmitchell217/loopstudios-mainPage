import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

export const AboutHeader = () => {
  gsap.registerPlugin(ScrollTrigger);
  const app: any = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".aboutHeader--image_wrap",
        {
          x: -300,
          autoAlpha: 0,
        },
        {
          x: 0,
          autoAlpha: 1,

          scrollTrigger: {
            trigger: ".aboutHeader",
            start: "top bottom",
            end: "top 40%",
            scrub: true,
          },
        }
      );
      gsap.fromTo(
        ".aboutHeader--text",
        {
          x: 300,
          autoAlpha: 0,
        },
        {
          x: 0,
          autoAlpha: 1,

          scrollTrigger: {
            trigger: ".aboutHeader",
            start: "top bottom",
            end: "top 40%",
            scrub: true,
          },
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="aboutHeader">
      <div className="container" ref={app}>
        <div className="aboutHeader--image_wrap">
          <img
            src={require("../../../images/desktop/image-interactive.jpg")}
            alt="Man with VR headset on purple background gradient"
          />
        </div>
        <div className="aboutHeader--text">
          <h1>
            The Leader in
            <br />
            Interactive VR
          </h1>
          <p>
            Founded in 2011, Loppstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </p>
        </div>
      </div>
    </div>
  );
};
