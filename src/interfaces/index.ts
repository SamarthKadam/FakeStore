export interface ProductInterface {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface State {
  searchInput: string;
  isAscendingPrice: boolean | undefined;
  category:string|undefined;
  isLoading: boolean;
  cart: ProductInterface[];
  setSearchInput: (value: string) => void;
  addItem: (value: any) => void;
  setIsLoading: (value: boolean) => void;
  remove: (id: number) => void;
  initializeCart: (value: []) => void;
  sort: (value: boolean) => void;
  setCategory:(value:string)=>void;
}
