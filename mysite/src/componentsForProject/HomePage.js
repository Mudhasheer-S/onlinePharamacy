import React from 'react'
import Foot from './footer'
import SearchBar from './searchBar'
import CardList from './cards'
import ResponsiveCards from './ResposiveCards'
import ParaHome from './ParaHome'
import { Box, Container, Typography } from '@mui/material'
import NavBar from './NavBar'
import BasicAccordion from './BasicAccordion'
import NavBar2 from './NavBar2'

function HomePage() {
  return (
    <Box>
      <NavBar />
      <NavBar2 />
      <SearchBar />
      <Container>


        <ResponsiveCards />
        <Typography variant='h3' sx={{ marginTop: "200px" }}>Order By Category:</Typography>
        <CardList />
        <ResponsiveCards />
        <ParaHome />
        <BasicAccordion />
      </Container>
      <Foot />

    </Box>
  )
}

export default HomePage