import { Link } from "react-router-dom";

export default function ProductCard ({product}) {
    return (<>
    <article>
        <h3>{product.title}</h3>
        <img src={product.image} alt={product.title} />
        <p>$ {product.price}</p>
        <button><Link to= {`/product/${product.id}`}>Detalles</Link></button>
    </article>
    </>
    );
}