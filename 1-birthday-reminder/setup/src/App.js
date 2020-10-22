import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [birthdaysToday, setBirthdaysToday] = useState(data)
  return (<main>
          <section className="container">
  <h3>{birthdaysToday.length} birthdays today</h3>
          <List birthdays={birthdaysToday} />
          <button onClick={() => setBirthdaysToday([])}>clear all</button>
          </section>
    
  </main>);
}

export default App;
