import React, { memo, useEffect, useState } from "react";
import PropTypes from "prop-types";

import './marquee.less';

const LINE_DELAY = 0.5;
const CHAR_DELAY = 0.03;
const SPACE_DELAY = 0.05;

function Marquee({text = '', className = ''}) {
  const [ anim, setAnim ] = useState(false);
  const [ css, setCss ] = useState('');
  const texts = Array.isArray(text) ? text : [text];

  useEffect(() => {
    if(!anim) setTimeout(() => setAnim(true));
  }, [anim, css, setAnim]);

  if(!anim)
    return (
      <div className={`marquee marquee-initial`}>
        {texts.map((txt, key) => {
          return <p key={key}>{txt}</p>
        })}
      </div>
    );
  
  const renderedTexts = texts.map((txt, key) => {
    let addDelay = 0;
    let chrKey = 0;

    const content = typeof txt === 'string' ? 
      txt.split(' ').map((word, wk) => {
        const max = 3;
        const val = max * Math.random();
        const z = Math.random() > 0.5 ? val : -(val);

        return (
          <span className="marquee-word">
            {word.split('').map((chr, k) => {
              const animationDelay = (LINE_DELAY*key) + (CHAR_DELAY*chrKey) + addDelay;
              chrKey++;

              return (
                <span key={k} style={{animationDelay: `${animationDelay}s`}}>{chr}</span>
              )
           })}
          </span> 
        )
      }) : txt;

    return (
      <div 
        className={`marquee-line marquee-line-${key+1}`} 
        key={key}
      >
        {content}
      </div>
    );
  });

  return <div className={`marquee${anim ? ' marquee-animate' : ''}`}>{renderedTexts}</div>;
}

Marquee.propTypes = {
  text: PropTypes.oneOf(
    PropTypes.string,
    PropTypes.array
  ),
  className: PropTypes.string
}

export default memo(Marquee);