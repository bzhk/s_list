
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductsConnectorHook from './ProductsConnectorHook/ProductsConnectorHook';
import ProductsFetchWrapper from './Products/ProductsFetchWrapper';

function App() {

  const { products, error, loaded } = ProductsConnectorHook({ limit: 19 });


  return <ProductsFetchWrapper products={products} error={error} loaded={loaded} />
}

export default App;
