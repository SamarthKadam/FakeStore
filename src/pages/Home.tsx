import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Card from '../components/Home/Card';
import { ProductInterface } from '../interfaces';

// Define the Product type
// interface Product {
//     id: number;
//     title: string;
//     price: number;
//     description: string;
//     category: string;
//     image: string;
//     rating: {
//         rate: number;
//         count: number;
//     };
// }

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

    return (
        <div className='px-20'>
            <Header />
            <div className='grid my-4 grid-cols-4 gap-8'>
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
        </div>
    );
}