import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import NewsLetter from "./Components/NewsLetter";
import Service from "./Components/Service";
import Breadcrumb from "./Components/BreadCrumb";

import { AuthHeader } from "./Components/AuthHeader";
import { AuthForm } from "./Components/AuthForm";
import { ForgotPasswordForm } from "./Components/ForgotPasswordForm";
import { ResetForm } from "./Components/ResetForm";
import { ErrorPage } from "./Components/ErrorPage";
import { MyAccount } from "./Components/MyAccount";
import { About } from "./Components/About";
import { Team } from "./Components/Team";
import { AboutFeatures } from "./Components/AboutFeatures";
import { ContactForm } from "./Components/ContactForm";
import { useEffect, useState } from "react";
import $ from "jquery";
import "slick-carousel"; // Import the Slider component from react-slick
import { Helmet } from "react-helmet";
import { useRef } from "react";
import LoadingBar from "react-top-loading-bar";
import { Audio } from "react-loader-spinner";
import Home from "./Components/Home";
import Shop from "./Components/Shop";
import SingleProductPage from "./Components/SingleProductPage";
import CartPage from "./Components/CartPage";
import WishlistPage from "./Components/WishlistPage";
import CheckOutPage from "./Components/CheckOutPage";
import PrivacyPolicyPage from "./Components/PrivacyPolicyPage";
import AboutUs from "./Components/AboutUs";
import MyAccountPage from "./Components/MyAccountPage";
import ContactPage from "./Components/ContactPage";
import AdminProduct from "./Components/AdminProduct";
function App() {
  const [progress, setProgress] = useState(0);
  const [render, setRender] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const loadScript = (src, callback) => {
      const script = document.createElement("script");
      script.src = src;
      script.defer = true;
      script.onload = callback;
      document.head.appendChild(script);
    };

    // List of script sources to load
    const scriptSources = [
      "/assets/js/vendor/modernizr.min.js",
      "/assets/js/vendor/jquery.js",
      "/assets/js/vendor/popper.min.js",
      "/assets/js/vendor/bootstrap.min.js",
      "/assets/js/vendor/slick.min.js",
      "/assets/js/vendor/js.cookie.js",
      "/assets/js/vendor/jquery-ui.min.js",
      "/assets/js/vendor/jquery.ui.touch-punch.min.js",
      "/assets/js/vendor/jquery.countdown.min.js",
      "/assets/js/vendor/sal.js",
      "/assets/js/vendor/jquery.magnific-popup.min.js",
      "/assets/js/vendor/imagesloaded.pkgd.min.js",
      "/assets/js/vendor/isotope.pkgd.min.js",
      "/assets/js/vendor/counterup.js",
      "/assets/js/vendor/waypoints.min.js",
      "/assets/js/main.js",
    ];

    // Load each script in sequence
    const loadScripts = (index) => {
      if (index < scriptSources.length) {
        loadScript(scriptSources[index], () => loadScripts(index + 1));
      }
    };
    $(document).on("turbo:before-cache", function () {
      const sliders = document.querySelectorAll(".slick-initialized");

      sliders.forEach((item) => {
        $(item).slick("unslick");
      });
    });
    // Start loading scripts
    setProgress(progress + 10);
    setProgress(progress + 20);
    setProgress(progress + 30);
    setProgress(100);
    setTimeout(() => {
      loadScripts(0);
    }, 1500);

    // return () => {
    //   scriptSources.forEach((src) => {
    //     const scriptElement = document.querySelector(`script[src="${src}"]`);
    //     if (scriptElement) {
    //       scriptElement.remove();
    //     }
    //   });
    // };
  }, []);

  return (
    <div>
      <LoadingBar
        color="#f11946"
        progress={progress}
        onLoaderFinished={() => {
          setProgress(100);
          setRender(!render);
          setLoading(true);
        }}
      />
      <br />
      {loading && (
        <BrowserRouter>
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/admin/product" element={<AdminProduct />} />
            <Route path="/shop.html" element={<Shop />} />
            <Route
              path="/single-product.html/:id"
              element={<SingleProductPage />}
            />
            <Route path="/cart.html" element={<CartPage />} />
            <Route path="/wishlist.html" element={<WishlistPage />} />
            <Route path="/checkout.html" element={<CheckOutPage />} />
            <Route
              path="/sign-in.html"
              element={
                <>
                  <AuthHeader page="sign-in" />
                  <AuthForm isSignIn={true} />
                </>
              }
            />
            <Route
              path="/sign-up.html"
              element={
                <>
                  <AuthHeader />
                  <AuthForm />
                </>
              }
            />
            <Route
              path="/reset-password.html"
              element={
                <div className="axil-signin-area">
                  <AuthHeader />
                  <ResetForm />
                </div>
              }
            />
            <Route
              path="/forgot-password.html"
              element={
                <div className="axil-signin-area">
                  <AuthHeader />
                  <ForgotPasswordForm />
                </div>
              }
            />
            <Route
              path="/privacy-policy.html"
              element={<PrivacyPolicyPage />}
            />
            <Route
              path="/error-page.html"
              element={
                <div>
                  <Header />

                  <ErrorPage />
                  <Footer />
                </div>
              }
            />
            <Route path="/about-us.html" element={<AboutUs />} />
            <Route path="/my-account.html" element={<MyAccountPage />} />
            <Route path="/contact.html" element={<ContactPage />} />
          </Routes>
          <Service />
        </BrowserRouter>
      )}
    </div>
  );
}
export default App;
