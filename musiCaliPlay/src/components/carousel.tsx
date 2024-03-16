import Carousel from "react-bootstrap/Carousel";
// import ejemplo from "../../public/";

function CarouselBootstrap() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          src="../../public/ejemplo.png"
          alt={"text"}
          style={{ width: "100%", maxHeight: "500px" }}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="../../public/ejemplo2.png"
          alt={"text"}
          style={{ width: "100%", maxHeight: "500px" }}
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      {/* <Carousel.Item>
        <ExampleCarouselImage text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>  */}
    </Carousel>
  );
}

export default CarouselBootstrap;
