import React from 'react';
import { 
  LinkedinFilled, 
  LinkedinOutlined, 
  GithubFilled,
  GithubOutlined,
  InstagramFilled,
  InstagramOutlined 
} from "@ant-design/icons";

import "./icons.less";

export default function Icons() {
  return (
    <div className="icons">
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
  )
}
