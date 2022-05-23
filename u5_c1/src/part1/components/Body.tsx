import { Card } from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { ADD_PRODUCT } from "../../Redux/action.type";
import { addToProduct } from "../../Redux/action";
import axios from "axios";


function Body() {
  const dispatch = useDispatch();
  const products:any = useSelector(store => store)
  const items = products.products.products
  console.log({items})

  useEffect(() => {
  axios.get('http://localhost:8080/products')
  .then((res) => dispatch(addToProduct(res.data)))
  },[])
  return (
    <div className="container">
      {
        items.map((product:any) => { 
        
          return <Card d={product}/>
          
        })
      }
    </div>
  );
}

export { Body };
