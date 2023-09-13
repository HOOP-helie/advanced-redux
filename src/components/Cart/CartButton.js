import { useDispatch } from 'react-redux';
import classes from './CartButton.module.css';
import { toggleCart } from '../../store/cartSlice';

const CartButton = (props) => {
  const dispatch = useDispatch();

  return (
    <button onClick={() => dispatch(toggleCart())} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
