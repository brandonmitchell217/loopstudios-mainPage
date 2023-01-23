import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

export const Landing = () => {
  const app: any = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".title", {
        x: -100,
        opacity: 0,
        duration: 2.5,
        ease: "power3.out",
      });
    }, app);

    return () => ctx.revert();
  }, []);
  return (
    <section id="landing">
      <div className="container">
        <div className="wrapper" ref={app}>
          <h1 className="title">
            Immersive
            <br />
            Experiences
            <br />
            That Deliver
          </h1>
        </div>
      </div>
    </section>
  );
};
