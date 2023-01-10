
import { Badge, Card, Col, Stack } from "react-bootstrap";
import IProduct from "../../Interfaces/IProduct";


const ProductSingle = ({ product }: { product: IProduct }) => {
    return <Col data-testid="ProductSingle_container" xs={12} md={6}>
        <Card style={{ marginBottom: "10px" }}>
            <Card.Body>
                <Card.Title>
                    {product.title} <Badge bg="primary">{product.price} PLN</Badge>
                </Card.Title>
                <Card.Text>
                    {product.description}
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <Stack gap={2} direction={'horizontal'}>
                    <Badge bg={"info"}>{product.brand}</Badge>
                    <Badge bg={"success"}>{product.category}</Badge>
                </Stack>
            </Card.Footer>
        </Card>
    </Col>
}

export default ProductSingle;