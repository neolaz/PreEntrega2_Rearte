import { useState, useEffect } from "react";
import { useParams } from "react-router";

import ItemDetail from '../ItemDetail/ItemDetail.jsx';
import { getProducts } from "../../assets/functions.js"

const ItemDetailContainer = ({greeting}) => {

  const [product, setProduct] = useState([]);
  const {id} = useParams();

  useEffect(() => {
    getProducts('../json/products.json').then(prod => {
      const productDetail = prod.find(p => p.id === id);
      setProduct(productDetail);
    })
  },[id]);
  
  return (
    <div className="containerCustom">
      <ItemDetail item={product} />
    </div>
      
  );
}

export default ItemDetailContainer;