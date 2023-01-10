import { FC, useState } from "react";
import { Button } from "react-bootstrap";
import IProduct from "../Interfaces/IProduct";

interface IWithLoadMoreBtn {
    products: IProduct[];
}
const withLoadMoreBtn = <P extends IWithLoadMoreBtn>(OriginalComponent: FC<{ products: IProduct[] }>) => {
    return (props: P) => {

        const [page, setPage] = useState(1);
        const perPage = 5;
        const { products, ...rest } = props;

        const isMoreProductsExist = (renderedProductsLen: number, productsLen: number): boolean => renderedProductsLen >= productsLen + 1;
        const productsLenByPage = page * perPage;
        const productsForPage = products.slice(0, productsLenByPage);
        return <>

            <OriginalComponent  {...rest} products={productsForPage} />
            <div >Products {productsForPage.length}/{products.length}</div>
            {
                isMoreProductsExist(products.length, productsLenByPage) ? <Button data-testid="loadMore_btn" onClick={() => setPage(prev => prev + 1)}>Load More</Button> : null
            }
        </>
    }
}
export default withLoadMoreBtn;