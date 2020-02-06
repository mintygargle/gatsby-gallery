import React from "react";
import { Header } from 'semantic-ui-react'
import { graphql } from 'gatsby';

import Layout from "../components/layout";
import SEO from "../components/seo";
import LightboxGallery from "../components/lightbox-gallery";

const IndexPage = ({ data }) => {
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
