import React from "react";
import Accordian from "./Accordian";
import accordianData from "../packagesData.json";

function OurPackages() {

    function accordialLoop() {
        return accordianData.accordianHeadings.map((x, y) => {
            return (
                <Accordian header = {x}/>
            )
        })
    }
    return(
    <div className="packageMainDiv">
        <div className="ourPackagesText">
            <h1>Our Packages</h1>
            <h4>Get clear ideas of what raw materials to be used to build your home.</h4>
            <p>(*The below Prices are applicable to Bangalore and surrounding location Only.)</p>
        </div> <br />
        <div className="packageTableData">
            <div className="firstDiv">
                <h2>Basic</h2>
                {accordialLoop()}
            </div>
            <div className="secondDiv">
                <h2>Premium</h2>
                {accordialLoop()}
            </div>
            <div className="thirdDiv">
                <h2>Luxary</h2>
                {accordialLoop()}
            </div>
            <div className="fourthDiv">
                <h2>The Dream</h2>
                {accordialLoop()}
            </div>
        </div>
    </div>
    )
}

export default OurPackages;