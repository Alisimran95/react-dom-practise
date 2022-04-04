/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { CommonPageContainer } from "../components/CommonPageContainer";
import {
  Row,
  Col,
  Card,
  CardGroup,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  CardSubtitle,
} from "reactstrap";
// import { getData } from "../actions/actions";
import { localDbService } from "../Api/services/localDb/localDb";
import {NavLink} from "react-router-dom";

function Products() {
  const [state, setState] = React.useState([]);

  React.useEffect(() => {
    // getData(setState);
    localDbService.getAllProducts().then(({data})=>{
      setState(data);
    });
  }, []);
  return (
    <CommonPageContainer>
      <Row>
        {
          state?.map((product)=>(
            <Col key={product.id} xs={12} lg={3} className="mt-3">
          <CardGroup>
              <Card lg={3} >
                <CardImg
                  alt="Card image cap"
                  src={product.imageUrl}
                  top
                  width={100}
                  height={200}
                />
                <CardBody>
                  <CardTitle tag="h5">{product.productName}</CardTitle>
                  <CardSubtitle className="text-danger">salePrice: ${product.price}</CardSubtitle>
                  <CardText>
                  {product.description}
                  </CardText>
                  <NavLink to={`/products/${product.id}`} className="btn btn-outline-dark">Go to detail</NavLink>
                </CardBody>
              </Card> 
          </CardGroup>
        </Col>
          ))
        }
      </Row>
    </CommonPageContainer>
  );
}

export default Products;
