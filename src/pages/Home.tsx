import React, { useEffect, useState } from 'react';
import Card from '../components/Home/Card';
import { ProductInterface } from '../interfaces';
import Loading from './Loading';
import useStore from '../store/useStore';
import { toast, Bounce } from 'react-toastify';

export default function Home() {
    const [products, setProducts] = useState<ProductInterface[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(6); 
    const { isLoading, setIsLoading, searchInput, isAscendingPrice, category } = useStore();

    const fetchProducts = async () => {
        try {
            setIsLoading(true);
            const response = await fetch('https://fakestoreapi.com/products');
            const data: ProductInterface[] = await response.json();

            console.log(data);
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

    const categorizedProducts = category !== undefined &&category!=='All Products'
        ? sortedProducts.filter(product => product.category.toLowerCase() === category.toLowerCase())
        : sortedProducts;

    ///pagination logic
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentProducts = categorizedProducts.slice(indexOfFirstItem, indexOfFirstItem + itemsPerPage);

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    return (
        <div>
            <div className='grid grid-cols-3 max-[1250px]:grid-cols-2 max-[615px]:grid-cols-1 gap-10 py-12'>
                {currentProducts.length > 0 && currentProducts.map((product) => (
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
