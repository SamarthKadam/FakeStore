import {create} from "zustand";
import { State,ProductInterface} from "../interfaces";

const useStore = create<State>((set) => ({
  searchInput:'',
  isLoading:false,
  isAscendingPrice:undefined,
  cart:[],
  setSearchInput:(value:string)=>set((state)=>({searchInput:value})),
  setIsLoading:(value:boolean)=>set((state)=>({isLoading:value})),
  addItem:(item:ProductInterface)=>set((state)=>({cart:[...state.cart,item]})),
  remove: (id: number) => set((state) => ({
    cart: state.cart.filter((item) => item.id !== id)
  })),
  initializeCart:(value:[])=>set((state)=>({cart:value})),
  sort:(value:boolean)=>set((state)=>({isAscendingPrice:value}))
}));

export default useStore;
