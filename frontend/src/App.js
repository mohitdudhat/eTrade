import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Banner } from "./Components/Banner";
import { Category } from "./Components/Category";
import { Poster } from "./Components/Poster";
import { Product } from "./Components/Product";
import { Testimonial } from "./Components/Testimonial";
import { Arrival } from "./Components/Arrival";
import { Tranding } from "./Components/Tranding";
import { Axil } from "./Components/Axil";
import { NewLetter } from "./Components/NewLetter";
import { Footer } from "./Components/Footer";
import { ProductModal } from "./Components/ProductModal";
import { Service } from "./Components/Service";
import { SearchModal } from "./Components/SearchModal";
import { Cart } from "./Components/Cart";
import { OfferModal } from "./Components/OfferModal";
import { WhyChoose } from "./Components/WhyChoose";
import { OfferSlider } from "./Components/OfferSlider";
import Header from "./Components/Header";
import { Breadcrumb } from "./Components/BreadCrumb";
import { ShopArea } from "./Components/ShopArea";
import { SingleProduct } from "./Components/SingleProduct";
import { YourCart } from "./Components/YourCart";
import { YourWishList } from "./Components/YourWishList";
import { Checkout } from "./Components/CheckOut";
import { AuthHeader } from "./Components/AuthHeader";
import { SigninForm } from "./Components/SigninForm.";
import { ForgotPasswordForm } from "./Components/ForgotPasswordForm";
import { SignupForm } from "./Components/Signup";
import { ResetForm } from "./Components/ResetForm";
import { PrivacyPolicy } from "./Components/PrivacyPolicy";
import { ErrorPage } from "./Components/ErrorPage";
import { MyAccount } from "./Components/MyAccount";
import { About } from "./Components/About";
import { Team } from "./Components/Team";
import { AboutFeatures } from "./Components/AboutFeatures";
import { ContactForm } from "./Components/ContactForm";
import { Recents } from "./Components/Recents";
import { useEffect, useState } from "react";
import $ from "jquery";
import "slick-carousel"; // Import the Slider component from react-slick
import sal from "sal.js";

function App() {
  const [number, setNumber] = useState(0);

  // useEffect(() => {
  //   // Function to reload the page and count reloads
  //   const reloadPage = () => {
  //     if (number < 3) {
  //       window.location.reload();
  //       // Increment the reload count by updating the state
  //       setNumber((prevNumber) => prevNumber + 1);
  //     } else {
  //       // Stop reloading after three times
  //       clearInterval(reloadInterval);
  //     }
  //   };

  //   // Reload the page every 2 seconds
  //   const reloadInterval = setInterval(reloadPage, 2000);

  //   // Clean up the interval when the component is unmounted
  //   return () => {
  //     clearInterval(reloadInterval);
  //   };
  // }, [number]);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header TopCampaign={true} style={1} />
                <Banner />
                <Category />
                <Poster />
                <Product />
                <Testimonial />
                <Arrival />
                <Tranding />
                <WhyChoose />
                <Axil />
                <NewLetter />
                <Service />
                <Footer />
              </>
            }
          />
          <Route
            path="/shop.html"
            element={
              <>
                <Header />
                <Breadcrumb
                  currentLocation="Shop"
                  Title="Explore All Products"
                />
                <ShopArea />
                <NewLetter />

                <Service />
                <Footer />
              </>
            }
          />
          <Route
            path="/single-product.html"
            element={
              <>
                <Header />
                <SingleProduct />
                <Recents />
                <NewLetter />
                <Service />
                <Footer />
              </>
            }
          />
          <Route
            path="/cart.html"
            element={
              <>
                <Header />
                <YourCart />
                <NewLetter />
                <Service />
                <Footer />
              </>
            }
          />
          <Route
            path="/wishlist.html"
            element={
              <>
                <Header />
                <YourWishList />
                <Service />
                <Footer />
              </>
            }
          />
          <Route
            path="/checkout.html"
            element={
              <>
                <Header />
                <Checkout />
                <Service />
                <Footer />
              </>
            }
          />
          <Route
            path="/sign-in.html"
            element={
              <>
                <AuthHeader page="sign-in" />
                <SigninForm />
              </>
            }
          />
          <Route
            path="/sign-up.html"
            element={
              <>
                <AuthHeader />
                <SignupForm />
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
            element={
              <div>
                <Header />
                <Breadcrumb currentLocation="Pages" Title="Privacy Policy" />
                <PrivacyPolicy />
                <Service />
                <Footer />
              </div>
            }
          />
          <Route
            path="/error-page.html"
            element={
              <div>
                <Header />
                <ErrorPage />
                <Service />
                <Footer />
              </div>
            }
          />
          <Route
            path="/about-us.html"
            element={
              <div>
                <Header />
                <Breadcrumb
                  currentLocation="About Us"
                  Title="About Our Store"
                />
                <About />
                <Team />
                <AboutFeatures />
                <NewLetter />
                <Service />
                <Footer />
              </div>
            }
          />
          <Route
            path="/my-account.html"
            element={
              <div>
                <Header />
                <Breadcrumb
                  currentLocation="My Account"
                  Title="Explore All Products"
                />
                <MyAccount />
                <NewLetter />
                <Service />
                <Footer />
              </div>
            }
          />
          <Route
            path="/contact.html"
            element={
              <div>
                <Header />
                <Breadcrumb currentLocation="Contact" Title="Contact With Us" />
                <ContactForm />
                <NewLetter />
                <Service />
                <Footer />
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
