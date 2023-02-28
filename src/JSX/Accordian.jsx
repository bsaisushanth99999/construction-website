import React from "react";
import { MDBAccordion, MDBAccordionItem } from 'mdb-react-ui-kit';

function Accordian(props) {
    return(
        <div className="accordianElement">
        <MDBAccordion initialActive={0}>
            <MDBAccordionItem collapseId={0} headerTitle={props.header}>
                We are in!!
            </MDBAccordionItem>  
        </MDBAccordion>
        </div>
    )
}
// 
export default Accordian;