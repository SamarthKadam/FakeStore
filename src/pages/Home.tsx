import React, { useEffect, useState } from 'react';
import Card from '../components/Home/Card';
import { ProductInterface } from '../interfaces';
import Loading from './Loading';
import useStore from '../store/useStore';
import { toast, Bounce } from 'react-toastify';


export default function Home() {
    const [products, setProducts] = useState<ProductInterface[]>([]);
    const { isLoading, setIsLoading, searchInput, isAscendingPrice } = useStore();

    const fetchProducts = async () => {
        try {
            setIsLoading(true)
            const response = await fetch('https://fakestoreapi.com/products');
            const data: ProductInterface[] = await response.json();
            setProducts(data);
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
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchProducts();
    }, []);


    if (isLoading)
        return <Loading></Loading>

    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchInput.toLowerCase()) ||
        product.description.toLowerCase().includes(searchInput.toLowerCase()) ||
        product.category.toLowerCase().includes(searchInput.toLowerCase())
    );

    const sortedProducts = isAscendingPrice !== undefined
        ? filteredProducts.sort((a, b) => isAscendingPrice ? a.price - b.price : b.price - a.price)
        : filteredProducts;

    return (
        <div className='grid  grid-cols-3 gap-10 py-12'>
            {sortedProducts.length > 0 && sortedProducts.map((product) => (
                <Card
                    key={product.id}
                    category={product.category}
                    description={product.description}
                    id={product.id}
                    image={product.image}
                    price={product.price}
                    rating={product.rating}
                    title={product.title}
                />
            ))}
        </div>
    );
}