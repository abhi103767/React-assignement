import { useSelector } from "react-redux";


function Checkout() {

  const cart:any = useSelector(store => store);
  const cartProduct = cart.products.cartProducts;
  console.log(cartProduct);
  let total = 0 
  for(let i = 0; i < cartProduct.length; i++){
    total += cartProduct[i].price;
  }


  // HINT: you can fetch multiple IDs from json-server like this:
  // localhost:8080/products?id=1&id=4&id=6
  // this will fetch products with id 1, 4 and 6.
 
  // If cart is empty, show following div:
  if (cartProduct.length === 0) {
    return <div className="emptyCart">Nothing in cart</div>;
  }

  

// else:
  return (
    <div style={{ padding: 10 }}>
      <h4>Checkout:</h4>
      <div className="checkoutWrapper">
        {/* Show Items in cart here likeL
        
        <div className="checkoutItem">
          <span>Product Name</span>
          <span>$1235</span>  // Notice $. eg: $1234 and not 1234
        </div>
        */}
        {
          cartProduct.map((item:any) => {
            return <div className="checkoutItem">
            <img src='https://via.placeholder.com/150' />
            <span>{item.product_name} </span>
            <span>${item.price}</span> 
          </div>
          })
        }
      </div>
      <hr className="hr" />
      <div className="totalContainer">
        <span>Total: </span>
        <span className="total">
           {
            total
          }
        </span>
      </div>
    </div>
  );
}

export { Checkout };
