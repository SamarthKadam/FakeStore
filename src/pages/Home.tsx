import React, { useEffect, useState, useMemo } from 'react';
import Card from '../components/Home/Card';
import { ProductInterface } from '../interfaces';
import Loading from './Loading';
import useStore from '../store/useStore';
import { toast, Bounce } from 'react-toastify';

export default function Home() {
    const [products, setProducts] = useState<ProductInterface[]>([]);
    const itemsPerPage = 6;
    const { isLoading, setIsLoading, searchInput, isAscendingPrice, category, currentPage, setCurrentPage } = useStore();

    const fetchProducts = async () => {
        try {
            setIsLoading(true);
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
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const filteredProducts = useMemo(() => {
        return products.filter(product =>
            product.title.toLowerCase().includes(searchInput.toLowerCase()) ||
            product.description.toLowerCase().includes(searchInput.toLowerCase()) ||
            product.category.toLowerCase().includes(searchInput.toLowerCase())
        );
    }, [products, searchInput]);

    const sortedProducts = useMemo(() => {
        let sorted = [...filteredProducts];
        if (isAscendingPrice !== undefined) {
            sorted = sorted.sort((a, b) => (isAscendingPrice ? a.price - b.price : b.price - a.price));
        }
        return sorted;
    }, [filteredProducts, isAscendingPrice]);

    const categorizedProducts = useMemo(() => {
        if (!category || category === 'All Products') return sortedProducts;
        return sortedProducts.filter(product => product.category.toLowerCase() === category.toLowerCase());
    }, [sortedProducts, category]);

    const currentProducts = useMemo(() => {
        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        return categorizedProducts.slice(indexOfFirstItem, indexOfLastItem);
    }, [currentPage, categorizedProducts]);

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    if (isLoading) return <Loading />;

    return (
        <div>
            <div className='grid grid-cols-3 max-[1250px]:grid-cols-2 max-[615px]:grid-cols-1 gap-10 py-12'>
                {currentProducts.map(product => (
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
            <div className="flex justify-center my-4">
                {Array.from({ length: Math.ceil(categorizedProducts.length / itemsPerPage) }, (_, index) => (
                    <button
                        key={index}
                        onClick={() => paginate(index + 1)}
                        className={`mx-1 px-3 py-1 border rounded ${currentPage === index + 1 ? 'bg-black text-white' : 'bg-white'}`}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
}