import React from 'react'
import { Container } from 'reactstrap'
import {Menu} from './Menu'


export const CommonPageContainer=({children})=>{
    return(
        <Container>
            <Menu/>
            {children}
        </Container>
    )
}