import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function BasicAccordion() {
  return (
    <div style={{marginTop:"50px" , marginBottom:"50px"}}>
        <Typography variant='h4' >Frequently asked questions</Typography>
      <Accordion sx={{marginTop:"30px"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>How to order medicines online from az Pharmacy?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Ordering medicines from az Pharmacy online medical store is quick and hassle-free. If you wish to purchase over-the-counter medicines or FMCG products, all you need to do is click on the ‘Buy Medicines’ section on the app/website and type the name of the product you wish to buy in the search box. Once you select the product, you can click on the ‘Add to Cart’ button and proceed to make the payment. Once your order has been confirmed, we will start prepping your order for home delivery. 
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Is online medicine delivery safe?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Absolutely! All the medicines/products sold through our platform are inspected thoroughly for their authenticity and quality. Also, while delivering the medicines, our team follows strict safety protocols to ensure only the top-notch products get delivered to you.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>How do I know if there is a delay in delivery?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          If, for any reason, your order is delayed, our team will contact you either through SMS, call or email and inform you of the same. You can also check the status of your order on the app/website by clicking on the ‘Order Status’ button.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Can az Pharmacy provide express delivery?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Yes, depending on the city you reside in. In select cities, orders are delivered in as less as 1 hour. Please note that the express deliveries may be based on various other factors such as medicine availability, availability of the staff, etc.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>How can I buy az Pharmacy products?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Besides walking into an az Pharmacy outlet and buying the medicines in person, you can purchase products from az Pharmacy on the az Pharmacy app or website. To do this, you will need to visit the app/website of az Pharmacy and click on the ‘Buy Medicines’ section.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Can I track the delivery status of my order? If yes, how?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          To track your order, you can click on the ‘My Orders’ section under the ‘My Account’ tab. Then click on the particular order to check the status of your order.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Does az Pharmacy provide home delivery of medicines?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Yes, az Pharmacy provides the fastest home delivery of medicines.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Does az Pharmacy provide same day delivery of online medicine order?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Yes, az Pharmacy provides same day delivery of online medicine order.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
    </div>
    );
}
