import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Navbar } from "./Components/Navbar";
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

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
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
                <ProductModal />
                <SearchModal />
                <Cart />
                <OfferModal />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
