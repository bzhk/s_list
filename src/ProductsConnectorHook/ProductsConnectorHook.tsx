import { useEffect, useState } from "react";



const ProductsConnectorHook = ({ limit }: { limit: number }) => {
    const [response, setResponse] = useState<{ products: any[] }>({ products: [] });
    const [loaded, setLoaded] = useState<boolean>(false);
    const [error, setError] = useState<string>("");

    useEffect(() => {
        const controller = new AbortController();
        const { signal } = controller;
        setLoaded(false);
        fetch(`https://dummyjson.com/products?limit=${limit.toString()}`, { signal })
            .then(res => {
                setError("");
                return res.json();
            })
            .then(json => {
                setLoaded(true);
                setResponse(json);
            })
            .catch(e => {
                setError(e.message);
            })

        return () => {
            controller.abort();
        }
    }, [limit]);

    return {
        products: response.products, loaded, error
    };
}

export default ProductsConnectorHook;