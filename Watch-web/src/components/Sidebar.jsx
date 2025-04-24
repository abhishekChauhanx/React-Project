import { useEffect, useState } from "react"
import { useFilter } from "../FilterContext"


const Sidebar = () => {


    const {searchQuery, setSearchQuery, selectedCategory, setSelectedCategory, minPrice, setMinPrice, maxPrice, setMaxPrice, keyword, setKeyword} = useFilter()
    const [categories, setCategories] = useState([])
    const [keywords, setKeywords] = useState([
        "apple", "watch", "Fashion", "trends", "Shoes", "Shirt"
    ])


    function hanldeMinPrice(e){
        const {value} = e.target;
        setMinPrice(value ? parseFloat(value) :undefined)
        
    }
    function hanldeMaxPrice(e){
        const {value} = e.target;
        setMaxPrice(value ? parseFloat(value) :undefined)
        
    }

    function handleRadioChange(category){
        setSelectedCategory(category)
    }


    function handleKeywordClick(keyword){
        setKeyword(keyword)
        
    }

    function handelRest(){
       setKeyword("")
       setMaxPrice(undefined)
       setMinPrice(undefined)
       setSearchQuery("")
       setSelectedCategory("")
    }
    useEffect(() => {
        const fetchCate = async () => {
            try {
                const res = await fetch("https://dummyjson.com/products")
                const data = await res.json()

                const uniqueCategory = Array.from(new Set(data.products.map(product => product.category)))
                setCategories(uniqueCategory)
            } catch (err) {
                console.error("errror happen!", err)
            }
        }
        fetchCate()
    }, [])
    return (
        <div className="w-64 h-screen ">
            <h1 className="mt-4 mb-10 text-2xl font-bold">Chauhan Store</h1>
            <section>
                <input type="text" className="px-2 border-2 rounded sm:mb-0" placeholder="Search Product"  value={searchQuery} onChange={e=> setSearchQuery(e.target.value)} />
                <div className="flex items-center justify-center">
                    <input type="text" className="w-full px-5 py-3 mb-3 mr-2 border-2 " placeholder="Min" value={minPrice ?? ""} onChange={hanldeMinPrice} />
                    <input type="text" className="w-full px-5 py-3 mb-3 mr-2 border-2 " placeholder="Max" value={maxPrice ?? ""} onChange={hanldeMaxPrice} />
                </div>

                <div className="mb-5 ">
                    <h2 className="mb-3 text-xl font-semibold ">Categories</h2>
                </div>

                <section>
                    {categories.map((category, index) => (
                        <label key={index} className="block mb-2 ">
                            <input type="radio" name="category" value={category} className="mr-2 w-[16px] h-[16px] " onChange={()=> handleRadioChange(category)} checked={selectedCategory === category} />
                            {category.toUpperCase()}
                        </label>
                    ))}
                </section>


                <div className="mt-4 mb-5">
                    <h2 className="mb-3 text-xl font-semibold">Keywords</h2>

                    <div>
                        {keywords.map((keyword, index) => (
                            <button key={index} className="block w-full px-4 py-2 mb-2 text-left border rounded hover:bg-gray-300" onClick={()=>handleKeywordClick(keyword)}>
                                {keyword.toUpperCase()}
                            </button>
                        ))}
                    </div>
                </div>

                <button className="w-full mb-[4rem] py-2 bg-black text-white rounded mt-5" onClick={handelRest}>
                    Reset Filters
                </button>
            </section>

        </div>
    )
}

export default Sidebar
