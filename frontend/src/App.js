import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom/cjs/react-router-dom.min';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
      <BrowserRouter>
      <div className="grid-container">
    <header className="row">
        <div>
            <a  className="brand"href="/">Amazona</a>
        </div>
        <div>
            <a href="/cart.html">Cart</a>
            <a href="/signin.html">Sign In</a>
        </div>
        
    </header>
    <main> 
        <Route path="/" component={HomeScreen} exact></Route>
        <Route path="/product/:id" component={ProductScreen} exact></Route>
     </main>

    <footer className="row center"> All Right reserved </footer>
</div>

   
      </BrowserRouter>
     );
}

export default App;
