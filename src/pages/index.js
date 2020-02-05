import React from "react";
import { graphql } from 'gatsby';
import Gallery from "react-photo-gallery";

import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = ({ data }) => {
  const { edges } = data.allStrapiImage;
  const photos = edges.map(document => (
    {
      src: document.node.url.childImageSharp.fluid.src,
      width: 4,
      height: 3
    }
  ))
  return (
    <Layout>
      <SEO title="Overview" />
      <p>Overview Photos</p>
      <Gallery photos={photos} />
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query AllImagesQuery {
    allStrapiImage {
      edges {
        node {
          id
          title
          url {
            childImageSharp {
              fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`