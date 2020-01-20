import React, {Component} from "react";

function TopImageItem(props) {
    return(
        <div className="col-md-12">
            <img src="assets/images/top-image.jpg" alt=""/>
            <div className="down-content">
                <h4>{props.title}</h4>
                <p>{props.description}</p>
                <div className="primary-button">
                    <a href={props.url}>Читать далее</a>
                </div>
            </div>
        </div>
    );
}

class MainTopImage extends React.Component{
    render() {
        return(
            <section className="top-image">
                <div className="container-fluid">
                    <div className="row">
                        <TopImageItem
                            title = "Ante Interdum Chambray"
                            description = "Lorem ipsum dolor amet raclette chambray bitters, hammock celiac slow-carb
                            flexitarian four dollar toast food truck health goth. Air plant brunch food
                            truck vegan scenester organic crucifix irony pour-over pop-up austin hexagon
                            kitsch swag. Godard literally humblebrag cloud bread vice master cleanse
                            chambray typewriter put a bird on it brooklyn forage."
                            url = "#"/>
                    </div>
                </div>
            </section>
        );
    }

}

export default MainTopImage;