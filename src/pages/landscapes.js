import React from "react"
import { Header } from 'semantic-ui-react'
import { graphql } from 'gatsby';

import Layout from "../components/layout";
import SEO from "../components/seo";
import LightboxGallery from "../components/lightbox-gallery";

const LandscapePage = ({ data }) => {
    const { edges } = data.allStrapiImage;
    const photos = edges.map(document => (
        {
            src: document.node.url.childImageSharp.fluid.src,
            width: 4,
            height: 3
        }
    ));

    return (
        <Layout>
            <SEO title="Landscapes" />
            <Header as="h1">Landscapes</Header>
            <LightboxGallery photos={photos} />
        </Layout>
    )
}

export default LandscapePage

export const query = graphql`
  query LandscapeImagesQuery {
    allStrapiImage(filter: {tags: {elemMatch: {name: {eq: "Landscape"}}}}) {edges {
        node {
          id
          title
          url {
            childImageSharp {
              fluid(maxWidth: 960) {
              ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
