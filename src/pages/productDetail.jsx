import { Fragment, useState } from "react";
import "../assets/css/productDetails.css";
import ProductCard from "../components/ProductCard/ProductCard";
import { FaRegHeart, FaStar } from "react-icons/fa";
import { MdOutlineLocalOffer, MdOutlineShoppingBag } from "react-icons/md";
import { SAMPLE_PRODUCTS } from "../utils/sampleProducts";
import { Modal } from "react-bootstrap";
import { FaCartShopping } from "react-icons/fa6";

export const INCREMENT_CART_ITEMS = "INCREMENT_CART_ITEMS";
export const DECREMENT_CART_ITEMS = "DECREMENT_CART_ITEMS";

const ProductDetailModal = ({ show, handleClose, data }) => {
  console.log("data", data);

  const [cartCount, setCartCount] = useState(1);
  const [productsData, setProductsData] = useState(SAMPLE_PRODUCTS);

  const handleChangeCart = (value) => {
    if (value === INCREMENT_CART_ITEMS) {
      setCartCount((prev) => prev + 1);
    } else if (value === DECREMENT_CART_ITEMS) {
      if (cartCount === 1) return;
      setCartCount((prev) => prev - 1);
    } else {
      setCartCount(value);
    }
  };

  console.log("data", data);

  return (
    <Fragment>
      <Modal
        show={show}
        onHide={() => handleClose(false)}
        dialogClassName="modal-90w"
        aria-labelledby="product-detail-modal"
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="bg-white">
            <div className="product-single-container product-single-default">
              <div className="row">
                <div className="col-lg-5 col-md-6 product-single-gallery">
                  <div className="product-slider-container">
                    <div className="label-group">
                      <div className="product-label label-sale">
                        {data?.discount}% off
                      </div>
                    </div>
                    <div className="product-single">
                      <div className="product-item">
                        <img
                          className="product-single-image"
                          src={data?.imageUrl}
                          width="468"
                          height="468"
                          alt="product"
                        />
                      </div>
                      <div className="produt-thumb">
                        <div className="thumb-image-block active">
                          <img
                            className="product-single-image"
                            src={data?.imageUrl}
                            width="110"
                            height="110"
                            alt="product"
                          />
                        </div>
                        <div className="thumb-image-block">
                          <img
                            className="product-single-image"
                            src={data?.imageUrl}
                            width="110"
                            height="110"
                            alt="product"
                          />
                        </div>
                        <div className="thumb-image-block">
                          <img
                            className="product-single-image"
                            src={data?.imageUrl}
                            width="110"
                            height="110"
                            alt="product"
                          />
                        </div>
                        <div className="thumb-image-block">
                          <img
                            className="product-single-image"
                            src={data?.imageUrl}
                            width="110"
                            height="110"
                            alt="product"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-7 col-md-6  product-single-details">
                  <h1 className="product-title">{data?.title}</h1>
                  <div className="product-desc">
                    <p>{data?.subTitle}</p>
                  </div>
                  <div className="ratings-container">
                    <p className="ratings">
                      <FaStar size={15} /> 4.5
                      <span>(26)</span>
                    </p>
                  </div>
                  <div className="price-box mb-2">
                    <span className="new-price"> ₹{data?.discountedPrice}</span>
                    <span className="old-price"> ₹{data?.price}</span>
                  </div>
                  <p className="tax_font mb-4">Inclusive of all taxes</p>

                  <div className="color-container">
                    {!!data?.sibling_colour_codes &&
                      data?.sibling_colour_codes?.map((color) => {
                        return (
                          <div
                            className="circle"
                            style={{ background: color }}
                          ></div>
                        );
                      })}
                  </div>

                  <div className="product-action mb-4">
                    <div className="product-count-block">
                      <div className="input-group">
                        <button
                          className="btn-decrement count-btn"
                          onClick={() => handleChangeCart(DECREMENT_CART_ITEMS)}
                        >
                          -
                        </button>
                        <input
                          type="number"
                          className="horizontal-quantity form-control quantity-input text-center"
                          value={cartCount}
                          min="1"
                          onChange={(e) => handleChangeCart(e?.target?.value)}
                        />
                        <button
                          className="btn-increment count-btn"
                          onClick={() => handleChangeCart(INCREMENT_CART_ITEMS)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex gap-3">
                    <button className="w-100 add-to-cart-btn">
                      <MdOutlineShoppingBag size={25} /> Add to Cart
                    </button>
                    <button className="w-100 buy-now-btn">
                      <FaCartShopping size={25} />
                      Buy Now
                    </button>
                    {/* <button className=" buy-now-btn">
                    <FaRegHeart size={15} />
                  </button> */}
                  </div>

                  {/* <button
                      className="btn btn-primary"
                      onClick={handleAddToCart}
                    >
                      <LuShoppingCart size={25} />
                      Add to Cart
                    </button> */}
                  <hr className="divider" />
                  {data?.offers?.length > 0 && (
                    <div className="">
                      <h4 className="offers_heading">Offers</h4>
                      {data?.offers?.map((item) => {
                        return (
                          <ul className="offers_content">
                            <li>
                              <MdOutlineLocalOffer size={20} /> {item.name}:{" "}
                              {item.description}
                            </li>
                          </ul>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="related-products">
              <h4 className="product__main_heading">Related Products</h4>
              <div className="products__grid">
                {!!productsData &&
                  productsData.length > 0 &&
                  productsData?.slice(0, 3)?.map((item, index) => {
                    return <ProductCard data={item} key={item?.id} />;
                  })}
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </Fragment>
  );
};

export default ProductDetailModal;