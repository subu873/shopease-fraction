import "./productCard.css";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaRegHeart, FaStar } from "react-icons/fa";

const ProductCard = ({ data, handleOpenDetail }) => {

  const handleOpenDetailPage = () => {
    handleOpenDetail(data)
  }

  return (
    <div className="product__wrapper">
      <div className="product_image_wrapper">
        <a>
          <img
            src={data?.imageUrl}
            width="280"
            height="280"
            alt={data?.title}
          />
        </a>
      </div>

      <div className="product_details">
        <h3 className="product-title">
          <a onClick={handleOpenDetailPage}>{data?.title}</a>
        </h3>
        <p>{data?.subTitle}</p>

        <div className="price-box mb-2">
          <span className="product-price">₹{data?.discountedPrice}</span>
          <span className="old-price">₹{data.price}</span>
          <div className="product_label_group">
            <div className="product_label label_sale">
              {data?.discount}% OFF
            </div>
          </div>
        </div>
        <div className="product-action">
          <a onClick={handleOpenDetailPage} className="btn-icon btn-wishlist product-type-simple">
            <FaRegHeart size={15} /> Wishlist
          </a>
          <a onClick={handleOpenDetailPage} className="btn-icon btn-add-cart product-type-simple">
            <MdOutlineShoppingBag size={15} /> Add to cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;