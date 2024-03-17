import Carousel from "react-bootstrap/Carousel";

interface ImageProps {
  src: string;
  alt: string;
  style?: React.CSSProperties;
}

interface Props {
  images: ImageProps[];
}

function CarouselBootstrap(props: Props) {
  return (
    <Carousel fade>
      {props.images.map((image, index) => (
        <Carousel.Item key={index}>
          <img
            src={image.src}
            alt={image.alt}
            style={{ width: "100%", maxHeight: "500px", ...image.style }}
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CarouselBootstrap;
