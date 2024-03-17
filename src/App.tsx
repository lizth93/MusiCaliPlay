import "./App.css";
import NavBar from "./components/navBar";
import "bootstrap/dist/css/bootstrap.min.css";
import ContainerBootstrap from "./layout/container";
import CarouselBootstrap from "./components/carousel";
import GridCards from "./components/card";
import MediaControlCard from "./components/mediaControlCard";
import MultiCarousel from "./components/multiCarousel";

function App() {
  const images = [
    {
      src: "../../public/ejemplo.png",
      alt: "Text1",
      style: {},
    },
    {
      src: "../../public/ejemplo2.png",
      alt: "Text2",
      style: {},
    },
  ];

  return (
    <>
      <header>
        <NavBar />
      </header>

      <menu>
        <ContainerBootstrap size="lg">
          <CarouselBootstrap images={images} />
          <h2>Videos</h2>
          <GridCards />
          <h2>podcast</h2>
          <MediaControlCard></MediaControlCard>

          <h2>dibujos, textos, fotos, Concursos...</h2>
          <MultiCarousel />
        </ContainerBootstrap>
      </menu>
    </>
  );
}

export default App;
