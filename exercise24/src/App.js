import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <h1>Shopping Cart with Redux</h1>
        </header>
        <main style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px' }}>
            <div style={{ flex: '1 1 600px' }}>
              <ProductList />
            </div>
            <div style={{ flex: '1 1 500px' }}>
              <Cart />
            </div>
          </div>
        </main>
      </div>
    </Provider>
  );
}

export default App;
