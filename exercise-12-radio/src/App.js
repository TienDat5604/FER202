import './App.css';
import Counter from './Counter';
import InputExample from './InputExample';
import ProductList from './ProductList';
import RadioProducts from './RadioProducts';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <div className="examples-container">
          <Counter />
          <InputExample />
          <ProductList />
          <RadioProducts />
        </div>
      </header>
    </div>
  );
}

export default App;
