import React from 'react';
import {CardHeader, Card, CardText, CardBody, CardFooter} from 'reactstrap'

const Experience = ()=>{
return(
    <div>
        
            <div className="row mt-4">
            <div className="col-4">
            <hr className="hrr"></hr>
            </div>
            <div className="col-4">
            <p className="text-center">Work Experience</p>
            </div>
            <div className="col-4">
            <hr className="hrr"></hr>
            </div>
        </div>
        <div className="row">
            <div className="col-3">
            <p className="font-weight-bold text-secondary">Jan 2020 - May 2020</p>
            </div>
            <div className="col-8 offset-1 text-justify">
                <p className="para">
                    <strong>Java Full stack web Developer</strong>
                    <br />
                    Capgemini
                    <br />
                    <span className="font-italic">
                    Interned with Capgemini for 5 months as a Java Full stack web developer
                    </span>
                </p>
            </div>
        </div>
        <div className="row">
            <div className="col-3">
               <p className="font-weight-bold text-secondary">July 2020 - Dec 2020</p>
            </div>
            <div className="col-8 offset-1 text-justify">
                <p className="para">
                    <strong>Co-Founder</strong>
                    <br />
                    GiftPro.in
                    <br />
                    <span className="font-italic">
                    Created a platform where people can buy handmade gifting items such as digital paintings and other handicrafts.
                    </span>
                </p>
            </div>
      </div>
        
    </div>
)
    
}
export default Experience;