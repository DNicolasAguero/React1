import { useState } from "react";
import { getProducts } from "../asyncMock"
import { useEffect } from "react";
import ProductCard from "./ProductCard";

export default function ItemListContainer(){
    const [products, setProducts] = useState([]);

    useEffect (() => {
        getProducts.then (data => setProducts(data));
    }, []);
    return (<>
    <section>
        {products.map (product => <ProductCard key={product.id} product={product}/>)}
    </section>
    </>)
}