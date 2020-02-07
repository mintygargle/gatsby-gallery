import React from "react"
import { Header } from 'semantic-ui-react'
import { graphql } from 'gatsby';

import Layout from "../components/layout";
import SEO from "../components/seo";
import LightboxGallery, { photoMapper } from "../components/lightbox-gallery";

const LandscapePage = ({ data }) => {
  const { edges } = data.allStrapiImage;
  const photos = photoMapper(edges);

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
              fixed(width: 960) {
              ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  }
`