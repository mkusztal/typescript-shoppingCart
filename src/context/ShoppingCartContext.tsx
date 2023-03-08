import { useContext, createContext, ReactNode } from "react";

type ShoppingCartProviderProps = {
  children: ReactNode;
};
const ShoppingCartContext = createContext({});

export let useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};

export let ShoppingCartProvider = ({ children }: ShoppingCartProviderProps) => {
  return (
    <ShoppingCartContext.Provider value={{}}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
