import React from 'react';
import Marquee from "../components/marquee";

import "./description.less";

export default function Description() {
  return (
    <div className="description">
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
  )
}
