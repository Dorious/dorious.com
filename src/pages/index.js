import React from "react"
import { StaticQuery, graphql } from "gatsby"
import "../components/layout.css"
import Img from "gatsby-image"
import SEO from "../components/seo"
import Wave from "../components/wave"

const keywords = [`web`, `webapplication`, `photography`, 'headshots']

const IndexPage = () => (
  <div>
    <SEO title="Dariusz Arciszewski" keywords={keywords} />
    <Wave />
    <div className="my-face">
      <div className="my-face-noise" />
      <StaticQuery
        query={graphql`
          query {
            placeholderImage: file(relativePath: { eq: "me-2019-hq.png" }) {
              childImageSharp {
                fluid(maxWidth: 960, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        `}
        render={data => {
          console.log('data', data); 
          return <Img 
            className="my-face-wrapper" 
            imgStyle={{width: 'auto', position: 'relative'}}
            placeholderStyle={{position: 'absolute', transitionDelay: 0}}
            fluid={data.placeholderImage.childImageSharp.fluid} 
          />
        }}
      />
    </div>
  </div>
)

export default IndexPage
