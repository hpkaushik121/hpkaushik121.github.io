import React, { useEffect, useState, useCallback } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useTheme } from 'next-themes'
import { Modal, ModalGateway } from 'react-images'
import Gallery from 'react-photo-gallery'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'

let images = [];
let imagesLoded = false
const getImageSize = (imageUrl) => {
  const image = new window.Image();
  image.src = imageUrl;
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  context.drawImage(image, 0, 0);
  const width = image.width;
  const height = image.height;
  canvas.remove()
  return { width, height };
};


const Gallary = ({ children, highlightedLink, contact }) => {
  const [mounted, setMounted] = useState(false)
  const [imagesLoded, setImagesLoded] = useState(0)
  const { setTheme, resolvedTheme, theme } = useTheme()
  function importAll(r) {
    setImagesLoded(1)
    let i = 0;
    let imgLength = r.keys().length / 2
    r.keys().map((item, index) => {
      let imagesss = [];
      if (item.includes('./') == false && typeof window !== 'undefined') {
        let loaded = false
        const image = new window.Image();
        image.src = item.replace('public/', '');
        image.onload = () => {
          const canvas = document.createElement('canvas');
          const context = canvas.getContext('2d');
          context.drawImage(image, 0, 0);
          const width = image.width;
          const height = image.height;
          if (width != 0 && height != 0) {
            let obj = {
              src: item.replace('public/', ''),
              width: width,
              title: item.replace('public/info/', '').split(/\.(?=[^\.]+$)/)[0],
              height: height
            }
            images[i] = obj
            i = i + 1
            if (i == imgLength) {
              setImagesLoded(2)
            }
          }
        }

      };
    });
  }

  useEffect(() => {
    if (imagesLoded == 0) {
      importAll(require.context('../public/info', false, /\.(png|jpe?g|svg)$/));
    }
    setMounted(true)
  }, [])



  const [imageIndex, setImageIndex] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const openLightbox = useCallback((event, { photo, index }) => {
    setImageIndex(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setImageIndex(0);
    setViewerIsOpen(false);
  };
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '500px', // Set the desired height of the container
  };

  const imageStyle = {
    objectFit: 'contain',
    maxWidth: '100%',
    maxHeight: '100%',
  };
  return (
    <div style={{
      backgroundSize: `${mounted && resolvedTheme === 'light' ? '100%' : '45%'}`,
      // backgroundImage: `${mounted && resolvedTheme === 'light' ? '#f0faff' : 'transparent'}`,
      // backgroundImage: `${mounted && resolvedTheme === 'light' ? 'linear-gradient(135deg, rgba(243,92,107,0.2), #f8efff 55%, rgba(252,95,46,0.2))' : "url('https://uploads-ssl.webflow.com/61dde1260c66047f40c11259/61de307a2bf0a020f47290c8_Lines.svg')"}`,
    }}
      className="relative bg-fixed w-full ">
      <Navbar highlightedLink="/gallary" />
      <div className="container">
        {imagesLoded == 2 ? (<Gallery photos={images} direction={"column"} onClick={openLightbox} />) : null}
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                showArrows={true}
                selectedItem={imageIndex}
                showIndicators={false}
                showThumbs={false}
                useKeyboardArrows={true}>
                {images.map(x => (
                  <div style={containerStyle}>
                    <img src={x.src} style={imageStyle} />
                    <p className="legend">{x.title}</p>
                  </div>
                ))}
              </Carousel>


            </Modal>
          ) : null}
        </ModalGateway>
      </div>
    </div>


  )
}

export default Gallary
