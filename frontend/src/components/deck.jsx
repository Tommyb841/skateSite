import React from "react"

const Deck = ({ data }) => {
  return (
    <div>
      {data.allStrapiDeck.nodes.map((node, index) => (
        <h2 key={index}>{node.name}</h2>
      ))}
    </div>
  )
}
// export const query = graphql`
//   query MyQuery {
//     allStrapiDeck {
//       nodes {
//         image {
//           url
//         }
//       }
//     }
//   }
// `
export default Deck
