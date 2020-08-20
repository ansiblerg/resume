import React from 'react';
import {CardHeader, Card, CardText, CardBody, CardFooter} from 'reactstrap'

const Header = ()=>{
return(
    <div>
        <h1 className="text-center">Resume</h1>
        <h5 className="font-weight-normal text-center text-secondary">
            Rishabh Goyal
          </h5>
            <div className="row mt-4">
            <div className="col-4">
            <hr className="hrr"></hr>
            </div>
            <div className="col-4">
            <p className="text-center">SKILLS</p>
            </div>
            <div className="col-4">
            <hr className="hrr"></hr>
            </div>
        </div>
        <div className="row">
            <div className="col-12 col-sm-3">
                <h4>Technologies</h4>
            </div>
            <div className="col-12 offset-1 col-sm-8">
                <p className="font-weight-normal text-center text-secondary">React, Java Spring, Angular 8, HTML, CSS</p>
            </div>
        </div>
        <div className="row">
            <div className="col-12 col-sm-3">
                <h4>Languages</h4>
            </div>
            <div className="col-12 offset-1 col-sm-8">
                <p className="font-weight-normal text-center text-secondary">Javascript, Java, C, C++</p>
            </div>
        </div>
        <div className="row">
            <div className="col-12 col-sm-3">
                <h4>Tools</h4>
            </div>
            <div className="col-12 offset-1 col-sm-8">
                <p className="font-weight-normal text-center text-secondary">VS code, Spring Tool Suite, repl, MySQL, JPA Hibernate</p>
            </div>
        </div>
    </div>
)
    
}
export default Header