// src/reusable/image-gallery.component.js
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Image } from "@chakra-ui/react";

class ImageGallaryComponent extends React.Component {
  render() {
    return (
      <div>
        <Carousel autoPlay interval="5000" transitionTime="5000">
          <div>
            <Image
              h={"70%"}
              w={"90%"}
              src="https://picsum.photos/700/400?img=1"
            />
            {/* <p className="legend">My Classic Still 1</p> */}
          </div>
          <div>
            <Image
              h={"70%"}
              w={"90%"}
              src="https://picsum.photos/700/400?img=2"
            />
            {/* <p className="legend">My Classic Still 2</p> */}
          </div>
          <div>
            <Image
              h={"70%"}
              w={"90%"}
              src="https://picsum.photos/700/400?img=3"
            />
            {/* <p className="legend">My Classic Still 3</p> */}
          </div>
        </Carousel>
      </div>
    );
  }
}

export default ImageGallaryComponent;
