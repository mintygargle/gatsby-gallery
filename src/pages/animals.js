import React from "react"
import { Header } from 'semantic-ui-react'
import { graphql } from 'gatsby';

import Layout from "../components/layout";
import SEO from "../components/seo";
import LightboxGallery from "../components/lightbox-gallery";

const AnimalsPage = ({ data }) => {
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
            <SEO title="Animals" />
            <Header as="h1">Animals</Header>
            <LightboxGallery photos={photos} />
        </Layout>
    )
}

export default AnimalsPage

export const query = graphql`
  query AnimalsImagesQuery {
    allStrapiImage(filter: {tags: {elemMatch: {name: {eq: "Animal"}}}}) {edges {
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
