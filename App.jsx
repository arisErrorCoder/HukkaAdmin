import React, { useState } from 'react';
import Sidebar from './Components/Slidebar/Sidebar';
import SecondarySidebar from './Components/SecondarySidebar/SecondarySidebar';
import MainContent from './Components/MainContent/MainContent';
import Navbar from './Components/Navbar/navbar';

const initialBrands = [
  { name: 'AFZAL', description: 'HOOKAH FLAVOR', productsCount: 1 },
  { name: 'Airistech', description: 'Drying Vaporizer Kit', productsCount: 2 },
  { name: 'AirPops', description: 'Disposable vapes', productsCount: 5 },
  { name: 'AL FAKHER', description: 'HOOKAH FLAVORS', productsCount: 1 },
  { name: 'aleda', description: 'Paper', productsCount: 1 },
];

function App() {
  const [selectedCategory, setSelectedCategory] = useState('home');
  const [selectedContent, setSelectedContent] = useState('');
  const [brands, setBrands] = useState(initialBrands);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSelectedContent('');
  };

  const handleContentSelect = (content) => {
    setSelectedContent(content);
  };

  const addBrand = (newBrand) => {
    setBrands([...brands, newBrand]);
  };

  return (
    <div className="App">
      <Navbar />
      <Sidebar onCategoryClick={handleCategoryClick} />
      {(selectedCategory === 'catalog' || selectedCategory === 'stockcontrol') && (
        <SecondarySidebar
          selectedCategory={selectedCategory}
          onContentSelect={handleContentSelect}
        />
      )}
      <MainContent
        selectedCategory={selectedCategory}
        selectedContent={selectedContent}
      />
    </div>
  );
}

export default App;
