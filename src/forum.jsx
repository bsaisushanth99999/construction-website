import React from "react";
import { MDBInput ,  MDBBtn }  from 'mdb-react-ui-kit';

function Forum() {
    return(
        <div className="forumDiv">
            <h2 className="ttTechnicalExpert">TALK TO OUR TECHNICAL EXPERT</h2><br />
            <MDBInput placeholder='Name' id='name' type='text' />
            {/* <br /> */}
            <MDBInput placeholder='Phone Number' id='phone' type='number' />
            <br /><br />
            <MDBInput placeholder='Email' id='email' type='email' />
            <br />
            <MDBInput placeholder='Requirment' id='requirment' type='text' />
            <br />
            <MDBBtn className="forumSubmitButton">Submit</MDBBtn>
        </div>
    )
}

export default Forum;