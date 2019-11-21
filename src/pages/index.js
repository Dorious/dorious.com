import React from "react"
import { StaticQuery, graphql } from "gatsby"
import "../components/layout.css"
import Img from "gatsby-image"
import SEO from "../components/seo"

/* const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
) */

const keywords = [`web`, `webapplication`, `photography`, 'headshots']

const IndexPage = () => (
  <div>
    <SEO title="Dariusz Arciszewski" keywords={keywords} />
    <div className="my-face">
      <StaticQuery
        query={graphql`
          query {
            placeholderImage: file(relativePath: { eq: "me-2019-hq.png" }) {
              childImageSharp {
                fluid(maxHeight: 1024, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        `}
        render={data => <Img 
          className="my-face-wrapper" 
          imgStyle={{width: 'auto', position: 'relative'}}
          placeholderStyle={{position: 'absolute', transitionDelay: 0}}
          fluid={data.placeholderImage.childImageSharp.fluid} 
        />}
      />
    </div>
  </div>
)

export default IndexPage
