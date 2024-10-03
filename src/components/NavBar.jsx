import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

export default function NavBar(){
    return (<>
    <nav className='d-flex justify-content-between'>
        <button><Link to= {'/'}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaNTcJ4inmwrje98_VhajSPI2GYLNeAgU0gA&s" alt="logo" className="logo mx-2"/></Link></button>
        <div>
        <button><Link to= {'/'} className="btn btn-danger mx-2">Home</Link></button>
        <button><Link to= {'/products'} className="btn btn-danger mx-2">Productos</Link></button>
        <button><Link to= {'/contact'} className="btn btn-danger mx-2">Contacto</Link></button>
        </div>
        <CartWidget />
    </nav>
    </>)
}