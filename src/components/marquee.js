import React, { memo, useEffect, useState } from "react";
import PropTypes from "prop-types";

import './marquee.less';

const LINE_DELAY = 0.5;
const CHAR_DELAY = 0.03;

function Marquee({text = '', className = ''}) {
  const [ anim, setAnim ] = useState(false);
  const texts = Array.isArray(text) ? text : [text];

  useEffect(() => {
    if(!anim) setTimeout(() => setAnim(true));
  }, [anim, setAnim]);

  if(!anim)
    return (
      <div className={`marquee marquee-initial`}>
        {texts.map((txt, key) => {
          return React.isValidElement(txt) ? React.cloneElement(txt, { key }) : <p key={key}>{txt}</p>
        })}
      </div>
    );
  
  const renderedTexts = texts.map((txt, key) => {
    let addDelay = 0;
    let chrKey = 0;
    let checkTxt = txt;
    let Tag = 'div';

    if(React.isValidElement(txt) && typeof txt.type === 'string') {
      Tag = txt.type;
      checkTxt = txt.props?.children;
    }

    const content = typeof checkTxt === 'string' ? 
      checkTxt.split(' ').map((word, wk) => {
        return (
          <span className="marquee-word" key={wk}>
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
      <Tag 
        className={`marquee-line marquee-line-${key+1}`} 
        key={key}
      >
        {content}
      </Tag>
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