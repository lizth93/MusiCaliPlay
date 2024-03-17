import MultiCarousel from "./component";
import styled from "styled-components";

export default styled(MultiCarousel)`
  .slider {
    margin: 0 20px;
    overflow: "hidden";
    padding: 2rem 0;
  }

  .slider img {
    width: 90%;
    border-radius: 10px;
  }

  .react-multi-carousel-list {
    padding: 0rem 0 2rem 0;
  }

  .custom-dot-list-style button {
    border: none;
    background: rgb(255, 68, 68);
  }
  .react-multi-carousel-dot.react-multi-carousel-dot--active button {
    background: rgb(255, 68, 68) !important;
  }
`;
