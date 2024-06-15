import React, { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { ProductInterface } from '../interfaces';
import Loading from './Loading';
import useStore from '../store/useStore';
import { toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState<ProductInterface | null>(null);
  const { addItem, isLoading, setIsLoading, cart } = useStore();

  const addToCartHandler = useCallback(() => {
    if (product) {
      const isPresent = cart.some((item) => item.id === product.id);
      if (isPresent) {
        toast.success('Item Already in Cart!', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        });
        return;
      }

      addItem(product);
      toast.success('Added to Cart!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    }
  }, [addItem, cart, product]);

  const fetchProduct = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setProduct(data);
    } catch (err) {
      toast.error('Something went wrong!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    } finally {
      setIsLoading(false);
    }
  }, [id, setIsLoading]);

  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);

  if (isLoading || !product) {
    return <Loading />;
  }

  return (
    <div className='grid my-5 grid-cols-[2fr,1fr] max-[900px]:grid-cols-[1fr,1fr] max-[750px]:grid-cols-1'>
      <div className='flex justify-center items-center'>
        <img className='h-[75vh] max-[1200px]:h-[60vh]' src={product.image} alt={product.title} />
      </div>
      <div className='flex flex-col p-4'>
        <div className='font-poppins font-medium text-3xl max-[1110px]:text-2xl my-2'>{product.title}</div>
        <div className='font-poppins text-md my-2'>${product.price}</div>
        <div>
          <button
            onClick={addToCartHandler}
            className='bg-[#171717] hover:bg-[#363636] transition px-6 my-4 py-3 text-white font-poppins rounded-md font-medium'
          >
            Add to cart
          </button>
        </div>
        <div className='font-poppins text-sm'>{product.description}</div>
      </div>
    </div>
  );
}