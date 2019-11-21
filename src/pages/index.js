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
          return (<div className="my-face-container">
            <Img 
              className="my-face-wrapper" 
              imgStyle={{width: 'auto', position: 'relative'}}
              placeholderStyle={{position: 'absolute', transitionDelay: 0, top: 'auto', left: 'auto'}}
              fluid={data.placeholderImage.childImageSharp.fluid} 
            >Test</Img>
            <Img 
              className="my-face-anim my-face-blue" 
              imgStyle={{width: 'auto', position: 'relative'}}
              placeholderStyle={{display: 'none'}}
              fluid={data.placeholderImage.childImageSharp.fluid} 
              fadeIn={false}
            />
            <Img 
              className="my-face-anim my-face-red" 
              imgStyle={{width: 'auto', position: 'relative'}}
              placeholderStyle={{display: 'none'}}
              fluid={data.placeholderImage.childImageSharp.fluid} 
              fadeIn={false}
            />
          </div>)
        }}
      />
    </div>
  </div>
)

export default IndexPage
