import React, { memo } from 'react';

import Multiline from "./multiline";

import "./description.less";

export default function Description() {
  return (
    <div className="description">
      <Multiline 
        className="description-marquee"
        text={[
          <div className="totheback" aria-label="Hi! My name is">Hi! My name is</div>,
          <h1 aria-label="Hi! My name is">Dariusz Arciszewski</h1>,
          <div className="totheback" aria-label="and I do">and I do</div>,
          <h2 aria-label="Software Engineering &amp;">Software Engineering &amp;</h2>,
          <h3 aria-label="Headshot Photography">Headshot Photography</h3>
        ]} 
      />
      {/* <Marquee text={[
        'Hi! My name is',
        <h1>Dariusz Arciszewski</h1>,
        'and I do',
        // 'Frontend Development',
        'JavaScript Development',
        /* 'Web Development',
        'Web Applications',
        'Software Architecture',
        'Portrait Photography',
        'Headshot Photography',
      ]} /> */}
    </div>
  )
};
