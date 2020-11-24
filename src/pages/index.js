import React, { useEffect, useState } from "react"

import SEO from "../components/seo";
import Description from "../components/description";
import Noise from "../components/noise";
import Backgrounds from "../components/backgrounds";
import Qr from "../components/qr";
import Icons from "../components/icons";

import "../html.less";

const keywords = [`web`, `web apps`, `mobile apps`, `web applications`, `websites`, `photography`, 'headshots', `headshot photography`];

let timeout = 0;

const mouseMoveEvent = (event, setPerc) => {
  const { currentTarget, clientX, clientY } = event;
  const body = currentTarget.querySelector('body');
  const percWidth = clientX / body.offsetWidth;
  const percHeight = clientY / body.offsetHeight;
  if(timeout) clearTimeout(timeout);
  timeout = setTimeout(() => setPerc([percWidth, percHeight]), 10);
}

const IndexPage = () => {
  const [ perc, setPerc ] = useState([0.5, 0.5]);

  // Add mouse move 3D effect
  useEffect(() => {
    const func = (event, callback) => mouseMoveEvent(event, setPerc);
    document.addEventListener('mousemove', func);
    return () => {
      document.removeEventListener('mousemove', func);
    }
  });

  return (
    <>
      <div 
        className="space" 
        style={{perspectiveOrigin: `${perc[0]*100}% ${perc[1]*100}%`}}
      >
        <SEO title="Dariusz Arciszewski" keywords={keywords} />
        <Description />
        <Qr />
        <Icons />
        <Backgrounds />
      </div>
      <Noise />
    </>
  )
}

export default IndexPage;
