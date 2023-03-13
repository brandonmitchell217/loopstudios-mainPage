import React, { useEffect, useRef, RefObject } from "react";
import List, { ListProps } from "./List";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import useSizing from "../../../hooks/useSizing";

export const Creations: React.FC = () => {
  const isMobile: boolean = useSizing() <= 768 ? true : false;

  gsap.registerPlugin(ScrollTrigger);
  const app: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".creation-header",
        {
          y: -100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: ".creation-header",
            start: "top bottom",
            end: "center center",
            scrub: true,
          },
        }
      );
    });
    return () => ctx.revert();
  }, []);

  const revealRefs: any = useRef([]);
  revealRefs.current = [];

  const addToRefs = (el: any) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  useEffect(() => {
    revealRefs.current.forEach((el: any, index: any) => {
      gsap.fromTo(
        el,
        {
          autoAlpha: 0,
        },
        {
          autoAlpha: 1,
          ease: "none",
          scrollTrigger: {
            id: `section-${index + 1}`,
            trigger: el,
            start: "top bottom",
            end: "center bottom",
            scrub: true,
          },
        }
      );
    });
  }, []);

  return (
    <div className="aboutCreations">
      <div className="container" ref={app}>
        <div className="creation-header">
          <h1>Our Creations</h1>
          <a
            href="/"
            onClick={(e) => e.preventDefault()}
            className="cta"
            style={isMobile ? { display: "none" } : { display: "block" }}
          >
            See All
          </a>
        </div>
        <div className="creationGrid">
          {List &&
            List.map((cr: ListProps, k) => (
              <div
                ref={addToRefs}
                className="creation "
                key={k}
                style={
                  isMobile
                    ? { backgroundImage: `url(${cr.mobile_image})` }
                    : { backgroundImage: `url(${cr.desktop_image})` }
                }
              >
                <a href={cr.link} onClick={(e) => e.preventDefault()}>
                  <h2>{cr.title}</h2>
                </a>
              </div>
            ))}
        </div>
        <a
          href="/"
          onClick={(e) => e.preventDefault()}
          className="cta"
          style={!isMobile ? { display: "none" } : { display: "block" }}
        >
          See All
        </a>
      </div>
    </div>
  );
};
