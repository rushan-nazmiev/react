import React, {Component} from "react";

function LeftImageItem(props) {
    return(
        <div className="row">
            <div className="col-md-6">
                <img src="assets/images/left-image.jpg" alt=""/>
            </div>
            <div className="col-md-6">
                <div className="right-content">
                    <h4>{props.title}</h4>
                    <p>{props.description}</p>
                    <div className="primary-button">
                        <a href={props.url}>Читать далее</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

class MainLeftImage extends React.Component{
    render() {
        return(
            <section className="left-image">
                <div className="container-fluid">
                    <LeftImageItem
                        title = "Ante Interdum Raclette"
                        description = "Lorem ipsum dolor amet raclette chambray bitters, hammock celiac slow-carb
                        flexitarian four dollar toast food truck health goth. Air plant brunch food truck
                        vegan scenester organic crucifix irony pour-over pop-up austin hexagon kitsch swag.
                        Godard literally humblebrag cloud bread vice master cleanse chambray typewriter put
                        a bird on it brooklyn forage.Air plant brunch food truck vegan scenester
                        organic crucifix irony pour-over pop-up austin hexagon kitsch swag. Godard
                        literally humblebrag cloud bread vice master cleanse chambray typewriter put
                        bird brooklyn"
                        url = "#"/>
                </div>
            </section>
        );
    }
}

export default MainLeftImage;