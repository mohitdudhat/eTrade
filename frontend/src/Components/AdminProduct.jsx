import React, { useState, useEffect } from "react";
import axios from "axios";

const AdminProduct = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [formData, setFormData] = useState({
    productTitle: "",
    price: "",
    oldPrice: "",
    couponCode: "",
    description: "",
    category: "3", // Default category value
    discountAmount: "",
    discountText: "",
    isProductInStock: false,
    isFreeDeliveryAvailable: false,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  const handleViewDetails = async (productId) => {
    try {
      const response = await axios.get(
        `http://localhost:3001/products/${productId}`
      );
      setSelectedProduct(response.data);
    } catch (error) {
      console.error(
        `Error fetching product details for ID ${productId}:`,
        error
      );
    }
  };
  const FormChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [name]: value });
    console.log({ ...formData, [name]: value });
  };

  const handleAddProduct = async () => {
    try {
      const response = await axios.post("http://localhost:3001/products", {
        ...formData,
        colors: ["#aae6f8", "#5f8af7", "#59c3c0"],
        sizes: ["xs", "s", "m", "l", "xl"],
        images: [
          "/assets/images/product/product-big-01.png",
          "/assets/images/product/product-big-02.png",
          "/assets/images/product/product-big-03.png",
          "/assets/images/product/product-big-02.png",
        ],
        thumbnail: "/assets/images/product/product-big-01.png",
        discount: {
          discountPercentage: parseFloat(formData.discountAmount),
          discountText: formData.discountText,
        },
        category: formData.category,
      });

      const newProducts = [...products, response.data];
      setProducts(newProducts);
      console.log(newProducts);
      console.log(`Added product with ID ${response.data.id}`);
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };
  const handleEditProduct = (productId) => {
    console.log(`Edit product with ID ${productId}`);
  };

  const handleDeleteProduct = (productId) => {
    console.log(`Delete product with ID ${productId}`);
    axios
      .delete(`http://localhost:3001/products/${productId}`)
      .then(() => {
        const updatedProducts = products.filter(
          (product) => product.id !== productId
        );
        setProducts(updatedProducts);
        console.log(`Product with ID ${productId} deleted.`);
      })
      .catch((error) => {
        console.error(`Error deleting product with ID ${productId}:`, error);
      });
  };

  return (
    <div className="container overflow-hidden">
      <h1>Product List</h1>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th colSpan={2}>Stock</th>
            <th colSpan={2}>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>
                <img
                  src={product.thumbnail}
                  alt="Thumbnail"
                  width="50"
                  height="50"
                  className="img-thumbnail"
                />
                &nbsp;&nbsp;&nbsp;&nbsp;{product.productTitle}
              </td>
              <td>{product.isProductInStock ? "In Stock" : "Out of Stock"}</td>
              <td>
                <button onClick={() => handleEditProduct(product.id)}>
                  Edit
                </button>
              </td>
              <td>
                <button onClick={() => handleDeleteProduct(product.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedProduct && (
        <div>
          <h2>Product Details</h2>
          <p>ID: {selectedProduct.id}</p>
          <p>Name: {selectedProduct.productTitle}</p>
          <p>
            Stock:{" "}
            {selectedProduct.isProductInStock ? "In Stock" : "Out of Stock"}
          </p>
        </div>
      )}

      <div className="axil-checkout-billing">
        <h4 className="title mb--40">Add Product</h4>
        <div className="row">
          <div className="form-group">
            <label>
              Product Name <span>*</span>
            </label>
            <input
              type="text"
              placeholder="#Product Name Here"
              name="productTitle"
              onChange={(e) => FormChange(e)}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="form-group">
              <label>
                Current Price<span>*</span>
              </label>
              <input
                type="text"
                name="price"
                placeholder="Current Price"
                onChange={(e) => FormChange(e)}
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <label>
                Old Price<span>*</span>
              </label>
              <input
                type="text"
                name="oldPrice"
                placeholder="Old Price"
                onChange={(e) => FormChange(e)}
              />
            </div>
          </div>
        </div>
        <div className="form-group">
          <label>COUPON CODE</label>
          <input
            type="text"
            name="discountCode"
            onChange={(e) => FormChange(e)}
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            rows={2}
            name="description"
            placeholder="Description about your product"
            defaultValue={""}
            onChange={(e) => FormChange(e)}
          />
        </div>
        <div className="row">
          {Array.from({ length: 3 }, (_, i) => (
            <div className="col-lg-4" key={i}>
              <div className="form-group">
                <label>
                  Color {i + 1} <span>*</span>
                </label>
                <input
                  type="text"
                  name={`color_${i + 1}`}
                  placeholder={`#Your Color Product ${i + 1}`}
                  onChange={FormChange}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="row">
          {Array.from({ length: 5 }, (_, i) => (
            <div className="col-lg-2" key={i}>
              <div className="form-group">
                <label>
                  Size {i + 1} <span>*</span>
                </label>
                <input
                  type="text"
                  name={`size-${i + 1}`}
                  placeholder={`Product Size ${i + 1}`}
                  onChange={FormChange}
                />
              </div>
            </div>
          ))}
        </div>

        <div>
          <h4>Slick Images</h4>
          <form className="image-upload-form" encType="multipart/form-data">
            <div className="form-group">
              <label htmlFor="image">Upload Image</label>
              <div className="dropzone" id="slick-images-dropzone">
                Drag &amp; drop images here, or click to select images
                <input
                  type="file"
                  id="slick-images-input"
                  className="imageInput"
                  name="slick-images"
                  multiple
                  accept="image/*"
                />
              </div>
            </div>
          </form>
          <div id="slick-image-previews" className="preview-row"></div>
        </div>
        <div>
          <h4>ThumbNail Images</h4>
          <form className="image-upload-form" encType="multipart/form-data">
            <div className="form-group">
              <label htmlFor="image">Upload Image</label>
              <div className="dropzone" id="thumbnail-images-dropzone">
                Drag &amp; drop images here, or click to select images
                <input
                  type="file"
                  id="thumbnail-images-input"
                  className="imageInput"
                  name="thumbnail-images"
                  multiple
                  accept="image/*"
                />
              </div>
            </div>
          </form>
          <div id="thumbnail-image-previews" className="preview-row">
            {/* Image previews will be displayed here */}
          </div>
        </div>
        <div className="form-group">
          <label>
            Categories <span>*</span>
          </label>
          <select id="category" name="category" onChange={(e) => FormChange(e)}>
            <option>Electronics</option>
            <option>Electronics</option>
            <option>Electronics Zealand</option>
            <option>Electronics</option>
            <option>Electronics Kingdom (UK)</option>
            <option>Electronics States (USA)</option>
          </select>
        </div>
        <div className="form-group">
          <label>
            Discount<span>*</span>
          </label>
          <input
            type="number"
            id="discount-amount"
            name="discountPercentage"
            placeholder="Discount Amount"
            onChange={(e) => {
              FormChange(e);
            }}
          />
          <input
            type="text"
            className="mt-5"
            id="discount-text"
            name="discountText"
            placeholder="Discount Text"
            onChange={(e) => {
              FormChange(e);
            }}
          />
        </div>
        <div className="form-group input-group">
          <div className="col-lg-3">
            <input
              type="checkbox"
              id="in-stock-checkbox"
              name="isProductInStock"
              checked={formData.isProductInStock}
              onChange={(e) => {
                const name = e.target.name;
                const checked = e.target.checked;
                setFormData({ ...formData, [name]: checked });
              }}
            />
            <label htmlFor="in-stock-checkbox">In Stock</label>
          </div>
          <div className="col-lg-3">
            <input
              type="checkbox"
              id="free-delivery-checkbox"
              name="isFreeDeliveryAvailable"
              checked={formData.isFreeDeliveryAvailable}
              onChange={(e) => {
                const name = e.target.name;
                const checked = e.target.checked;
                setFormData({ ...formData, [name]: checked });
              }}
            />
            <label htmlFor="free-delivery-checkbox">Free Delivery</label>
          </div>
        </div>

        <button
          type="submit"
          className="axil-btn btn-bg-primary w-25 py-3 px-3 mb-4"
          onClick={() => handleAddProduct()}
        >
          Add Product
        </button>
      </div>
    </div>
  );
};

export default AdminProduct;
