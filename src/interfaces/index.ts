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
  isLoading:boolean,
  cart:ProductInterface[];
  addItem:(value:any)=>void;
  setIsLoading:(value:boolean)=>void;
  remove:(id:number)=>void;
}
