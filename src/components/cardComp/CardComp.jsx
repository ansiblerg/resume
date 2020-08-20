import {CardHeader, Card,CardImg, CardText, CardBody, CardFooter} from 'reactstrap'
import React from 'react';

const CardComp = () => {
    return(
        <Card>
            <CardBody className="mt-10">
                <CardImg src="./logo.png" />
                <CardText>Java Full stack web Developer</CardText>
                <CardFooter>+91-8527474618</CardFooter>
            </CardBody>
        </Card>
    )
}
export default CardComp