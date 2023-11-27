import React from 'react'
import NavBar from './NavBar'
import NavBar2 from './NavBar2'
import BasicAccordion from './BasicAccordion'
import Foot from './footer'

function FAQ() {
    return (
        <>
            <NavBar />
            <NavBar2 />
            <div style={{marginTop:"70px" , marginBottom:"70px"}}>
                <BasicAccordion />
            </div>
            <Foot />
        </>
    )
}

export default FAQ