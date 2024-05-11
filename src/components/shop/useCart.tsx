import { create } from "zustand";

type Cart = {
  totalAmount: number;
  cartItems: CartItem[];
};

type CartItem = {
  tempId: string;
  furnitureId: string;
  slug: string;
  name: string;
  price: number;
  amount: number;
  description: string;
  details: string;
  image: string;
};

type State = {
  cart: Cart;
};

type Action = {
  addCart: (furniture: CartItem) => void;
  removeCart: (id: string) => void;
  clearCart: () => void;
  subtractCartItem: (id: string) => void;
  addCartItem: (id: string) => void;
};

export const useCart = create<State & Action>((set) => ({
  cart: {
    cartItems: [],
    totalAmount: 0,
  },
  addCart: (product) => {
    set((state) => {
      return {
        ...state,
        cart: {
          ...state.cart,
          cartItems: [...state.cart.cartItems, product],
          totalAmount: state.cart.totalAmount + product.price * product.amount,
        },
      };
    });
  },
  removeCart: (id) => {
    set((state) => {
      const newList = state.cart.cartItems.filter((item) => item.tempId !== id);
      const newPrice = newList.reduce((totalPrice, item) => {
        return totalPrice + item.price * item.amount;
      }, 0);

      return {
        ...state,
        cart: {
          ...state.cart,
          cartItems: newList,
          totalAmount: 0 + newPrice,
        },
      };
    });
  },
  clearCart: () => {
    set((state) => {
      const clearList: any = [];

      return {
        ...state,
        cart: {
          ...state.cart,
          cartItems: clearList,
          totalAmount: 0,
        },
      };
    });
  },
  subtractCartItem: (id) => {
    set((state) => {
      const map1 = state.cart.cartItems.map((x: any) => {
        if (x.tempId == id) {
          x.amount = x.amount - 1;
        }
        return x;
      });

      const newPrice = map1.reduce((totalPrice, item) => {
        return totalPrice + item.price * item.amount;
      }, 0);

      return {
        ...state,
        cart: {
          ...state.cart,
          cartItems: map1,
          totalAmount: 0 + newPrice,
        },
      };
    });
  },
  addCartItem: (id) => {
    set((state) => {
      const map1 = state.cart.cartItems.map((x: any) => {
        if (x.tempId == id) {
          x.amount = x.amount + 1;
        }
        return x;
      });

      const newPrice = map1.reduce((totalPrice, item) => {
        return totalPrice + item.price * item.amount;
      }, 0);

      return {
        ...state,
        cart: {
          ...state.cart,
          cartItems: map1,
          totalAmount: 0 + newPrice,
        },
      };
    });
  },
}));
