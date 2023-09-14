import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = () => {
  const cart = useSelector(state => state.cart)

  let cartContent;

  if (cart.items.length === 0) {
    cartContent = <p>No items in your cart yet</p>
  } else {
    cartContent = <ul>{
      cart.items.map(cartItem => {
        return (
          <CartItem
            key={Math.random()}
            item={{ ...cartItem }}
          />
        )
      })}</ul>
  }
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      {cartContent}
    </Card>
  );
};

export default Cart;
