import React from "react";

interface AboutProps {
  children: React.ReactNode;
}

export const About = ({ children }: AboutProps) => {
  return <section id="about">{children}</section>;
};
