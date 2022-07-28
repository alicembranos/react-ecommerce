import NavBar from "components/NavBar/NavBar";
import Slider from "components/Slider/Slider";

const Photos = () => {
  return (
    <div className="photos__container">
      <NavBar />
      <div className="photos__sliderWrapper">
        <Slider />
      </div>
    </div>
  );
};

export default Photos;
