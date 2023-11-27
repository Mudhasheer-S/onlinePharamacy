import React from 'react'
import NavBar from './NavBar'
import NavBar2 from './NavBar2'
import CardList from './cards'
import Foot from './footer'
import { Container } from '@mui/material'
import Search1Bar from './searchBar'

function Products() {
    return (
        <>
            <NavBar />
            <NavBar2 />
            <Container style={{marginBottom:"70px"}}>
                <CardList />
            </Container>
            <Foot />
        </>
    )
}

export default Products