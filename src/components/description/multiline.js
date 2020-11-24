import React, { isValidElement, useState, useEffect, memo } from 'react';

import "./multiline.less";

export const CHAR_DELAY = 0.03;

export const Line = memo(function Line({text, firstRender, animationDelay}) {
  return firstRender ? RenderHtmlLine({text}) : RenderReactLine({text, animationDelay}); 
});

export function RenderHtmlLine({text}) {
  return isValidElement(text) ? text : <p>{text}</p>;
}

export function fixChar(char) {
  switch(char) {
    case ' ':
      return <>&nbsp;</>;
    default:
      return char;
  }
}

export function getRndReasonableTime() {
  return (1-Math.random())*50000;
}

export const Char = memo(function Char({char, animationDelay = 0}) {
  const [animate, setAnimate] = useState(false);
  const [transform, setTransform] = useState(false);

  useEffect(() => {
    let timeout;
    
    if(!animate) timeout = setTimeout(() => {
      setTimeout(() => {
        setAnimate(true);
      }, animationDelay*1000);
    }, getRndReasonableTime());

    if(animate && !transform)
      setTimeout(() => { 
        setTransform(true); 
      }, getRndReasonableTime());

    if(animate && transform) 
      setTimeout(() => {
        setTransform(false);
      }, getRndReasonableTime());

    return () => {
      if(timeout) clearTimeout(timeout);
    }
  }, [animate, transform, animationDelay]);

  const fixedChar = fixChar(char);
  const classNames = animate ? ['marquee-char-animate'] : [];
  const style = { animationDelay: `${animationDelay}s` };

  if(transform) {
    classNames.push('marquee-char-animate-transform');
  }
  
  return (
    <span 
      style={style} 
      className={classNames.join(' ')}
    >
      {fixedChar}
      <span>{fixedChar}</span>
    </span>
  )
});

export function RenderReactLine({text, animationDelay}) {
  const classNames = ["marquee-line"];
  let content = '';
  let Tag = 'div';

  if(isValidElement(text)) {
    const { type, props: { className, children }  } = text;
    content = children;
    Tag = type;
    classNames.push(className);
  } else {
    content = text;
  }

  return (
    <Tag className={classNames.join(' ')}>
      {content.split('').map((char, key) => {
        return (
          <Char char={char} key={key} animationDelay={animationDelay + key * CHAR_DELAY} />
        )
      })}
    </Tag>
  );
}

function getPreviousLength(lines, key) {
  let count = 0;

  for(let i = 0; i<key; i++) {
    if(isValidElement(lines[i])) {
      count += lines[i].props.children.length;
    } else {
      count += parseFloat(lines[i].length || 0);
    }
  }

  return count;
}

export default memo(function Multiline({text, className}) {
  const [firstRender, setRender] = useState(true);

  useEffect(() => {
    if(firstRender) setRender(false);
  }, [firstRender]);

  let classNames = firstRender ? ["marquee"] : ["marquee", "marquee-animate"];
  
  if(typeof className === 'string') 
    classNames = classNames.concat(className.split(' '));

  return (
    <div className={classNames.join(' ')}>
      {text.map((txt, key) => {
        const prevCount = getPreviousLength(text, key);
        return (
          <Line key={key} text={txt} firstRender={firstRender} animationDelay={prevCount * CHAR_DELAY} />
        );
      })}
    </div>
  )
});
