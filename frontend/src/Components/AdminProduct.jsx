import React from "react";

const AdminProduct = () => {
  return (
    <div classname="product-edit-container">
      <h1>Edit Product</h1>
      <form id="productForm">
        <input type="hidden" id="productId" defaultValue={1} />
        <div classname="form-group">
          <label htmlfor="productTitle">Product Title:</label>
          <input
            type="text"
            id="productTitle"
            defaultValue="3D™ wireless headset"
          />
        </div>
        <div classname="form-group">
          <label htmlfor="price">Price:</label>
          <input type="number" id="price" defaultValue={155} />
        </div>
        <div classname="form-group">
          <label htmlfor="oldPrice">Old Price:</label>
          <input type="number" id="oldPrice" defaultValue={255} />
        </div>
        <div classname="form-group">
          <label htmlfor="productRating">Product Rating:</label>
          <input type="number" id="productRating" defaultValue={4} />
        </div>
        <div classname="form-group">
          <label htmlfor="totalReviews">Total Reviews:</label>
          <input type="number" id="totalReviews" defaultValue={2} />
        </div>
        <div classname="form-group">
          <label htmlfor="isProductInStock">Product In Stock:</label>
          <input type="checkbox" id="isProductInStock" defaultChecked />
        </div>
        <div classname="form-group">
          <label htmlfor="isFreeDeliveryAvailable">
            Free Delivery Available:
          </label>
          <input type="checkbox" id="isFreeDeliveryAvailable" defaultChecked />
        </div>
        <div classname="form-group">
          <label htmlfor="discountCode">Discount Code:</label>
          <input type="text" id="discountCode" defaultValue="MOTIVE30" />
        </div>
        <div classname="form-group">
          <label htmlfor="description">Description:</label>
          <textarea
            id="description"
            defaultValue={
              "In ornare lorem ut est dapibus, ut tincidunt nisi pretium. Integer ante est, elementum eget magna. Pellentesque sagittis dictum libero, eu dignissim tellus."
            }
          />
        </div>
        <div classname="form-group">
          <label htmlfor="colors">Colors:</label>
          <select id="colors" multiple>
            <option value="#aae6f8" selected>
              #aae6f8
            </option>
            <option value="#5f8af7" selected>
              #5f8af7
            </option>
            <option value="#59c3c0" selected>
              #59c3c0
            </option>
          </select>
        </div>
        <div classname="form-group">
          <label htmlfor="sizes">Sizes:</label>
          <select id="sizes" multiple>
            <option value="xs" selected>
              xs
            </option>
            <option value="s" selected>
              s
            </option>
            <option value="m" selected>
              m
            </option>
            <option value="l" selected>
              l
            </option>
            <option value="xl" selected>
              xl
            </option>
          </select>
        </div>
        <div classname="form-group">
          <label htmlfor="images">Images:</label>
          <ul classname="image-list" id="imageList">
            <li>
              <img
                src="/assets/images/product/product-big-01.png"
                alt="Product Image 1"
              />
            </li>
            <li>
              <img
                src="/assets/images/product/product-big-02.png"
                alt="Product Image 2"
              />
            </li>
            <li>
              <img
                src="/assets/images/product/product-big-03.png"
                alt="Product Image 3"
              />
            </li>
            <li>
              <img
                src="/assets/images/product/product-big-02.png"
                alt="Product Image 4"
              />
            </li>
          </ul>
          <input type="file" id="imageUpload" accept="image/*" />
        </div>
        <div classname="form-group">
          <label htmlfor="thumbnail">Thumbnail:</label>
          <input
            type="text"
            id="thumbnail"
            defaultValue="/assets/images/product/product-big-01.png"
          />
        </div>
        <div classname="form-group">
          <label htmlfor="discountPercentage">Discount Percentage:</label>
          <input type="number" id="discountPercentage" defaultValue={20} />
        </div>
        <div classname="form-group">
          <label htmlfor="discountText">Discount Text:</label>
          <input type="text" id="discountText" defaultValue="20% OFF" />
        </div>
        <div classname="form-group">
          <label htmlfor="category">Category:</label>
          <input type="text" id="category" defaultValue="Headphones" />
        </div>
        <input type="submit" defaultValue="Save Product" />
      </form>
    </div>
  );
};

export default AdminProduct;
