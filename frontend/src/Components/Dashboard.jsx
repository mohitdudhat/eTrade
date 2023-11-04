import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import axios from "axios";
import Category from "./Category";

const categories = [
  {
    title: "Total Users",
    imgSrc: "/assets/images/product/categories/elec-4.png",
  },
  {
    title: "Category",
    imgSrc: "/assets/images/product/categories/elec-5.png",
  },
  {
    title: "Total Product",
    imgSrc: "/assets/images/product/categories/elec-11.png",
  },
  {
    title: "Current Admins",
    imgSrc: "/assets/images/product/categories/elec-6.png",
  },
  {
    title: "Add / Edit Product",
    imgSrc: "/assets/images/product/categories/elec-2.png",
    link: "/admin/product",
  },
  //   {
  //     title: "Networking",
  //     imgSrc: "/assets/images/product/categories/elec-7.png",
  //   },
  //   {
  //     title: "PC Gaming",
  //     imgSrc: "/assets/images/product/categories/elec-8.png",
  //   },
  //   {
  //     title: "Smartwatches",
  //     imgSrc: "/assets/images/product/categories/elec-1.png",
  //   },
  //   {
  //     title: "Headphones",
  //     imgSrc: "/assets/images/product/categories/elec-9.png",
  //   },
  //   {
  //     title: "Camera & Photo",
  //     imgSrc: "/assets/images/product/categories/elec-10.png",
  //   },
  //   {
  //     title: "Video Games",
  //     imgSrc: "/assets/images/product/categories/elec-8.png",
  //   },
  //   {
  //     title: "Sports",
  //     imgSrc: "/assets/images/product/categories/elec-1.png",
  //   },
];
const DashboardFunctions = () => {
  return (
    <div className="axil-categorie-area bg-color-white axil-section-gapcommon">
      <div className="container">
        <div className="section-title-wrapper">
          <span className="title-highlighter highlighter-secondary">
            <i className="far fa-tags"></i> Categories
          </span>
          <h2 className="title">Admin Dashboard</h2>
        </div>
        <div className="categrie-product-activation slick-layout-wrapper--15 axil-slick-arrow arrow-top-slide">
          {categories.map((category, index) => (
            <div key={index}>
              <div
                className="categrie-product"
                data-sal="zoom-out"
                data-sal-delay={category.salDelay || 0}
                data-sal-duration="500"
              >
                <Link to={category.link}>
                  <img
                    className="img-fluid"
                    src={category.imgSrc}
                    alt="product category"
                  />
                  <h6 className="cat-title">{category.title}</h6>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
const ProductTable = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3001/products");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
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
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <h1>Product List</h1>
      <h4>Total Products : - {products.length}</h4>
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
                <button onClick={() => navigate("/admin/product")}>Edit</button>
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
    </>
  );
};
const Users = () => {
  const [users, setUsers] = useState([]);
  const fetchUser = async () => {
    try {
      const response = await axios.get("http://localhost:3001/users");
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching Users:", error);
    }
  };
  const updateRole = async (id) => {
    const user = users.find((user) => id === user.id);

    const isAdmin = user.role === "Admin"; // Check if the initial role is "Admin"

    const newRole = isAdmin ? "User" : "Admin";
    try {
      const response = await axios.patch(`http://localhost:3001/users/${id}`, {
        role: newRole,
      });
      console.log("Updated User Role to", newRole, "Response:", response.data);
      fetchUser();
    } catch (error) {
      console.error("Error Updating Role:", error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <>
      <h1>Product List</h1>
      <h4>Total Users : - {users.length}</h4>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <button
                  onClick={() => {
                    updateRole(user.id);
                  }}
                >
                  Change Role
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
const Admin = () => {
  const [admins, setAdmins] = useState([]);
  const fetchAdmin = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3001/users?role=Admin"
      );
      setAdmins(response.data);
    } catch (error) {
      console.error("Error fetching Users:", error);
    }
  };
  const updateRole = async (id) => {
    const user = admins.find((user) => id === user.id);

    const isAdmin = user.role === "Admin"; // Check if the initial role is "Admin"

    const newRole = isAdmin ? "User" : "Admin";
    try {
      const response = await axios.patch(`http://localhost:3001/users/${id}`, {
        role: newRole,
      });
      console.log("Updated User Role to", newRole, "Response:", response.data);
      fetchAdmin();
    } catch (error) {
      console.error("Error Updating Role:", error);
    }
  };

  useEffect(() => {
    fetchAdmin();
  }, []);
  return (
    <>
      <h1>Admins</h1>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {admins.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <button
                  onClick={() => {
                    updateRole(user.id);
                  }}
                >
                  Change Role
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
const CategoryAdd = () => {
  const [category, setCategory] = useState("");
  const addCategory = () => {};
  return (
    <>
      <div className="form-group">
        <label>
          Old Price<span>*</span>
        </label>
        <input
          type="text"
          name="category"
          placeholder="Old Price"
          onChange={(e) => setCategory(e.target.value)}
          value={category}
        />
        <button
          type="submit"
          className="axil-btn btn-bg-primary w-25 py-3 px-3 mb-4"
          onClick={() => addCategory()}
        ></button>
      </div>
    </>
  );
};
const Dashboard = () => {
  return (
    <div>
      <DashboardFunctions />
      {/* <ProductTable /> */}
      {/* <Users /> */}
      {/* <Admin /> */}
      <CategoryAdd />
    </div>
  );
};

export default Dashboard;
