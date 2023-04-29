import { useContext, useEffect, useState } from 'react';
import CartContext from '../../store/cart-context';
import CartIcon from '../Cart/CartIcon';
import styles from './HeaderCartButton.module.css';

function HeaderCartButton(props) {
  const [isButtonAnimated, setIsButtonAnimated] = useState(false);
  const cartContext = useContext(CartContext);
  const { items } = cartContext;
  const cartItemsNumber = items.reduce((currentValue, item) => currentValue + item.amount, 0);
  const buttonClasses = `${styles.button} ${
    isButtonAnimated ? styles.bump : ''
  }`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setIsButtonAnimated(true);

    const timer = setTimeout(() => {
      setIsButtonAnimated(false);
    }, 300);

    // eslint-disable-next-line consistent-return
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button type="button" className={buttonClasses} onClick={props.onClick}>

      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Корзина</span>
      <span className={styles.badge}>{cartItemsNumber}</span>
    </button>
  );
}

export default HeaderCartButton;
