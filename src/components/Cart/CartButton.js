import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';
import { toggleCart } from '../../store/cartSlice';

const CartButton = () => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.items)
  const nbOfItems = items.reduce((accumulator, item) => accumulator + item.quantity, 0);

  return (
    <button onClick={() => dispatch(toggleCart())} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{nbOfItems}</span>
    </button>
  );
};

export default CartButton;
