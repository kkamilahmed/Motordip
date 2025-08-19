import ReactCompareImage from "react-compare-image";
import clean from "../assets/clean.png"; 
import dirty from "../assets/dirty.png"; 
import cleani from "../assets/cleanl.png"; 
import dirtyi from "../assets/dirtyl.png"; 

export  function BeforeAfterSliderE() {
  return (
    <div style={{ width: "350px", margin: "auto"}} className="rounded-5xl">
      <ReactCompareImage
        leftImage={dirty}
        rightImage={clean}
        sliderLineColor="#FFFFFF"
      />
    </div>
  );
}

export  function BeforeAfterSliderW() {
  return (
    <div style={{ width: "350px", margin: "auto"}} className="rounded-5xl">
      <ReactCompareImage
        leftImage={dirtyi}
        rightImage={cleani}
        sliderLineColor="#FFFFFF"
      />
    </div>
  );
}
