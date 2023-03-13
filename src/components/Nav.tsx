import React, {
  useEffect,
  useState,
  useRef,
  RefObject,
  useLayoutEffect,
} from "react";
import { gsap } from "gsap";
import Logo from "../images/logo.svg";
import Burger from "../images/icon-hamburger.svg";
import Close from "../images/icon-close.svg";
import useSizing from "../hooks/useSizing";

export const Nav = () => {
  const [open, setOpen] = useState<boolean>(false);

  const isMobile: boolean = useSizing() <= 768 ? true : false;

  const nav: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "div",
        {
          autoAlpha: 0,
        },
        {
          autoAlpha: 1,
          duration: 2.5,
        }
      );
    }, nav);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const check = () => {
      if (isMobile) {
        return setOpen(!open);
      } else {
        return setOpen(false);
      }
    };
    window.addEventListener("resize", check);
    // eslint-disable-next-line
  }, [isMobile]);

  const burgerFunc = () => {
    setOpen(!open);
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [open]);

  return (
    <nav ref={nav}>
      <div className="logo">
        <a href="/">
          <img src={Logo} alt="Loopstudios" />
        </a>
      </div>
      <div className="burger" onClick={burgerFunc}>
        <img src={open ? Close : Burger} alt="Loopstudios" />
      </div>
      <div
        className="mobile_menu"
        style={open ? { display: "flex" } : { display: "none" }}
      >
        <div className="hoverLink fakeLinks">
          <a href="/" onClick={(e) => e.preventDefault()}>
            About
          </a>
        </div>
        <div className="hoverLink fakeLinks">
          <a href="/" onClick={(e) => e.preventDefault()}>
            Careers
          </a>
        </div>
        <div className="hoverLink fakeLinks">
          <a href="/" onClick={(e) => e.preventDefault()}>
            Events
          </a>
        </div>
        <div className="hoverLink fakeLinks">
          <a href="/" onClick={(e) => e.preventDefault()}>
            Products
          </a>
        </div>
        <div className="hoverLink fakeLinks">
          <a href="/" onClick={(e) => e.preventDefault()}>
            Support
          </a>
        </div>
      </div>
      <div className="desktop_menu">
        <div className="hoverLink fakeLinks">
          <a href="/" onClick={(e) => e.preventDefault()}>
            About
          </a>
        </div>
        <div className="hoverLink fakeLinks">
          <a href="/" onClick={(e) => e.preventDefault()}>
            Careers
          </a>
        </div>
        <div className="hoverLink fakeLinks">
          <a href="/" onClick={(e) => e.preventDefault()}>
            Events
          </a>
        </div>
        <div className="hoverLink fakeLinks">
          <a href="/" onClick={(e) => e.preventDefault()}>
            Products
          </a>
        </div>
        <div className="hoverLink fakeLinks">
          <a href="/" onClick={(e) => e.preventDefault()}>
            Support
          </a>
        </div>
      </div>
    </nav>
  );
};
