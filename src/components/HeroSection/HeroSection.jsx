import "./HeroSection.css";
import Carousel from "react-bootstrap/Carousel";
import image1 from "../../assets/prodImage1.png";
import image2 from "../../assets/prodImage2.png";
import image4 from "../../assets/prodImage4.png";
import image5 from "../../assets/prodImage5.png";
import { IoBagOutline } from "react-icons/io5";

const HeroSection = () => {
  const data = [
    {
      title: "Discover amazing deals in skincare ",
      description: "Flat 60% OFF",
      image: image1,
      color: "linear-gradient(0deg, #dea16c, #cb8955)",
    },
    {
      title: "Prices you've never seen before",
      description: "Upto 25% OFF",
      image: image2,
      color: "linear-gradient(0deg, #dea16c, #c98852)",
    },
    {
      title: "Save on every purchase",
      description: "Flat 70% OFF",
      image: image4,
      color: "linear-gradient(0deg, #005377, #004969)",
    },
    {
      title: "Latest product at lowest prices",
      description: "Starting 499/-",
      image: image5,
      color: "linear-gradient(0deg, #7d99a5, #90adbb)",
    },
  ];

  return (
    <div className="hero_section_wrapper">
      <Carousel fade controls indicators keyboard slide={true}>
        {data.map((item) => {
          return (
            <Carousel.Item style={{ background: item.color }}>
              <div className="d-flex justify-content-between gap-5 align-items-center">
                <Carousel.Caption>
                  <h3 className="mb-1">{item.title}</h3>
                  <p className="mb-2">{item.description}</p>
                  <button className=" hero_btn">
                    <IoBagOutline />
                    SHOP NOW
                  </button>
                </Carousel.Caption>
                {/* <h1>{item.title}</h1> */}
                <div className="hero_section_img_wrapper">
                  <img src={item.image} alt="image for slide" />
                </div>
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default HeroSection;
