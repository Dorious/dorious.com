import React, { useEffect, useState } from "react"
import { 
  LinkedinFilled, 
  LinkedinOutlined, 
  GithubFilled,
  GithubOutlined,
  InstagramFilled,
  InstagramOutlined 
} from "@ant-design/icons";

import SEO from "../components/seo";
import Marquee from "../components/marquee";
import Noise from "../components/noise";
import Backgrounds from "../components/backgrounds";
import Qr from "../components/qr";

import "../components/layout.less"

const keywords = [`web`, `webapps`, `mobileapps`, `webapplication`, `photography`, 'headshots']

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
    <div className="space" style={{perspectiveOrigin: `${perc[0]*100}% ${perc[1]*100}%`}}>
      <SEO title="Dariusz Arciszewski" keywords={keywords} />
      <div className="my-description">
        <Marquee text={[
          'Hi! My name is',
          <h1>Dariusz Arciszewski</h1>,
          'and I do',
          // 'Frontend Development',
          'JavaScript Development',
          /* 'Web Development',
          'Web Applications',
          'Software Architecture',
          'Portrait Photography',
          'Headshot Photography', */
        ]} />
      </div>
      <Qr />
      <div className="my-icons">
        <a href="https://www.linkedin.com/in/dorious/" rel="noreferrer" target="_blank">
          <LinkedinFilled />
          <LinkedinOutlined />
        </a>
        <a href="https://github.com/Dorious" rel="noreferrer" target="_blank">
          <GithubFilled />
          <GithubOutlined />
        </a>
        <a href="https://www.instagram.com/darius.arc/" rel="noreferrer" target="_blank">
          <InstagramFilled />
          <InstagramOutlined />
        </a>
      </div>
      <Noise />
      <Backgrounds />
    </div>
  )
}

export default IndexPage;
