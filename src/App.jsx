import react from 'react';
import Navbar from './components/Navbar';
import FeaturedItem from './components/FeaturedItem.jsx';
import Card from './components/Card.jsx';
import Dashboard from './components/Dashboard.jsx';
function App() {
  

  return (
    <>
     <Navbar />
     <FeaturedItem />
     {/* <Card 
      img = "deo.png"
      name = "Deodorant"
      interested = "3 Interested"
      date = "3 days ago"
      status = "Available"
      /> */}
      <Dashboard/>
    </>
  )
}

export default App
