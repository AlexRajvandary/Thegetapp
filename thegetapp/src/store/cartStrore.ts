// store/cartStore.ts
import { create } from 'zustand';

export type CartItem = {
  id: string;
  title: string;
  price: string;
  size: string;
  color: string;
  quantity: number;
};

type CartStore = {
  cart: CartItem[];
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  removeItem: (id: string, size: string, color: string) => void;
  clearCart: () => void;
  getQuantity: (id: string, size: string, color: string) => number;
};

export const useCartStore = create<CartStore>((set, get) => ({
  cart: [],
  addItem: (item) =>
    set((state) => {
      const existing = state.cart.find(
        (i) =>
          i.id === item.id && i.size === item.size && i.color === item.color
      );

      if (existing) {
        return {
          cart: state.cart.map((i) =>
            i === existing ? { ...i, quantity: i.quantity + 1 } : i
          ),
        };
      } else {
        return {
          cart: [...state.cart, { ...item, quantity: 1 }],
        };
      }
    }),
  removeItem: (id, size, color) =>
    set((state) => ({
      cart: state.cart.filter(
        (i) => !(i.id === id && i.size === size && i.color === color)
      ),
    })),
  clearCart: () => set({ cart: [] }),
  getQuantity: (id, size, color) => {
    const item = get().cart.find(
      (i) => i.id === id && i.size === size && i.color === color
    );
    return item?.quantity ?? 0;
  },
}));

