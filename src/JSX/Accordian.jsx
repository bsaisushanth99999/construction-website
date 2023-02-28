import React from "react";
import { MDBAccordion, MDBAccordionItem } from 'mdb-react-ui-kit';

function Accordian() {
    return(
        <div className="accordianElement">
        <MDBAccordion initialActive={1}>
            <MDBAccordionItem collapseId={1} headerTitle='Accordion Item #1'>
                We are in!!
            </MDBAccordionItem>  
        </MDBAccordion>
        </div>
    )
}

export default Accordian;