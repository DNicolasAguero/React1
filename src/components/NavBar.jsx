import CartWidget from './CartWidget';

export default function NavBar(){
    return (<>
    <nav className='d-flex justify-content-between'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaNTcJ4inmwrje98_VhajSPI2GYLNeAgU0gA&s" alt="logo" className="logo mx-2"/>
        <div>
        <button className="btn btn-danger mx-2">Camisetas</button>
        <button className="btn btn-danger mx-2">Pantalones</button>
        <button className="btn btn-danger mx-2">Pelotas</button>
        </div>
        <CartWidget />
    </nav>
    </>)
}