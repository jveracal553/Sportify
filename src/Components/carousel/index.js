// src/reusable/image-gallery.component.js
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Image } from "@chakra-ui/react";
import caro1 from "../../images/caro1.jpeg";
import caro2 from "../../images/caro2.jpeg";
import caro3 from "../../images/caro3.jpeg";

class ImageGallaryComponent extends React.Component {
  render() {
    return (
      <div>
        <Carousel autoPlay interval="5000" transitionTime="5000">
          <div>
            <Image src={caro1} />
            {/* <p className="legend">My Classic Still 1</p> */}
          </div>
          <div>
            <Image src={caro2} />
            {/* <p className="legend">My Classic Still 2</p> */}
          </div>
          <div>
            <Image src={caro3} />
            {/* <p className="legend">My Classic Still 3</p> */}
          </div>
        </Carousel>
      </div>
    );
  }
}

export default ImageGallaryComponent;
