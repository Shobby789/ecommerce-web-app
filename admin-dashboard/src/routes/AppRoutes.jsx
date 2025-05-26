import React from "react";
import { Route, Routes } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import DashboardPage from "../pages/dashboard/DashboardPage";
import ProductsPage from "../pages/products/ProductsPage";
import AddProductPage from "../pages/products/AddProductPage";
import OrdersPage from "../pages/orders/OrdersPage";
import CustomersPage from "../pages/customers/CustomersPage";
import ReviewsPage from "../pages/reviews/ReviewsPage";
import SettingsPage from "../pages/settings/SettingsPage";
import LoginPage from "../pages/auth/LoginPage";

const AppRoutes = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/dashboard"
          element={
            <DashboardLayout page={<DashboardPage />} pageName={`Dashboard`} />
          }
        />
        <Route
          path="/products"
          element={
            <DashboardLayout page={<ProductsPage />} pageName={`Products`} />
          }
        />
        <Route
          path="/products/add-product"
          element={
            <DashboardLayout
              page={<AddProductPage />}
              pageName={`Add Product`}
            />
          }
        />
        <Route
          path="/orders"
          element={
            <DashboardLayout page={<OrdersPage />} pageName={`Orders`} />
          }
        />
        <Route
          path="/customers"
          element={
            <DashboardLayout page={<CustomersPage />} pageName={`Customers`} />
          }
        />
        <Route
          path="/reviews"
          element={
            <DashboardLayout page={<ReviewsPage />} pageName={`Reviews`} />
          }
        />
        <Route
          path="/settings"
          element={
            <DashboardLayout page={<SettingsPage />} pageName={`Settings`} />
          }
        />
      </Routes>
    </React.Fragment>
  );
};

export default AppRoutes;
