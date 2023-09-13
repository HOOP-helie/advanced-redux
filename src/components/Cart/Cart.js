import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  const cart = useSelector(state => state.cart)

  let cartContent;

  if (cart.items === 0) {
    cartContent = <p>No items in your cart yet</p>
  } else {
    cartContent = cart.items.map(cartItem => {
      return <CartItem
        item={{ title: cartItem.title, quantity: cartItem.quantity, total: cartItem.total, price: cartItem.price }}
      />
    })
  }
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      {cartContent}
      <ul>

      </ul>
    </Card>
  );
};

export default Cart;
