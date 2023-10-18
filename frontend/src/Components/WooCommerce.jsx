import React from "react";

const WooCommerce = () => {
  return (
    <div className="woocommerce-tabs wc-tabs-wrapper bg-vista-white">
      <div className="container">
        <ul className="nav tabs" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <a
              className="active"
              id="description-tab"
              data-bs-toggle="tab"
              href="/description"
              role="tab"
              aria-controls="description"
              aria-selected="true"
            >
              Description
            </a>
          </li>
          <li className="nav-item " role="presentation">
            <a
              id="additional-info-tab"
              data-bs-toggle="tab"
              href="/additional-info"
              role="tab"
              aria-controls="additional-info"
              aria-selected="false"
            >
              Additional Information
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a
              id="reviews-tab"
              data-bs-toggle="tab"
              href="/reviews"
              role="tab"
              aria-controls="reviews"
              aria-selected="false"
            >
              Reviews
            </a>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="description"
            role="tabpanel"
            aria-labelledby="description-tab"
          >
            <div className="product-desc-wrapper">
              <div className="row">
                <div className="col-lg-6 mb--30">
                  <div className="single-desc">
                    <h5 className="title">Specifications:</h5>
                    <p>
                      We’ve created a full-stack structure for our working
                      workflow processes, were from the funny the century
                      initial all the made, have spare to negatives. But the
                      structure was from the funny the century rather, initial
                      all the made, have spare to negatives.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 mb--30">
                  <div className="single-desc">
                    <h5 className="title">Care & Maintenance:</h5>
                    <p>
                      Use warm water to describe us as a product team that
                      creates amazing UI/UX experiences, by crafting top-notch
                      user experience.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <ul className="pro-des-features">
                    <li className="single-features">
                      <div className="icon">
                        <img
                          src="assets/images/product/product-thumb/icon-3.png"
                          alt="icon"
                        />
                      </div>
                      Easy Returns
                    </li>
                    <li className="single-features">
                      <div className="icon">
                        <img
                          src="assets/images/product/product-thumb/icon-2.png"
                          alt="icon"
                        />
                      </div>
                      Quality Service
                    </li>
                    <li className="single-features">
                      <div className="icon">
                        <img
                          src="assets/images/product/product-thumb/icon-1.png"
                          alt="icon"
                        />
                      </div>
                      Original Product
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="additional-info"
            role="tabpanel"
            aria-labelledby="additional-info-tab"
          >
            <div className="product-additional-info">
              <div className="table-responsive">
                <table>
                  <tbody>
                    <tr>
                      <th>Stand Up</th>
                      <td>35″L x 24″W x 37-45″H(front to back wheel)</td>
                    </tr>
                    <tr>
                      <th>Folded (w/o wheels) </th>
                      <td>32.5″L x 18.5″W x 16.5″H</td>
                    </tr>
                    <tr>
                      <th>Folded (w/ wheels) </th>
                      <td>32.5″L x 24″W x 18.5″H</td>
                    </tr>
                    <tr>
                      <th>Door Pass Through </th>
                      <td>24</td>
                    </tr>
                    <tr>
                      <th>Frame </th>
                      <td>Aluminum</td>
                    </tr>
                    <tr>
                      <th>Weight (w/o wheels) </th>
                      <td>20 LBS</td>
                    </tr>
                    <tr>
                      <th>Weight Capacity </th>
                      <td>60 LBS</td>
                    </tr>
                    <tr>
                      <th>Width</th>
                      <td>24″</td>
                    </tr>
                    <tr>
                      <th>Handle height (ground to handle) </th>
                      <td>37-45″</td>
                    </tr>
                    <tr>
                      <th>Wheels</th>
                      <td>Aluminum</td>
                    </tr>
                    <tr>
                      <th>Size</th>
                      <td>S, M, X, XL</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="reviews"
            role="tabpanel"
            aria-labelledby="reviews-tab"
          >
            <div className="reviews-wrapper">
              <div className="row">
                <div className="col-lg-6 mb--40">
                  <div className="axil-comment-area pro-desc-commnet-area">
                    <h5 className="title">01 Review for this product</h5>
                    <ul className="comment-list">
                      <li className="comment">
                        <div className="comment-body">
                          <div className="single-comment">
                            <div className="comment-img">
                              <img
                                src="assets/images/blog/author-image-4.png"
                                alt="Author Images"
                              />
                            </div>
                            <div className="comment-inner">
                              <h6 className="commenter">
                                <a className="hover-flip-item-wrapper" href="/">
                                  <span className="hover-flip-item">
                                    <span data-text="Cameron Williamson">
                                      Eleanor Pena
                                    </span>
                                  </span>
                                </a>
                                <span className="commenter-rating ratiing-four-star">
                                  <a href="/">
                                    <i className="fas fa-star"></i>
                                  </a>
                                  <a href="/">
                                    <i className="fas fa-star"></i>
                                  </a>
                                  <a href="/">
                                    <i className="fas fa-star"></i>
                                  </a>
                                  <a href="/">
                                    <i className="fas fa-star"></i>
                                  </a>
                                  <a href="/">
                                    <i className="fas fa-star empty-rating"></i>
                                  </a>
                                </span>
                              </h6>
                              <div className="comment-text">
                                <p>
                                  “We’ve created a full-stack structure for our
                                  working workflow processes, were from the
                                  funny the century initial all the made, have
                                  spare to negatives. ”
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>

                      <li className="comment">
                        <div className="comment-body">
                          <div className="single-comment">
                            <div className="comment-img">
                              <img
                                src="assets/images/blog/author-image-4.png"
                                alt="Author Images"
                              />
                            </div>
                            <div className="comment-inner">
                              <h6 className="commenter">
                                <a className="hover-flip-item-wrapper" href="/">
                                  <span className="hover-flip-item">
                                    <span data-text="Rahabi Khan">
                                      Courtney Henry
                                    </span>
                                  </span>
                                </a>
                                <span className="commenter-rating ratiing-four-star">
                                  <a href="/">
                                    <i className="fas fa-star"></i>
                                  </a>
                                  <a href="/">
                                    <i className="fas fa-star"></i>
                                  </a>
                                  <a href="/">
                                    <i className="fas fa-star"></i>
                                  </a>
                                  <a href="/">
                                    <i className="fas fa-star"></i>
                                  </a>
                                  <a href="/">
                                    <i className="fas fa-star"></i>
                                  </a>
                                </span>
                              </h6>
                              <div className="comment-text">
                                <p>
                                  “We’ve created a full-stack structure for our
                                  working workflow processes, were from the
                                  funny the century initial all the made, have
                                  spare to negatives. ”
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>

                      <li className="comment">
                        <div className="comment-body">
                          <div className="single-comment">
                            <div className="comment-img">
                              <img
                                src="assets/images/blog/author-image-5.png"
                                alt="Author Images"
                              />
                            </div>
                            <div className="comment-inner">
                              <h6 className="commenter">
                                <a className="hover-flip-item-wrapper" href="/">
                                  <span className="hover-flip-item">
                                    <span data-text="Rahabi Khan">
                                      Devon Lane
                                    </span>
                                  </span>
                                </a>
                                <span className="commenter-rating ratiing-four-star">
                                  <a href="/">
                                    <i className="fas fa-star"></i>
                                  </a>
                                  <a href="/">
                                    <i className="fas fa-star"></i>
                                  </a>
                                  <a href="/">
                                    <i className="fas fa-star"></i>
                                  </a>
                                  <a href="/">
                                    <i className="fas fa-star"></i>
                                  </a>
                                  <a href="/">
                                    <i className="fas fa-star"></i>
                                  </a>
                                </span>
                              </h6>
                              <div className="comment-text">
                                <p>
                                  “We’ve created a full-stack structure for our
                                  working workflow processes, were from the
                                  funny the century initial all the made, have
                                  spare to negatives. ”
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-6 mb--40">
                  <div className="comment-respond pro-des-commend-respond mt--0">
                    <h5 className="title mb--30">Add a Review</h5>
                    <p>
                      Your email address will not be published. Required fields
                      are marked *
                    </p>
                    <div className="rating-wrapper d-flex-center mb--40">
                      Your Rating <span className="require">*</span>
                      <div className="reating-inner ml--20">
                        <a href="/">
                          <i className="fal fa-star"></i>
                        </a>
                        <a href="/">
                          <i className="fal fa-star"></i>
                        </a>
                        <a href="/">
                          <i className="fal fa-star"></i>
                        </a>
                        <a href="/">
                          <i className="fal fa-star"></i>
                        </a>
                        <a href="/">
                          <i className="fal fa-star"></i>
                        </a>
                      </div>
                    </div>

                    <form action="/">
                      <div className="row">
                        <div className="col-12">
                          <div className="form-group">
                            <label>Other Notes (optional)</label>
                            <textarea
                              name="message"
                              placeholder="Your Comment"
                            ></textarea>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                          <div className="form-group">
                            <label>
                              Name <span className="require">*</span>
                            </label>
                            <input id="name" type="text" />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                          <div className="form-group">
                            <label>
                              Email <span className="require">*</span>{" "}
                            </label>
                            <input id="email" type="email" />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-submit">
                            <button
                              type="submit"
                              id="submit"
                              className="axil-btn btn-bg-primary w-auto"
                            >
                              Submit Comment
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WooCommerce;
