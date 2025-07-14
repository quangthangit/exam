import "./App.css";
import { CartProvider } from "./contexts/CartContext";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { MainLayout } from "./layout/MainLayout";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <CartProvider>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
        </Route>
      </Routes>
    </CartProvider>
  );
}

export default App;
