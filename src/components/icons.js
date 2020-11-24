import React, { memo } from 'react';
import { 
  LinkedinFilled, 
  LinkedinOutlined, 
  GithubFilled,
  GithubOutlined,
  InstagramFilled,
  InstagramOutlined 
} from "@ant-design/icons";

import "./icons.less";

export function Icon({ children, ...rest }) {
  return (
    <a 
      rel="noreferrer" 
      target="_blank"
      {...rest}
    >
      {children}
    </a>
  )
}

export default memo(function Icons() {
  return (
    <div className="icons">
      <Icon 
        href="https://www.linkedin.com/in/dorious/"
        title="Check me out on LinkedIN"
      >
        <LinkedinFilled />
        <LinkedinOutlined />
      </Icon>
      <Icon 
        href="https://github.com/Dorious"
        title="Check me out on GitHub"
      >
        <GithubFilled />
        <GithubOutlined />
      </Icon>
      <Icon 
        href="https://www.instagram.com/darius.arc/" 
        title="Check me out on Instagram"
      >
        <InstagramFilled />
        <InstagramOutlined />
      </Icon>
    </div>
  )
});
