import React, { Component } from 'react';
//no braces means it's the default, braces means it's one of many
import './Hero.css';


class Hero extends Component {
    render() {
        return (

                <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">

                    <ol className="carousel-indicators">
                        <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
                        <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                        <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                        <li data-target="#carousel-example-generic" data-slide-to="3"></li>
                    </ol>

                    <div className="carousel-inner" role="listbox">
                        <div className="item active">
                            <img src="/images/Portsmouth_Scene.jpg" className="img-fluid" alt="..." />
                        </div>
                        <div className="item">
                            <img src="/images/Portsmouth_Scene_sepia.jpg" className="img-fluid" alt="..." />
                        </div>
                        <div className="item">
                            <img src="/images/Portsmouth_Scene_green.jpg" className="img-fluid" alt="..." />
                        </div>
                        <div className="item">
                            <img src="/images/Portsmouth_Scene_b_and_w.jpg" className="img-fluid" alt="..." />
                        </div>

                        <a className="pull-left carousel-control-prev" href="#carousel-example-generic" role="button" data-slide="prev">
                            <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="pull-right carousel-control-next" href="#carousel-example-generic" role="button" data-slide="next">
                            <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
        );
    }
}
export default Hero;