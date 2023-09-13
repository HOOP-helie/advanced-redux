import ProductItem from './ProductItem';
import classes from './Products.module.css';
import meals from "./../utils/meals"

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {meals.map(meal =>
          <ProductItem
            id={meal.id}
            title={meal.title}
            price={meal.price}
            description={meal.description}
          />
        )}
      </ul>
    </section>
  );
};

export default Products;
