import { createContext, useContext, useEffect, useState } from "react";
import CartItem from "../Component/header/Cart/CartItem";

const ShoppingCartContext = createContext({});
const initialFavItems = localStorage.getItem("Fav")
  ? JSON.parse(localStorage.getItem("Fav"))
  : [];
const initialCartItems = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

const ShoppingCartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [Favorites,setFavorites] = useState(initialFavItems);
  useEffect(() => {
    localStorage.setItem("Fav", JSON.stringify(Favorites));
  }, [Favorites]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  
  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );
  const FavQuantity = Favorites.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );
  const increaseCartQuantity = (id) => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };
  const decreaseCartQuantity = (id) => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };
  const deleteFav = (id) => {
    setFavorites((currItems) => currItems.filter((item) => item.id !== id));
  };
  
  const addToFav = (id) => {
    setFavorites((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      }  } )
  }
  

  return (
    <ShoppingCartContext.Provider
      value={{
        increaseCartQuantity,
        decreaseCartQuantity,
        cartQuantity,
        cartItems,
        FavQuantity,
        addToFav,
        Favorites,
        deleteFav
      }}
    >
      {children}
      <CartItem />
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartProvider;
export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};