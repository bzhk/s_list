
import { Container } from "react-bootstrap";
import IProduct from "../Interfaces/IProduct";
import ProductsList from "./ProductsList/ProductsList";

const Products = ({ products }: { products: IProduct[] }) => {



    return <Container data-testid="Products_main_container">
        <ProductsList products={products} filtersKeys={['category', 'brand']} />
    </Container>
}

export default Products;