import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import Glitches from "../glitches";

import "./dudeinthecoat.less";

export default function DudeInTheCoat() {
  return (
    <div className="backgrounds-bg dudeinthecoat">
      <StaticQuery
        query={graphql`
          query {
            placeholderImage: file(relativePath: { eq: "me-2019-hq.png" }) {
              childImageSharp {
                fluid(maxHeight: 1440, quality: 90) {
                  ...GatsbyImageSharpFluid_noBase64
                }
              }
            }
          }
        `}
        render={data => {
          return (
            <div className="dudeinthecoat-container">
              <Img 
                className="dudeinthecoat-wrapper dudeinthecoat-image" 
                fluid={data.placeholderImage.childImageSharp.fluid} 
                fadeIn={false}
              />
              <Glitches>
                <Img 
                  className="dudeinthecoat-anim dudeinthecoat-blue" 
                  fluid={data.placeholderImage.childImageSharp.fluid} 
                  fadeIn={false}
                />
              </Glitches>
              <Glitches>
                <Img 
                  className="dudeinthecoat-anim dudeinthecoat-red" 
                  fluid={data.placeholderImage.childImageSharp.fluid} 
                  fadeIn={false}
                />
              </Glitches>
            </div>
          )
        }}
      />
    </div>
  )
}