import React from "react";
import { Header } from 'semantic-ui-react'
import { graphql } from 'gatsby';

import Layout from "../components/layout";
import SEO from "../components/seo";
import LightboxGallery, { photoMapper } from "../components/lightbox-gallery";

const IndexPage = ({ data }) => {
  const { edges } = data.allStrapiImage;
  const photos = photoMapper(edges);

  return (
    <Layout>
      <SEO title="Overview" />
      <Header as="h1">Overview</Header>
      <LightboxGallery photos={photos} />
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query AllImagesQuery {
    allStrapiImage(filter: {tags: {elemMatch: {name: {eq: "Favorites"}}}}) {edges {
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
