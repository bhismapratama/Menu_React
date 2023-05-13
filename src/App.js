import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';
const allCategories = ["semua", ...new Set(items.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterMenu = (category) => {
    if (category === "semua") {
      setMenuItems(items);
      return;
    }
    const newMenu = items.filter((item) => item.category === category);
    setMenuItems(newMenu);
  };
  
  return (
    <main>
      <section className='menu section'>
        <div className="title">
          <h2>Pilih yuu...</h2>
        </div>
        <Categories categories={categories} filterMenu={filterMenu}/>
        <Menu items={menuItems}/>
      </section>
    </main>
  )
}

export default App;
