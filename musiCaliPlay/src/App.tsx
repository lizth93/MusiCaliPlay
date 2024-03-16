import "./App.css";
import NavBar from "./components/navBar";
import "bootstrap/dist/css/bootstrap.min.css";
import ContainerBootstrap from "./layout/container";
import CarouselBootstrap from "./components/carousel";

function App() {
  return (
    <>
      <NavBar />
      <ContainerBootstrap>
        <CarouselBootstrap />
      </ContainerBootstrap>
    </>
  );
}

export default App;
