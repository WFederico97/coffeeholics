import {RiShoppingCart2Fill} from "react-icons/ri";
import './Cart-Widget.scss'

const CartWidget = () => {

    return(
        <RiShoppingCart2Fill id='cart' className='navbarIcon' style={{ width: '2em', height: '2em', color: '#fff', margin: '1em' }} />
    )
}
export default CartWidget