import React from "react";
import Forum from './forum';

function InfoandForm(params) {
    return(
        <div className="infoandForm row">
            <div className="col-7">
                <h1 className="slogan">
                    YOU DREAM, WE BUILD YOUR DREAM.
                </h1><br />
                <h3>
                Experience the finest level of house construction with the best, Most Trusted and Top Rated Construction Company in Bangalore.
                </h3>
                <a href="http://www.google.com" rel="noreferrer"  target="_blank">House Construction Package starting from 1470*/sqft</a>
            </div>
            <div className="col-5">
                <Forum />
            </div>
        </div>
    );
}

export default InfoandForm;