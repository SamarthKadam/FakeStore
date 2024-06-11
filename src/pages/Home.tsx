import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Card from '../components/Home/Card';
import { ProductInterface } from '../interfaces';
import Loading from './Loading';


export default function Home() {
    const [products, setProducts] = useState<ProductInterface[]>([]);

    const fetchProducts = async () => {
        const response = await fetch('https://fakestoreapi.com/products');
        const data: ProductInterface[] = await response.json();
        setProducts(data);
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    if(products.length===0)
        return <Loading></Loading>

    return (
            <div className='grid  grid-cols-3 gap-10 py-12'>
                {products.length > 0 && products.map((product) => (
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