import React, { memo, useEffect, useState } from "react";

import "./glitches.less";

export const DEFAULT_GLITCHES = 14;

function Glitches({children, glitches = DEFAULT_GLITCHES}) {
  const [ id, setId ] = useState();
  const [ counter, setCounter ] = useState(0);

  let prevTop = 0;

  useEffect(() => {
    if(!id) {
      setId(`glitch-${Math.random().toString(36).substring(7)}`);
    }
  }, [id, setId]);

  useEffect(() => {
    setTimeout(() => {
      setCounter(counter+1);
    }, 50+(Math.random()*40));
  }, [counter]);

  return <div className="glitches">
    <svg>
      <defs>
        <clipPath id={id}>
          {new Array(glitches).fill('').map((glitch, key) => {
            const currentTop = prevTop + (100 / glitches) * (1 - (Math.random()*0.2));
            const currentHeight = (100 / glitches) * (1 - (Math.random()*1));
            prevTop = currentTop;

            return (
              <rect 
                width="100%" 
                height={`${currentHeight}%`}
                key={key}
                style={{fill: `rgb(255,255,255)`, display: Math.random() < 0.75 ? 'none' : '' }} 
                x={0}
                y={`${currentTop}%`}
              />
            )
          })}
        </clipPath>
      </defs>
    </svg>
    <span style={{clipPath: `url(#${id})`, transform: `translateX(${Math.random()*1}rem)`}}>{children}</span>
  </div>
}

export default memo(Glitches);