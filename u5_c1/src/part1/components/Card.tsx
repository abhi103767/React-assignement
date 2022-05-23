import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../Redux/action";
function Card(props:any) {
  const dispatch = useDispatch();
 

  const {d} = props
  console.log(d);
  return (
    <div className="item">
      <img src="https://via.placeholder.com/150" className="productImage" />
      <span>
        <Link className="productLink" to={`/${d.id}`}>
         {
           d.product_name
         }
        </Link>
      </span>
      <span className="productCategory">{d.category}</span>
      {/* Notice the $ before price. keep it dont edit it. eg: "$123" */}
      <span className="productPrice">$ {d.price}</span>
      {/* Notice the Ratings: text. don't edit it. eg: "Ratings: 3.5" */}
      <span className="productRating">Ratings: {d.rating} </span>
      {/* Show button here if item is already in the cart. otherwise show "Item Already in cart" */}
      {/*
      <div className="itemInCart">Item Already in cart</div> 
       OR
      <button className="productAddtoCart">
        Add to cart
      </button>
      */}
    {  <button  onClick = { () => {
        dispatch(addToCart(d))
      }}className="productAddtoCart">
        Add to cart
      </button>
}
    </div>
  );
}

export { Card };
