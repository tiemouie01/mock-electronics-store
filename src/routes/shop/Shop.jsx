import { useState } from "react";
import { useData } from "../../getData";
import { FaSpinner } from "react-icons/fa6";
import { useRef } from "react";
import Products from "./Products";
import { Outlet, useOutletContext } from "react-router-dom";

const Shop = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const headerRef = useRef(null);
  const [cartItems, setCartItems] = useOutletContext();
  const { data, error, loading } = useData();

  const updateCartItems = (item) => {
    const updatedItems = [...cartItems];
    updatedItems.push(item);
    setCartItems(updatedItems);
  };

  if (loading)
    return (
      <div className="flex h-dvh items-center justify-center">
        <FaSpinner size={50} className="animate-spin" />;
      </div>
    );

  return (
    <main className="grid">
      <Products
        products={data}
        setSelectedProduct={setSelectedProduct}
        headerRef={headerRef}
      />
      <Outlet
        context={[
          updateCartItems,
          selectedProduct,
          data,
          cartItems,
          setCartItems,
          headerRef,
        ]}
      />
    </main>
  );
};

export default Shop;
