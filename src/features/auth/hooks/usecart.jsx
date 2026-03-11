import { useEffect, useState } from "react";

export const useCart = () => {

  const [cart, setCart] = useState(() => {
    const data = localStorage.getItem("cart");
    return data ? JSON.parse(data) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // escuchar cambios del carrito
  useEffect(() => {

    const updateCart = () => {
      const data = localStorage.getItem("cart");
      setCart(data ? JSON.parse(data) : []);
    };

    window.addEventListener("cartUpdated", updateCart);

    return () => {
      window.removeEventListener("cartUpdated", updateCart);
    };

  }, []);

  const addCart = (product) => {

    const exist = cart.find((item) => item.id === product.id);

    let newCart;

    if (exist) {

      newCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, qty: item.qty + 1 }
          : item
      );

    } else {

      newCart = [...cart, { ...product, qty: 1 }];

    }

    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));

    window.dispatchEvent(new Event("cartUpdated"));
  };

  const increaseQty = (id) => {

    const newCart = cart.map((item) =>
      item.id === id
        ? { ...item, qty: item.qty + 1 }
        : item
    );

    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));

    window.dispatchEvent(new Event("cartUpdated"));
  };

  const decreaseQty = (id) => {

    const newCart = cart
      .map((item) =>
        item.id === id
          ? { ...item, qty: item.qty - 1 }
          : item
      )
      .filter((item) => item.qty > 0);

    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));

    window.dispatchEvent(new Event("cartUpdated"));
  };

  const removeCart = (id) => {

    const newCart = cart.filter((item) => item.id !== id);

    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));

    window.dispatchEvent(new Event("cartUpdated"));
  };

  const clearCart = () => {

    setCart([]);
    localStorage.removeItem("cart");

    window.dispatchEvent(new Event("cartUpdated"));
  };

  return {
    cart,
    addCart,
    removeCart,
    increaseQty,
    decreaseQty,
    clearCart
  };
};