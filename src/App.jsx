import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import List from './components/List'
import { BrowserRouter as Router } from 'react-router-dom';

function App() {

  return (
    <>
      <div className='bg-bg-light bg-no-repeat max-w-[1440px] m-auto'>
        <div className="font-josefinSerif max-w-[540px] m-auto pt-[70px]">
    <Router>
        <Header />
        <List />
        <Footer />            
    </Router>
    </div>
    </div>   
    </>
  )
}

export default App
