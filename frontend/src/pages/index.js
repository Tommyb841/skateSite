import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Deck from "../components/deck"

const Index = ({ data }) => {
  return (
    <main>
      <h1>Welcome to my Gatsby site</h1>
      <p>I'm making this site using the Gatsby tutorial</p>
      <div>
        <Deck data={data} />
        {data.allStrapiDeck.nodes.map((node, index) => (
          <div key={index}>
            {node.image.map((img, imgIndex) => {
              const image = getImage(img.localFile) // Convert the image data to a format suitable for GatsbyImage
              return (
                image && (
                  <GatsbyImage
                    key={imgIndex}
                    image={image}
                    alt={`Deck Image ${imgIndex}`}
                  />
                )
              )
            })}
          </div>
        ))}
      </div>
    </main>
  )
}

export const query = graphql`
  query MyQuery {
    allStrapiDeck {
      nodes {
        name
        image {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`
export const Head = () => <title>Home Page</title>
export default Index
