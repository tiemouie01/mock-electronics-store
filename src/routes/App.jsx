import { useState } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  return (
    <>
      <div className="h-[70px]"></div>
      <Header cartItems={cartItems.length} />
      <Outlet />
    </>
  );
};

export default App;
