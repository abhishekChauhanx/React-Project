import { useState, useMemo } from "react";
import Nav from "./Navigations/Nav";
import Recommended from "./Recommended/Recommended";
import Products from "./Products/Products";
import Slidebar from "./Sidebar/Slidebar";
import products from "./data";
import Card from "./Components/Card";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => setQuery(e.target.value);
  const handleChange = (e) => setSelectedCategory(e.target.value);
  const handleClick = (e) => setSelectedCategory(e.target.value);

  const filteredData = useMemo(() => {
    return products
      .filter(({ title, category, color, newPrice }) =>
        title.toLowerCase().includes(query.toLowerCase()) ||
        category === selectedCategory ||
        color === selectedCategory ||
        newPrice === selectedCategory
      )
      .map(({ id, img, title, star, reviews, prevPrice, newPrice }) => (
        <Card
          key={id}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      ));
  }, [products, selectedCategory, query]);

  return (
    <>
      <Slidebar handleRadioChange={handleChange} />
      <Nav query={query} handleInputChange={handleInputChange} />
      <Recommended handleBtnChange={handleClick} />
      <Products result={filteredData} />
    </>
  );
};

export default App;
