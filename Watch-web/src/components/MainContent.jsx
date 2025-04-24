import React, { useEffect, useState } from 'react'
import { useFilter } from '../FilterContext'
import { Tally3 } from 'lucide-react'
import axios from 'axios'
import BookCard from './BookCard'

const MainContent = () => {
    const { searchQuery, selectedCategory, minPrice, maxPrice, keyword } = useFilter()

    const [products, setProducts] = useState([])
    const [filter, setFilter] = useState('all')
    const [currentPage, setCurrentPage] = useState(1)
    const [dropdownOpen, setdropdownOpen] = useState(false)

    const itemsPerPage = 12

    const totalProducts = 100
    const totalPages = Math.ceil(totalProducts / itemsPerPage)
    function hanldePageChange(page) {
        if (page > 0 && page <= totalPages) {
            setCurrentPage(page)
        }

    }
    function getPagination() {
        const buttons = []
        let startPage = Math.max(1, currentPage - 2)
        let endPage = Math.min(totalPages, currentPage + 2)

        if (currentPage - 2 < 1) endPage = Math.min(totalPages, endPage + (2 - currentPage - 1))
        if (currentPage + 2 < totalPages) startPage = Math.min(1, startPage - (2 - totalPages - currentPage))

        for (let page = startPage; page <= endPage; page++) {
            buttons.push(page)
        }
        return buttons
    }

    useEffect(() => {
        let url = `https://dummyjson.com/products?limit=${itemsPerPage}&skip=${(currentPage - 1) * itemsPerPage}`;

        if (keyword) {
            url = `https://dummyjson.com/products/search?q=${keyword}`
        }

        axios.get(url).then(res => {
            setProducts(res.data.products);


        }).catch(err => {
            console.log(err)
        })
    }, [currentPage, keyword])


    const getFilterProducts = () => {
        let filteredProduct = products;

        if (selectedCategory) {
            filteredProduct = filteredProduct.filter(product => product.category === selectedCategory)
        }

        if (minPrice !== undefined) {
            filteredProduct = filteredProduct.filter(products => products.price >= minPrice)
        }
        if (maxPrice !== undefined) {
            filteredProduct = filteredProduct.filter(products => products.price <= maxPrice)
        }
        if (searchQuery) {
            filteredProduct = filteredProduct.filter(products => products.title.toLowerCase().includes(searchQuery.toLowerCase()))
        }

        switch (filter) {
            case "expensive":
                return filteredProduct.sort((a, b) => b.price - a.price)
            case "cheap":
                return filteredProduct.sort((a, b) => a.price - b.price)
            case "popular":
                return filteredProduct.sort((a, b) => b.rating - a.rating)
            default:
                return filteredProduct
        }

    }

    let fayta1 = getFilterProducts()
    console.log(fayta1)
    return (
        <section className='xl:w-[55rem] lg:w-[55rem]  sm:w-[40rem] xs:w-[20rem] p-5 '>
            <div className="mb-5">
                <div className="flex flex-col sm:flex-row justify-between items-center">
                    <div className="relative mb-5 mt-5">
                        <button onClick={()=> setdropdownOpen(!dropdownOpen)} className='border px-4 py-2 rounded-full flex items-center'>
                            <Tally3 className='mr-2' />
                            {filter === "all" ? "Filter" : filter.charAt(0).toLowerCase() + filter.slice(1)}
                        </button>

                        {dropdownOpen && (
                            <div className="absolute bg-white border-gray-300 rounded mt-2 w-full sm:w-40 ">
                                <button onClick={() => setFilter("cheap")} className='block px-4 py-2 w-full text-left hover:bg-gray-200 '>
                                    Cheap
                                </button>
                                <button onClick={() => setFilter("expensive")} className='block px-4 py-2 w-full text-left hover:bg-gray-200 '>
                                    Expensive
                                </button>
                                <button onClick={() => setFilter("popular")} className='block px-4 py-2 w-full text-left hover:bg-gray-200 '>
                                    Popular
                                </button>
                            </div>
                        )}
                    </div>
                </div>


                <div className="grid grid-cols-4 sm:grid-cols-3 md:grid-cols-4 gap-5">
                    {fayta1.map(product => (
                        <BookCard key={product.id} id={product.id} title={product.title} image={product.thumbnail
                        } price={product.price} />
                    ))}
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-center mt-5 ">
                    <button className='border px-4 py-2 mx-2 rounded-full' onClick={() => hanldePageChange(currentPage - 1)} disabled={currentPage === 1} >Previous</button>
                    <div className="flex flex-wrap justify-center">
                        {getPagination().map(page => (
                            <button key={page} onClick={() => hanldePageChange(page)} className={`border px-4 py-2 mx-1 rounded-full ${page === currentPage ? "bg-black text-white" : ""} `}>{page} </button>
                        ))}
                    </div>
                    <button className='border px-4 py-2 mx-2 rounded-full' onClick={() => hanldePageChange(currentPage + 1)} disabled={currentPage === totalPages}>Next</button>
                </div>
            </div>

        </section>
    )
}

export default MainContent
