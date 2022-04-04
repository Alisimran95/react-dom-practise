import React from 'react'
import {CommonPageContainer} from '../components/CommonPageContainer'
import {Row,Col} from "reactstrap";

function Home() {
  return (
    <CommonPageContainer>
        <Row>
            <Col xs={12}>
                <h1>Home page</h1>
            </Col>
        </Row>
    </CommonPageContainer>
  )
}

export default Home