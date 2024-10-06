import { Fragment, useEffect, useState } from "react";
import "../assets/css/productDetails.css";
import { LuShoppingCart } from "react-icons/lu";
import axios from "axios";
import ProductCard from "../components/ProductCard/ProductCard";
import { FaRegHeart, FaStar } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import { SAMPLE_PRODUCTS } from "../utils/sampleProducts";
import { Modal } from "react-bootstrap";

export const INCREMENT_CART_ITEMS = "INCREMENT_CART_ITEMS";
export const DECREMENT_CART_ITEMS = "DECREMENT_CART_ITEMS";

const ProductDetailModal = ({ show, handleClose, data }) => {




  console.log("data", data)

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

  const handleAddToCart = () => {
    let targetData = {
      cartItemCount: cartCount,
      ...data,
    };
    localStorage.setItem("cart_items", JSON.stringify(targetData));
  };


  return (
    <Fragment>
      <Modal
        show={show}
        onHide={() => handleClose(false)}
        dialogClassName="modal-90w"
        aria-labelledby="product-detail-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title id="product-detail-modal">
            Custom Modal Styling
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="bg-white">
            <div class="product-single-container product-single-default">
              <div class="row">
                <div class="col-lg-5 col-md-6 product-single-gallery">
                  <div class="product-slider-container">
                    <div class="label-group">
                      <div class="product-label label-sale">
                        {data?.discount}% off
                      </div>
                    </div>
                    <div class="product-single">
                      <div class="product-item">
                        <img
                          class="product-single-image"
                          src={data?.imageUrl}
                          width="468"
                          height="468"
                          alt="product"
                        />
                      </div>
                      <div className="produt-thumb">
                        <div className="thumb-image-block active">
                          <img
                            class="product-single-image"
                            src={data?.imageUrl}
                            width="110"
                            height="110"
                            alt="product"
                          />
                        </div>
                        <div className="thumb-image-block">
                          <img
                            class="product-single-image"
                            src={data?.imageUrl}
                            width="110"
                            height="110"
                            alt="product"
                          />
                        </div>
                        <div className="thumb-image-block">
                          <img
                            class="product-single-image"
                            src={data?.imageUrl}
                            width="110"
                            height="110"
                            alt="product"
                          />
                        </div>
                        <div className="thumb-image-block">
                          <img
                            class="product-single-image"
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

                <div class="col-lg-7 col-md-6 product-single-details">
                  <h1 class="product-title">{data?.title}</h1>
                  <div class="product-desc">
                    <p>
                      {data?.subTitle}
                    </p>
                  </div>
                  <div className="ratings-container">
                    <p className="ratings">
                      <FaStar size={15} /> 4.5
                      <span>(26)</span>
                    </p>
                  </div>
                  <div class="price-box mb-4">
                    <span class="new-price"> ₹{data?.discountedPrice}</span>
                    <span class="old-price"> ₹{data?.price}</span>
                  </div>

                  <div className="color-container">
                    {!!data?.sibling_colour_codes && data?.sibling_colour_codes?.map((color) => {
                      return (
                        <div className="circle" style={{ background: color }} ></div>
                      )
                    })}
                  </div>


                  <div className="d-flex gap-3">
                    <button className="w-100 buy-now-btn">
                      <MdOutlineShoppingBag size={25} /> Add to Cart
                    </button>
                    <button className="w-100 buy-now-btn">Buy Now</button>
                    {/* <button className=" buy-now-btn">
                    <FaRegHeart size={15} />
                  </button> */}
                  </div>

                  <div class="product-action">
                    <div className="product-count-block">
                      <div class="input-group">
                        <button
                          class="btn-decrement count-btn"
                          onClick={() => handleChangeCart(DECREMENT_CART_ITEMS)}
                        >
                          -
                        </button>
                        <input
                          type="number"
                          class="horizontal-quantity form-control quantity-input"
                          value={cartCount}
                          min="1"
                          onChange={(e) => handleChangeCart(e?.target?.value)}
                        />
                        <button
                          class="btn-increment count-btn"
                          onClick={() => handleChangeCart(INCREMENT_CART_ITEMS)}
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <button className="btn btn-primary" onClick={handleAddToCart}>
                      <LuShoppingCart size={25} />
                      Add to Cart
                    </button>
                  </div>
                  <hr class="divider" />
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
    </Fragment >
  );
};

export default ProductDetailModal;
