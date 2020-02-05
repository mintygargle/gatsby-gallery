import React, { useState, useCallback } from "react";
import { Header } from 'semantic-ui-react'
import { graphql } from 'gatsby';
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

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
  ));

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <Layout>
      <SEO title="Overview" />
      <Header as="h1">Overview</Header>
      <Gallery photos={photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
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