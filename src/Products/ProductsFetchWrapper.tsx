import { FC } from "react";
import { Col, Container, Row } from "react-bootstrap";
import IProduct from "../Interfaces/IProduct";
import Products from "./Products";

interface ProductsFetchWrapperProps {
    error: string;
    loaded: boolean;
    products: IProduct[]
}
const ProductsFetchWrapper: FC<ProductsFetchWrapperProps> = ({ error, products, loaded }: ProductsFetchWrapperProps) => {

    if (error) return <Container>
        <Row>
            <Col xs={12}>
                <p>{error}</p>
            </Col>
        </Row>
    </Container>

    return loaded ? <Products products={products} /> : <Container>
        <Row >
            <Col xs={12}>
                <h2>Loading...</h2>
            </Col>
        </Row >
    </Container >;
}

export default ProductsFetchWrapper;