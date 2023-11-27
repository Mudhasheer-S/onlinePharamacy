import React from 'react';
import './AboutUs.css';
import NavBar from './NavBar';
import NavBar2 from './NavBar2';
import Foot from './footer';
import { Container } from '@mui/system';

const AboutUs = () => {
  return (
    <>
      <NavBar />
      <NavBar2 />
      <Container>
    <div style={{height:"1000px" ,width:"70%"}}>
      <header>
        <h1>About Az Pharmacy</h1>
      </header>


      <section>
        <p>Welcome to Az Pharmacy, where we are more than just a pharmacy.</p>

 
        <div className="image-container">
          <img
            alt="About Apollo Pharmacy"
            src="https://images.apollo247.in/images/img_aboutus.png"
          />
        </div>

        <h2>About Az Pharmacy</h2>
        <p>
          Az Pharmacy is a proud subsidiary of Az Hospitals, a highly
          regarded pharmacy chain in India. As the largest and first-ever
          Omni-Channel Pharmacy network in Asia, we boast a vast network of over
          5500 outlets strategically located in key locations across the
          country.
        </p>

        <p>
          Our delivery service covers over 19000+ pin codes, making us highly
          accessible to people throughout India.
        </p>

        <p>
          We are accredited with an International Quality Certification, a
          testament to our commitment to providing authentic and reasonably
          priced medication round the clock. Our 24-hour pharmacies and home
          delivery network are designed to ensure your convenience, and our
          customer care is available at any time of the day.
        </p>

        <h2>Quality Assurance</h2>
        <p>
          Quality is the foundation of Az Pharmacy's operations. With over
          two decades of experience in pharmacy operations management, we are
          dedicated to offering the best services in the industry. Our stores
          are adequately stocked with a comprehensive range of medicines,
          over-the-counter (OTC) products, and fast-moving consumer goods
          (FMCG). Our qualified and experienced staff is available to address
          all your needs.
        </p>

        <h2>Explore Our Online Store</h2>
        <p>
          Visit{' '}
          <a href="https://www.apollopharmacy.in" target="_blank" rel="noopener noreferrer">
            Azpharmacy.in
          </a>
          , your one-stop online destination. Choose from over 70,000 products
          in various categories such as vitamins and supplements, baby care,
          personal care, health and nutritional foods, and OTC. Additionally,
          explore over 400 Az Branded products in categories like vitamins
          and supplements, health food, oral care, skincare, among others.
        </p>
      </section>

     
      {/* <footer> */}
        <p>Thank you for choosing Az Pharmacy - where your health is our priority.</p>
      {/* </footer> */}
    </div>
    </Container>
    <Foot/>
    </>
  );
};

export default AboutUs;
