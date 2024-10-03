import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProduct } from '../../asyncMock';

export default function ProductView () {
    const [product, setProduct]= useState ({})

    const {id} = useParams();

    useEffect(() =>{
        setProduct(getProduct(id))
    },[]);

    return (<>
    <article>
        <h1>{product.title}</h1>
        <p>Categoria: {product.category}</p>
        <img src={product.image} alt={product.title} />
        <p>Descipcion: {product.description}</p>
        <p>$ {product.price}</p>
        <button>Comprar</button>
    </article>
    </>);
}