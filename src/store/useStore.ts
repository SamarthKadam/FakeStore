import {create} from "zustand";
import { State,ProductInterface} from "../interfaces";

const useStore = create<State>((set) => ({
  isLoading:false,
  cart:[],
  setIsLoading:(value:boolean)=>set((state)=>({isLoading:value})),
  addItem:(item:ProductInterface)=>set((state)=>({cart:[...state.cart,item]})),
  remove: (id: number) => set((state) => ({
    cart: state.cart.filter((item) => item.id !== id)
  }))
}));

export default useStore;
