import { RiShoppingCart2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import './Cart-Widget.scss'

const CartWidget = () => {

    return (
        <Link to={'/cart'} >
            <RiShoppingCart2Fill id='cart' className='navbarIcon' style={{ width: '2em', height: '2em', color: '#fff', margin: '1em' }} />
        </Link>

    )
}
export default CartWidget