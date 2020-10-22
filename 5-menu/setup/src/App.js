import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import menu from './data';

function App() {
  const categorySet = new Set();
  menu.forEach(item => categorySet.add(item.category))
  const categoryList = Array.from(categorySet)
  const [filter, setFilter] = useState("all");
  const filteredItems = filter === "all" ? menu : menu.filter(item => item.category===filter);
  return <main>
    <div className="title">
      <h2>Our Menu</h2>
      <div className="underline"></div>
    </div>
    <Categories categoryList={categoryList} setFilter={setFilter}/>
    <Menu filteredItems={filteredItems}/>
  </main>;
}

export default App;
