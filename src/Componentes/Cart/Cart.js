import { useContext } from 'react';
import { CartContext } from '../Context/CartContext'

const Cart = () => {
    const { cart } = useContext(CartContext)

  return <h1>Cart</h1>;
  <div> 
  {
    cart.map(prod => { 
        return(
            <div>

            </div>
}
})

        }
        </div>
        )
  };
export default Cart;
