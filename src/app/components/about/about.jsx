import * as React from 'react';
import './about.css';
import './meet_the_parents.jpg';

class About extends React.Component {

    render() {
        return (
            <div className="containerMovie">
                <div className="imageMovies">
                    <img src="./app/components/about/meet_the_parents.jpg" alt="parents" />
                </div>
                <div className="informationAboutMovies">
                    <h1 className="titleMovies">Title {this.props.match.params.name}</h1>
                    <div className="descriptionMovie">
                        <p>A small group of former classmates organize an elaborate, annual game of tag that requires some to travel all over the country.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
