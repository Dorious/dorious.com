import React from "react";
import { Link } from "gatsby";

import IndexPage from "./index";

import "./404.less";

const NotFoundPage = () => (
  <>
    <div className="error404">
      <h2>404</h2>
      <Link to="/">&laquo; Go to Home page</Link>
    </div>
    <IndexPage />
  </>
)

export default NotFoundPage
