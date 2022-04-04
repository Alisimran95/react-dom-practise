/* eslint-disable jsx-a11y/alt-text */
import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom';
import { localDbService } from '../Api/services/localDb/localDb';
import { CommonPageContainer } from '../components/CommonPageContainer';
import {Row,Col} from "reactstrap";

function ProductDetail() {
    const{id} = useParams();
    const [product,setProduct] = useState([]);

    useEffect((p)=>{
        localDbService.getProduct(id)
        .then(({data})=>{setProduct(data)})
    },[id])

  return (
   <CommonPageContainer>
       <Row>
           <Col lg={6} xs={12}>
                <img src={product.imageUrl}  width={400} height={400}/>            
            </Col>
            <Col lg={6} xs={12} className="mt-5">
                <h1>{product.productName}</h1>
                <p>{product.description}</p>
                <p className='text-danger'><strong>${product.price}</strong></p>
                <h4>year:{product.year}</h4>
                <button>Add to cart</button>
            </Col>
       </Row>
   </CommonPageContainer>
  )
}

export default ProductDetail