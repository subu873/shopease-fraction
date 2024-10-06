import "./Benefits.css";
import { FaShippingFast } from "react-icons/fa";
import { PiClockClockwise } from "react-icons/pi";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";

const Benefits = () => {
  return (
    <div className="benefit__wrapper">
      <div className="container">
        <div className="benefit__grid">
          <div className="benefit_block">
            <div>
              <h4>Free Shipping and Returns</h4>
              <p>Free shipping on all orders above 500/-</p>
            </div>
            <FaShippingFast size={40} />
          </div>
          <div className="benefit_block">
            <div>
              <h4>MoneyBack Guarentee</h4>
              <p>100% money back guarentee</p>
            </div>
            <RiMoneyRupeeCircleLine size={40} />
          </div>
          <div className="benefit_block">
            <div>
              <h4>Online Support 24/7</h4>
              <p>Get online support 24/7</p>
            </div>
            <PiClockClockwise size={40} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
