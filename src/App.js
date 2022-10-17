import './App.css';
import { BrowserRouter as Router, Switch,  Route} from "react-router-dom"
import Header from './common/header/Header';
import Pages from './pages/Pages';
import Data from './components/flashDeals/Data';
import { useState } from 'react';

function App() {
  //B1: Nạp dữ liệu từ cơ sở dữ liệu
  const {productItems} =  Data

  const [cartItems, setCardItems] = useState([])
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact>
            <Pages productItems={productItems}/>
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App;
