import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";



function CardDetails() {
  const params = useParams();
  console.log(params)
  const [product,setProduct] = useState<any>({});
  console.log(product.reviews)

  useEffect(() => {
    axios.get(`http://localhost:8080/products/${params.id}`)
    .then((res) => setProduct(res.data))
  },[])

  
  return (
    <div className="product">
      <span>
        <h4 className="detailsTitle">{product.name}</h4>
      </span>
      <img className="detailsImage" src="" alt="" />
      {/* Notice the "Price: $". do not edit it. */}
      <span className="detailsPrice">Price: ${product.price}</span>
      <span className="detailsPrice"></span>
      <div>
        <h5>Reviews:</h5>
        {/* Iterate over reviews and populate review like: 
        
        <div className="review">
          <span className="reviewBy">UserName1234</span>
          <span className="reviewDesc">This product is really good etc....</span>
        </div>
        
        */}
        {
         product.reviews &&  product.reviews.map((rev:any) => {
           return  <div className="review">
           <span className="reviewBy">{rev.by}              </span>
           <span className="reviewDesc">{rev.review}</span>
         </div>
          })
        }
      </div>
    </div>
  );
}
export { CardDetails };
