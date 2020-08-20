import React from 'react';

const Education = ()=>{
return(
    <div>
        
            <div className="row mt-4">
            <div className="col-4">
            <hr className="hrr"></hr>
            </div>
            <div className="col-4">
            <p className="text-center">Education</p>
            </div>
            <div className="col-4">
            <hr className="hrr"></hr>
            </div>
        </div>
        <div className="row">
            <div className="col-3">
            <p className="font-weight-bold text-secondary">Aug 2016 - Sept 2020</p>
            </div>
            <div className="col-8 offset-1 text-justify">
                <p className="para">
                    <strong>B.Tech - Computer Science and Engineering</strong>
                    <br />
                    NIET, Greater Noida
                    <br />
                    <span className="font-italic">
                    SCGPA - 7.1
                    </span>
                </p>
            </div>
        </div>
        <div className="row">
            <div className="col-3">
               <p className="font-weight-bold text-secondary">Juky 2015 - April 2016</p>
            </div>
            <div className="col-8 offset-1 text-justify">
                <p className="para">
                    <strong>High School Certificate</strong>
                    <br />
                    Rao Man Singh Public School
                    <br />
                    <span className="font-italic">
                    12th percentage : 80%
                    10th percentage: 80%
                    </span>
                </p>
            </div>
      </div>
        
    </div>
)
    
}
export default Education;