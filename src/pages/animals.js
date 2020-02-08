import React from "react"
import { Header } from 'semantic-ui-react'
import { graphql } from 'gatsby';

import Layout from "../components/layout";
import SEO from "../components/seo";
import LightboxGallery, { photoMapper } from "../components/lightbox-gallery";

const AnimalsPage = ({ data }) => {
  const { edges } = data.allStrapiImage;
  const photos = photoMapper(edges);

  return (
    <Layout>
      <SEO title="Animals" />
      <Header as="h1">Animals</Header>
      <LightboxGallery photos={photos} />
    </Layout>
  )
}

export default AnimalsPage

export const query = graphql`
  query AnimalsImagesQuery {
    allStrapiImage(
      filter: { tags: { elemMatch: { name: { eq: "Animal" } } } }
    ) {
      edges {
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
`;
