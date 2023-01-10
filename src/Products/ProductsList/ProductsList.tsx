
import { Row } from "react-bootstrap";

import IProduct from "../../Interfaces/IProduct";
import ProductSingle from "../ProductSingle/ProductSingle";
import withFilters from "../withFilters";
import withLoadMoreBtn from "../withLoadMoreBtn";


const ProductsList = ({ products }: { products: IProduct[] }) => {

    return <Row data-testid="ProductsList_main_container">
        {
            products.map(p => <ProductSingle key={p.id} product={p} />)
        }
    </Row>
}

export default withFilters(withLoadMoreBtn(ProductsList));