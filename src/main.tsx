import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Header from "./components/header";
import Footer from "./components/footer";
import HomePage from "./pages/home-page";
import AboutPage from "./pages/about-page";
import ProductPage from "./pages/product-page";
import ProductDetailsPage from "./pages/product-details-page";
import { NuqsAdapter } from "nuqs/adapters/react-router/v7";
import LoginPage from "./pages/login-page";
import CartPage from "./pages/cart-page";

createRoot(document.getElementById("root")!).render(

  <StrictMode>
    <NuqsAdapter>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/products/:id" element={<ProductDetailsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<LoginPage />} />
             <Route path="/cart" element={<CartPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </NuqsAdapter>
  </StrictMode>,
);
